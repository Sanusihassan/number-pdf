import type {
  tool as _tool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";

export const tool: _tool = {
  Number_PDF: {
    title: "إضافة أرقام للصفحات في PDF",
    seoTitle:
      "إضافة أرقام للصفحات في PDF عبر الإنترنت - أداة ترقيم صفحات PDF | PDFEquips",
    description:
      "أضف أرقام للصفحات في مستند PDF الخاص بك بأنماط وخيارات مختلفة",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const tools: _tools = {
  select: "اختر",
  or_drop: "أو قم بإسقاط الملفات هنا",
  files: "ملفات",
  drop_files: "قم بوضع الملفات هنا",
};

export const downloadFile: _downloadFile = {
  titles: {
    "number-pdf": ["تم ترقيم ملفات PDF!", "تم ترقيم ملف PDF!"],
  },

  btnText: {
    "number-pdf": ["تنزيل ملفات PDF المرقمة", "تنزيل ملف PDF المرقم"],
  },

  backto: {
    "number-pdf": "العودة إلى ترقيم PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "خيارات ترقيم ملف ال PDF",
  },
  loader_text: "يرجى الانتظار...",
  add_more_button: "إضافة المزيد من الملفات",
  action_buttons: {
    number_pdf: "رقّم PDF",
  },
  pages: "صفحة",
  page: "صفحة واحدة",
  number_pdf_options: {
    page_mode: "وضع الصفحة",
    single_page: "صفحة واحدة",
    facing_pages: "صفحات متجاورة",
    single_page_options: {
      position: "الموضع",
      margin: "الهامش",
      pages: "الصفحات",
      page_to_number: "أي الصفحات ترغب في ترقيمها؟",
      start_from: "الرقم الأول",
      from: "من",
      to: "إلى",
      text: "النص",
      page_text_options: [
        {
          value: "أدخل رقم الصفحة فقط (مستحسن)",
          label: "أدخل رقم الصفحة فقط (مستحسن)",
        },
        { value: "صفحة n", label: "صفحة n" },
        { value: "صفحة n من x", label: "صفحة n من x" },
        { value: "تخصيص", label: "تخصيص" },
      ],
      custom_text: "نص مخصص",
      text_sample: "نموذج نص: الصفحة {ن} من إجمالي {س} من الصفحات",
      margin_options: [
        { value: "صغير", label: "صغير" },
        { value: "مستحسن", label: "مستحسن" },
        { value: "كبير", label: "كبير" },
      ],
      text_format: "تنسيق النص",
      font: "الخط",
      font_size: "حجم الخط",
      bold: "عريض",
      italic: "مائل",
      underline: "تسطير",
      color: "اللون",
      document_language: "لغة المستند",
      select_language_placeholder: "اختر اللغة",
      select_margin_placeholder: "حدد الهامش",
      select_font_placeholder: "اختر الخط",
    },
    first_page_is_cover: "الصفحة الأولى هي صفحة الغلاف",
  },
  selected_files_placeholer: "اختر الملفات",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "الملف فارغ. يرجى اختيار ملف صالح.",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدام أداة ضغط PDF الخاصة بنا لتقليل حجم الملف.",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "الملف غير مدعوم.",
    types: {
      PDF: "يرجى اختيار ملف PDF صالح.",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات والمحاولة مرة أخرى.",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو الاتصال بالدعم.",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "حدث خطأ في الشبكة. يرجى التحقق من اتصالك بالإنترنت وحاول مرة أخرى.",
    code: "ERR_NETWORK",
  },
};
