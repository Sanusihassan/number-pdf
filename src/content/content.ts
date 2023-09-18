export const nav_content = {
  brand: "Equips",
  merge_pdf: "Merge PDF",
  split_pdf: "Split PDF",
  compress_pdf: "Compress PDF",
  convert_pdf: "Convert PDF",
  convert_to_pdf: "Convert to PDF",
  jpg_to_pdf: "JPG to PDF",
  word_to_pdf: "WORD to PDF",
  powerpoint_to_pdf: "POWERPOINT to PDF",
  excel_to_pdf: "EXCEL to PDF",
  html_to_pdf: "HTML to PDF",
  web_to_pdf: "Web to PDF",
  markdown_to_pdf: "Markdown to PDF",
  convert_from_pdf: "Convert from PDF",
  read_edit_pdf: "Read & Edit PDF",
  pdf_to_jpg: "PDF to JPG",
  pdf_to_word: "PDF to WORD",
  pdf_to_powerpoint: "PDF to POWERPOINT",
  pdf_to_excel: "PDF to EXCEL",
  pdf_to_pdf_a: "PDF to PDF/A",
  pdf_to_text: "PDF to text",
  pdf_to_html: "PDF to HTML",
  pdf_to_markdown: "PDF to Markdown",
};
// i want the arabic version of this object:
export const tool = {
  Number_PDF: {
    title: "Number PDF",
    description: "Add page numbers to your PDF document with different styles and options",
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
};

export const tools = {
  select: "Select",
  or_drop: "or drop files here",
  files: "files",
  drop_files: "Drag files here",
};

export const downloadFile = {
  titles: {
    "merge-pdf": ["PDF files have been merged!", "PDF file has been merged!"],
  },

  btnText: {
    "merge-pdf": ["Download Merged PDF files", "Download Merged PDF file"],
  },

  backto: {
    "merge-pdf": "Back To Merge PDF",
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
  }
};
