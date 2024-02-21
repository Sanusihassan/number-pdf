import axios from "axios";
import { Dispatch, RefObject } from "react";
import { downloadConvertedFile } from "../downloadFile";
import type { errors as _ } from "../../content";
import { AnyAction } from "@reduxjs/toolkit";
import {
  ToolState,
  resetErrorMessage,
  setField
} from "../store";

let prevState: ToolState["options"] = {} as ToolState["options"];

export const handleUpload = async (
  e: React.FormEvent<HTMLFormElement>,
  downloadBtn: RefObject<HTMLAnchorElement>,
  dispatch: Dispatch<AnyAction>,
  errorMessage: string,
  files: File[],
  errors: _,
  filesOnSubmit: string[],
  setFilesOnSubmit: (value: string[]) => void,
  options: ToolState["options"]
) => {
  e.preventDefault();
  dispatch(setField({ isSubmitted: true }));

  if (!files) return;
  // Extract file names from the File[] array
  const fileNames = files.map((file) => file.name);

  // Check if every file name in files is present in filesOnSubmit
  const allFilesPresent = fileNames.every((fileName) =>
    filesOnSubmit.includes(fileName)
  );

  if (
    allFilesPresent &&
    files.length === filesOnSubmit.length &&
    JSON.stringify(prevState) === JSON.stringify(options)
  ) {
    dispatch(setField({ showDownloadBtn: true }));
    dispatch(resetErrorMessage());
    return;
  }

  const formData = new FormData();
  for (let i = 0; i < files.length; i++) {
    formData.append("files", files[i]);
  }
  formData.append("options", JSON.stringify(options));
  let url;
  let path = "number-pdf";
  // @ts-ignore
  if (process.env.NODE_ENV === "development") {
    url = `https://5000-sanusihassa-pdfequipsap-dvdgm7zyxi2.ws-eu106.gitpod.io/api/${path}`;
    // url = `https://5000-planetcreat-pdfequipsap-te4zoi6qkr3.ws-eu102.gitpod.io/${path}`;
  } else {
    url = `/api/${path}`;
  }
  if (errorMessage) {
    return;
  }
  const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");

  const mimeTypeLookupTable: {
    [key: string]: { outputFileMimeType: string; outputFileName: string };
  } = {
    "application/zip": {
      outputFileMimeType: "application/zip",
      outputFileName: `PDFEquips-${path}.zip`,
    },
    "application/pdf": {
      outputFileMimeType: "application/pdf",
      outputFileName: `${originalFileName}.pdf`,
    },
  };

  try {
    const response = await axios.post(url, formData, {
      responseType: "arraybuffer",
    });
    // const originalFileName = files[0]?.name?.split(".").slice(0, -1).join(".");
    const mimeType = response.data.type || response.headers["content-type"];
    const mimeTypeData = mimeTypeLookupTable[mimeType] || {
      outputFileMimeType: mimeType,
      outputFileName: "",
    };
    const { outputFileMimeType, outputFileName } = mimeTypeData;

    dispatch(setField({ showDownloadBtn: true }));
    downloadConvertedFile(
      response,
      outputFileMimeType,
      outputFileName,
      downloadBtn
    );
    setFilesOnSubmit(files.map((f) => f.name));
    prevState = options;

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
    dispatch(setField({ isSubmitted: false }));
  } finally {
    dispatch(setField({ isSubmitted: false }));
  }
};
