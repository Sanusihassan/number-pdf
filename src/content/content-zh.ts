import type {
  nav_content as _nav_content,
  tool as _tool,
  web2pdftool as _web2pdftool,
  tools as _tools,
  edit_page as _edit_page,
  footer as _footer,
  errors as _errors,
  downloadFile as _downloadFile,
  landing_page as _landing_page,
} from "../../content";
export const nav_content: _nav_content = {
  brand: "Equips",
  merge_pdf: "合并PDF",
  split_pdf: "拆分PDF",
  compress_pdf: "压缩PDF",
  convert_pdf: "转换PDF",
  convert_to_pdf: "转换为PDF",
  jpg_to_pdf: "JPG转PDF",
  word_to_pdf: "Word转PDF",
  markdown_to_pdf: "降价到 PDF",
  powerpoint_to_pdf: "PowerPoint转PDF",
  excel_to_pdf: "Excel转PDF",
  html_to_pdf: "HTML转PDF",
  web_to_pdf: "网页转 PDF",
  convert_from_pdf: "从PDF转换",
  read_edit_pdf: "阅读和编辑 PDF",
  pdf_to_jpg: "PDF转JPG",
  pdf_to_word: "PDF转Word",
  pdf_to_powerpoint: "PDF转PowerPoint",
  pdf_to_excel: "PDF转Excel",
  pdf_to_pdf_a: "PDF转PDF/A",
  pdf_to_text: "PDF 转文本",
  pdf_to_html: "PDF 到 HTML",
  pdf_to_markdown: "PDF 到 Markdown",
};

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
    "merge-pdf": ["PDF文件已合并！", "PDF文件已合并！"],
  },
  btnText: {
    "merge-pdf": ["下载合并后的PDF文件", "下载合并后的PDF文件"],
  },
  backto: {
    "merge-pdf": "返回合并PDF",
  },
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
      start_from: "从哪开始",
      from: "从",
      to: "到",
      text: "文本",
      page_text_options: [
        { value: '仅插入页码（推荐）', label: '仅插入页码（推荐）' },
        { value: '第 n 页', label: '第 n 页' },
        { value: '第 n 页，共 x 页', label: '第 n 页，共 x 页' },
        { value: '自定义', label: '自定义' },
      ],
      custom_text: "自定义文本",
      text_sample: "文本样本：第 {n} 页，共 {x} 页",
      margin_options: [
        { value: '小', label: '小' },
        { value: '推荐', label: '推荐' },
        { value: '大', label: '大' },
      ],
      text_format: "文本格式",
      font: "字体",
      font_size: "字号",
      bold: "粗体",
      italic: "斜体",
      underline: "下划线",
      color: "颜色"
    },
    first_page_is_cover: "第一页是封面"
  },
  selected_files_placeholer: "选择文件"

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
