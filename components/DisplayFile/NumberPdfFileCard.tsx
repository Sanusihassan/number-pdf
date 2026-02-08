// NumberPdfFileCard.tsx - COMPLETE FILE
import { useState, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Trash2, FileText } from "lucide-react";
import * as pdfjs from "pdfjs-dist";
import type { PDFDocumentProxy, PageViewport, RenderTask } from "pdfjs-dist";
import { useFileStore } from "../../src/file-store";
import { setField, type ToolState } from "../../src/store";
import type { errors as _ } from "../../src/content";

// ============ TYPES ============
export interface NumberPdfFileCardProps {
  file: File;
  errors: _;
  content: {
    page: string;
    pages: string;
    remove_file: string;
    loading: string;
    preview: string;
  };
  themeColor?: string;
}

interface PageImage {
  pageNum: number;
  imageUrl: string;
  width: number;
  height: number;
}

interface NumberPdfSettings {
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
}

// ============ CONSTANTS ============
const THEME_COLOR_DEFAULT = "#b71540";
const THUMBNAIL_SCALE = 1.2;

// Margin values in points
const MARGIN_VALUES = {
  small: 20,
  recommended: 36,
  big: 72,
};

// ============ SKELETON LOADER ============
const PageSkeleton = () => {
  return <div className="aspect-[8.5/11] bg-gray-200 rounded animate-pulse" />;
};

// ============ HELPER FUNCTIONS ============
async function renderPDFPage(
  file: File,
  pageNum: number,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<PageImage | null> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const page = await pdf.getPage(pageNum);
    const viewport: PageViewport = page.getViewport({ scale: THUMBNAIL_SCALE });

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d", { alpha: false });

    if (!context) {
      throw new Error("Canvas context not available.");
    }

    canvas.height = viewport.height;
    canvas.width = viewport.width;

    const renderTask: RenderTask = page.render({
      canvasContext: context,
      viewport: viewport,
    });

    await renderTask.promise;
    const imageUrl = canvas.toDataURL("image/jpeg", 0.9);

    URL.revokeObjectURL(fileUrl);
    return {
      pageNum,
      imageUrl,
      width: viewport.width,
      height: viewport.height,
    };
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return null;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return null;
  }
}

async function getPDFPageCount(
  file: File,
  dispatch: ReturnType<typeof useDispatch>,
  errors: _,
  password?: string,
): Promise<number> {
  const fileUrl = URL.createObjectURL(file);

  try {
    const loadingTask = pdfjs.getDocument({
      url: fileUrl,
      password: password || undefined,
    });

    const pdf: PDFDocumentProxy = await loadingTask.promise;
    const pageCount = pdf.numPages;

    URL.revokeObjectURL(fileUrl);
    return pageCount;
  } catch (error: any) {
    URL.revokeObjectURL(fileUrl);

    if (error?.name === "PasswordException") {
      dispatch(setField({ errorCode: "PASSWORD_REQUIRED" }));
      return 0;
    }

    dispatch(
      setField({
        errorMessage: errors.FILE_CORRUPT?.message || "File is corrupt",
      }),
    );
    return 0;
  }
}

function getNumberPosition(
  position: number,
  pageWidth: number,
  pageHeight: number,
  margin: number,
) {
  const positions = [
    { x: margin, y: margin }, // Top-left
    { x: pageWidth / 2, y: margin }, // Top-center
    { x: pageWidth - margin, y: margin }, // Top-right
    { x: margin, y: pageHeight / 2 }, // Middle-left
    { x: pageWidth / 2, y: pageHeight / 2 }, // Center
    { x: pageWidth - margin, y: pageHeight / 2 }, // Middle-right
    { x: margin, y: pageHeight - margin }, // Bottom-left
    { x: pageWidth / 2, y: pageHeight - margin }, // Bottom-center
    { x: pageWidth - margin, y: pageHeight - margin }, // Bottom-right
  ];

  return positions[position] || positions[7]; // Default to bottom-center
}

function getTextAlign(position: number): "left" | "center" | "right" {
  // Left positions: 0, 3, 6
  if ([0, 3, 6].includes(position)) return "left";
  // Right positions: 2, 5, 8
  if ([2, 5, 8].includes(position)) return "right";
  // Center positions: 1, 4, 7
  return "center";
}

// ============ PAGE WITH NUMBER COMPONENT ============
interface PageWithNumberProps {
  pageImage: PageImage;
  numberPdfSettings: NumberPdfSettings;
  pageCount: number;
  themeColor: string;
}

