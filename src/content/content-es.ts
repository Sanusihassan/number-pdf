import type {
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Number_PDF: {
    title: "Numerar PDF",
    description:
      "Añade números de página a tu documento PDF con diferentes estilos y opciones",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "Número de opciones de PDF",
  },
  loader_text: "Por favor espera...",
  add_more_button: "Agrega más archivos",
  action_buttons: {
    number_pdf: "Numerar PDF",
  },
  pages: "paginas",
  page: "página",

  number_pdf_options: {
    page_mode: "modo de página",
    single_page: "Página única",
    facing_pages: "Páginas enfrentadas",
    single_page_options: {
      position: "posición",
      margin: "margen",
      pages: "páginas",
      page_to_number: "¿Qué páginas quieres numerar?",
      start_from: "Comenzar desde",
      from: "Desde",
      to: "Hasta",
      text: "texto",
      page_text_options: [
        {
          value: "insert only page number (recommended)",
          label: "insert only page number (recommended)",
        },
        { value: "page n", label: "page n" },
        { value: "page n of x", label: "page n of x" },
        { value: "Personalizado", label: "Personalizado" },
      ],
      custom_text: "Texto personalizado",
      text_sample: "muestra de texto: página {n} de {x} páginas en total",
      margin_options: [
        { value: "Pequeño", label: "Pequeño" },
        { value: "Recomendado", label: "Recomendado" },
        { value: "Grande", label: "Grande" },
      ],
      text_format: "formato de texto",
      font: "fuente",
      font_size: "tamaño de fuente",
      bold: "negrita",
      italic: "cursiva",
      underline: "subrayado",
      color: "color",
      document_language: "Idioma del Documento",
      select_language_placeholder: "Seleccionar Idioma",
      select_margin_placeholder: "Seleccionar Margen",
      select_font_placeholder: "Seleccionar Fuente",
    },
    first_page_is_cover: "La primera página es la página de portada",
  },
  selected_files_placeholer: "Seleccionar archivos",
};

export const tools: _tools = {
  select: "Seleccionar",
  or_drop: "o soltar archivos aquí",
  files: "archivos",
  drop_files: "Arrastra los archivos aquí",
};

export const downloadFile: _downloadFile = {
  titles: {
    "number-pdf": [
      "¡Los archivos PDF han sido numerados!",
      "¡El archivo PDF ha sido numerado!",
    ],
  },

  btnText: {
    "number-pdf": [
      "Descargar archivos PDF numerados",
      "Descargar archivo PDF numerado",
    ],
  },

  backto: {
    "number-pdf": "Volver a numerar PDF",
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
  },
};
