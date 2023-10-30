import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  errorCode: string | null;
  path: string;
  click: boolean;
  focus: boolean;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  selectedFile: string;
  options: {
    margin: "small" |
    "recommended" |
    "big",
    bulletPosition: string;
    font: string;
    startPage: number;
    rangeToNumber: { start: number; end: number };
    text: string;
    fontSize: number;
    documentLanguage: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderlined: boolean;
    color: string;
    firstPageIsCover: boolean;
  },
  pageCount: number;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  showErrorMessage: false,
  isSubmitted: false,
  errorCode: null,
  path: "",
  click: false,
  focus: false,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  selectedFile: "",
  pageCount: 0,
  options: {
    margin: "recommended",
    bulletPosition: "top left",
    font: "DejaVu",
    startPage: 0,
    rangeToNumber: { start: 1, end: 0 },
    text: "",
    fontSize: 0,
    documentLanguage: "en",
    isBold: true,
    isItalic: true,
    isUnderlined: true,
    color: "#000",
    firstPageIsCover: false
  }
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    showTool(state: ToolState) {
      state.showTool = true;
    },
    setClick(state: ToolState, action: PayloadAction<boolean>) {
      state.click = action.payload;
    },
    setFocus(state: ToolState, action: PayloadAction<boolean>) {
      state.focus = action.payload;
    },
    setShowDownloadBtn(state: ToolState, action: PayloadAction<boolean>) {
      state.showDownloadBtn = action.payload;
    },
    setPath(state: ToolState, action: PayloadAction<string>) {
      state.path = action.payload;
    },
    hideTool(state: ToolState) {
      state.showTool = false;
    },
    setErrorMessage(state: ToolState, action: PayloadAction<string>) {
      state.errorMessage = action.payload;
      state.showErrorMessage = true; // set the showErrorMessage property to true when an error message is set
    },
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false; // reset the showErrorMessage property to false when the error message is reset
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setErrorCode(state: ToolState, action: PayloadAction<string | null>) {
      state.errorCode = action.payload;
    },
    setIsSubmitted(state: ToolState, action: PayloadAction<boolean>) {
      state.isSubmitted = action.payload;
    },
    setShowOptions(state: ToolState, action: PayloadAction<boolean>) {
      state.showOptions = action.payload;
    },
    setNavHeight(state: ToolState, action: PayloadAction<number>) {
      state.nav_height = action.payload;
    },
    setSelectedFile(state: ToolState, action: PayloadAction<string>) {
      state.selectedFile = action.payload;
    },
    setPageCount(state: ToolState, action: PayloadAction<number>) {
      state.pageCount = action.payload;
    },
    // instead of setting the entire option at once when calling this function, why not setting one option each time the function is called, like sometimes i just want to set the margin, and sometimes the font and so on.
    setOptions(state: ToolState, action: PayloadAction<Partial<{
      margin: "small" | "recommended" | "big";
      bulletPosition: string;
      font: string;
      startPage: number;
      rangeToNumber: { start: number; end: number };
      text: string;
      fontSize: number;
      documentLanguage: string;
      isBold: boolean;
      isItalic: boolean;
      isUnderlined: boolean;
      color: string;
      firstPageIsCover: boolean;
    }>>) {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    }
  },
});

export const {
  showTool,
  hideTool,
  setErrorMessage,
  resetErrorMessage,
  setErrorCode,
  setIsSubmitted,
  setPath,
  setClick,
  setFocus,
  setShowDownloadBtn,
  setShowOptions,
  setNavHeight,
  setSelectedFile,
  setPageCount,
  setOptions
} = toolSlice.actions;

export default toolSlice.reducer;
