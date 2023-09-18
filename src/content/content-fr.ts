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
  merge_pdf: "Fusionner des PDF",
  split_pdf: "Diviser des PDF",
  compress_pdf: "Compresser des PDF",
  convert_pdf: "Convertir des PDF",
  convert_to_pdf: "Convertir en PDF",
  jpg_to_pdf: "JPG en PDF",
  word_to_pdf: "WORD en PDF",
  powerpoint_to_pdf: "POWERPOINT en PDF",
  excel_to_pdf: "EXCEL en PDF",
  html_to_pdf: "HTML en PDF",
  web_to_pdf: "Web vers PDF",
  markdown_to_pdf: "Markdown en PDF",
  convert_from_pdf: "Convertir à partir de PDF",
  read_edit_pdf: "Lire et modifier un PDF",
  pdf_to_jpg: "PDF en JPG",
  pdf_to_word: "PDF en WORD",
  pdf_to_powerpoint: "PDF en POWERPOINT",
  pdf_to_excel: "PDF en EXCEL",
  pdf_to_pdf_a: "PDF en PDF/A",
  pdf_to_text: "PDF en texte",
  pdf_to_html: "PDF vers HTML",
  pdf_to_markdown: "PDF à Markdown",
};
export const tool: _tool = {
  Number_PDF:
  {
    title: "Numéroter PDF",
    description: "Ajoutez des numéros de page à votre document PDF avec différents styles et options",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};
export const tools: _tools = {
  select: "Sélectionner",
  or_drop: "ou déposer des fichiers ici",
  files: "fichiers",
  drop_files: "Déposez les fichiers ici",
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "Fusion de fichiers PDF réussie !",
      "Fusion de fichier PDF réussie !",
    ],
  },
  btnText: {
    "merge-pdf": [
      "Télécharger les fichiers PDF fusionnés",
      "Télécharger le fichier PDF fusionné",
    ],
  },
  backto: {
    "merge-pdf": "Retour à Fusionner PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "Nombre d'options PDF"
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    number_pdf: "Numéroter PDF"
  },
  pages: "pages",
  page: "page",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "Le fichier est vide. Veuillez choisir un fichier valide.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "Le fichier est trop volumineux. Veuillez choisir un fichier plus petit ou utiliser notre outil de compression PDF pour réduire la taille du fichier.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "Le fichier n'est pas d'un type pris en charge.",
    types: {
      PDF: "Veuillez choisir un fichier PDF valide.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
    code: "ERR_FILE_CORRUPT",
  },

  MAX_FILES_EXCEEDED: {
    message:
      "Vous avez dépassé le nombre maximal de fichiers autorisés. Veuillez supprimer certains fichiers et réessayer.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message:
      "Aucun fichier sélectionné. Veuillez sélectionner au moins un fichier.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "Une erreur inconnue s'est produite. Veuillez réessayer plus tard ou contacter le support.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "Une erreur de réseau s'est produite. Veuillez vérifier votre connexion Internet et réessayer.",
    code: "ERR_NETWORK",
  },
};
