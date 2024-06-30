import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "如何给 PDF 添加页码?",
    description: "给您的 PDF 文档添加页码的步骤。",
    step: [
        {
            "@type": "HowToStep",
            name: "步骤 1",
            text: "在 PDFEquips 上打开 PDF 编号工具。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 2",
            text: "通过拖放或点击 '选择 PDF' 按钮上传您的 PDF 文件。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 3",
            text: "选择编号样式和格式。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 4",
            text: "选择文档语言以使用适当的数字脚本。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 5",
            text: "点击 '添加页码' 按钮以应用编号。"
        },
        {
            "@type": "HowToStep",
            name: "步骤 6",
            text: "将编号后的 PDF 文件下载到您的设备。"
        }
    ]
};
