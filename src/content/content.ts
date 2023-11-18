export const tool = {
  Number_PDF: {
    title: "Number PDF",
    description:
      "Add page numbers to your PDF document with different styles and options",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const edit_page = {
  edit_page_titles: {
    number_pdf: "Number PDF options",
  },
  loader_text: "please wait...",
  add_more_button: "Add more files",
  // translate the values of this object to french.
  action_buttons: {
    number_pdf: "Number PDF",
  },
  pages: "pages",
  page: "page",
  number_pdf_options: {
    page_mode: "page mode",
    single_page: "Single Page",
    facing_pages: "Facing Pages",
    single_page_options: {
      position: "position",
      margin: "margin",
      pages: "pages",
      page_to_number: "which pages do you want to number?",
      start_from: "First Number",
      from: "From",
      to: "To",
      text: "text",
      page_text_options: [
        {
          value: "insert only page number (recommended)",
          label: "insert only page number (recommended)",
        },
        { value: "page n", label: "page n" },
        { value: "page n of x", label: "page n of x" },
        { value: "Custom", label: "Custom" },
      ],
      custom_text: "Custom text",
      text_sample: "text sample: page {n} of {x} total pages",
      margin_options: [
        { value: "Small", label: "Small" },
        { value: "Recommended", label: "Recommended" },
        { value: "Big", label: "Big" },
      ],
      text_format: "text format",
      font: "font",
      font_size: "font size",
      bold: "bold",
      italic: "italic",
      underline: "underline",
      color: "color",
      document_language: "Document Language",
      select_language_placeholder: "Select Language",
      select_margin_placeholder: "Select Margin",
      select_font_placeholder: "Select Font",
    },
    first_page_is_cover: "First Page is the cover page",
  },
  selected_files_placeholer: "Select Files",
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "number-pdf": [
      "PDF files have been numbered!",
      "PDF file has been numbered!",
    ],
  },

  btnText: {
    "number-pdf": ["Download Numbered PDF files", "Download Numbered PDF file"],
  },

  backto: {
    "number-pdf": "Back To Number PDF",
  },
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
  // i want another error like this but when only one file is uploaded
  ERR_NETWORK: {
    message:
      "A network error occurred. Please check your internet connection and try again.",
    code: "ERR_NETWORK",
  },
};
