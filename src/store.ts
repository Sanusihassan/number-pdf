import { applyMiddleware, createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  showErrorMessage: boolean;
  errorCode: string | null;
  path: string;
  click: boolean;
  focus: boolean;
  rerender: boolean;
  showDownloadBtn: boolean;
  showOptions: boolean;
  nav_height: number;
  selectedFile: string;
  bulletPosition: string;
  margin: string;
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
  rerender: false,
  showDownloadBtn: false,
  showOptions: false,
  nav_height: 0,
  selectedFile: "",
  bulletPosition: "top left",
  margin: "recommended",
  pageCount: 0
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
    setRerender(state: ToolState, action: PayloadAction<boolean>) {
      state.rerender = action.payload;
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
    setBulletPosition(state: ToolState, action: PayloadAction<string>) {
      state.bulletPosition = action.payload;
    },
    setGlobalMargin(state: ToolState, action: PayloadAction<string>) {
      state.margin = action.payload;
    },
    setPageCount(state: ToolState, action: PayloadAction<number>) {
      state.pageCount = action.payload;
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
  setRerender,
  setShowDownloadBtn,
  setShowOptions,
  setNavHeight,
  setSelectedFile,
  setBulletPosition,
  setGlobalMargin,
  setPageCount
} = toolSlice.actions;

export default toolSlice.reducer;
