import type { adBlockerContentType } from "./content";
import type { edit_page as _edit_page, tool as _tool, tools as _tools, downloadFile as _downloadFile, errors as _ } from "../content";

export const tool: _tool = {
    Number_PDF: {
        title: "Numéroter PDF",
        seoTitle: "Ajouter des Numéros de Page en Ligne - Numérotation PDF Facile",
        description: "Ajoutez des numéros de page à votre document PDF avec différents styles et options.",
        keywords: "ajouter des numéros de page à PDF, outil de numérotation PDF, numérotation PDF en ligne, numéroter les pages PDF, personnaliser les numéros de page PDF, ajouter des numéros séquentiels à PDF",
        color: "#e55039",
        type: ".pdf",
        to: "/number-pdf",
        features: [
            {
                title: "Styles de numérotation personnalisables",
                description: "Choisissez parmi différents styles et formats de numérotation pour répondre aux besoins de votre document."
            },
            {
                title: "Support multilingue",
                description: "Sélectionnez la langue du document pour utiliser les scripts numériques appropriés."
            },
            {
                title: "Facile à utiliser",
                description: "Notre outil est convivial, vous permettant d'ajouter des numéros de page à votre PDF en quelques clics seulement."
            }
        ]
    }
};

export const edit_page: _edit_page = {
    edit_page_titles: {
        number_pdf: "Nombre d'options PDF"
    },
    loader_text: "Veuillez patienter...",
    add_more_button: "Ajouter plus de fichiers",
    action_buttons: {
        number_pdf: "Numéroter PDF"
    },
    pages: "pages",
    page: "page",
    number_pdf_options: {
        page_mode: "mode de page",
        single_page: "Page unique",
        facing_pages: "Pages en vis-à-vis",
        single_page_options: {
            position: "position",
            margin: "marge",
            pages: "pages",
            page_to_number: "quelles pages souhaitez-vous numéroter ?",
            start_from: "Premier numéro",
            from: "De",
            to: "À",
            text: "texte",
            page_text_options: [
                {
                    value: "insérer uniquement le numéro de page (recommandé)",
                    label: "insérer uniquement le numéro de page (recommandé)"
                },
                {
                    value: "page n",
                    label: "page n"
                },
                {
                    value: "page n de x",
                    label: "page n de x"
                },
                {
                    value: "Personnalisé",
                    label: "Personnalisé"
                }
            ],
            custom_text: "Texte personnalisé",
            text_sample: "échantillon de texte : page {n} sur {x} pages au total",
            margin_options: [
                {
                    value: "Petit",
                    label: "Petit"
                },
                {
                    value: "Recommandé",
                    label: "Recommandé"
                },
                {
                    value: "Grand",
                    label: "Grand"
                }
            ],
            text_format: "format de texte",
            font: "police de caractères",
            font_size: "taille de police",
            bold: "gras",
            italic: "italique",
            underline: "souligné",
            color: "couleur",
            document_language: "Langue du Document",
            select_language_placeholder: "Sélectionner la Langue",
            select_margin_placeholder: "Sélectionner la Marge",
            select_font_placeholder: "Sélectionner la Police"
        },
        first_page_is_cover: "La première page est la page de couverture"
    },
    selected_files_placeholer: "Sélectionner des fichiers",
    filenameOptions: {
        label: "Nom du fichier de sortie (facultatif)",
        placeholder: "Entrez le nom du fichier",
        helperText: "Ce sera le nom du PDF compressé lors du téléchargement.",
        cta: "Voir les forfaits",
        upgradeNotice: {
            msg: "Les niveaux de 2.0 à 10.0 sont disponibles avec la version premium.",
            cta: "Mettre à niveau maintenant",
        },
    },
};

export const downloadFile: _downloadFile = {
    titles: {
        "number-pdf": [
            "Les fichiers PDF ont été numérotés!",
            "Le fichier PDF a été numéroté!"
        ]
    },
    btnText: {
        "number-pdf": [
            "Télécharger les fichiers PDF numérotés",
            "Télécharger le fichier PDF numéroté"
        ]
    },
    backto: {
        "number-pdf": "Retourner à la numérotation PDF"
    }
};

// French (fr) - tools
export const tools: _tools = {
    select: "Sélectionner",
    or_drop: "ou déposez les fichiers ici",
    files: "fichiers",
    drop_files: "Glissez les fichiers ici",
};

