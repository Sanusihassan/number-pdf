import { createSlice, createSelector, type Draft, type PayloadAction } from "@reduxjs/toolkit";

type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

export interface NumberPdfSettings {
  pageMode: "single" | "facing";
  firstPageIsCover: boolean;
  position: number; // 0-8
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

export interface ToolState {
  showTool: boolean;
  isSubmitted: boolean;
  errorMessage: string;
  errorCode: string | null;
  showDownloadBtn: boolean;
  showOptions: boolean;
  fileName: string;
  limitationMsg: string;
  numberPdfSettings: NumberPdfSettings;
  subscriptionStatus: boolean | null;
  isAdBlocked: boolean;
  ocr_warning: string;
  pageCount: number;
}

const initialState: ToolState = {
  showTool: true,
  errorMessage: "",
  isSubmitted: false,
  errorCode: null,
  showDownloadBtn: false,
  showOptions: false,
  fileName: "",
  limitationMsg: "",
  numberPdfSettings: {
    pageMode: "single",
    firstPageIsCover: false,
    position: 7, // Bottom-center
    margin: "recommended",
    startNumber: 1,
    fromPage: 1,
    toPage: 1,
    textOption: "only-number",
    customText: "page {n} of {x}",
    font: "Arial",
    fontSize: 12,
    bold: false,
    italic: false,
    underline: false,
    color: "#000000",
    documentLanguage: "en",
  },
  subscriptionStatus: null,
  isAdBlocked: false,
  ocr_warning: "",
  pageCount: 0
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      Object.keys(action.payload).forEach((key) => {
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
  },
});

export const { resetErrorMessage, setField } = toolSlice.actions;

// ============================================
// MEMOIZED SELECTORS (prevent unnecessary rerenders)
// ============================================

/**
 * Select the entire tool state
 */
export const selectToolState = (state: { tool: ToolState }) => state.tool;


export default toolSlice.reducer;