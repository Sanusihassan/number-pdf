import type { FaqContent } from "./faq";

export const faq: FaqContent = {
  title: "Preguntas frecuentes",
  items: {
    "/number-pdf": [
      {
        question: "¿Cómo numerar las páginas de un PDF?",
        answer: "Arrastra tu PDF a la zona de arriba, elige la posición, el margen y el formato del número y pulsa «Numerar PDF». Descargarás el documento con los números de página añadidos.",
      },
      {
        question: "¿Puedo numerar solo algunas páginas?",
        answer: "Sí. Indica desde qué página y hasta cuál quieres numerar, y elige con qué número empezar, por ejemplo para no numerar la portada.",
      },
      {
        question: "¿Puedo usar un formato como «Página 1 de 10»?",
        answer: "Sí. Puedes insertar solo el número, «Página n», «Página n de x» o un texto personalizado, y elegir la fuente, el tamaño, el color y el estilo.",
      },
      {
        question: "¿Mis archivos están seguros?",
        answer: "Sí. Tus archivos se transfieren mediante una conexión cifrada (TLS) y se eliminan automáticamente de nuestros servidores después del procesamiento.",
      },
    ],
  },
};
