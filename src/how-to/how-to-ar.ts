import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "كيفية إضافة أرقام الصفحات إلى PDF؟",
    description: "خطوات لإضافة أرقام الصفحات إلى مستند PDF الخاص بك.",
    step: [
        {
            "@type": "HowToStep",
            name: "الخطوة 1",
            text: "افتح أداة ترقيم PDF على PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 2",
            text: "قم بتحميل ملف PDF الخاص بك عن طريق السحب والإفلات أو النقر على زر 'اختر ملف PDF'."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 3",
            text: "اختر نمط الترقيم والتنسيق."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 4",
            text: "حدد لغة المستند لاستخدام الرموز العددية المناسبة."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 5",
            text: "انقر على زر 'إضافة أرقام الصفحات' لتطبيق الترقيم."
        },
        {
            "@type": "HowToStep",
            name: "الخطوة 6",
            text: "قم بتنزيل ملف PDF المرقم إلى جهازك."
        }
    ]
};
