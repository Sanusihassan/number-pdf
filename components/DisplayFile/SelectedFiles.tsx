import { useFileStore } from "@/src/file-store";
import { useEffect, useState } from "react";
import Select from "react-select";
import { customStyles } from "./Options/SinglePage";
import { useDispatch, useSelector } from "react-redux";
import { ToolState, setSelectedFile } from "@/src/store";
/**
 * the problem might be that it
 */
export const SelectedFiles = ({
  selected_files_placeholer,
}: {
  selected_files_placeholer: string;
}) => {
  const { files } = useFileStore();
  const [selecteFiles, setSelectedFiles] = useState<
    {
      label: string;
      value: string;
    }[]
  >([]);
  const selectedFile = useSelector(
    (state: { tool: ToolState }) => state.tool.selectedFile
  );
  const dispatch = useDispatch();

  useEffect(() => {
    const newSelectedFiles = files.map((file) => ({
      label: file.name,
      value: file.name,
    }));
    if (selectedFile == "" && selecteFiles.length > 0) {
      dispatch(setSelectedFile(selecteFiles[0].value));
    }

    setSelectedFiles(newSelectedFiles);
  }, [files]);
  return (
    <>
      <div className="selected-files row justify-content-center align-items-center">
        <Select
          className="cursor-pointer col-6 bg-white"
          defaultValue={selecteFiles[0]}
          options={selecteFiles}
          styles={customStyles}
          onChange={(v) => {
            if (v) {
              dispatch(setSelectedFile(v.value));
            }
          }}
          placeholder={selected_files_placeholer}
        />
      </div>
    </>
  );
};
