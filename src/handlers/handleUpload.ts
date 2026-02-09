//handleUpload.ts
import axios from "axios";
import { downloadConvertedFile } from "../../src/downloadFile";
import type { errors as _ } from "../../src/content";
import { resetErrorMessage, setField } from "../../src/store";
import type { Action, Dispatch } from "@reduxjs/toolkit/react";
import { parseErrorResponse } from "../../src/utils";

let filesOnSubmit: string[] = [];
let prevState: string | null = null;

export const handleUpload = async (
  e: React.SubmitEvent<HTMLFormElement>,
  downloadBtn: React.RefObject<HTMLAnchorElement | null>,
  dispatch: Dispatch<Action>,
  state: {
    path: string;
    errorMessage: string;
    fileName: string;
    numberPdfSettings: {
      pageMode: "single" | "facing";
      firstPageIsCover: boolean;
      position: number;
      margin: "small" | "recommended" | "big";
      startNumber: number;
      fromPage: number;
      toPage: number;
      textOption: "only-number" | "page-n" | "page-n-of-x" | "custom";
      customText: string;
      font: string;
      fontSize: number;
      bold: boolean;
      italic: boolean;
      underline: boolean;
      color: string;
      documentLanguage: string;
    };
  },
  files: File[],
  errors: _
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files || files.length === 0) return;

  // ✅ number-pdf only accepts a single file
  const file = files[0];

  // Check if we can reuse previous result
  const fileNames = files.map((file) => file.name);
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );
  const strState = JSON.stringify(state);

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    prevState === strState
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }
  prevState = strState;

  // ✅ Validate number PDF settings
  if (!state.numberPdfSettings) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noNumberSettings ||
          "Please configure numbering settings",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Validate page range
  if (
    state.numberPdfSettings.fromPage > state.numberPdfSettings.toPage ||
    state.numberPdfSettings.fromPage < 1
  ) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.invalidPageRange,
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Validate custom text if selected
  if (
    state.numberPdfSettings.textOption === "custom" &&
    !state.numberPdfSettings.customText.trim()
  ) {
    dispatch(
      setField({
        errorMessage:
          errors.alerts?.noCustomText || "Please enter custom text",
      })
    );
    dispatch(setField({ isSubmitted: false }));
    return;
  }

  // ✅ Prepare form data
  const formData = new FormData();

  // Add the PDF file
  formData.append("file", file);

  // Add numbering settings (as JSON string)
  formData.append(
    "numberPdfSettings",
    JSON.stringify(state.numberPdfSettings)
  );

  let url: string = "";
  let endpoint = "/api/";

  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `http://localhost:8000${endpoint}${state.path}`;
  } else {
    url = `${endpoint}${state.path}`;
  }

  if (state.errorMessage) {
    return;
  }

  const originalFileName =
    state.fileName || file.name.split(".").slice(0, -1).join(".");

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
      withCredentials: true,
    });

    const mimeType = response.data.type || response.headers["content-type"];

    // ✅ number-pdf always returns a PDF
    const outputFileMimeType = "application/pdf";
    const outputFileName = `${originalFileName || "PDFEquips"}-numbered.pdf`;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    filesOnSubmit = files.map((f) => f.name);

    if (response.status !== 200) {
      throw new Error(`HTTP error! status: ${response.status}`);
    } else {
      dispatch(resetErrorMessage());
      dispatch(setField({ isSubmitted: false }));
    }
  } catch (error) {
    if ((error as { code: string }).code === "ERR_NETWORK") {
      dispatch(setField({ errorMessage: errors.ERR_NETWORK.message }));
      return;
    }

    // Handle server validation/auth errors
    if (axios.isAxiosError(error) && error.response) {
      try {
        const errorCodeMap: Record<string, string> = {
          // General file validation errors
          NO_FILES_PROVIDED:
            errors.alerts.fileNotUploaded || "No files provided",
          FILE_NOT_UPLOADED:
            errors.alerts.fileNotUploaded || "File not uploaded",
          FILE_EMPTY: errors.alerts.fileEmpty || "File is empty",
          FILE_TOO_LARGE: errors.alerts.fileTooLarge || "File is too large",
          INVALID_FILE_TYPE:
            errors.alerts.invalidFileType || "Invalid file type",
          FILE_CORRUPT: errors.alerts.fileCorrupt || "File is corrupted",

          // PDF-specific errors
          INVALID_PDF: errors.alerts.invalidPdf || "Invalid PDF file",

          // ✅ number-pdf specific errors
          NO_NUMBER_SETTINGS:
            errors.alerts.noNumberSettings ||
            "No numbering settings provided",
          INVALID_NUMBER_SETTINGS:
            errors.alerts.invalidNumberSettings ||
            "Invalid numbering settings format",
          INVALID_PAGE_RANGE:
            errors.alerts.invalidPageRange || "Invalid page range",
          PAGE_OUT_OF_RANGE:
            errors.alerts.pageOutOfRange ||
            "Page number exceeds PDF page count",
          INVALID_POSITION:
            errors.alerts.invalidPosition || "Invalid number position",
          INVALID_MARGIN:
            errors.alerts.invalidMargin || "Invalid margin value",
          INVALID_FONT_SIZE:
            errors.alerts.invalidFontSize || "Invalid font size",
          NO_CUSTOM_TEXT:
            errors.alerts.noCustomText ||
            "Custom text is required when custom option is selected",
          NUMBERING_FAILED:
            errors.alerts.numberingFailed ||
            "Failed to add page numbers. Please try again.",
          // Auth errors
          UNAUTHORIZED:
            errors.alerts.authRequired || "Authentication required",
          INVALID_TOKEN:
            errors.alerts.invalidToken || "Invalid authentication token",
          AUTH_TOKEN_MISSING:
            errors.alerts.authRequired || "Authentication required",
          AUTH_TOKEN_EXPIRED:
            errors.alerts.sessionExpired ||
            "Session expired. Please sign in again.",
          AUTH_INVALID_TOKEN:
            errors.alerts.invalidToken || "Invalid authentication token",
          AUTH_USER_NOT_FOUND:
            errors.alerts.userNotFound || "User not found",
          AUTH_SERVER_ERROR:
            errors.alerts.authError || "Authentication error",

          // Server errors
          SERVER_CONFIG_ERROR:
            errors.alerts.serverError || "Server configuration error",

          // Other errors
          MAX_PAGES_EXCEEDED: errors.MAX_PAGES_EXCEEDED?.message,
        };

        const { errorCode } = parseErrorResponse(error);
        const message = errorCodeMap[errorCode as keyof typeof errorCodeMap];

        if (message) {
          dispatch(setField({ limitationMsg: message }));
          dispatch(setField({ errorCode }));
          return;
        }
      } catch {
        // Failed to parse error response
      }
    }

    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};