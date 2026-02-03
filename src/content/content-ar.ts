import type { tool as _tool, tools as _tools, edit_page as _edit_page, downloadFile as _downloadFile, errors as _errors } from "../content";
import type { adBlockerContentType } from "./content";


export const tool: _tool = {
    Number_PDF: {
        title: "ترقيم PDF",
        seoTitle: "إضافة أرقام الصفحات عبر الإنترنت - ترقيم PDF بسهولة",
        description: "أضف أرقام الصفحات إلى مستند PDF الخاص بك مع أنماط وخيارات مختلفة.",
        keywords: "إضافة أرقام الصفحات إلى PDF, أداة ترقيم PDF, ترقيم PDF عبر الإنترنت, ترقيم صفحات PDF, تخصيص أرقام صفحات PDF, إضافة أرقام تسلسلية إلى PDF",
        color: "#e55039",
        type: ".pdf",
        to: "/number-pdf",
        features: [
            {
                title: "أنماط الترقيم القابلة للتخصيص",
                description: "اختر من بين أنماط وأشكال الترقيم المختلفة لتناسب احتياجات مستندك."
            },
            {
                title: "دعم متعدد اللغات",
                description: "حدد لغة المستند لاستخدام الرموز العددية المناسبة."
            },
            {
                title: "سهل الاستخدام",
                description: "أداتنا سهلة الاستخدام، مما يتيح لك إضافة أرقام الصفحات إلى ملف PDF الخاص بك ببضع نقرات فقط."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        number_pdf: "خيارات ترقيم ملف ال PDF"
    },
    loader_text: "يرجى الانتظار...",
    add_more_button: "إضافة المزيد من الملفات",
    action_buttons: {
        number_pdf: "رقّم PDF"
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
                    label: "أدخل رقم الصفحة فقط (مستحسن)"
                },
                {
                    value: "صفحة n",
                    label: "صفحة n"
                },
                {
                    value: "صفحة n من x",
                    label: "صفحة n من x"
                },
                {
                    value: "تخصيص",
                    label: "تخصيص"
                }
            ],
            custom_text: "نص مخصص",
            text_sample: "نموذج نص: الصفحة {ن} من إجمالي {س} من الصفحات",
            margin_options: [
                {
                    value: "صغير",
                    label: "صغير"
                },
                {
                    value: "مستحسن",
                    label: "مستحسن"
                },
                {
                    value: "كبير",
                    label: "كبير"
                }
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
            select_font_placeholder: "اختر الخط"
        },
        first_page_is_cover: "الصفحة الأولى هي صفحة الغلاف"
    },
    selected_files_placeholer: "اختر الملفات",
    filenameOptions: {
        label: "اسم الملف الناتج (اختياري)",
        placeholder: "أدخل اسم الملف",
        helperText: "سيكون هذا هو اسم ملف PDF المضغوط عند تنزيله.",
        cta: "عرض الخطط",
        upgradeNotice: {
            msg: "المستويات من 2.0 إلى 10.0 متاحة مع الخطة المميزة.",
            cta: "الترقية الآن",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "number-pdf": [
            "تم ترقيم ملفات PDF!",
            "تم ترقيم ملف PDF!"
        ]
    },
    btnText: {
        "number-pdf": [
            "تنزيل ملفات PDF المرقمة",
            "تنزيل ملف PDF المرقم"
        ]
    },
    backto: {
        "number-pdf": "العودة إلى ترقيم PDF"
    }
};

export const tools: _tools = {
    select: "اختر",
    or_drop: "أو أسقط الملفات هنا",
    files: "ملفات",
    drop_files: "اسحب الملفات هنا",
};

export const errors: _errors = {
    EMPTY_FILE: {
        message: "الملف فارغ. يرجى اختيار ملف صالح.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "حجم الملف كبير جدًا. يرجى اختيار ملف أصغر، أو استخدم أداة ضغط PDF لتقليل حجم الملف.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "نوع الملف غير مدعوم.",
        types: {
            PDF: "يرجى اختيار ملف PDF صالح.",
            DOC: "يرجى اختيار ملف مستند وورد صالح.",
            DOCX: "يرجى اختيار ملف مستند وورد صالح.",
            XLS: "يرجى اختيار ملف جدول إكسل صالح.",
            XLSX: "يرجى اختيار ملف جدول إكسل صالح.",
            PPT: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
            PPTX: "يرجى اختيار ملف عرض تقديمي باور بوينت صالح.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "الملف تالف ولا يمكن معالجته. يرجى اختيار ملف صالح.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "لقد تجاوزت الحد الأقصى لعدد الملفات المسموح به. يرجى حذف بعض الملفات وحاول مرة أخرى.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "لم يتم اختيار أي ملفات. يرجى اختيار ملف واحد على الأقل.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "حدث خطأ غير معروف. يرجى المحاولة مرة أخرى لاحقًا أو التواصل مع الدعم.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "حدث خطأ في الشبكة. يرجى التحقق من اتصال الإنترنت وحاول مرة أخرى.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "يرجى رفع ملفين على الأقل للدمج.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "ملف PDF يتطلب كلمة مرور.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "كلمة المرور التي أدخلتها غير صحيحة.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "لقد وصلت إلى الحد اليومي للاستخدام. يرجى ترقية خطتك لمواصلة استخدام الميزة بدون انقطاع.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "يتجاوز ملف PDF الحد الأقصى لعدد الصفحات وهو 50 صفحة.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },

    alerts: {
        // Frontend validation
        maxFiles: "حد أقصى 15 ملفًا. اشترك للحصول على المزيد!",
        singleFileSize: "يجب أن يكون حجم الملف أقل من 100 ميغابايت. قم بالترقية لتحميل ملفات أكبر!",
        perFilePages: "500 صفحة لكل ملف. افتح المزيد الآن!",
        fileSize: "50 ميغابايت لكل ملف. قم بالترقية للحصول على المزيد!",
        serverError: "خطأ في الخادم. يرجى المحاولة لاحقًا.",
        // Backend file validation
        fileNotUploaded: "لم يتم تحميل أي ملف. يرجى اختيار ملف.",
        fileEmpty: "الملف المرفوع فارغ. يرجى اختيار ملف صالح.",
        fileTooLarge: "الملف يتجاوز حد 200 ميغابايت. قم بالترقية لملفات أكبر!",
        invalidFileType: "نوع الملف غير صالح. يرجى تحميل تنسيق مدعوم.",
        fileCorrupt: "يبدو أن الملف تالف. يرجى تجربة ملف آخر.",
        insufficientUnits: "وحدات التحويل غير كافية. قم بالترقية أو إعادة الشحن!",
        // Auth errors
        authRequired: "يرجى تسجيل الدخول لاستخدام الميزات المميزة.",
        sessionExpired: "انتهت جلستك. يرجى تسجيل الدخول مرة أخرى.",
        invalidToken: "فشل المصادقة. يرجى تسجيل الدخول مرة أخرى.",
        userNotFound: "الحساب غير موجود. يرجى تسجيل الدخول مرة أخرى.",
        authError: "خطأ في المصادقة. يرجى المحاولة مرة أخرى.",
        notPasswordProtected: "واحد أو أكثر من الملفات غير محمي بكلمة مرور",

        // PDF-specific errors
        invalidPdf: "ملف PDF غير صالح أو تالف.",
        pdfNotEncrypted: "هذا الملف PDF غير محمي بكلمة مرور ولا يحتاج إلى فك القفل.",

        // Lock-PDF errors
        noLockPassword: "يرجى تقديم كلمة مرور لقفل PDF.",
        lockingFailed: "فشل قفل PDF. يرجى المحاولة مرة أخرى.",

        // Unlock-PDF errors
        noPasswordsProvided: "يرجى تقديم كلمات مرور لملفات PDF المقفلة.",
        unlockingFailed: "فشل فك قفل PDF. يرجى التحقق من كلمة المرور والمحاولة مرة أخرى.",
        incorrectPassword: "كلمة مرور غير صحيحة. يرجى المحاولة مرة أخرى.",
        passwordRequired: "هذا الملف PDF محمي بكلمة مرور. يرجى إدخال كلمة المرور.",

        // Settings errors
        invalidSettings: "إعدادات غير صالحة مقدمة. يرجى التحديث والمحاولة مرة أخرى.",
        conversionFailed: "فشل التحويل. يرجى المحاولة مرة أخرى.",
        tooManyFiles: "تم تحميل ملفات كثيرة جدًا",
        noRotationsProvided: "يرجى تحديد الدوران لملف واحد على الأقل",
        rotationFailed: "فشل تدوير PDF. يرجى المحاولة مرة أخرى.",
        invalidRotationAngle: "زاوية دوران غير صالحة. استخدم 90 أو 180 أو 270 درجة."
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "تم اكتشاف مانع الإعلانات",
    description: "لاحظنا أنك تستخدم مانع الإعلانات. يرجى التفكير في تعطيله أو الترقية إلى النسخة المميزة للحصول على تجربة خالية من الإعلانات!",
    reloadPage: "إعادة تحميل الصفحة",
    upgradeToPremium: "الترقية إلى النسخة المميزة"
}