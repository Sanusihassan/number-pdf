export type howToType = {
    "@context": string;
    "@type": string;
    name: string;
    description: string;
    step: {
        "@type": string;
        name: string;
        text: string;
        substeps: string[];
    }[];
};

export const howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "How to Add Page Numbers to PDF?",
    description: "Steps to add page numbers to your PDF document.",
    step: [
        {
            "@type": "HowToStep",
            name: "Step 1",
            text: "Open the PDF Numbering tool on PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Step 2",
            text: "Upload your PDF file by dragging and dropping or clicking the 'Select PDF' button."
        },
        {
            "@type": "HowToStep",
            name: "Step 3",
            text: "Choose the numbering style and format."
        },
        {
            "@type": "HowToStep",
            name: "Step 4",
            text: "Select the document language to use the appropriate numeral script."
        },
        {
            "@type": "HowToStep",
            name: "Step 5",
            text: "Click the 'Add Page Numbers' button to apply the numbering."
        },
        {
            "@type": "HowToStep",
            name: "Step 6",
            text: "Download the numbered PDF file to your device."
        }
    ]
};

export type _howToSchema = typeof howToSchema;