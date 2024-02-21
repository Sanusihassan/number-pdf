import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
type WritableDraft<T> = {
  -readonly [K in keyof T]: Draft<T[K]>;
};

type k = keyof WritableDraft<ToolState>;

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
    margin: "small" | "recommended" | "big";
    bulletPosition: string;
    font: string;
    startPage: number;
    rangeToNumber: { start: number; end: number | null };
    text: string;
    fontSize: number;
    documentLanguage: string;
    isBold: boolean;
    isItalic: boolean;
    isUnderlined: boolean;
    color: string;
    firstPageIsCover: boolean;
    layout: "Single page" | "Facing pages";
  };
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
    font: "arial",
    startPage: 1,
    rangeToNumber: { start: 1, end: null },
    text: "insert only page number (recommended)",
    fontSize: 12,
    documentLanguage: "en",
    isBold: false,
    isItalic: false,
    isUnderlined: false,
    color: "#00000000",
    firstPageIsCover: false,
    layout: "Single page",
  },
};

const toolSlice = createSlice({
  name: "tool",
  initialState,
  reducers: {
    resetErrorMessage(state: ToolState) {
      state.errorMessage = "";
      state.showErrorMessage = false;
      state.errorCode = null;
      state.isSubmitted = false;
    },
    setField(state, action: PayloadAction<Partial<ToolState>>) {
      // Loop over all the keys in the action payload
      Object.keys(action.payload).forEach((key) => {
        // Cast the key to keyof ToolState to ensure it's a valid key
        const typedKey = key as k;
        const value = action.payload[typedKey];
        if (value !== undefined) {
          // @ts-ignore
          state[typedKey] = value;
        }
      });
    },
    setOptions(
      state: ToolState,
      action: PayloadAction<
        Partial<{
          margin: "small" | "recommended" | "big";
          bulletPosition: string;
          font: string;
          startPage: number;
          rangeToNumber: { start: number; end: number | null };
          text: string;
          fontSize: number;
          documentLanguage: string;
          isBold: boolean;
          isItalic: boolean;
          isUnderlined: boolean;
          color: string;
          firstPageIsCover: boolean;
          layout: "Single page" | "Facing pages";
        }>
      >
    ) {
      state.options = {
        ...state.options,
        ...action.payload,
      };
    },
  },
});

export const {
  resetErrorMessage,
  setField,
  setOptions,
} = toolSlice.actions;

export default toolSlice.reducer;
