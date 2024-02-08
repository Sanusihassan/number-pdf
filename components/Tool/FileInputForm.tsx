import React, { useEffect, useRef } from "react";

// redux
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
// store
import { ToolState, setClick, setFocus, setOptions } from "../../src/store";
import { handleUpload } from "../../src/handlers/handleUpload";
import { handleChange } from "../../src/handlers/handleChange";
import { useFileStore } from "../../src/file-store";
// types
import type { tools } from "../../content";
import { validateFiles } from "../../src/utils";
import { ToolData } from "../Tool";
type AcceptedFileTypes = {
  [key in ".pdf" | ".pptx" | ".docx" | ".xlsx" | ".jpg" | ".html"]: string;
};
interface FileInputFormProps {
  data: ToolData;
  acceptedFileTypes: AcceptedFileTypes;
  errors: any;
  lang: string;

  tools: tools;
}
export const FileInputForm: React.FC<FileInputFormProps> = ({
  data,
  acceptedFileTypes,
  errors,
  lang,
  tools,
}) => {
  let t: NodeJS.Timer;
  // redux state & dispatch
  const statePath = useSelector(
    (state: { tool: ToolState }) => state.tool.path
  );
  const stateFocus = useSelector(
    (state: { tool: ToolState }) => state.tool.focus
  );
  const stateClick = useSelector(
    (state: { tool: ToolState }) => state.tool.click
  );
  const errorMessage = useSelector(
    (state: { tool: ToolState }) => state.tool.errorMessage
  );
  const stateOptions = useSelector(
    (state: { tool: ToolState }) => state.tool.options
  );
  const pageCount = useSelector(
    (state: { tool: ToolState }) => state.tool.pageCount
  );
  const dispatch = useDispatch();
  // file store
  const {
    files,
    setFiles,
    setFileInput,
    setDownloadBtn,
    setSubmitBtn,
    filesOnSubmit,
    setFilesOnSubmit,
  } = useFileStore();
  // refs
  const fileInput = useRef<HTMLInputElement>(null);
  const submitBtn = useRef<HTMLButtonElement>(null);
  const downloadBtn = useRef<HTMLAnchorElement>(null);
  useEffect(() => {
    setFileInput(fileInput);
    setSubmitBtn(submitBtn);
    setDownloadBtn(downloadBtn);
    window.addEventListener("focus", () => {
      dispatch(setFocus(true));
      dispatch(setClick(false));
      // if (state.click !== state.focus && (!files.length || files.length == 1)) {
      // t = setInterval(() => {
      validateFiles(files, data.type, errors, dispatch, {
        path: statePath,
        focus: stateFocus,
        click: stateClick,
      });
      // }, 3000);
      // }
      if (null === stateOptions.rangeToNumber.end && pageCount !== 0) {
        dispatch(
          setOptions({
            rangeToNumber: {
              ...stateOptions.rangeToNumber,
              end: pageCount,
            },
          })
        );
      }
    });
  }, [pageCount]);
  return (
    <form
      onClick={(e) => {
        e.stopPropagation();
      }}
      onSubmit={(e) =>
        handleUpload(
          e,
          downloadBtn,
          dispatch,
          errorMessage,
          files,
          errors,
          filesOnSubmit,
          setFilesOnSubmit,
          stateOptions
        )
      }
      method="POST"
      encType="multipart/form-data"
    >
      <div
        className={`upload-btn btn btn-lg text-white position-relative overflow-hidden ${data.to.replace("/", "")}`}
        onClick={(e) => {
          e.stopPropagation();
          dispatch(setClick(true));
        }}
        role="button"
      >
        {lang == "ar" ? (
          <bdi>
            {tools.select} {tools.files}
            <span className="text-uppercase">
              {data.type.replace(".", "")}
            </span>{" "}
          </bdi>
        ) : (
          <bdi>
            {tools.select}{" "}
            <span className="text-uppercase">{data.type.replace(".", "")}</span>{" "}
            {tools.files}
          </bdi>
        )}
        <input
          type="file"
          name="files"
          accept={
            acceptedFileTypes[data.type as keyof typeof acceptedFileTypes]
          }
          multiple={statePath !== "split-pdf" && statePath !== "pdf-to-pdf-a"}
          ref={fileInput}
          className="position-absolute file-input"
          onClick={(e) => {
            e.stopPropagation();
          }}
          onChange={(e) => {
            handleChange(e, dispatch, setFiles, data.type, errors, files, {
              path: statePath,
              focus: stateFocus,
              click: stateClick,
            });
          }}
        />
      </div>
      <a href="" className="d-none" ref={downloadBtn} download="output.pdf"></a>
      {/* <div className="my-4">
          </div> */}
      <button type="submit" ref={submitBtn} className="d-none">
        submit
      </button>
    </form>
  );
};