const PageWithNumber = ({
  pageImage,
  numberPdfSettings,
  pageCount,
  themeColor,
}: PageWithNumberProps) => {
  const shouldShowNumber =
    pageImage.pageNum >= numberPdfSettings.fromPage &&
    pageImage.pageNum <= numberPdfSettings.toPage;

  // Calculate actual page number based on start number
  const displayNumber =
    numberPdfSettings.startNumber +
    (pageImage.pageNum - numberPdfSettings.fromPage);

  // Get text to display
  const getDisplayText = () => {
    switch (numberPdfSettings.textOption) {
      case "only-number":
        return `${displayNumber}`;
      case "page-n":
        return `page ${displayNumber}`;
      case "page-n-of-x":
        return `page ${displayNumber} of ${pageCount}`;
      case "custom":
        return numberPdfSettings.customText
          .replace("{n}", `${displayNumber}`)
          .replace("{x}", `${pageCount}`);
      default:
        return `${displayNumber}`;
    }
  };

  const margin = MARGIN_VALUES[numberPdfSettings.margin];
  const position = getNumberPosition(
    numberPdfSettings.position,
    pageImage.width,
    pageImage.height,
    margin,
  );

  const textAlign = getTextAlign(numberPdfSettings.position);

  const numberStyle: React.CSSProperties = {
    position: "absolute",
    left: `${(position.x / pageImage.width) * 100}%`,
    top: `${(position.y / pageImage.height) * 100}%`,
    transform:
      textAlign === "center"
        ? "translate(-50%, -50%)"
        : textAlign === "right"
          ? "translate(-100%, -50%)"
          : "translate(0, -50%)",
    fontFamily: numberPdfSettings.font,
    fontSize: `${numberPdfSettings.fontSize}px`,
    fontWeight: numberPdfSettings.bold ? "bold" : "normal",
    fontStyle: numberPdfSettings.italic ? "italic" : "normal",
    textDecoration: numberPdfSettings.underline ? "underline" : "none",
    color: numberPdfSettings.color,
    whiteSpace: "nowrap",
    userSelect: "none",
    pointerEvents: "none",
    textAlign: textAlign,
  };

  return (
    <div className="relative aspect-[8.5/11] bg-white rounded-lg border-2 border-gray-200 overflow-hidden shadow-sm">
      {/* PDF Page */}
      <img
        src={pageImage.imageUrl}
        alt={`Page ${pageImage.pageNum}`}
        className="w-full h-full object-contain"
        draggable={false}
      />

      {/* Page Number */}
      {shouldShowNumber && <div style={numberStyle}>{getDisplayText()}</div>}

      {/* Page Number Badge */}
      <div
        className="absolute bottom-2 left-2 px-2 py-1 text-white text-xs font-medium rounded"
        style={{ backgroundColor: themeColor, zIndex: 20 }}
      >
        {pageImage.pageNum}
      </div>
    </div>
  );
};

// ============ MAIN COMPONENT ============
export const NumberPdfFileCard = ({
  file,
  errors,
  content,
  themeColor = THEME_COLOR_DEFAULT,
}: NumberPdfFileCardProps) => {
  const dispatch = useDispatch();
  const { files, setFiles } = useFileStore();
  const [isLoading, setIsLoading] = useState(true);
  const [pageCount, setPageCount] = useState(0);
  const [pageImages, setPageImages] = useState<PageImage[]>([]);
  const isSubscribedRef = useRef(true);

  const numberPdfSettings = useSelector(
    (state: { tool: ToolState }) => state.tool.numberPdfSettings,
  );

  // Load PDF
  useEffect(() => {
    isSubscribedRef.current = true;

    const loadPDF = async () => {
      setIsLoading(true);

      const count = await getPDFPageCount(file, dispatch, errors);

      if (isSubscribedRef.current && count > 0) {
        setPageCount(count);
        dispatch(setField({ pageCount: count, selectedFile: file.name }));

        // Update toPage if needed
        if (numberPdfSettings.toPage < numberPdfSettings.fromPage) {
          dispatch(
            setField({
              numberPdfSettings: {
                ...numberPdfSettings,
                toPage: count,
              },
            }),
          );
        }

        const pagesToRender = Math.min(3, count);
        const images: PageImage[] = [];

        for (let i = 1; i <= pagesToRender; i++) {
          const pageImage = await renderPDFPage(file, i, dispatch, errors);
          if (isSubscribedRef.current && pageImage) {
            images.push(pageImage);
            setPageImages([...images]);
          }
        }

        setIsLoading(false);
      }
    };

    loadPDF();

    return () => {
      isSubscribedRef.current = false;
    };
  }, [
    file,
    dispatch,
    errors,
    numberPdfSettings.fromPage,
    numberPdfSettings.toPage,
  ]);

  const handleRemoveFile = () => {
    const newFiles = files.filter((f) => f.name !== file.name);
    setFiles(newFiles);
    dispatch(
      setField({
        pageCount: 0,
        selectedFile: "",
      }),
    );
  };

  if (isLoading && pageImages.length === 0) {
    return (
      <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 p-6">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name}
            </h3>
            <span className="px-2 py-1 text-xs font-medium rounded-full bg-gray-100 text-gray-400 animate-pulse">
              {content.loading}
            </span>
          </div>
          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
          >
            <Trash2 size={20} />
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {Array.from({ length: 3 }).map((_, i) => (
            <PageSkeleton key={i} />
          ))}
        </div>
      </div>
    );
  }

  return (
    <div className="w-full max-w-6xl mx-auto bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
      <div className="p-6">
        {/* Header */}
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3 flex-1">
            <FileText size={24} style={{ color: themeColor }} />
            <h3 className="text-lg font-semibold text-gray-800 truncate">
              {file.name.length > 40
                ? file.name.slice(0, 20) + "..." + file.name.slice(-17)
                : file.name}
            </h3>
            <span
              className="px-2 py-1 text-xs font-medium rounded-full whitespace-nowrap"
              style={{
                backgroundColor: `${themeColor}15`,
                color: themeColor,
              }}
            >
              {pageCount} {pageCount === 1 ? content.page : content.pages}
            </span>
          </div>

          <button
            type="button"
            onClick={handleRemoveFile}
            className="p-2 text-gray-400 hover:text-red-500 hover:bg-red-50 rounded-lg transition-colors"
            title={content.remove_file}
          >
            <Trash2 size={20} />
          </button>
        </div>

        {/* Preview Label */}
        <div className="mb-4">
          <h4 className="text-sm font-semibold text-gray-700">
            {content.preview}
          </h4>
        </div>

        {/* Pages Preview */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {pageImages.map((pageImage) => (
            <PageWithNumber
              key={pageImage.pageNum}
              pageImage={pageImage}
              numberPdfSettings={numberPdfSettings}
              pageCount={pageCount}
              themeColor={themeColor}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default NumberPdfFileCard;
