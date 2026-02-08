import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
export const tool: _tool = {
    Number_PDF: {
        title: "PDF को संख्या दें",
        seoTitle: "ऑनलाइन पृष्ठ संख्या जोड़ें - आसान PDF संख्या",
        description: "अपने PDF दस्तावेज़ में विभिन्न शैलियों और विकल्पों के साथ पृष्ठ संख्या जोड़ें।",
        keywords: "PDF में पृष्ठ संख्या जोड़ें, PDF संख्या उपकरण, ऑनलाइन PDF संख्या, PDF पृष्ठ संख्या दें, PDF पृष्ठ संख्याएँ अनुकूलित करें, PDF में क्रमांकित संख्या जोड़ें",
        color: "#e55039",
        type: ".pdf",
        to: "/number-pdf",
        features: [
            {
                title: "अनुकूलन योग्य संख्या शैलियाँ",
                description: "अपने दस्तावेज़ की आवश्यकताओं के अनुरूप विभिन्न संख्या शैलियों और प्रारूपों में से चुनें।"
            },
            {
                title: "मल्टी-लैंग्वेज समर्थन",
                description: "उपयुक्त अंक स्क्रिप्ट का उपयोग करने के लिए दस्तावेज़ भाषा का चयन करें।"
            },
            {
                title: "आसानी से उपयोगी",
                description: "हमारा उपकरण उपयोगकर्ता के अनुकूल है, जिससे आप केवल कुछ क्लिक में अपने PDF में पृष्ठ संख्या जोड़ सकते हैं।"
            }
        ]
    }
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
    fileCard: {
        page: "पृष्ठ",
        pages: "पृष्ठ",
        remove_file: "फ़ाइल हटाएं",
        loading: "लोड हो रहा है",
        preview: "पूर्वावलोकन",
    },
    options: {
        page_mode: "पृष्ठ मोड",
        single_page: "एकल पृष्ठ",
        facing_pages: "सामने वाले पृष्ठ",
        first_page_is_cover: "पहला पृष्ठ कवर पृष्ठ है",
        single_page_options: {
            position: "स्थिति",
            margin: "हाशिया",
            pages: "पृष्ठ",
            page_to_number: "आप कौन से पृष्ठों को नंबर देना चाहते हैं?",
            start_from: "पहला नंबर",
            from: "से",
            to: "तक",
            text: "टेक्स्ट",
            page_text_options: [
                {
                    value: "insert only page number (recommended)",
                    label: "केवल पृष्ठ संख्या डालें (अनुशंसित)",
                },
                { value: "page n", label: "पृष्ठ n" },
                { value: "page n of x", label: "पृष्ठ n का x" },
                { value: "Custom", label: "कस्टम" },
            ],
            custom_text: "कस्टम टेक्स्ट",
            text_sample: "टेक्स्ट नमूना: पृष्ठ {n} कुल {x} पृष्ठों में से",
            margin_options: [
                { value: "Small", label: "छोटा" },
                { value: "Recommended", label: "अनुशंसित" },
                { value: "Big", label: "बड़ा" },
            ],
            text_format: "टेक्स्ट प्रारूप",
            font: "फ़ॉन्ट",
            font_size: "फ़ॉन्ट आकार",
            bold: "बोल्ड",
            italic: "इटैलिक",
            underline: "अंडरलाइन",
            color: "रंग",
            document_language: "दस्तावेज़ भाषा",
            select_language_placeholder: "भाषा चुनें",
            select_margin_placeholder: "हाशिया चुनें",
            select_font_placeholder: "फ़ॉन्ट चुनें",
        },
    },
    selected_files_placeholer: "फाइलें चुनें",
    filenameOptions: {
        label: "आउटपुट फ़ाइल का नाम (वैकल्पिक)",
        placeholder: "फ़ाइल का नाम दर्ज करें",
        helperText: "डाउनलोड करते समय यह संकुचित PDF का नाम होगा।",
        cta: "योजनाएँ देखें",
        upgradeNotice: {
            msg: "2.0 से 10.0 तक के स्तर प्रीमियम में उपलब्ध हैं।",
            cta: "अभी अपग्रेड करें",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "number-pdf": [
            "PDF फ़ाइलों को नंबर किया गया है!",
            "PDF फ़ाइल को नंबर किया गया है!"
        ]
    },
    btnText: {
        "number-pdf": [
            "नंबर किए गए PDF फ़ाइलें डाउनलोड करें",
            "नंबर की गई PDF फ़ाइल डाउनलोड करें"
        ]
    },
    backto: {
        "number-pdf": "नंबर पीडीएफ पर वापस जाएं"
    }
};

// Hindi (hi) - tools
export const tools: _tools = {
    select: "चुनें",
    or_drop: "या फ़ाइलें यहाँ ड्रॉप करें",
    files: "फ़ाइलें",
    drop_files: "फ़ाइलें यहाँ ड्रैग करें",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "फ़ाइल खाली है। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "फ़ाइल बहुत बड़ी है। छोटी फ़ाइल चुनें या हमारा compress-pdf टूल इस्तेमाल करके साइज़ कम करें।",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "फ़ाइल का प्रकार समर्थित नहीं है।",
        types: {
            PDF: "कृपया वैध PDF फ़ाइल चुनें।",
            DOC: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            DOCX: "कृपया वैध वर्ड डॉक्यूमेंट चुनें।",
            XLS: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            XLSX: "कृपया वैध एक्सेल स्प्रेडशीट चुनें।",
            PPT: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
            PPTX: "कृपया वैध पावरपॉइंट प्रेजेंटेशन चुनें।",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "फ़ाइल खराब है और प्रोसेस नहीं की जा सकती। कृपया वैध फ़ाइल चुनें।",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "आपने अधिकतम अनुमत फ़ाइलों की संख्या पार कर ली है। कुछ फ़ाइलें हटाकर दोबारा कोशिश करें।",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "कोई फ़ाइल चुनी नहीं गई। कम से कम एक फ़ाइल चुनें।",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "एक अज्ञात त्रुटि हुई। बाद में दोबारा कोशिश करें या सपोर्ट से संपर्क करें।",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "नेटवर्क त्रुटि हुई। अपना इंटरनेट कनेक्शन जांचें और दोबारा कोशिश करें।",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "मर्ज करने के लिए कम से कम दो फ़ाइलें अपलोड करें।",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF में पासवर्ड की आवश्यकता है।",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "आपने गलत पासवर्ड डाला है।",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "आपने अपनी दैनिक उपयोग सीमा पूरी कर ली है। बिना रुकावट के जारी रखने के लिए प्लान अपग्रेड करें।",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF अधिकतम 50 पृष्ठों की सीमा से अधिक है।",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    // Hindi (hi)
    alerts: {
        // Frontend validation
        maxFiles: "अधिकतम 15 फाइलें। अधिक के लिए सब्सक्राइब करें!",
        singleFileSize: "फाइल का आकार 100 MB से कम होना चाहिए। बड़ी फाइलें अपलोड करने के लिए अपग्रेड करें!",
        perFilePages: "प्रति फाइल 500 पेज। अभी और अनलॉक करें!",
        fileSize: "प्रति फाइल 50MB। अधिक के लिए अपग्रेड करें!",
        serverError: "सर्वर त्रुटि। कृपया बाद में पुनः प्रयास करें।",
        tooManyFiles: "बहुत सारी फाइलें अपलोड की गईं",
        // Backend file validation
        fileNotUploaded: "कोई फाइल अपलोड नहीं की गई। कृपया एक फाइल चुनें।",
        fileEmpty: "अपलोड की गई फाइल खाली है। कृपया एक वैध फाइल चुनें।",
        fileTooLarge: "फाइल 200MB सीमा से अधिक है। बड़ी फाइलों के लिए अपग्रेड करें!",
        invalidFileType: "अमान्य फाइल प्रकार। कृपया समर्थित फॉर्मेट अपलोड करें।",
        fileCorrupt: "फाइल दूषित लगती है। कृपया कोई अन्य फाइल आजमाएं।",
        insufficientUnits: "परिवर्तन इकाइयां अपर्याप्त हैं। अपग्रेड करें या रिचार्ज करें!",
        // Auth errors
        authRequired: "प्रीमियम सुविधाओं का उपयोग करने के लिए कृपया लॉग इन करें।",
        sessionExpired: "आपका सत्र समाप्त हो गया है। कृपया फिर से लॉग इन करें।",
        invalidToken: "प्रमाणीकरण विफल। कृपया फिर से लॉग इन करें।",
        userNotFound: "खाता नहीं मिला। कृपया फिर से लॉग इन करें।",
        authError: "प्रमाणीकरण त्रुटि। कृपया पुनः प्रयास करें।",
        notPasswordProtected: "एक या अधिक फाइलें पासवर्ड से सुरक्षित नहीं हैं",

        // PDF-specific errors
        invalidPdf: "अमान्य या दूषित PDF फाइल।",
        pdfNotEncrypted: "यह PDF पासवर्ड से सुरक्षित नहीं है और अनलॉक करने की आवश्यकता नहीं है।",

        // Settings errors
        invalidSettings: "अमान्य सेटिंग्स प्रदान की गईं। कृपया रिफ्रेश करें और पुनः प्रयास करें।",
        conversionFailed: "परिवर्तन विफल। कृपया पुनः प्रयास करें।",
        noNumberSettings: "कृपया क्रमांकन सेटिंग्स कॉन्फ़िगर करें",
        invalidNumberSettings: "अमान्य क्रमांकन सेटिंग्स प्रारूप",
        noCustomText: "कृपया कस्टम टेक्स्ट दर्ज करें",
        numberingFailed: "पृष्ठ संख्या जोड़ने में विफल। कृपया पुनः प्रयास करें।",
        invalidPageRange: "अमान्य पृष्ठ सीमा",
        pageOutOfRange: "पृष्ठ संख्या PDF पृष्ठ गणना से अधिक है",
        invalidPosition: "अमान्य संख्या स्थिति",
        invalidMargin: "अमान्य हाशिया मूल्य",
        invalidFontSize: "अमान्य फ़ॉन्ट आकार",
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "विज्ञापन अवरोधक पता चला",
    description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
    reloadPage: "पेज रीलोड करें",
    upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};