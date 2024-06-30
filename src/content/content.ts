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

export const footer = {
  brand: "PDFEquips",
  terms: "terms",
  conditions: "conditions",
  privacy_policy: "privacy policy",
}

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

export const languages = {
  ab: {
    name: "Abkhaz",
    nativeName: "аҧсуа",
  },
  aa: {
    name: "Afar",
    nativeName: "Afaraf",
  },
  af: {
    name: "Afrikaans",
    nativeName: "Afrikaans",
  },
  ak: {
    name: "Akan",
    nativeName: "Akan",
  },
  sq: {
    name: "Albanian",
    nativeName: "Shqip",
  },
  am: {
    name: "Amharic",
    nativeName: "አማርኛ",
  },
  ar: {
    name: "Arabic",
    nativeName: "العربية",
  },
  an: {
    name: "Aragonese",
    nativeName: "Aragonés",
  },
  hy: {
    name: "Armenian",
    nativeName: "Հայերեն",
  },
  as: {
    name: "Assamese",
    nativeName: "অসমীয়া",
  },
  av: {
    name: "Avaric",
    nativeName: "авар мацӀ, магӀарул мацӀ",
  },
  ae: {
    name: "Avestan",
    nativeName: "avesta",
  },
  ay: {
    name: "Aymara",
    nativeName: "aymar aru",
  },
  az: {
    name: "Azerbaijani",
    nativeName: "azərbaycan dili",
  },
  bm: {
    name: "Bambara",
    nativeName: "bamanankan",
  },
  ba: {
    name: "Bashkir",
    nativeName: "башҡорт теле",
  },
  eu: {
    name: "Basque",
    nativeName: "euskara, euskera",
  },
  be: {
    name: "Belarusian",
    nativeName: "Беларуская",
  },
  bn: {
    name: "Bengali",
    nativeName: "বাংলা",
  },
  bh: {
    name: "Bihari",
    nativeName: "भोजपुरी",
  },
  bi: {
    name: "Bislama",
    nativeName: "Bislama",
  },
  bs: {
    name: "Bosnian",
    nativeName: "bosanski jezik",
  },
  br: {
    name: "Breton",
    nativeName: "brezhoneg",
  },
  bg: {
    name: "Bulgarian",
    nativeName: "български език",
  },
  my: {
    name: "Burmese",
    nativeName: "ဗမာစာ",
  },
  ca: {
    name: "Catalan; Valencian",
    nativeName: "Català",
  },
  ch: {
    name: "Chamorro",
    nativeName: "Chamoru",
  },
  ce: {
    name: "Chechen",
    nativeName: "нохчийн мотт",
  },
  ny: {
    name: "Chichewa; Chewa; Nyanja",
    nativeName: "chiCheŵa, chinyanja",
  },
  zh: {
    name: "Chinese",
    nativeName: "中文 (Zhōngwén), 汉语, 漢語",
  },
  cv: {
    name: "Chuvash",
    nativeName: "чӑваш чӗлхи",
  },
  kw: {
    name: "Cornish",
    nativeName: "Kernewek",
  },
  co: {
    name: "Corsican",
    nativeName: "corsu, lingua corsa",
  },
  cr: {
    name: "Cree",
    nativeName: "ᓀᐦᐃᔭᐍᐏᐣ",
  },
  hr: {
    name: "Croatian",
    nativeName: "hrvatski",
  },
  cs: {
    name: "Czech",
    nativeName: "česky, čeština",
  },
  da: {
    name: "Danish",
    nativeName: "dansk",
  },
  dv: {
    name: "Divehi; Dhivehi; Maldivian;",
    nativeName: "ދިވެހި",
  },
  nl: {
    name: "Dutch",
    nativeName: "Nederlands, Vlaams",
  },
  en: {
    name: "English",
    nativeName: "English",
  },
  eo: {
    name: "Esperanto",
    nativeName: "Esperanto",
  },
  et: {
    name: "Estonian",
    nativeName: "eesti, eesti keel",
  },
  ee: {
    name: "Ewe",
    nativeName: "Eʋegbe",
  },
  fo: {
    name: "Faroese",
    nativeName: "føroyskt",
  },
  fj: {
    name: "Fijian",
    nativeName: "vosa Vakaviti",
  },
  fi: {
    name: "Finnish",
    nativeName: "suomi, suomen kieli",
  },
  fr: {
    name: "French",
    nativeName: "français, langue française",
  },
  ff: {
    name: "Fula; Fulah; Pulaar; Pular",
    nativeName: "Fulfulde, Pulaar, Pular",
  },
  gl: {
    name: "Galician",
    nativeName: "Galego",
  },
  ka: {
    name: "Georgian",
    nativeName: "ქართული",
  },
  de: {
    name: "German",
    nativeName: "Deutsch",
  },
  el: {
    name: "Greek, Modern",
    nativeName: "Ελληνικά",
  },
  gn: {
    name: "Guaraní",
    nativeName: "Avañeẽ",
  },
  gu: {
    name: "Gujarati",
    nativeName: "ગુજરાતી",
  },
  ht: {
    name: "Haitian; Haitian Creole",
    nativeName: "Kreyòl ayisyen",
  },
  ha: {
    name: "Hausa",
    nativeName: "Hausa, هَوُسَ",
  },
  he: {
    name: "Hebrew (modern)",
    nativeName: "עברית",
  },
  hz: {
    name: "Herero",
    nativeName: "Otjiherero",
  },
  hi: {
    name: "Hindi",
    nativeName: "हिन्दी, हिंदी",
  },
  ho: {
    name: "Hiri Motu",
    nativeName: "Hiri Motu",
  },
  hu: {
    name: "Hungarian",
    nativeName: "Magyar",
  },
  ia: {
    name: "Interlingua",
    nativeName: "Interlingua",
  },
  id: {
    name: "Indonesian",
    nativeName: "Bahasa Indonesia",
  },
  ie: {
    name: "Interlingue",
    nativeName: "Originally called Occidental; then Interlingue after WWII",
  },
  ga: {
    name: "Irish",
    nativeName: "Gaeilge",
  },
  ig: {
    name: "Igbo",
    nativeName: "Asụsụ Igbo",
  },
  ik: {
    name: "Inupiaq",
    nativeName: "Iñupiaq, Iñupiatun",
  },
  io: {
    name: "Ido",
    nativeName: "Ido",
  },
  is: {
    name: "Icelandic",
    nativeName: "Íslenska",
  },
  it: {
    name: "Italian",
    nativeName: "Italiano",
  },
  iu: {
    name: "Inuktitut",
    nativeName: "ᐃᓄᒃᑎᑐᑦ",
  },
  ja: {
    name: "Japanese",
    nativeName: "日本語 (にほんご／にっぽんご)",
  },
  jv: {
    name: "Javanese",
    nativeName: "basa Jawa",
  },
  kl: {
    name: "Kalaallisut, Greenlandic",
    nativeName: "kalaallisut, kalaallit oqaasii",
  },
  kn: {
    name: "Kannada",
    nativeName: "ಕನ್ನಡ",
  },
  kr: {
    name: "Kanuri",
    nativeName: "Kanuri",
  },
  ks: {
    name: "Kashmiri",
    nativeName: "कश्मीरी, كشميري‎",
  },
  kk: {
    name: "Kazakh",
    nativeName: "Қазақ тілі",
  },
  km: {
    name: "Khmer",
    nativeName: "ភាសាខ្មែរ",
  },
  ki: {
    name: "Kikuyu, Gikuyu",
    nativeName: "Gĩkũyũ",
  },
  rw: {
    name: "Kinyarwanda",
    nativeName: "Ikinyarwanda",
  },
  ky: {
    name: "Kirghiz, Kyrgyz",
    nativeName: "кыргыз тили",
  },
  kv: {
    name: "Komi",
    nativeName: "коми кыв",
  },
  kg: {
    name: "Kongo",
    nativeName: "KiKongo",
  },
  ko: {
    name: "Korean",
    nativeName: "한국어 (韓國語), 조선말 (朝鮮語)",
  },
  ku: {
    name: "Kurdish",
    nativeName: "Kurdî, كوردی‎",
  },
  kj: {
    name: "Kwanyama, Kuanyama",
    nativeName: "Kuanyama",
  },
  la: {
    name: "Latin",
    nativeName: "latine, lingua latina",
  },
  lb: {
    name: "Luxembourgish, Letzeburgesch",
    nativeName: "Lëtzebuergesch",
  },
  lg: {
    name: "Luganda",
    nativeName: "Luganda",
  },
  li: {
    name: "Limburgish, Limburgan, Limburger",
    nativeName: "Limburgs",
  },
  ln: {
    name: "Lingala",
    nativeName: "Lingála",
  },
  lo: {
    name: "Lao",
    nativeName: "ພາສາລາວ",
  },
  lt: {
    name: "Lithuanian",
    nativeName: "lietuvių kalba",
  },
  lu: {
    name: "Luba-Katanga",
    nativeName: "",
  },
  lv: {
    name: "Latvian",
    nativeName: "latviešu valoda",
  },
  gv: {
    name: "Manx",
    nativeName: "Gaelg, Gailck",
  },
  mk: {
    name: "Macedonian",
    nativeName: "македонски јазик",
  },
  mg: {
    name: "Malagasy",
    nativeName: "Malagasy fiteny",
  },
  ms: {
    name: "Malay",
    nativeName: "bahasa Melayu, بهاس ملايو‎",
  },
  ml: {
    name: "Malayalam",
    nativeName: "മലയാളം",
  },
  mt: {
    name: "Maltese",
    nativeName: "Malti",
  },
  mi: {
    name: "Māori",
    nativeName: "te reo Māori",
  },
  mr: {
    name: "Marathi (Marāṭhī)",
    nativeName: "मराठी",
  },
  mh: {
    name: "Marshallese",
    nativeName: "Kajin M̧ajeļ",
  },
  mn: {
    name: "Mongolian",
    nativeName: "монгол",
  },
  na: {
    name: "Nauru",
    nativeName: "Ekakairũ Naoero",
  },
  nv: {
    name: "Navajo, Navaho",
    nativeName: "Diné bizaad, Dinékʼehǰí",
  },
  nb: {
    name: "Norwegian Bokmål",
    nativeName: "Norsk bokmål",
  },
  nd: {
    name: "North Ndebele",
    nativeName: "isiNdebele",
  },
  ne: {
    name: "Nepali",
    nativeName: "नेपाली",
  },
  ng: {
    name: "Ndonga",
    nativeName: "Owambo",
  },
  nn: {
    name: "Norwegian Nynorsk",
    nativeName: "Norsk nynorsk",
  },
  no: {
    name: "Norwegian",
    nativeName: "Norsk",
  },
  ii: {
    name: "Nuosu",
    nativeName: "ꆈꌠ꒿ Nuosuhxop",
  },
  nr: {
    name: "South Ndebele",
    nativeName: "isiNdebele",
  },
  oc: {
    name: "Occitan",
    nativeName: "Occitan",
  },
  oj: {
    name: "Ojibwe, Ojibwa",
    nativeName: "ᐊᓂᔑᓈᐯᒧᐎᓐ",
  },
  cu: {
    name: "Old Church Slavonic, Church Slavic, Church Slavonic, Old Bulgarian, Old Slavonic",
    nativeName: "ѩзыкъ словѣньскъ",
  },
  om: {
    name: "Oromo",
    nativeName: "Afaan Oromoo",
  },
  or: {
    name: "Oriya",
    nativeName: "ଓଡ଼ିଆ",
  },
  os: {
    name: "Ossetian, Ossetic",
    nativeName: "ирон æвзаг",
  },
  pa: {
    name: "Panjabi, Punjabi",
    nativeName: "ਪੰਜਾਬੀ, پنجابی‎",
  },
  pi: {
    name: "Pāli",
    nativeName: "पाऴि",
  },
  fa: {
    name: "Persian",
    nativeName: "فارسی",
  },
  pl: {
    name: "Polish",
    nativeName: "polski",
  },
  ps: {
    name: "Pashto, Pushto",
    nativeName: "پښتو",
  },
  pt: {
    name: "Portuguese",
    nativeName: "Português",
  },
  qu: {
    name: "Quechua",
    nativeName: "Runa Simi, Kichwa",
  },
  rm: {
    name: "Romansh",
    nativeName: "rumantsch grischun",
  },
  rn: {
    name: "Kirundi",
    nativeName: "kiRundi",
  },
  ro: {
    name: "Romanian, Moldavian, Moldovan",
    nativeName: "română",
  },
  ru: {
    name: "Russian",
    nativeName: "русский язык",
  },
  sa: {
    name: "Sanskrit (Saṁskṛta)",
    nativeName: "संस्कृतम्",
  },
  sc: {
    name: "Sardinian",
    nativeName: "sardu",
  },
  sd: {
    name: "Sindhi",
    nativeName: "सिन्धी, سنڌي، سندھی‎",
  },
  se: {
    name: "Northern Sami",
    nativeName: "Davvisámegiella",
  },
  sm: {
    name: "Samoan",
    nativeName: "gagana faa Samoa",
  },
  sg: {
    name: "Sango",
    nativeName: "yângâ tî sängö",
  },
  sr: {
    name: "Serbian",
    nativeName: "српски језик",
  },
  gd: {
    name: "Scottish Gaelic; Gaelic",
    nativeName: "Gàidhlig",
  },
  sn: {
    name: "Shona",
    nativeName: "chiShona",
  },
  si: {
    name: "Sinhala, Sinhalese",
    nativeName: "සිංහල",
  },
  sk: {
    name: "Slovak",
    nativeName: "slovenčina",
  },
  sl: {
    name: "Slovene",
    nativeName: "slovenščina",
  },
  so: {
    name: "Somali",
    nativeName: "Soomaaliga, af Soomaali",
  },
  st: {
    name: "Southern Sotho",
    nativeName: "Sesotho",
  },
  es: {
    name: "Spanish; Castilian",
    nativeName: "español, castellano",
  },
  su: {
    name: "Sundanese",
    nativeName: "Basa Sunda",
  },
  sw: {
    name: "Swahili",
    nativeName: "Kiswahili",
  },
  ss: {
    name: "Swati",
    nativeName: "SiSwati",
  },
  sv: {
    name: "Swedish",
    nativeName: "svenska",
  },
  ta: {
    name: "Tamil",
    nativeName: "தமிழ்",
  },
  te: {
    name: "Telugu",
    nativeName: "తెలుగు",
  },
  tg: {
    name: "Tajik",
    nativeName: "тоҷикӣ, toğikī, تاجیکی‎",
  },
  th: {
    name: "Thai",
    nativeName: "ไทย",
  },
  ti: {
    name: "Tigrinya",
    nativeName: "ትግርኛ",
  },
  bo: {
    name: "Tibetan Standard, Tibetan, Central",
    nativeName: "བོད་ཡིག",
  },
  tk: {
    name: "Turkmen",
    nativeName: "Türkmen, Түркмен",
  },
  tl: {
    name: "Tagalog",
    nativeName: "Wikang Tagalog, ᜏᜒᜃᜅ᜔ ᜆᜄᜎᜓᜄ᜔",
  },
  tn: {
    name: "Tswana",
    nativeName: "Setswana",
  },
  to: {
    name: "Tonga (Tonga Islands)",
    nativeName: "faka Tonga",
  },
  tr: {
    name: "Turkish",
    nativeName: "Türkçe",
  },
  ts: {
    name: "Tsonga",
    nativeName: "Xitsonga",
  },
  tt: {
    name: "Tatar",
    nativeName: "татарча, tatarça, تاتارچا‎",
  },
  tw: {
    name: "Twi",
    nativeName: "Twi",
  },
  ty: {
    name: "Tahitian",
    nativeName: "Reo Tahiti",
  },
  ug: {
    name: "Uighur, Uyghur",
    nativeName: "Uyƣurqə, ئۇيغۇرچە‎",
  },
  uk: {
    name: "Ukrainian",
    nativeName: "українська",
  },
  ur: {
    name: "Urdu",
    nativeName: "اردو",
  },
  uz: {
    name: "Uzbek",
    nativeName: "zbek, Ўзбек, أۇزبېك‎",
  },
  ve: {
    name: "Venda",
    nativeName: "Tshivenḓa",
  },
  vi: {
    name: "Vietnamese",
    nativeName: "Tiếng Việt",
  },
  vo: {
    name: "Volapük",
    nativeName: "Volapük",
  },
  wa: {
    name: "Walloon",
    nativeName: "Walon",
  },
  cy: {
    name: "Welsh",
    nativeName: "Cymraeg",
  },
  wo: {
    name: "Wolof",
    nativeName: "Wollof",
  },
  fy: {
    name: "Western Frisian",
    nativeName: "Frysk",
  },
  xh: {
    name: "Xhosa",
    nativeName: "isiXhosa",
  },
  yi: {
    name: "Yiddish",
    nativeName: "ייִדיש",
  },
  yo: {
    name: "Yoruba",
    nativeName: "Yorùbá",
  },
  za: {
    name: "Zhuang, Chuang",
    nativeName: "Saɯ cueŋƅ, Saw cuengh",
  },
};
