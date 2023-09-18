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
  // इसे अनदेखा करें
  brand: "Equips",
  merge_pdf: "पीडीएफ विलय करें",
  split_pdf: "पीडीएफ विभाजित करें",
  compress_pdf: "पीडीएफ संपीड़ित करें",
  convert_pdf: "पीडीएफ परिवर्तित करें",
  convert_to_pdf: "पीडीएफ में परिवर्तित करें",
  jpg_to_pdf: "जेपीजी से पीडीएफ",
  word_to_pdf: "शब्द से पीडीएफ",
  markdown_to_pdf: "पीडीएफ में मार्कडाउन करें",
  powerpoint_to_pdf: "पावरपॉइंट से पीडीएफ",
  excel_to_pdf: "एक्सेल से पीडीएफ",
  html_to_pdf: "एचटीएमएल से पीडीएफ",
  web_to_pdf: "वेब से पीडीएफ",
  convert_from_pdf: "पीडीएफ से परिवर्तित करें",
  read_edit_pdf: "पीडीएफ पढ़ें और संपादित करें",
  pdf_to_jpg: "पीडीएफ से जेपीजी",
  pdf_to_word: "पीडीएफ से शब्द",
  pdf_to_powerpoint: "पीडीएफ से पावरपॉइंट",
  pdf_to_excel: "पीडीएफ से एक्सेल",
  pdf_to_pdf_a: "पीडीएफ से पीडीएफ/ए",
  pdf_to_text: "पाठ के लिए पीडीएफ",
  pdf_to_html: "पीडीएफ से एचटीएमएल",
  pdf_to_markdown: "PDF से मार्कडाउन तक",
};
export const tool = {
  Number_PDF:
  {
    title: "PDF संख्या दें",
    description: "अलग-अलग शैलियों और विकल्पों के साथ अपने PDF दस्तावेज़ में पृष्ठ संख्याएँ जोड़ें",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "merge-pdf": [
      "PDF फ़ाइलें मर्ज़ की गई हैं!",
      "PDF फ़ाइल को मर्ज़ किया गया है!",
    ],
  },
  btnText: {
    "merge-pdf": [
      "मर्ज़ की गई PDF फ़ाइलें डाउनलोड करें",
      "मर्ज़ की गई PDF फ़ाइल डाउनलोड करें",
    ],
  },
  backto: {
    "merge-pdf": "मर्ज़ की गई PDF को वापस जाएं",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "संख्या पीडीएफ विकल्प"
  },
  loader_text: "कृपया प्रतीक्षा करें...",
  add_more_button: "अधिक फ़ाइलें जोड़ें",
  action_buttons: {
    number_pdf: "PDF संख्या दें"
  },
  pages: "पृष्ठों",
  page: "पृष्ठ",
  number_pdf_options: {
    page_mode: "वेब पृष्ठ मोड",
    single_page: "एकल पृष्ठ",
    facing_pages: "मुखामुखी पृष्ठ",
    single_page_options: {
      position: "स्थिति",
      margin: "मार्जिन",
      pages: "पृष्ठ",
      page_to_number: "किस पृष्ठ को नंबर करना चाहते हैं?",
      start_from: "से शुरू करें",
      from: "से",
      to: "तक",
      text: "पाठ",
      page_text_options: [
        { value: 'केवल पृष्ठ संख्या डालें (सिफारिश की जाती है)', label: 'केवल पृष्ठ संख्या डालें (सिफारिश की जाती है)' },
        { value: 'पृष्ठ n', label: 'पृष्ठ n' },
        { value: 'पृष्ठ n का x', label: 'पृष्ठ n का x' },
        { value: 'कस्टम', label: 'कस्टम' },
      ],
      custom_text: "कस्टम पाठ",
      text_sample: "पाठ नमूना: {x} कुल पृष्ठों में से पृष्ठ {n}",
      margin_options: [
        { value: 'सामान्य', label: 'सामान्य' },
        { value: 'सिफारिश की गई', label: 'सिफारिश की गई' },
        { value: 'बड़ा', label: 'बड़ा' },
      ],
      text_format: "पाठ स्वरूप",
      font: "फोंट",
      font_size: "फोंट आकार",
      bold: "मोटा",
      italic: "तिरछा",
      underline: "नीला",
      color: "रंग"
    },
    first_page_is_cover: "पहला पृष्ठ कोर का पृष्ठ है"
  },
  selected_files_placeholer: "फाइलें चुनें"

};

export const tools: _tools = {
  select: "चुनें",
  or_drop: "या फ़ाइलें यहां छोड़ें",
  files: "फाइलें",
  drop_files: "फ़ाइलें यहाँ खींचें",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "फ़ाइल खाली है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "फ़ाइल बहुत बड़ी है। कृपया एक छोटी फ़ाइल चुनें या हमारा कंप्रेस-पीडीएफ़ उपकरण उपयोग करके फ़ाइल का आकार कम करें।",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "फ़ाइल एक समर्थित प्रकार नहीं है।",
    types: {
      PDF: "कृपया एक मान्य पीडीएफ़फ़ाइल चुनें।",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message:
      "फ़ाइल का डाटा भ्रष्ट है और इसे प्रसंस्करण नहीं किया जा सकता है। कृपया एक मान्य फ़ाइल चुनें।",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message:
      "आपने अनुमति दी हुई अधिकतम फ़ाइलों की संख्या पार कर दी है। कृपया कुछ फ़ाइलें हटाएं और पुनः प्रयास करें।",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "कोई फ़ाइल चयनित नहीं की गई है। कृपया कम से कम एक फ़ाइल चुनें।",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message:
      "एक अज्ञात त्रुटि हुई है। कृपया बाद में पुनः प्रयास करें या सहायता से संपर्क करें।",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message:
      "नेटवर्क में त्रुटि हो गई है। कृपया अपना इंटरनेट कनेक्शन जांचें और पुनः प्रयास करें।",
    code: "ERR_NETWORK",
  },
};
