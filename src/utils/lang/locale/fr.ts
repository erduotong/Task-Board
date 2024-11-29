const fr = {
  1: "Sauvegarder",
  2: "Fermer",
  3: "Archive",
  4: "Ajouter une sous-tâche",
  5: "Réanalyser le coffre-fort",
  6: "Général",
  7: "Aucune tâche disponible",
  8: "Modifier la tâche",
  9: "Supprimer la tâche",
  10: "Type de colonne",
  11: "Sans date",
  12: "Daté",
  13: "Tagué",
  14: "Sans étiquette",
  15: "Complété",
  16: "Autres tags",
  17: "Nom de la colonne",
  18: "Soumettre",
  19: "Annuler",
  20: "Entrez le nom de la colonne",
  21: "Modifier la tâche",
  22: "Ajouter une nouvelle tâche",
  23: "Intitulé de la tâche",
  24: "Sous-tâches",
  25: "Aperçu",
  26: "Éditeur",
  27: "Ouvrir le fichier",
  28: "Modifiez ou ajoutez une description de la tâche ou ajoutez d'autres sous-tâches.",
  29: "Contenu du corps",
  30: "Heure de début",
  31: "Fin des temps",
  32: "Date d'échéance",
  33: "Priorité",
  34: "Étiqueter",
  35: "Aucun tableau n'a été sélectionné pour être supprimé.",
  36: "Paramètres globaux du plugin",
  37: "paramètres du tableau",
  38: "Nom du forum",
  39: "Nom du tableau qui apparaîtra sous forme d'onglet dans l'en-tête de l'onglet à l'intérieur du plugin.",
  40: "Afficher les balises dans les colonnes de type « balisées »",
  41: "Fonctionne uniquement pour les colonnes de type « balisées ». Si vous ne souhaitez pas voir la balise sur la carte pour le type de colonne.",
  42: "Filtrer les balises",
  43: "Saisissez les tags, séparés par une virgule, que vous souhaitez voir apparaître dans ce tableau. Seules les tâches avec ces tags seront affichées.",
  44: "Polarité du filtre",
  45: "Activez ou désactivez les balises de filtre ci-dessus à l'intérieur des tableaux.",
  46: "Activer",
  47: "Désactiver",
  48: "Afficher les balises filtrées",
  49: "S'il faut afficher les balises filtrées mentionnées ci-dessus sur la « fiche de tâche ».",
  50: "Colonnes",
  51: "Entrer la balise",
  52: "Nombre maximal d'articles",
  53: "Depuis",
  54: "À",
  55: "Supprimer la colonne",
  56: "Ajouter une colonne",
  57: "Supprimer ce tableau",
  58: "Paramètres globaux",
  59: "Ajouter un tableau",
  60: "Confirmer la suppression",
  61: "Etes-vous sûr de vouloir supprimer cette tâche ?",
  62: "Oui",
  63: "Non",
  64: "L'analyse du coffre-fort est terminée.",
  65: "Analyser les tâches depuis le coffre-fort",
  66: "Exécutez cette fonctionnalité uniquement si vos tâches n'ont pas été correctement détectées/analysées ou si la carte agit de manière étrange.",
  67: "Vous n’avez pas besoin d’exécuter cette fonctionnalité souvent, le plugin détectera automatiquement les tâches nouvellement ajoutées/modifiées.",
  68: "REMARQUE : veuillez d'abord vérifier vos « filtres d'analyse » dans les paramètres du plug-in, si vous effectuez une analyse pour détecter des tâches non détectées.",
  69: "Courir",
  70: "Masquer les tâches collectées",
  71: "Afficher les tâches collectées",
  72: "Échec du chargement des paramètres.",
  73: "Veuillez lire la documentation pour utiliser efficacement ce plugin :",
  74: "Documents du tableau des tâches",
  75: "Filtres pour la numérisation",
  76: "Scannez uniquement ceci",
  77: "Ne pas scanner ceci",
  78: "Désactiver",
  79: "Interface utilisateur du tableau",
  80: "Afficher l'en-tête de la carte de tâche",
  81: "Activez cette option pour voir l'en-tête dans la fiche de tâche",
  82: "Afficher le pied de page de la fiche de tâche",
  83: "Activez cette option pour voir le pied de page dans la fiche de tâche",
  84: "Largeur de chaque colonne",
  85: "Saisissez la valeur de largeur pour chaque colonne. La valeur par défaut est 273 px",
  86: "Afficher la barre de défilement des colonnes",
  87: "Activer l'affichage d'une barre de défilement pour chaque colonne. Cela réduira la largeur des « fiches de tâches ».",
  88: "Couleurs des étiquettes",
  89: "Supprimer",
  90: "Ajouter une couleur d'étiquette",
  91: "Nom de la balise",
  92: "Automation",
  93: "Numérisation en temps réel",
  94: "Après avoir perdu le focus du fichier que vous avez modifié, la tâche sera immédiatement actualisée sur le tableau des tâches.\nLa désactivation de ce paramètre analysera les fichiers modifiés après un certain temps.",
  95: "Ajouter automatiquement la date d'échéance aux tâches",
  96: "Lorsque cette option est activée, si vous ajoutez une tâche à l'aide de la fenêtre contextuelle « Ajouter une nouvelle tâche », la date du jour sera ajoutée comme date d'échéance, si aucune date n'est saisie.",
  97: "Analyse automatique du coffre-fort au démarrage d'Obsidian",
  98: "N'utilisez cette fonctionnalité que si vous modifiez les fichiers du coffre-fort en dehors d'Obsidian. En général, toutes vos tâches nouvellement ajoutées/modifiées seront détectées automatiquement.",
  99: "Si votre coffre-fort contient de nombreux fichiers avec des données volumineuses, cela peut affecter le temps de démarrage d'Obsidian.",
  100: "Plugins compatibles",
  101: "compatibilité des plugins",
  102: "Si vous avez installé le plug-in « Agenda », activez cette option pour voir l'heure au début du titre de la tâche, plutôt que dans les métadonnées. Après avoir activé cette fonctionnalité, l'heure sera affichée conformément au plug-in d'agenda dans les fichiers Markdown, mais dans la fiche de tâche, l'heure sera affichée dans le pied de page comme d'habitude.",
  103: "Lorsque cette option est activée, si vous ajoutez une tâche dans un fichier de notes quotidiennes, dont le nom de fichier est au format « aaaa-MM-JJ », cette date sera alors considérée comme la date d'échéance de la tâche.",
  104: "Format de la date d'échéance",
  105: "Saisissez le format de la date que vous utilisez pour nommer vos fichiers de notes quotidiennes. Veuillez utiliser le format « aaaa-MM-JJ » ou « JJ-MM-aaaa ».",
  106: "Formats",
  107: "Votre tâche ressemblera à ce qui suit dans vos notes",
  108: "Formats de plug-ins pris en charge",
  109: "Différents plugins ont des formats différents pour donner les valeurs « échéance » et « achèvement » à la tâche. Veuillez sélectionner l'une des valeurs et voir le format ci-dessus, s'il est compatible avec votre configuration actuelle.",
  110: "Défaut",
  111: "Modèle de date et d'heure d'achèvement de la tâche",
  112: "Saisissez le modèle de date et d'heure que vous souhaitez voir pour la valeur d'achèvement. Par exemple : aaaa-MM-jj/HH:mm:ss",
  113: "Premier jour de la semaine",
  114: "Définir le premier jour de la semaine",
  115: "Dimanche",
  116: "Lundi",
  117: "Mardi",
  118: "Mercredi",
  119: "Jeudi",
  120: "Vendredi",
  121: "Samedi",
  122: "Achèvement de la tâche en heure locale",
  123: "Si la date et l'heure d'achèvement de la tâche doivent être affichées en heure locale",
  124: "Afficher le décalage UTC pour l'achèvement de la tâche",
  125: "S'il faut afficher le décalage UTC pour les heures d'achèvement des tâches",
  126: "Si vous aimez ce plugin, pensez à soutenir mon travail en faisant un petit don pour une amélioration continue de cette idée !",
  127: "Langue du plugin",
  128: "Sélectionnez la langue de l'interface utilisateur du plugin. Pour contribuer à l'amélioration de la langue actuelle ou pour ajouter votre propre langue maternelle, veuillez vous référer à la documentation.",
  129: "Êtes-vous sûr de vouloir supprimer ce tableau ?\nVous pouvez facilement le recréer si vous vous souvenez de la configuration.",
  130: "Tableau des tâches",
  131: "Ajouter une nouvelle tâche dans le fichier actuel",
  132: "Ouvrir le tableau des tâches",
  133: "Ouvrir le tableau des tâches dans une nouvelle fenêtre",
  134: "Mettre à jour les tâches à partir de ce fichier",
  135: "Ajouter un fichier dans le filtre « Ne pas analyser ceci »",
  136: "Ajouter un fichier dans le filtre « Analyser uniquement ceci »",
  137: "Ajouter un dossier dans le filtre « Ne pas analyser ceci »",
  138: "Ajouter un dossier dans le filtre « Analyser uniquement ceci »",
  139: "Filtres de carte",
  140: "Fichiers",
  141: "Dossiers",
  142: "Mots clés",
  143: "Plugin",
  144: "Indigène",
  145: "Bouton de configuration de la carte",
  146: "Bouton d'actualisation du tableau",
  147: "Aucun éditeur actif n'est ouvert. Veuillez placer votre curseur dans l'éditeur où vous souhaitez ajouter une tâche et exécutez cette commande.",
  148: "Appuyez sur Entrée après avoir tapé la balise",
  149: "Notes quotidiennes",
  151: "Intitulé de la tâche",
  152: "Cette section contient les paramètres qui vous aideront à appliquer des filtres et vous permettront de contrôler l'analyse des fichiers sélectionnés uniquement ou de supprimer certains fichiers de l'analyse. Les filtres sont fortement recommandés si vous avez beaucoup de fichiers qui ne contiendront jamais de tâches.",
  153: "Entrez les noms des fichiers, du dossier ou de l'étiquette de la tâche pour contrôler les fichiers que vous souhaitez que le plugin analyse pour en extraire les tâches. Il est fortement recommandé de lire la documentation si vous utilisez les trois filtres en même temps.",
  154: "Ce plugin est créé par",
  155: "Cette section contient les paramètres permettant de contrôler l'apparence du tableau. Ces paramètres seront appliqués à tous les tableaux.",
  156: "Définissez des couleurs personnalisées pour vos balises spécifiques.",
  157: "Cette section contient les paramètres permettant d'automatiser certaines tâches pour un flux de travail efficace, afin que vous puissiez consacrer plus de temps à votre projet qu'à la gestion des tâches.",
  158: "Note",
  159: "Cette section contient les paramètres permettant d'ajuster les formats que vous utilisez pour créer des tâches.",
  160: "AUCUN",
  161: "Le plus élevé",
  162: "Haut",
  163: "Moyen",
  164: "Faible",
  165: "Le plus bas",
  166: "Tapez ici...",
  167: "Supprimer la sous-tâche",
  168: "Maintenez le bouton CTRL enfoncé pour ouvrir dans une nouvelle fenêtre",
};
export default fr;