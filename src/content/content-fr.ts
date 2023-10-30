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
    title: "Numéroter PDF",
    description:
      "Ajoutez des numéros de page à votre document PDF avec différents styles et options",
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
    "number-pdf": [
      "Les fichiers PDF ont été numérotés!",
      "Le fichier PDF a été numéroté!",
    ],
  },

  btnText: {
    "number-pdf": [
      "Télécharger les fichiers PDF numérotés",
      "Télécharger le fichier PDF numéroté",
    ],
  },

  backto: {
    "number-pdf": "Retourner à la numérotation PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "Nombre d'options PDF",
  },
  loader_text: "Veuillez patienter...",
  add_more_button: "Ajouter plus de fichiers",
  action_buttons: {
    number_pdf: "Numéroter PDF",
  },
  pages: "pages",
  page: "page",

  number_pdf_options: {
    page_mode: "mode de page",
    single_page: "Page unique",
    facing_pages: "Pages en vis-à-vis",
    single_page_options: {
      position: "position",
      margin: "marge",
      pages: "pages",
      page_to_number: "quelles pages souhaitez-vous numéroter ?",
      start_from: "Commencer à partir de",
      from: "De",
      to: "À",
      text: "texte",
      page_text_options: [
        {
          value: "insérer uniquement le numéro de page (recommandé)",
          label: "insérer uniquement le numéro de page (recommandé)",
        },
        { value: "page n", label: "page n" },
        { value: "page n de x", label: "page n de x" },
        { value: "Personnalisé", label: "Personnalisé" },
      ],
      custom_text: "Texte personnalisé",
      text_sample: "échantillon de texte : page {n} sur {x} pages au total",
      margin_options: [
        { value: "Petit", label: "Petit" },
        { value: "Recommandé", label: "Recommandé" },
        { value: "Grand", label: "Grand" },
      ],
      text_format: "format de texte",
      font: "police de caractères",
      font_size: "taille de police",
      bold: "gras",
      italic: "italique",
      underline: "souligné",
      color: "couleur",
      document_language: "Langue du Document",
      select_language_placeholder: "Sélectionner la Langue",
      select_margin_placeholder: "Sélectionner la Marge",
      select_font_placeholder: "Sélectionner la Police",
    },
    first_page_is_cover: "La première page est la page de couverture",
  },
  selected_files_placeholer: "Sélectionner des fichiers",
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
