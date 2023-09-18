// this is the code for FileCard
import { ActionProps } from "./ActionDiv";
import type { errors as _ } from "../../content";
import { useEffect, useState } from "react";
import { Loader } from "./Loader";
import {
  calculatePages,
  getFileDetailsTooltipContent,
  getNthPageAsImage,
  getPlaceHoderImageUrl,
} from "../../src/utils";
import { useDispatch } from "react-redux";
import ImageWithLoader from "./ImageWithLoader";
type OmitFileName<T extends ActionProps> = Omit<T, "fileName" | "index">;

type CardProps = OmitFileName<ActionProps> & {
  file: File;
  errors: _;
  loader_text: string;
  fileDetailProps: [string, string, string];
  index?: number | string;
};

const FileCard = ({
  file,
  errors,
  extension,
  loader_text,
  fileDetailProps,
}: CardProps) => {
  const [imageUrls, setImageUrls] = useState<string[]>([]);
  const [pageCount, setPageCount] = useState(0);
  const [tooltipSize, setToolTipSize] = useState("");
  const dispatch = useDispatch();
  let isSubscribed = true;
  useEffect(() => {
    (async () => {
      let size = await getFileDetailsTooltipContent(
        file,
        ...fileDetailProps,
        dispatch,
        errors
      );
      let _pageCount = await calculatePages(file);
      setToolTipSize(size);
      setPageCount(_pageCount);
    })();
    const processFile = async () => {
      try {

        if (extension && extension === ".pdf") {
          if (isSubscribed) {
            for (let i = 1; i <= pageCount; i += 1) {
              let url = await getNthPageAsImage(file, dispatch, errors, i);
              setImageUrls(prevUrls => [...prevUrls, url]);
            }
          }
        } else if (extension && extension !== ".jpg") {

          if (isSubscribed) {
            setImageUrls(
              !file.size
                ? ["/images/corrupted.png"]
                : [getPlaceHoderImageUrl(extension)]
            );
          }
        }
      } catch (error) {
        console.error("Error processing files:", error);
      }
    };
    processFile();
    return () => {
      isSubscribed = false;
    };
  }, [extension, file, pageCount]);
  return (
    <>
      {imageUrls.length == 0 ?
        <div className="initial-loader">
          <Loader loader_text={loader_text} animate={false} />
        </div>
        : null}
      <div className="pages">{
        imageUrls.map((imageUrl, index) => (
          <div
            className="card item page"
            data-tooltip-id={`item-tooltip-${index}`}
            data-tooltip-content={tooltipSize}
            data-tooltip-place="top"
            key={index.toString()}
          >
            {/* 
            this code is inside a loop but the showLoader is defined like this: const [showLoader, setShowLoader] = useState(true);
            i want after each image is loaded then to not show the loader of that image
          */}

            {/* <bdi>
            <Tooltip id={`item-tooltip-${index}`} />
          </bdi> */}
            <ImageWithLoader imageUrl={imageUrl} loader_text={loader_text} />
          </div>
        ))}
      </div>
    </>
  );
};

export default FileCard;
