import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "¿Cómo agregar números de página a PDF?",
    description: "Pasos para agregar números de página a tu documento PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Paso 1",
            text: "Abre la herramienta de numeración de PDF en PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Paso 2",
            text: "Sube tu archivo PDF arrastrándolo y soltándolo o haciendo clic en el botón 'Seleccionar PDF'."
        },
        {
            "@type": "HowToStep",
            name: "Paso 3",
            text: "Elige el estilo y formato de numeración."
        },
        {
            "@type": "HowToStep",
            name: "Paso 4",
            text: "Selecciona el idioma del documento para usar el guion numérico apropiado."
        },
        {
            "@type": "HowToStep",
            name: "Paso 5",
            text: "Haz clic en el botón 'Agregar números de página' para aplicar la numeración."
        },
        {
            "@type": "HowToStep",
            name: "Paso 6",
            text: "Descarga el archivo PDF numerado en tu dispositivo."
        }
    ]
};
