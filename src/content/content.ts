export const tool = {
  Number_PDF: {
    title: "Number PDF",
    seoTitle: "Add Page Numbers Online - Easy PDF Numbering",
    description: "Add page numbers to your PDF document with different styles and options.",
    keywords: "add page numbers to PDF, PDF page numbering tool, online PDF numbering, number PDF pages, customize PDF page numbers, add sequential numbers to PDF",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
    features: [
      {
        title: "Customizable Numbering Styles",
        description: "Choose from various numbering styles and formats to suit your document's needs."
      },
      {
        title: "Multi-Language Support",
        description: "Select the document language to use appropriate numeral scripts."
      },
      {
        title: "Easy to Use",
        description: "Our tool is user-friendly, allowing you to add page numbers to your PDF with just a few clicks."
      }
    ]
  }
};

export const edit_page = {
  edit_page_titles: {
    number_pdf: "Number PDF options"
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  action_buttons: {
    number_pdf: "Number PDF"
  },
  pages: "pages",
  page: "page",
  fileCard: {
    page: "Page",
    pages: "Pages",
    remove_file: "Remove file",
    loading: "Loading",
    preview: "Preview",
  },
  options: {
    page_mode: "Page Mode",
    single_page: "Single Page",
    facing_pages: "Facing Pages",
    first_page_is_cover: "First Page is the cover page",
    single_page_options: {
      position: "Position",
      margin: "Margin",
      pages: "Pages",
      page_to_number: "Which pages do you want to number?",
      start_from: "First Number",
      from: "From",
      to: "To",
      text: "Text",
      page_text_options: [
        {
          value: "insert only page number (recommended)",
          label: "Insert only page number (recommended)",
        },
        { value: "page n", label: "Page n" },
        { value: "page n of x", label: "Page n of x" },
        { value: "Custom", label: "Custom" },
      ],
      custom_text: "Custom text",
      text_sample: "Text sample: page {n} of {x} total pages",
      margin_options: [
        { value: "Small", label: "Small" },
        { value: "Recommended", label: "Recommended" },
        { value: "Big", label: "Big" },
      ],
      text_format: "Text Format",
      font: "Font",
      font_size: "Font Size",
      bold: "Bold",
      italic: "Italic",
      underline: "Underline",
      color: "Color",
      document_language: "Document Language",
      select_language_placeholder: "Select Language",
      select_margin_placeholder: "Select Margin",
      select_font_placeholder: "Select Font",
    },
  },
  selected_files_placeholer: "Select Files",
  filenameOptions: {
    label: "Output File Name (Optional)",
    placeholder: "Enter file name",
    helperText: "This will be the name of the compressed PDF when downloaded.",
    cta: "View Plans",
    upgradeNotice: {
      msg: "Levels from 2.0 to 10.0 are available with premium.",
      cta: "Upgrade now",
    },
  },
};

export const downloadFile = {
  titles: {
    "number-pdf": [
      "PDF files have been numbered!",
      "PDF file has been numbered!"
    ]
  },
  btnText: {
    "number-pdf": [
      "Download Numbered PDF files",
      "Download Numbered PDF file"
    ]
  },
  backto: {
    "number-pdf": "Back To Number PDF"
  }
};

export type ToolType = {
  title: string;
  seoTitle: string;
  description: string;
  keywords: string;
  color: string;
  type: string;
  to: string;
  features: {
    title: string;
    description: string;
  }[];
}
export type Paths = "number-pdf";

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const errors = {
  EMPTY_FILE: {
    message: "The file is empty. Please choose a valid file.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "The file is too large. Please choose a smaller file, or use our compress-pdf tool to reduce the file size.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "The file is not a supported type.",
    types: {
      PDF: "Please choose a valid PDF file.",
      DOC: "Please choose a valid Word document file.",
      DOCX: "Please choose a valid Word document file.",
      XLS: "Please choose a valid Excel spreadsheet file.",
      XLSX: "Please choose a valid Excel spreadsheet file.",
      PPT: "Please choose a valid PowerPoint presentation file.",
      PPTX: "Please choose a valid PowerPoint presentation file.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "The file is corrupt and cannot be processed. Please choose a valid file.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "You have exceeded the maximum number of files allowed. Please delete some files and try again.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "No files selected. Please select at least one file.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "An unknown error occurred. Please try again later or contact support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
  ERR_UPLOAD_COUNT: {
    message: "Please upload at least two files to merge.",
    code: "ERR_UPLOAD_COUNT",
  },
  PASSWORD_REQUIRED: {
    message: "PDF requires a password.",
    code: "PASSWORD_REQUIRED",
  },

  INCORRECT_PASSWORD: {
    message: "The password you entered is incorrect.",
    code: "INCORRECT_PASSWORD",
  },
  MAX_DAILY_USAGE: {
    message:
      "You’ve reached your daily usage limit. Please upgrade your plan to continue using this feature without interruption.",
    code: "MAX_DAILY_USAGE",
  },
  MAX_PAGES_EXCEEDED: {
    message: "The PDF exceeds the maximum page limit of 50 pages.",
    code: "ERR_MAX_PAGES_EXCEEDED",
  },
  alerts: {
    // Frontend validation
    maxFiles: "Max 15 files. Subscribe for more!",
    singleFileSize: "File size must be under 100 MB. Upgrade to upload bigger files!",
    perFilePages: "500 pages per file. Unlock more now!",
    fileSize: "50MB per file. Upgrade for more!",
    serverError: "Server error. Please try again later.",
    // Backend file validation
    fileNotUploaded: "No file was uploaded. Please select a file.",
    fileEmpty: "The uploaded file is empty. Please select a valid file.",
    fileTooLarge: "File exceeds 200MB limit. Upgrade for larger files!",
    invalidFileType: "Invalid file type. Please upload a supported format.",
    fileCorrupt: "File appears to be corrupted. Please try another file.",
    insufficientUnits: "Not enough conversion units. Upgrade or recharge!",
    // Auth errors
    authRequired: "Please log in to use premium features.",
    sessionExpired: "Your session has expired. Please log in again.",
    invalidToken: "Authentication failed. Please log in again.",
    userNotFound: "Account not found. Please log in again.",
    authError: "Authentication error. Please try again.",
    notPasswordProtected: "One or more files are not password protected",

    // PDF-specific errors
    invalidPdf: "Invalid or corrupted PDF file.",
    pdfNotEncrypted: "This PDF is not password-protected and doesn't need to be unlocked.",
    tooManyFiles: "Too many files uploaded",

    // Settings errors
    invalidSettings: "Invalid settings provided. Please refresh and try again.",
    conversionFailed: "Conversion failed. Please try again.",
    // please do the same for these:
    noNumberSettings: "Please configure numbering settings",
    invalidNumberSettings: "Invalid numbering settings format",
    noCustomText: "Please enter custom text",
    numberingFailed: "Failed to add page numbers. Please try again.",
    invalidPageRange: "Invalid page range",
    pageOutOfRange: "Page number exceeds PDF page count",
    invalidPosition: "Invalid number position",
    invalidMargin: "Invalid margin value",
    invalidFontSize: "Invalid font size",
  },
};

export const adBlockerContent = {
  title: "Ad Blocker Detected",
  description: "We noticed you're using an ad blocker. Please consider disabling it or upgrade to premium for an ad-free experience!",
  reloadPage: "Reload Page",
  upgradeToPremium: "Upgrade to Premium"
}
export type adBlockerContentType = typeof adBlockerContent;