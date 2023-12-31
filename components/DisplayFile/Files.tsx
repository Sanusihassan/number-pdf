import { Dispatch, SetStateAction, useEffect } from "react";
import type { errors as _ } from "../../content";
import { isDraggableExtension } from "../../src/utils";
import { useRouter } from "next/router";
import { useFileStore } from "../../src/file-store";
import { FileViewer } from "./FileViewer";

type FileProps = {
  errors: _;
  extension: string;
  toolTipSizes: string[];
  setToolTipSizes: Dispatch<SetStateAction<string[]>>;
  loader_text: string;
  fileDetailProps: [string, string, string];
  selected_files_placeholer: string;
};
const Files = ({
  errors,
  extension,
  toolTipSizes,
  loader_text,
  fileDetailProps,
  selected_files_placeholer,
}: FileProps) => {
  const { files } = useFileStore();

  useEffect(() => {}, [files]);

  const router = useRouter();
  const handleDragEnd = (result: any) => {
    if (!result.destination) {
      return;
    }
    // Argument of type 'Blob[]' is not assignable to parameter of type 'File[]'.
    // Type 'Blob' is missing the following properties from type 'File': lastModified, webkitRelativePathts(2345)
    if (isDraggableExtension(extension, router)) {
      // dispatch(setFiles(store.files));
    }
  };

  return (
    <>
      <div className="display-file">
        <FileViewer
          errors={errors}
          loader_text={loader_text}
          fileDetailProps={fileDetailProps}
          extension={extension}
          selected_files_placeholer={selected_files_placeholer}
        />
      </div>
    </>
  );
};

export default Files;
