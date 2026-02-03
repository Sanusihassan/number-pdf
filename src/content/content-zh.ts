import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";
import type { adBlockerContentType } from "./content";

export const tool: _tool = {
    Number_PDF: {
        title: "为 PDF 编号",
        seoTitle: "在线添加页码 - 简易 PDF 编号",
        description: "以不同的样式和选项为您的 PDF 文档添加页码。",
        keywords: "为 PDF 添加页码, PDF 页码工具, 在线 PDF 编号, 为 PDF 页面编号, 自定义 PDF 页码, 为 PDF 添加顺序号",
        color: "#e55039",
        type: ".pdf",
        to: "/number-pdf",
        features: [
            {
                title: "可定制的编号样式",
                description: "从各种编号样式和格式中选择以满足您的文档需求。"
            },
            {
                title: "多语言支持",
                description: "选择文档语言以使用适当的数字脚本。"
            },
            {
                title: "易于使用",
                description: "我们的工具用户友好，只需几次点击即可为您的 PDF 添加页码。"
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        number_pdf: "编号 PDF 选项"
    },
    loader_text: "请稍等...",
    add_more_button: "添加更多文件",
    action_buttons: {
        number_pdf: "给PDF编号"
    },
    pages: "页",
    page: "页",
    number_pdf_options: {
        page_mode: "页面模式",
        single_page: "单页",
        facing_pages: "对页",
        single_page_options: {
            position: "位置",
            margin: "边距",
            pages: "页数",
            page_to_number: "您想对哪些页面进行编号？",
            start_from: "第一个数字",
            from: "从",
            to: "到",
            text: "文本",
            page_text_options: [
                {
                    value: "仅插入页码（推荐）",
                    label: "仅插入页码（推荐）"
                },
                {
                    value: "第 n 页",
                    label: "第 n 页"
                },
                {
                    value: "第 n 页，共 x 页",
                    label: "第 n 页，共 x 页"
                },
                {
                    value: "自定义",
                    label: "自定义"
                }
            ],
            custom_text: "自定义文本",
            text_sample: "文本样本：第 {n} 页，共 {x} 页",
            margin_options: [
                {
                    value: "小",
                    label: "小"
                },
                {
                    value: "推荐",
                    label: "推荐"
                },
                {
                    value: "大",
                    label: "大"
                }
            ],
            text_format: "文本格式",
            font: "字体",
            font_size: "字号",
            bold: "粗体",
            italic: "斜体",
            underline: "下划线",
            color: "颜色",
            document_language: "文件语言",
            select_language_placeholder: "選擇語言",
            select_margin_placeholder: "選擇邊距",
            select_font_placeholder: "選擇字體"
        },
        first_page_is_cover: "第一页是封面"
    },
    selected_files_placeholer: "选择文件",
    filenameOptions: {
        label: "输出文件名（可选）",
        placeholder: "输入文件名",
        helperText: "这将是下载时压缩 PDF 的名称。",
        cta: "查看方案",
        upgradeNotice: {
            msg: "2.0 到 10.0 的级别可在高级版中使用。",
            cta: "立即升级",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "number-pdf": [
            "PDF文件已编号！",
            "PDF文件已编号！"
        ]
    },
    btnText: {
        "number-pdf": [
            "下载已编号的PDF文件",
            "下载已编号的PDF文件"
        ]
    },
    backto: {
        "number-pdf": "返回到编号PDF"
    }
};




export const tools: _tools = {
    select: "选择",
    or_drop: "或将文件拖放到此处",
    files: "文件",
    drop_files: "将文件拖到这里",
};


export const errors: _ = {
    EMPTY_FILE: {
        message: "文件为空。请选择有效文件。",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "文件太大。请选更小的文件，或使用我们的 compress-pdf 工具减小文件大小。",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "不支持的文件类型。",
        types: {
            PDF: "请选择有效的 PDF 文件。",
            DOC: "请选择有效的 Word 文档。",
            DOCX: "请选择有效的 Word 文档。",
            XLS: "请选择有效的 Excel 表格。",
            XLSX: "请选择有效的 Excel 表格。",
            PPT: "请选择有效的 PowerPoint 演示文稿。",
            PPTX: "请选择有效的 PowerPoint 演示文稿。",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "文件已损坏，无法处理。请选有效文件。",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "已超过允许的最大文件数量。请删除部分文件后再试。",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "未选择任何文件。请至少选择一个文件。",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "发生未知错误。请稍后再试或联系客服。",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "发生网络错误。请检查网络连接后再试。",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "请至少上传两个文件进行合并。",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "PDF 需要密码。",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "您输入的密码不正确。",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "您已达到每日使用上限。请升级套餐，继续无中断使用此功能。",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "PDF 超过最大页数限制 50 页。",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "最多 15 个文件。订阅以获取更多！",
        singleFileSize: "文件大小必须小于 100 MB。升级以上传更大的文件！",
        perFilePages: "每个文件 500 页。现在解锁更多！",
        fileSize: "每个文件 50MB。升级以获取更多！",
        serverError: "服务器错误。请稍后重试。",
        tooManyFiles: "上传的文件太多",
        // Backend file validation
        fileNotUploaded: "未上传文件。请选择一个文件。",
        fileEmpty: "上传的文件为空。请选择一个有效文件。",
        fileTooLarge: "文件超过 200MB 限制。升级以处理更大的文件！",
        invalidFileType: "无效的文件类型。请上传支持的格式。",
        fileCorrupt: "文件似乎已损坏。请尝试另一个文件。",
        insufficientUnits: "转换单位不足。升级或充值！",
        // Auth errors
        authRequired: "请登录以使用高级功能。",
        sessionExpired: "您的会话已过期。请重新登录。",
        invalidToken: "认证失败。请重新登录。",
        userNotFound: "未找到账户。请重新登录。",
        authError: "认证错误。请重试。",
        notPasswordProtected: "一个或多个文件未受密码保护",

        // PDF-specific errors
        invalidPdf: "无效或损坏的 PDF 文件。",
        pdfNotEncrypted: "此 PDF 未受密码保护，不需要解锁。",

        // Lock-PDF errors
        noLockPassword: "请提供密码以锁定 PDF。",
        lockingFailed: "锁定 PDF 失败。请重试。",

        // Unlock-PDF errors
        noPasswordsProvided: "请为锁定的 PDF 提供密码。",
        unlockingFailed: "解锁 PDF 失败。请检查您的密码并重试。",
        incorrectPassword: "密码不正确。请重试。",
        passwordRequired: "此 PDF 受密码保护。请输入密码。",

        // Settings errors
        invalidSettings: "提供的设置无效。请刷新并重试。",
        conversionFailed: "转换失败。请重试。",
        noRotationsProvided: "请为至少一个文件指定旋转",
        rotationFailed: "旋转 PDF 失败。请重试。",
        invalidRotationAngle: "无效的旋转角度。使用 90、180 或 270 度。"
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "检测到广告拦截器",
    description: "我们注意到您正在使用广告拦截器。请考虑关闭它，或升级到高级版享受无广告体验！",
    reloadPage: "重新加载页面",
    upgradeToPremium: "升级到高级版"
};