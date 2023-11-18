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

export const tool = {
  Number_PDF: {
    title: "给PDF编号",
    description: "使用不同的样式和选项为您的PDF文档添加页码",
    color: "#e55039",
    type: ".pdf",
    to: "/number-pdf",
  },
};

export const downloadFile: _downloadFile = {
  titles: {
    "number-pdf": ["PDF文件已编号！", "PDF文件已编号！"],
  },

  btnText: {
    "number-pdf": ["下载已编号的PDF文件", "下载已编号的PDF文件"],
  },

  backto: {
    "number-pdf": "返回到编号PDF",
  },
};

export const edit_page: _edit_page = {
  edit_page_titles: {
    number_pdf: "编号 PDF 选项",
  },
  loader_text: "请稍等...",
  add_more_button: "添加更多文件",
  action_buttons: {
    number_pdf: "给PDF编号",
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
        { value: "仅插入页码（推荐）", label: "仅插入页码（推荐）" },
        { value: "第 n 页", label: "第 n 页" },
        { value: "第 n 页，共 x 页", label: "第 n 页，共 x 页" },
        { value: "自定义", label: "自定义" },
      ],
      custom_text: "自定义文本",
      text_sample: "文本样本：第 {n} 页，共 {x} 页",
      margin_options: [
        { value: "小", label: "小" },
        { value: "推荐", label: "推荐" },
        { value: "大", label: "大" },
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
      select_font_placeholder: "選擇字體",
    },
    first_page_is_cover: "第一页是封面",
  },
  selected_files_placeholer: "选择文件",
};

export const tools: _tools = {
  select: "选择",
  or_drop: "或将文件拖放到此处",
  files: "文件",
  drop_files: "在此处拖放文件",
};

export const errors: _errors = {
  EMPTY_FILE: {
    message: "文件为空，请选择一个有效的文件。",
    code: "ERR_EMPTY_FILE",
  },
  FILE_TOO_LARGE: {
    message:
      "文件太大。请选择一个更小的文件，或使用我们的压缩PDF工具来减小文件大小。",
    code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
  },
  NOT_SUPPORTED_TYPE: {
    message: "文件不是受支持的类型。",
    types: {
      PDF: "请选择一个有效的PDF文件。",
    },
    code: "ERR_INVALID_FILE_TYPE",
  },
  FILE_CORRUPT: {
    message: "文件已损坏，无法处理。请选择一个有效的文件。",
    code: "ERR_FILE_CORRUPT",
  },
  MAX_FILES_EXCEEDED: {
    message: "您已超出允许的最大文件数。请删除一些文件并重试。",
    code: "ERR_MAX_FILES_EXCEEDED",
  },
  NO_FILES_SELECTED: {
    message: "未选择任何文件。请选择至少一个文件。",
    code: "ERR_NO_FILES_SELECTED",
  },
  UNKNOWN_ERROR: {
    message: "发生未知错误。请稍后重试或联系支持人员。",
    code: "ERR_UNKNOWN",
  },
  ERR_NETWORK: {
    message: "网络错误，请检查您的互联网连接并重试。",
    code: "ERR_NETWORK",
  },
};
