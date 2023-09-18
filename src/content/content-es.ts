import type {
  nav_content as nav_content_type,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const nav_content: nav_content_type = {
  brand: "Equips",
  merge_pdf: "Combinar PDF",
  split_pdf: "Dividir PDF",
  compress_pdf: "Comprimir PDF",
  convert_pdf: "Convertir PDF",
  convert_to_pdf: "Convertir a PDF",
  jpg_to_pdf: "JPG a PDF",
  word_to_pdf: "Word a PDF",
  powerpoint_to_pdf: "Powerpoint a PDF",
  web_to_pdf: "Web a PDF",
  markdown_to_pdf: "Markdown a PDF",
  excel_to_pdf: "Excel a PDF",
  html_to_pdf: "HTML a PDF",
  convert_from_pdf: "Convertir desde PDF",
  read_edit_pdf: "Leer y editar PDF",
  pdf_to_jpg: "PDF a JPG",
  pdf_to_word: "PDF a Word",
  pdf_to_powerpoint: "PDF a Powerpoint",
  pdf_to_excel: "PDF a Excel",
  pdf_to_pdf_a: "PDF a PDF/A",
  pdf_to_text: "PDF a texto",
  pdf_to_html: "PDF a HTML",
  pdf_to_markdown: "PDF a Markdown",
};

export const tool: _tool = {
  Number_PDF: {
    title: "Numerar PDF",
    description: "Añade números de página a tu documento PDF con diferentes estilos y opciones",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "Número de opciones de PDF"
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    number_pdf: "Numerar PDF"
  },
  pages: "paginas",
  page: "página",
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "¡Combinación de archivos PDF exitosa!",
      "¡Combinación de archivo PDF exitosa!",
    ],
  },
  btnText: {
    "merge-pdf": [
      "Descargar archivos PDF combinados",
      "Descargar archivo PDF combinado",
    ],
  },
  backto: {
    "merge-pdf": "Volver a unir PDF",
  },
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "El archivo está vacío. Por favor, elija un archivo válido.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "El archivo es demasiado grande. Por favor, elija un archivo más pequeño o use nuestra herramienta de compresión de PDF para reducir el tamaño del archivo.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "El archivo no es un tipo compatible.",
    types: {
      PDF: "Por favor, elija un archivo PDF válido.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "El archivo estácorrupto y no se puede procesar. Por favor, elija un archivo válido.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "Ha excedido el número máximo de archivos permitidos. Por favor, elimine algunos archivos e intente nuevamente.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "No se han seleccionado archivos. Por favor, seleccione al menos un archivo.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Ha ocurrido un error desconocido. Por favor, inténtelo de nuevo más tarde o contacte al soporte.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Ha ocurrido un error en la red. Por favor, comprueba tu conexión a internet e inténtalo de nuevo.",
    code: "ERR_NETWORK",
  }
};
