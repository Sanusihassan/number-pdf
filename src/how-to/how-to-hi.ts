import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "PDF में पृष्ठ संख्या कैसे जोड़ें?",
    description: "अपने PDF दस्तावेज़ में पृष्ठ संख्या जोड़ने के लिए कदम।",
    step: [
        {
            "@type": "HowToStep",
            name: "चरण 1",
            text: "PDFEquips पर PDF संख्या उपकरण खोलें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 2",
            text: "अपनी PDF फ़ाइल को खींचें और छोड़ें या 'PDF चुनें' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 3",
            text: "संख्या शैली और प्रारूप चुनें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 4",
            text: "उपयुक्त अंक लिपि का उपयोग करने के लिए दस्तावेज़ भाषा चुनें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 5",
            text: "'पृष्ठ संख्या जोड़ें' बटन पर क्लिक करें।"
        },
        {
            "@type": "HowToStep",
            name: "चरण 6",
            text: "संख्यांकित PDF फ़ाइल को अपने डिवाइस पर डाउनलोड करें।"
        }
    ]
};
