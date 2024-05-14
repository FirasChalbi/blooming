const products = [
{
    id: 1,
    name: "Rhino PULVERISATEUR A DOS A BATTERIE -16LTS -12V",
    brand: "Rhino",
    description: "PULVERISATEUR A DOS A BATTERIE  -16LTS -12V",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "Pulvérisateur dorsal à batterie rechargeable Lithium",
        features: [
            "Autonomie de travail : 4 heures",
            "Pression : 6 bars max",
            "Débit : 3,1 L/min",
            "Longueur du tuyau : 1m20",
            "Alimentation : Batterie Lithium",
            "Indicateur de charge de la batterie",
            "Batterie : 12V – 8Ah",
            "Couleur : vert et Noir"
        ],
        technicalSpecs: {
            SKU: "RH175IP0VI3S0NAFAMZ",
            weight: "6 kg",
            color: "vert et Noir"
        }
    }
},
{
    id: 2,
    name: "soluAMS®",
    brand: "Nitrogen and sulfur – Fully water-soluble",
    description: "Fertigation soluAMS Fertigation soluAMS bag 21% NH4-N 24% S",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "SoluAMS est un engrais de fertigation immédiatement efficace avec de l'azote et du soufre.",
        features: [
            "Entièrement soluble dans l'eau et immédiatement disponible pour les plantes.",
            "Pratiquement exempt de chlorure et de sodium.",
            "Couvre les besoins de pointe dans toutes les phases de croissance.",
            "Réduit les pertes de nutriments car l'ammonium-N est sorbé par les particules d'argile.",
            "Abaisse le pH du sol et améliore ainsi l'absorption des nutriments du phosphore et des oligo-éléments sur les sols alcalins.",
            "Le soufre est essentiel pour la synthèse des protéines et augmente l'efficacité de l'azote.",
            "Peut être utilisé comme engrais foliaire et dans les systèmes de fertigation.",
            "Miscible avec la plupart des pesticides et autres engrais."
        ],
        recommendedUse: {
            fertilizerType: "MINERAL FERTILIZER Ammonium sulfate",
            composition: {
                ammoniumNitrogen: "21%",
                sulfurTrioxide: "24%"
            },
            dosage: "Le dosage de soluAMS dépend de :\n- Type d'application (système de fertigation ouvert/fermé, fertilisation foliaire).\n- Cultures\n- Phase de croissance et durée\n- Attente de rendement\n- Besoins en nutriments\n- Température\n- Substrat\n- Application foliaire",
            foliarApplication: "L'application foliaire est recommandée uniquement en complément de l'application au sol.\nUtilisez une concentration de 1 à 3% en phase végétative intensive et pour les vieux arbres fruitiers.\nLa concentration recommandée dans la première phase de croissance et pour les jeunes arbres fruitiers est de 0,5%.",
            fertigation: "Pour tous les types d'irrigation (y compris les systèmes conventionnels, et les systèmes haute et basse pression).\nApplicable également en concentration constante faible de 0,01 à 0,1%."
        },
        generalNotes: "Pour les mélanges, veuillez suivre les recommandations du fabricant.\nNe pas mélanger dans le réservoir avec des engrais contenant du calcium ou du magnésium.\nTestez les mélanges pour une dissolution complète en petites quantités d'abord et effectuez un pré-test sur des plantes individuelles."
    }
},
{
    id: 3,
    name: "soluSOP® 52 organic",
    brand: "Potassium and sulfur – Fully water-soluble",
    description: "Fertigation soluSOP 52 organic bag Fertigation soluSOP 52 organic For organic farming Certified for organic agriculture 52.5% K2O = 43.6% K 45% SO3 = 18% S",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "soluSOP®52 ORGANIC est un fertilisant sous forme cristal hydrosoluble hautement concentré en Potassium et Soufre sous forme sulfate.",
        features: [
            "Il se dissout rapidement et sans résidu dans l'eau et est immédiatement disponible pour les plantes.",
            "Adapté pour la fertilisation foliaire ou fertigation des cultures sensibles au Chlore.",
            "Très faible indice de salinité.",
            "Rapidement assimilé par les plantes.",
            "Couvre les besoins des plantes lors des phases de croissance intenses.",
            "Peut-être mélangé avec la plupart des solutions de protection des plantes.",
            "Certifié pour l'utilisation en Agriculture Biologique conformément aux règlements (UE) n° 2018/848 et (UE) n° 2021/1165."
        ],
        fertilizer: "FERTILIZER EC Sulfate de Potassium 52.5 (+ 45) 52.5% K2O, oxyde de Potassium soluble dans l'eau (= 43.6% K) 45% SO3, trioxyde de Soufre soluble dans l'eau (= 18% S)",
        recommendedUse: {
            dosage: "Le dosage du soluSOP®52 ORGANIC dépend de :\n- Type d'opération\n- Culture\n- Phase de croissance et durée\n- Rendement attendu\n- Besoin en nutriments\n- Température\n- Substrat\n- Application foliaire\nLa concentration recommandée est comprise entre 2 et 4 %. Deux à cinq applications réparties sur le cycle cultural.",
            fertigation: "Pour tous les types d'irrigation (y compris les systèmes conventionnels ainsi que les systèmes à haute et basse pression). Application seule : 15-25 kg/ha. Peut également être utilisé à une faible concentration constante de 0,01-0,1 %."
        },
        generalInfo: {
            growthStage: [
                { stage: "Au moment de la plantation", days: "1", soluSOP: "5" },
                { stage: "Croissance végétative", days: "2-16", soluSOP: "10" },
                { stage: "Phases génératives", subStages: [
                    { stage: "I", days: "17-31", soluSOP: "15" },
                    { stage: "II", days: "32-41", soluSOP: "25" },
                    { stage: "III", days: "42-61", soluSOP: "35" }
                ]},
                { stage: "Phases de la récolte", subStages: [
                    { stage: "I", days: "62-66", soluSOP: "50" },
                    { stage: "II", days: "67-116", soluSOP: "50" },
                    { stage: "III", days: "117-165", soluSOP: "30" },
                    { stage: "IV", days: "165-190", soluSOP: "20" }
                ]}
            ],
            additionalInfo: "Convient à l'agriculture biologique Les éléments nutritifs de K+S sont obtenus à partir de gisements naturels souterrains de sels bruts. Ils se sont formés, il y a plusieurs millions d'années lors de l'évaporation des mers primitives. Aujourd'hui, les couches de sel sont recouvertes de plusieurs centaines de mètres de roche. Elles sont extraites par K+S et transformées en fertilisants. En raison des matières premières naturelles et de raffinements simples, les fertilisants K+S sont utilisables en Agriculture Biologique conformément au règlement de l'UE 2018/848 et UE 2021/1165."
        },
        storageInfo: "Informations sur le stockage Stocker dans un endroit frais et sec. Une pression d'entreposage trop élevée et de trop grands écarts de température facilitent la prise en masse. Celle-ci peut être réduite par une manipulation énergique du sac."
    }
},
{
    id: 4,
    name: "soluUP®",
    brand: "Nitrogen and phosphorus – Completely water-soluble",
    description: "Fertigation soluUP Fertigation soluUP bag 17% N 44% P2O5",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "SoluUP es un fertilizante de fertirrigación inmediatamente efectivo con nitrógeno y fósforo.",
        features: [
            "Totalmente soluble en agua y disponible de inmediato para las plantas.",
            "Fósforo altamente concentrado con nitrógeno.",
            "Prácticamente libre de cloruro (máx. 1% de Cl) y por lo tanto especialmente adecuado para cultivos especiales.",
            "Valor de pH fuertemente ácido.",
            "Cubre los requisitos máximos en todas las fases de crecimiento.",
            "Reduce el valor de pH del agua de pulverización y mejora la absorción de nutrientes en suelos alcalinos.",
            "Puede usarse como fertilizante foliar y en sistemas de fertirrigación.",
            "Miscible con la mayoría de los productos fitosanitarios y otros fertilizantes (excepto productos que contienen calcio y magnesio).",
            "Mantiene limpias las tuberías y goteros, evita obstrucciones del sistema de fertirrigación."
        ],
        fertilizer: "FERTILIZANTE NP 17+44 17% de nitrógeno ureico 44% de P2O5, pentóxido de fósforo soluble en agua",
        recommendedUse: {
            dosage: "La dosificación de soluUP depende de:\n- Tipo de aplicación (sistema de fertirrigación abierto/cerrado, fertilización foliar).\n- Cultivo\n- Fase de crecimiento y duración\n- Expectativa de rendimiento\n- Requerimientos de nutrientes\n- Temperatura\n- Substrato\n- Aplicación foliar",
            foliarApplication: "Se recomienda la aplicación foliar como complemento a la aplicación al suelo.\nPara follaje más antiguo o cultivos tolerantes, aplique a una concentración del 0.5-0.8%.\nLa concentración recomendada para plantas jóvenes y árboles frutales es del 0.25-0.5%.",
            fertigation: "Para todos los tipos de riego (incluyendo sistemas convencionales, y sistemas de alta y baja presión).\nAplique al inicio del crecimiento vegetativo y antes de la floración a 50-250 kg/ha y año.\nTambién aplicable en concentración constante baja de 0.01-0.1%."
        },
        generalAdvice: "Consejos generales:\n- En mezclas, siga las recomendaciones del fabricante.\n- No mezcle en el tanque con fertilizantes que contengan calcio o magnesio.\n- Aplicación combinada con soluCN o epsoTOP en tanques separados posible.\n- Primero verifique las mezclas para una solubilidad completa en pequeñas cantidades y realice una prueba preliminar en plantas individuales."
    }
},
{
    id: 5,
    name: "epsoTOP®",
    brand: "Pour booster vos cultures, rien ne vaut la nature",
    description: "Foliar fertiliser EPSO Top Foliar fertiliser EPSO Top bag For organic farming Certified for organic agriculture 16% MgO = 9,6% Mg 32,5% SO3 = 13% S",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "epsoTOP® est un fertilisant foliaire sous forme cristal hydrosoluble contenant du Magnésium et du Soufre sous forme sulfate.",
        features: [
            "Issu de gisements naturels de sels bruts en Allemagne.",
            "Entièrement soluble dans l'eau.",
            "Permet de fertiliser par voie foliaire les cultures exigeantes (MgO et SO3) et de compléter une offre insuffisante du sol pendant les phases de croissance active ou de faible absorption racinaire.",
            "Peut-être mélangé avec la plupart des produits de protection des plantes.",
            "Agit indépendamment de la valeur du pH du sol.",
            "Certifié pour une utilisation en Agriculture Biologique conformément aux règlements (UE) n° 2018/848 et (UE) n° 2021/1165."
        ],
        fertilizer: "ENGRAIS CE Sulfate de Magnésium 16 + 32,5 16% de MgO, oxyde de Magnésium soluble dans l'eau (= 9,6% Mg) 32,5% de SO3, trioxyde de Soufre soluble dans l'eau (= 13% S)",
        recommendedUse: {
            dosage: "Viser une concentration de 5 à 7% (soit 5 à 7kg/100l d’eau). Mettre les produits en solution via le bac d’incorporation du pulvérisateur dans un volume d’eau suffisant et sous agitation. Privilégier l’utilisation d’eau tempérée. L’utilisation d’eau trop froide diminue la rapidité de dissolution de la poudre : dans ce cas, nous conseillons de réduire la concentration d’epso, en dessous de 5%.",
            additionalInfo: "Une fois la mise en solution terminée, les produits de la gamme epso peuvent être combinés avec d’autres produits de protection des plantes. Il est cependant recommandé de procéder préalablement à un test de compatibilité (hors cuve) en respectant les recommandations des fabricants et de la réglementation."
        },
        cropsDosage: [
            { crop: "Betterave", dosage: "25 à 40 kg/ha", applicationStage: "De 8 feuilles à fin juillet début août (2 à 3 applications)" },
            { crop: "Céréales", dosage: "25 kg/ha", applicationStage: "De épi 1 cm à épiasion (2 à 7 applications)" },
            { crop: "Colza", dosage: "25 à 40 kg/ha", applicationStage: "De début entre noeuds jusqu'à apparition des boutons floraux (2 à 3 applications)" },
            { crop: "Légumes de plein champ", dosage: "25 à 40 kg/ha", applicationStage: "De début de croissance active puis 1 à 2 applications tous les 15 jours (2 à 3 applications)" },
            { crop: "Maïs", dosage: "25 kg/ha", applicationStage: "De stade 4 feuilles à 8 feuilles (2 à 5 applications)" },
            { crop: "Pomme de terre", dosage: "50 kg/ha", applicationStage: "De fermeture des rangs puis tous les 7-10 jours (5 à 10 applications)" },
            { crop: "Tournesol", dosage: "25 kg/ha", applicationStage: "De 6-8 feuilles à apparition des boutons floraux (2 applications)" },
            { crop: "Vigne", dosage: "25 à 40 kg/ha", applicationStage: "De boutons floraux agglomérés à nouaison (2 à 3 applications)" }
        ],
        generalInfo: "Convient à l'agriculture biologique Les éléments nutritifs de K+S sont obtenus à partir de gisements naturels souterrains de sels bruts. Ils se sont formés, il y a plusieurs millions d'années lors de l'évaporation des mers primitives. Aujourd'hui, les couches de sel sont recouvertes de plusieurs centaines de mètres de roche. Elles sont extraites par K+S et transformées en fertilisants. En raison des matières premières naturelles et de raffinements simples, les fertilisants K+S sont utilisables en Agriculture Biologique conformément au règlement de l'UE 2018/848 et UE 2021/1165.",
        storageInfo: "Informations sur le stockage Stocker dans un endroit frais et sec. Une pression d'entreposage trop élevée et de trop grands écarts de température facilitent la prise en masse. Celle-ci peut être réduite par une mani"
    }
},
{
    id: 6,
    name: "EXPERT 5010 X",
    brand: "LOGO_Qualigen",
    description: "Made-In-France-Black-FR LOGO_GARANTIE_3_FR-01 IM_02GE_EXPERT_50_600x600",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        description: "Équipée d’un moteur prémium, connue pour sa fiabilité et conçue pour un usage intensif, la gamme EXPERT est dédiée à tout utilisateur professionnel. Robuste, puissant et au design épuré, l’EXPERT est le partenaire idéal pour une utilisation intensive quotidienne.",
        technicalSpecs: {
            type: "Monophasé",
            maxPower: "4.3 kW",
            maxCurrent: "18.7 A",
            nominalVoltage: "230 V",
            frequency: "50 Hz",
            soundLevel: "72 dB(A) à 7 m",
            autonomy: "3 H 40 (3/4 de la puissance continue)",
            dimensions: "700 x 500 x 485 mm (L × l × H)",
            netWeight: "55 kg"
        },
        documentation: "Documentation technique"
    }
},
{
    id: 7,
    name: "HERMONÉBULISATEUR PULSFOG K10 SP",
    brand: "PULSFOG",
    description: "La thermonébulisation est la production de gouttelettes ultra fines d'une taille de 1 à 50 µm en utilisant l'énergie thermopneumatique. Les substances liquides son vaporisées dans l'appareil et forment des aérosols ultra fins en se condensant au contact de l'air ambiant froid. La thermonébulisation est utilisée pour tous les travaux d'élimination des parasites où il s'agit de répandre uniformément des substances actives, même dans les endroits inaccessibles, sans laisser des résidus indésirables. Elle est la solution parfaite pour traiter des larges surfaces et espaces avec une quantité minimum de solution à base de pesticides tout en ayant le moins de travail possible et en étant le moins nocif pour l'environnement (moins de retombées résiduelles, aucune pénétration dans le sol). La nébulisation est utilisée par exemple dans le domaine de la santé publique, pour la protection des stocks ou les traitements phytosanitaires, la désinfection, la décontamination, la désodorisation et également pour les effets de cinéma. L’appareil fut homologué par l’Organisation Mondiale de la Santé (OMS).",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        mainFeatures: [
            "Moteur à réaction sans pièces mobiles pour une utilisation illimitée.",
            "Réservoir en polyéthylène très résistant, transparent gradué/L et détachable.",
            "Double enveloppe réfrigérante en acier inoxydable.",
            "Système de démarrage rapide et breveté.",
            "Réservoir d'essence pas sous pression.",
            "En majorité en acier inoxydable.",
            "Clapet de contrôle manuel de nébulisation combiné avec arrêt automatique (optionnel).",
            "Construction simple et facile d'approche permettant à l'utilisateur de procéder lui-même à toute réparation."
        ],
        technicalFeatures: {
            emptyWeight: "< 7 Kg.",
            dimensions: "106 x 29 x 33 cm (longueur x largeur x hauteur)",
            productTankCapacity: "5 L.",
            fuelTankCapacity: "2 L.",
            engineCombustionChamberVolume: "300 cm3.",
            selfIgnition: "Bobine électrique alimentée par 4 piles = 6V.",
            startingSystem: "Manuel par soufflet à air.",
            flowRate: "10-35 l/h (varie selon les buses utilisées).",
            standardFlowRate: "12 l/h."
        },
        additionalInfo: [
            "Avantages de la double enveloppe réfrigérante: prise d'air de refroidissement par l'avant, réduction supplémentaire du son, contrôle effectif de la température.",
            "Système de démarrage rapide brevet: Injection directe et allumage automatique puIsFOG.",
            "Clapet de contrôle manuel de nébulisation combiné avec arrêt automatique : Ce dispositif évite le risque d'incendie lors de l'utilisation de produits inflammables."
        ],
        startingProcedure: [
            "Ouvrir les vis de régulation sur les carburateurs.",
            "Appuyer sur le soufflet pour l'injection directe d'essence et démarrage immédiat du moteur."
        ],
        accessories: {
            standard: [
                "Entonnoir à essence",
                "Entonnoir à produits",
                "Sachet de pièces avec membranes et bagues",
                "Brosse de nettoyage",
                "Casque insonorisant"
            ],
            optional: [
                "Agitateur",
                "Arrêt automatique",
                "Buses de dosage de différentes tailles",
                "Vêtement de protection simple",
                "Masque respiratoire avec filtre A2 B2-P3"
            ]
        }
    }
},
{
    id: 8,
    name: "Engrais de potassium Ever Gran",
    brand: "EVERGROW GROUP",
    description: "Améliore la tolérance des plantes aux conditions de stress environnemental et abiotique. Augmente la taille des fruits et améliore leur goût, leur fermeté et leur durée de conservation. Riche en soufre, qui augmente la disponibilité du phosphore et des micro-éléments dans le sol.",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        mainFeatures: [
            "Composition principale: aux oligo-éléments, de potassium",
            "Ingrédients: riche en soufre",
            "Forme: granulé",
            "Fonctions: correcteur de carence"
        ],
        contentPercentage: {
            "Potassium (K₂O)": "50",
            "Potassium (K)": "41,6",
            "Soufre (S)": "17",
            "Sulfite (SO₃)": "43"
        },
        specification: [
            "En tant qu'engrais granulé, ses particules ne restent pas sur les feuilles et ne brûlent pas lors de l'épandage par des machines.",
            "En tant qu'engrais granulé, il prend beaucoup de temps pour être complètement dissous dans le sol, ce qui assure la disponibilité du potassium pour la plante pendant longtemps."
        ],
        applications: [
            "À utiliser avec des machines d'épandage, lors de la préparation du sol (épandage / buttage / dressing.... etc.).",
            "Peut être utilisé dans les vergers d'arbres fruitiers avant la plantation ou pendant le service hivernal."
        ],
        packaging: [
            "25 kg",
            "1,2 MT en big bag",
            "Vrac en conteneur",
            "Vrac dans un véhicule"
        ]
    }
},
{
    id: 9,
    name: "Bioradicante",
    brand: "Agroduka",
    description: "Plants need to develop strong and healthy root systems for adequate foliar growth and to achieve optimum yields during harvest. The application of free L-amino acids increases protein synthesis (essential in the first stages of growth), which directly or indirectly influences the plant’s physiological processes. Among many functions, amino acids improve chlorophyll and auxin synthesis, germination, flowering and pollination while also enhancing the quality and ripening of fruits and stoma opening.",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        packSizeOptions: ["250 ml", "1 Litre", "5 Litres"],
        price: "KSh.850",
        shippingInfo: "We deliver all over Africa.",
        paymentMethods: ["Agroduka Till Number"],
        composition: {
            "Free L-amino acids": "10.50% by mass",
            "Total nitrogen content": "2.75% by mass",
            "Iron": "4.5% by mass",
            "Manganese": "1.0% by mass",
            "Boron, Molybdenum and Zinc": "0.90% by mass",
            "Stability and storage": "Stable for at least three years since manufacturing date. Store in the closed original container in a cool, well-ventilated area. DO NOT store for prolonged periods in direct sunlight. Keep away from food, drink and animal feedingstuffs. Keep out of the reach of children."
        },
        dosingAccordingToCrop: [
            { crop: "Tomato, pepper, cucumber, melon, zucchini, etc.", doses: "2-3 L/Ha", recommendations: "Apply during transplantation and repeat at 15 days." },
            { crop: "Strawberry", doses: "2 L/Ha", recommendations: "Apply during transplantation and repeat at 20 days throughout the crop cycle." },
            { crop: "Lettuce, cauliflower", doses: "3-4 L/Ha", recommendations: "Apply during transplantation and repeat at 20 days." },
            { crop: "Artichoke", doses: "3-4 L/Ha", recommendations: "Apply during transplantation and repeat at 15-20 days." },
            { crop: "Citrics", doses: "10-15 cc/Tree", recommendations: "Apply after the first shoots and repeat at 15-20 days." },
            { crop: "Pome and stone fruits", doses: "10-15 cc/Tree", recommendations: "Apply after the first shoots and repeat at 15 days." },
            { crop: "Banana tree", doses: "5 L/Ha", recommendations: "Distribute applications throughout the crop cycle." },
            { crop: "Tubers", doses: "2 L/Ha", recommendations: "Apply every 15-20 days." },
            { crop: "Grapevine", doses: "10 cc /pie", recommendations: "Apply after first buds and repeat at 15 days." },
            { crop: "Ornamentals", doses: "3 L /Ha", recommendations: "Apply every 15 days." },
            { crop: "Seedlings", doses: "100 cc/100L", recommendations: "Varies depending on the type of crop. Ask the manufacturer or distributor technical." }
        ],
        weight: "0.3 kg",
        SKU: "KB004-2m"
    }
},
{
    id: 10,
    name: "MOTOCULTEUR ROTO 406HD FRAISE ARRIERE",
    brand: "ROTO",
    description: "MOTOCULTEUR ROTO 406HD FRAISE ARRIERE",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {}
},
{
    id: 11,
    name: "BIOTRITURADOR FBC MOTEUR LONCIN G390F 13HP - 8CM",
    brand: "FBC",
    description: "Broyeur de végétaux avec moteur Loncin G390F de 13HP et capacité de broyage jusqu'à 8cm de diamètre.",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    category: "All",
    details: {
        moteur: "Loncin G390F",
        cylindrée: "389 CC",
        puissance: "13 HP",
        lames: 1,
        marteaux: 6,
        dimensionTremie: "49x37 CM",
        diametreMaxBroyage: "8 CM",
        hauteurDechargement: "110 CM",
        debit: "3/4 M³/H",
        dimensions: "100x145x135 CM",
        poids: "125 KG",
        codeTarifaire: "84742000",
        codeGTIN: "8435673732675"
    }
}
];

export default products;