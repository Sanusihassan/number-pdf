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
    number_pdf_options: {
        page_mode: "वेब पृष्ठ मोड",
        single_page: "एकल पृष्ठ",
        facing_pages: "मुखामुखी पृष्ठ",
        single_page_options: {
            position: "स्थिति",
            margin: "मार्जिन",
            pages: "पृष्ठ",
            page_to_number: "किस पृष्ठ को नंबर करना चाहते हैं?",
            start_from: "पहला नंबर",
            from: "से",
            to: "तक",
            text: "पाठ",
            page_text_options: [
                {
                    value: "केवल पृष्ठ संख्या डालें (सिफारिश की जाती है)",
                    label: "केवल पृष्ठ संख्या डालें (सिफारिश की जाती है)"
                },
                {
                    value: "पृष्ठ n",
                    label: "पृष्ठ n"
                },
                {
                    value: "पृष्ठ n का x",
                    label: "पृष्ठ n का x"
                },
                {
                    value: "कस्टम",
                    label: "कस्टम"
                }
            ],
            custom_text: "कस्टम पाठ",
            text_sample: "पाठ नमूना: {x} कुल पृष्ठों में से पृष्ठ {n}",
            margin_options: [
                {
                    value: "सामान्य",
                    label: "सामान्य"
                },
                {
                    value: "सिफारिश की गई",
                    label: "सिफारिश की गई"
                },
                {
                    value: "बड़ा",
                    label: "बड़ा"
                }
            ],
            text_format: "पाठ स्वरूप",
            font: "फोंट",
            font_size: "फोंट आकार",
            bold: "मोटा",
            italic: "तिरछा",
            underline: "नीला",
            color: "रंग",
            document_language: "दस्तावेज़ भाषा",
            select_language_placeholder: "भाषा चुनें",
            select_margin_placeholder: "मार्जिन का चयन करें",
            select_font_placeholder: "फ़ॉन्ट का चयन करें"
        },
        first_page_is_cover: "पहला पृष्ठ कोर का पृष्ठ है"
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

        // Lock-PDF errors
        noLockPassword: "PDF को लॉक करने के लिए कृपया पासवर्ड प्रदान करें।",
        lockingFailed: "PDF लॉक करने में विफल। कृपया पुनः प्रयास करें।",

        // Unlock-PDF errors
        noPasswordsProvided: "लॉक किए गए PDFs के लिए कृपया पासवर्ड प्रदान करें।",
        unlockingFailed: "PDF अनलॉक करने में विफल। कृपया अपना पासवर्ड जांचें और पुनः प्रयास करें।",
        incorrectPassword: "गलत पासवर्ड। कृपया पुनः प्रयास करें।",
        passwordRequired: "यह PDF पासवर्ड से सुरक्षित है। कृपया पासवर्ड दर्ज करें।",

        // Settings errors
        invalidSettings: "अमान्य सेटिंग्स प्रदान की गईं। कृपया रिफ्रेश करें और पुनः प्रयास करें।",
        conversionFailed: "परिवर्तन विफल। कृपया पुनः प्रयास करें।",
        noRotationsProvided: "कृपया कम से कम एक फ़ाइल के लिए रोटेशन निर्दिष्ट करें",
        rotationFailed: "PDF को घुमाने में विफल। कृपया पुनः प्रयास करें。",
        invalidRotationAngle: "अमान्य रोटेशन कोण। 90, 180, या 270 डिग्री का उपयोग करें।"
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "विज्ञापन अवरोधक पता चला",
    description: "हमने देखा कि आप विज्ञापन अवरोधक इस्तेमाल कर रहे हैं। इसे बंद करें या प्रीमियम में अपग्रेड करें ताकि विज्ञापन-मुक्त अनुभव मिले!",
    reloadPage: "पेज रीलोड करें",
    upgradeToPremium: "प्रीमियम में अपग्रेड करें"
};