import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Frequently Asked Questions",
  items: {
    "/number-pdf": [
      {
        question: "How do I add page numbers to a PDF?",
        answer: "Drag your PDF into the area above, choose the position, margin and text format, then click «Number PDF». You download the document with page numbers added.",
      },
      {
        question: "Can I number only some pages?",
        answer: "Yes. Set the first and last page to number and the number to start from, for example to skip the cover page.",
      },
      {
        question: "Can I use a format like «Page 1 of 10»?",
        answer: "Yes. Insert only the page number, «Page n», «Page n of x» or your own custom text, and choose the font, size, color and style.",
      },
      {
        question: "Are my files safe?",
        answer: "Yes. Your files are transferred over an encrypted (TLS) connection and automatically deleted from our servers after processing.",
      },
    ],
  },
};