export const errors: _ = {
    EMPTY_FILE: {
        message: "Le fichier est vide. Veuillez choisir un fichier valide.",
        code: "ERR_EMPTY_FILE",
    },
    FILE_TOO_LARGE: {
        message:
            "Le fichier est trop volumineux. Choisissez un fichier plus petit ou utilisez notre outil compress-pdf pour réduire la taille.",
        code: "ERR_FILE_SIZE_LIMIT_EXCEEDED",
    },
    NOT_SUPPORTED_TYPE: {
        message: "Le type de fichier n'est pas pris en charge.",
        types: {
            PDF: "Veuillez choisir un fichier PDF valide.",
            DOC: "Veuillez choisir un document Word valide.",
            DOCX: "Veuillez choisir un document Word valide.",
            XLS: "Veuillez choisir une feuille de calcul Excel valide.",
            XLSX: "Veuillez choisir une feuille de calcul Excel valide.",
            PPT: "Veuillez choisir une présentation PowerPoint valide.",
            PPTX: "Veuillez choisir une présentation PowerPoint valide.",
        },
        code: "ERR_INVALID_FILE_TYPE",
    },
    FILE_CORRUPT: {
        message:
            "Le fichier est corrompu et ne peut pas être traité. Veuillez choisir un fichier valide.",
        code: "ERR_FILE_CORRUPT",
    },
    MAX_FILES_EXCEEDED: {
        message:
            "Vous avez dépassé le nombre maximum de fichiers autorisés. Supprimez certains fichiers et réessayez.",
        code: "ERR_MAX_FILES_EXCEEDED",
    },
    NO_FILES_SELECTED: {
        message: "Aucun fichier sélectionné. Veuillez en sélectionner au moins un.",
        code: "ERR_NO_FILES_SELECTED",
    },
    UNKNOWN_ERROR: {
        message:
            "Une erreur inconnue s'est produite. Réessayez plus tard ou contactez le support.",
        code: "ERR_UNKNOWN",
    },
    ERR_NETWORK: {
        message:
            "Une erreur réseau s'est produite. Vérifiez votre connexion internet et réessayez.",
        code: "ERR_NETWORK",
    },
    ERR_UPLOAD_COUNT: {
        message: "Veuillez télécharger au moins deux fichiers pour les fusionner.",
        code: "ERR_UPLOAD_COUNT",
    },
    PASSWORD_REQUIRED: {
        message: "Le PDF nécessite un mot de passe.",
        code: "PASSWORD_REQUIRED",
    },
    INCORRECT_PASSWORD: {
        message: "Le mot de passe saisi est incorrect.",
        code: "INCORRECT_PASSWORD",
    },
    MAX_DAILY_USAGE: {
        message:
            "Vous avez atteint votre limite d'utilisation quotidienne. Mettez à jour votre plan pour continuer sans interruption.",
        code: "MAX_DAILY_USAGE",
    },
    MAX_PAGES_EXCEEDED: {
        message: "Le PDF dépasse la limite maximale de 50 pages.",
        code: "ERR_MAX_PAGES_EXCEEDED",
    },
    alerts: {
        // Frontend validation
        maxFiles: "Maximum 15 fichiers. Abonnez-vous pour plus !",
        singleFileSize: "La taille du fichier doit être inférieure à 100 Mo. Passez à la version supérieure pour uploader des fichiers plus grands !",
        perFilePages: "500 pages par fichier. Débloquez plus maintenant !",
        fileSize: "50 Mo par fichier. Passez à la version supérieure pour plus !",
        serverError: "Erreur serveur. Veuillez réessayer plus tard.",
        tooManyFiles: "Trop de fichiers téléchargés",
        // Backend file validation
        fileNotUploaded: "Aucun fichier n'a été uploadé. Veuillez sélectionner un fichier.",
        fileEmpty: "Le fichier uploadé est vide. Veuillez sélectionner un fichier valide.",
        fileTooLarge: "Le fichier dépasse la limite de 200 Mo. Passez à la version supérieure pour des fichiers plus grands !",
        invalidFileType: "Type de fichier invalide. Veuillez uploader un format pris en charge.",
        fileCorrupt: "Le fichier semble corrompu. Veuillez essayer un autre fichier.",
        insufficientUnits: "Unités de conversion insuffisantes. Passez à la version supérieure ou rechargez !",
        // Auth errors
        authRequired: "Veuillez vous connecter pour utiliser les fonctionnalités premium.",
        sessionExpired: "Votre session a expiré. Veuillez vous connecter à nouveau.",
        invalidToken: "Échec de l'authentification. Veuillez vous connecter à nouveau.",
        userNotFound: "Compte non trouvé. Veuillez vous connecter à nouveau.",
        authError: "Erreur d'authentification. Veuillez réessayer.",
        notPasswordProtected: "Un ou plusieurs fichiers ne sont pas protégés par mot de passe",

        // PDF-specific errors
        invalidPdf: "Fichier PDF invalide ou corrompu.",
        pdfNotEncrypted: "Ce PDF n'est pas protégé par mot de passe et n'a pas besoin d'être déverrouillé.",

        // Lock-PDF errors
        noLockPassword: "Veuillez fournir un mot de passe pour verrouiller le PDF.",
        lockingFailed: "Échec du verrouillage du PDF. Veuillez réessayer.",

        // Unlock-PDF errors
        noPasswordsProvided: "Veuillez fournir des mots de passe pour les PDFs verrouillés.",
        unlockingFailed: "Échec du déverrouillage du PDF. Veuillez vérifier votre mot de passe et réessayer.",
        incorrectPassword: "Mot de passe incorrect. Veuillez réessayer.",
        passwordRequired: "Ce PDF est protégé par mot de passe. Veuillez entrer le mot de passe.",

        // Settings errors
        invalidSettings: "Paramètres invalides fournis. Veuillez actualiser et réessayer.",
        conversionFailed: "Échec de la conversion. Veuillez réessayer.",
        noRotationsProvided: "Veuillez spécifier la rotation pour au moins un fichier",
        rotationFailed: "Échec de la rotation du PDF. Veuillez réessayer.",
        invalidRotationAngle: "Angle de rotation invalide. Utilisez 90, 180 ou 270 degrés."
    },
};

export const adBlockerContent: adBlockerContentType = {
    title: "Bloqueur de publicités détecté",
    description: "Nous avons remarqué que vous utilisez un bloqueur de publicités. Désactivez-le ou passez à premium pour une expérience sans pubs !",
    reloadPage: "Recharger la page",
    upgradeToPremium: "Passer à Premium"
};