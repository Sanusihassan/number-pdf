import type { errors } from "@/content";
import FileCard from "./FileCard";
import { useFileStore } from "@/src/file-store";
import { SelectedFiles } from "./SelectedFiles";
import { ToolState, setSelectedFile } from "@/src/store";
import { useSelector } from "react-redux";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
{
  /* SelectedFiles is a dropdown of files to select to view, i want to display only one file (the selected one) if i've displayed the selected files the other ones should not be visible */
}
export const FileViewer = ({
  errors,
  loader_text,
  fileDetailProps,
  extension,
  selected_files_placeholer,
}: {
  errors: errors;
  loader_text: string;
  fileDetailProps: [string, string, string];
  extension: string;
  selected_files_placeholer: string;
}) => {
  const { files } = useFileStore();
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const dispatch = useDispatch();
  useEffect(() => {
    if (selectedFile == "" && files.length) {
      dispatch(setSelectedFile(files[0]!.name));
    }
  }, [selectedFile, files]);
  return (
    <>
      <SelectedFiles selected_files_placeholer={selected_files_placeholer} />
      {files.map((file) =>
        file.name === selectedFile ? (
          <FileCard
            file={file}
            errors={errors}
            loader_text={loader_text}
            fileDetailProps={fileDetailProps}
            extension={extension}
          />
        ) : null
      )}
      {/* {currentFile === undefined ? (
            <FileCard
                file={files[0]}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            />
        ) : (currentFile && (currentFile.name === selectedFile) ?
            <FileCard
                file={currentFile}
                errors={errors}
                loader_text={loader_text}
                fileDetailProps={fileDetailProps}
                extension={extension}
            /> : null)
        } */}
    </>
  );
};
