import { _howToSchema } from "./how-to";

export const howToSchema: _howToSchema = {
    "@context": "http://schema.org",
    "@type": "HowTo",
    name: "Comment ajouter des numéros de page à un PDF?",
    description: "Étapes pour ajouter des numéros de page à votre document PDF.",
    step: [
        {
            "@type": "HowToStep",
            name: "Étape 1",
            text: "Ouvrez l'outil de numérotation PDF sur PDFEquips."
        },
        {
            "@type": "HowToStep",
            name: "Étape 2",
            text: "Téléchargez votre fichier PDF en le faisant glisser et en le déposant ou en cliquant sur le bouton 'Sélectionner un PDF'."
        },
        {
            "@type": "HowToStep",
            name: "Étape 3",
            text: "Choisissez le style et le format de numérotation."
        },
        {
            "@type": "HowToStep",
            name: "Étape 4",
            text: "Sélectionnez la langue du document pour utiliser le script numérique approprié."
        },
        {
            "@type": "HowToStep",
            name: "Étape 5",
            text: "Cliquez sur le bouton 'Ajouter des numéros de page' pour appliquer la numérotation."
        },
        {
            "@type": "HowToStep",
            name: "Étape 6",
            text: "Téléchargez le fichier PDF numéroté sur votre appareil."
        }
    ]
};
