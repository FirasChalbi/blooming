const products = [
  {
    id: 1,
    name: "Pulvérisateur Demon",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    description: "Pulvérisateur porté avec pompe Annovi-Reverberi à membranes d’haute pression.",
    category: "Pulvérisateurs",
    modele: [
      { modele: "UDM200", lt: 200, "l/m": "AR-30(35L/M40BAR)", KG: 75 },
      { modele: "UDM300", lt: 300, "l/m": "AR-30(35L/M40BAR)", KG: 85 },
      { modele: "UDM400", lt: 400, "l/m": "AR-30(35L/M40BAR)", KG: 90 },
      { modele: "UDM500", lt: 500, "l/m": "AR-30(35L/M40BAR)", KG: 100 },
      { modele: "UDM600", lt: 600, "l/m": "AR-30(35L/M40BAR)", KG: 105 }
    ],
    equipment: [
      "Commandement manuel de 2 voies en laiton avec régulateur de pression manuelle.",
      "Châssis renforcée de tube courbé.",
      "Châssis de peinture anti corrosion de polyester au four.",
      "Cuve principale, cuve de rinçage et lave-mains en polyéthylène.",
      "Couvercle charnière avec filtre de rempli.",
      "Filtre d’aspiration avec valve.",
      "2 lances.",
      "20 mt tuyaux.",
      "Hydro-remplisseur.",
      "Robot de nettoyage intérieur à partir du modèle 500 lt, selon normes CE.",
      "Transmission renforcée.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 2,
    name: "Pulvérisateur Demon BP",
    img: ["https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png","https://agrisud.com.tn/wp-content/uploads/2021/03/fertium_k.png"],
    description: "Pulvérisateur porté avec pompe Annovi Reverberi à membranes de baisse pression.",
    category: "Pulvérisateurs",
    modele: [
      { modele: "UDM300BP", lt: 300, "l/m": "BP70 (70 lt/20 atm)", KG: 85 },
      { modele: "UDM400BP", lt: 400, "l/m": "BP70 (70 lt/20 atm)", KG: 90 },
      { modele: "UDM500BP", lt: 500, "l/m": "BP70 (70 lt/20 atm)", KG: 100 },
      { modele: "UDM600BP", lt: 600, "l/m": "BP70 (70 lt/20 atm)", KG: 105 },
      { modele: "UDM800BP", lt: 800, "l/m": "BP70 (70 lt/20 atm)", KG: 161 }
    ],
    equipment: [
      "Commandement manuel baisse pression ECM 3 voies et manomètre.",
      "Châssis renforcée de tube courbé.",
      "Châssis de peinture anti corrosion de polyester au four.",
      "Cuve principale, cuve de rinçage et lave-mains en polyéthylène.",
      "Couvercle charnière avec filtre de rempli.",
      "Filtre d’aspiration avec valve.",
      "Transmission renforcée.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 3,
    name: "Atomiseur eco-turbulence",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec ventilateur d'une sortie de l'air.",
    category: "Atomiseurs",
    modele: [
      { modele: "UTB1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 680 },
      { modele: "UTB1500", lt: 1500, Ø: 920, nº: "10.0 / 80 - 12 8 PR", KG: 690 },
      { modele: "UTB2000", lt: 2000, Ø: 920, nº: "10.0 / 75 - 15 10 PR", KG: 950 },
      { modele: "UTB3000", lt: 3000, Ø: 920, nº: "11.5 / 80 - 15.3 14 PR", KG: 1300 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec 1 sortie de l’air.",
      "Hélice de 8 pales.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "14 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateur en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 4,
    name: "Atomiseur Invertair",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec aspiration antérieur.",
    category: "Atomiseurs",
    modele: [
      { modele: "UIA1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 680 },
      { modele: "UIA1500", lt: 1500, Ø: 920, nº: "10.0 / 80 - 12 8 PR", KG: 690 },
      { modele: "UIA2000", lt: 2000, Ø: 920, nº: "10.0 / 75 - 15 10 PR", KG: 950 },
      { modele: "UIP3000", lt: 3000, Ø: 920, nº: "11.5 / 80 - 15.3 14 PR", KG: 1300 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec aspiration antérieur.",
      "Hélice de 9 pales.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Contre ventilateur en inoxydable.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "16 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateur en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 5,
    name: "Atomiseur Tower",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec tourelle et aspiration antérieur.",
    category: "Atomiseurs",
    modele: [
      { modele: "UTW1000", lt: 1000, Ø: 800, nº: "10.0 / 80 - 12 8 PR", KG: 705 },
      { modele: "UTW1500", lt: 1500, Ø: 800, nº: "10.0 / 80 - 12 8 PR", KG: 715 },
      { modele: "UTW2000", lt: 2000, Ø: 800, nº: "10.0 / 75 - 15 10 PR", KG: 975 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur spécial avec aspiration antérieur et tourelle galvanisée.",
      "Hélice de 9 pales.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Enveloppant groupe ventilateur en inoxydable renforcée de 3 mm épaisseur pour supporter la tourelle.",
      "Distributeur de l’air en inoxydable.",
      "16 pulvérisateurs doubles avec anti égouttement avec buses 1.2 d’un côté et ATR de l’autre.",
      "Tube pulvérisateurs en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 6,
    name: "Atomiseur Similair",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec aspiration antérieur et tourelle en polyester d'haute résistance.",
    category: "Atomiseurs",
    modele: [
      { modele: "USA1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 680 },
      { modele: "USA1500", lt: 1500, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 840 },
      { modele: "USA2000", lt: 2000, Ø: 820, nº: "10.0 / 75 - 15 10 PR", KG: 950 },
      { modele: "USA3000", lt: 3000, Ø: 820, nº: "11.5 / 80 - 15.3 14 PR", KG: 1300 }
    ],
    equipment: [
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec aspiration antérieur et tourelle en polyester d’haute densité.",
      "Hélice de 9 pales.",
      "Embrayage automatique avec mâchoire de frein.",
      "Multiplicateur de 2 vitesses et impasse.",
      "20 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateurs en inoxydable.",
      "Sorties de l’air orientable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 7,
    name: "Atomiseur Invertair Plus",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec aspiration antérieur.",
    category: "Atomiseurs",
    modele: [
      { modele: "UIP1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 705 },
      { modele: "UIP1500", lt: 1500, Ø: 920, nº: "10.0 / 80 - 12 8 PR", KG: 715 },
      { modele: "UIP2000", lt: 2000, Ø: 920, nº: "10.0 / 75 - 15 10 PR", KG: 975 },
      { modele: "UIP3000", lt: 3000, Ø: 920, nº: "11.5 / 80 - 15.3 14 PR", KG: 1325 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec aspiration antérieur avec 3 sorties de l’air.",
      "Hélice de 9 pales.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Contre ventilateur en inoxydable.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "26 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateurs en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 8,
    name: "Atomiseur Huracan",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec ventilateur de grande portée.",
    category: "Atomiseurs",
    modele: [
      { modele: "UHN2000", lt: 2000, Ø: 1060, nº: "10.0 / 75 - 15 10 PR", KG: 1010 },
      { modele: "UHN3000", lt: 3000, Ø: 1060, nº: "11.5 / 80 - 15.3 14 PR", KG: 1360 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur spécial de grande portée.",
      "Hélice de 9 pales.",
      "Embrayage automatique avec mâchoire de frein.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "Distributeur de l’air en inoxydable.",
      "26 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateurs en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 9,
    name: "Atomiseur Vento",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec ventilateur de trois sorties de l'air.",
    category: "Atomiseurs",
    modele: [
      { modele: "UVT1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 680 },
      { modele: "UVT1500", lt: 1500, Ø: 920, nº: "10.0 / 80 - 12 8 PR", KG: 690 },
      { modele: "UVT2000", lt: 2000, Ø: 920, nº: "10.0 / 75 - 15 10 PR", KG: 950 },
      { modele: "UVT3000", lt: 3000, Ø: 920, nº: "11.5 / 80 - 15.3 14 PR", KG: 1300 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec 3 sorties d’air système Turbo-récupération.",
      "Hélice de 8 pales.",
      "Embrayage automatique avec mâchoire de frein.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "26 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateurs en inoxydable.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 10,
    name: "Atomiseur Privilege",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur trainé avec ventilateur de deux sorties de l’air.",
    category: "Atomiseurs",
    modele: [
      { modele: "UPG1000", lt: 1000, Ø: 820, nº: "10.0 / 80 - 12 8 PR", KG: 680 },
      { modele: "UPG1500", lt: 1500, Ø: 920, nº: "10.0 / 80 - 12 8 PR", KG: 690 },
      { modele: "UPG2000", lt: 2000, Ø: 920, nº: "10.0 / 75 - 15 10 PR", KG: 950 },
      { modele: "UPG3000", lt: 3000, Ø: 920, nº: "11.5 / 80 - 15.3 14 PR", KG: 1300 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage, lave-mains et lave-pompe en polyéthylène.",
      "Pompe Annovi Reverberi AR 1053 (105 lt/min, 50 atm).",
      "Châssis peint très renforcée avec pare-chocs arrière.",
      "2 jauges extérieures.",
      "Pied d’appui avec roue tournante.",
      "Mélangeur hydraulique de grand débit.",
      "Commandements au tracteur avec distributeur de mono-commande.",
      "Kit d’éclairage.",
      "Sans frein. Avec cales de frein.",
      "Transmission renforcée.",
      "Groupe ventilateur avec 2 sorties d’air système Turbo-récupération.",
      "Hélice de 8 pales.",
      "Embrayage automatique avec mâchoire de frein.",
      "Multiplicateur de 2 vitesses et impasse.",
      "Distributeur de l’air en inoxydable.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "14 pulvérisateurs doubles avec anti égouttement.",
      "Tube pulvérisateur en inoxydable.",
      "Robot de nettoyage intérieur cuvé, selon normes CE.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 11,
    name: "Atomiseur Star Plus",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur porté avec multiplicateur avec pompe Annovi-Reverberi.",
    category: "Atomiseurs",
    modele: [
      { modele: "USP400", lt: 400, Ø: 820, nº: 14, KG: 220 },
      { modele: "USP500", lt: 500, Ø: 820, nº: 14, KG: 245 },
      { modele: "USP600", lt: 600, Ø: 820, nº: 14, KG: 300 },
      { modele: "USP600G", lt: 600, Ø: 920, nº: 14, KG: 300 },
      { modele: "USP800", lt: 800, Ø: 820, nº: 14, KG: 305 },
      { modele: "USP800G", lt: 800, Ø: 920, nº: 14, KG: 305 },
      { modele: "USP1000", lt: 1000, Ø: 820, nº: 14, KG: 350 },
      { modele: "USP1000G", lt: 1000, Ø: 920, nº: 14, KG: 350 },
      { modele: "USP1200", lt: 1200, Ø: 820, nº: 14, KG: 380 },
      { modele: "USP1200G", lt: 1200, Ø: 920, nº: 14, KG: 380 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage et lave-mains en polyéthylène.",
      "Pompe Annovi Reverberi AR 813 (81 lt/min, 50 atm).",
      "Ventilateur Ø 820 ou Ø 920.",
      "14 pulvérisateurs doubles avec anti goutemment.",
      "Enveloppant du groupe ventilateur en inoxydable.",
      "Tube pulvérisateurs en inoxydable.",
      "Hélice de 8 pales.",
      "Multiplicateur de 2 vitesses et déconnexion.",
      "Robot de nettoyage intérieur à partir du modèle 500 lt, selon normes CE.",
      "Hydro-remplisseur.",
      "Transmission renforcée.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 12,
    name: "Atomiseur Star Tower",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur portée avec multiplicateur et tourelle.",
    category: "Atomiseurs",
    modele: [
      { modele: "USW300", lt: 300, Ø: 720, mod: 12, KG: 235 },
      { modele: "USW400", lt: 400, Ø: 720, mod: 12, KG: 245 },
      { modele: "USW500", lt: 500, Ø: 720, mod: 12, KG: 270 },
      { modele: "USW600", lt: 600, Ø: 720, mod: 12, KG: 325 },
      { modele: "USW1000", lt: 1000, Ø: 720, mod: 12, KG: 375 }
    ],
    equipment: [
      "Cuve principale, cuve de rinçage et lave-mains en polyéthylène.",
      "Pompe Annovi Reverberi AR 813 (81 lt/min, 50 atm).",
      "Ventilateur Ø 720mm.",
      "12 pulvérisateurs doubles avec anti égouttement.",
      "Enveloppant groupe ventilateur en inoxydable.",
      "Tube pulvérisateur en inoxydable.",
      "Hélice de 7 pales.",
      "Multiplicateur de 2 vitesses et déconnexion.",
      "Hydro-remplisseur.",
      "Robot de nettoyage intérieur à partir du modèle 500 lt, selon normes CE.",
      "Transmission renforcée.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 13,
    name: "Atomiseur Star",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Atomiseur porté par courroies avec pompe Annovi Reverberi.",
    category: "Atomiseurs",
    modele: [
      { modele: "USR200", lt: 200, Ø: 700, nº: 10, KG: 172 },
      { modele: "USR300", lt: 300, Ø: 700, nº: 10, KG: 210 },
      { modele: "USR400", lt: 400, Ø: 700, nº: 10, KG: 220 },
      { modele: "USR400G", lt: 400, Ø: 800, nº: 14, KG: 220 },
      { modele: "USR500", lt: 500, Ø: 700, nº: 10, KG: 245 },
      { modele: "USR500G", lt: 500, Ø: 800, nº: 14, KG: 245 },
      { modele: "USR600", lt: 600, Ø: 700, nº: 10, KG: 300 },
      { modele: "USR600G", lt: 600, Ø: 800, nº: 14, KG: 300 },
      { modele: "USR800", lt: 800, Ø: 800, nº: 14, KG: 305 },
      { modele: "USR1000", lt: 1000, Ø: 800, nº: 14, KG: 350 },
      { modele: "USR1200", lt: 1200, Ø: 800, nº: 14, KG: 380 }
    ],
    equipment: [
      "Roulement spécial de double filière dans l’essieu ventilateur.",
      "Protections totales en un système de poulies avec les normes de sécurité.",
      "Cuve principale, cuve de rinçage et lave-mains en polyéthylène.",
      "Pompe Annovi Reverberi AR 813 (81 lt/min, 50 atm).",
      "Ventilateur Ø 700 (10 pulv) ou Ø 800 (14 pulv).",
      "Pulvérisateurs doubles avec anti égouttement.",
      "Enveloppant du groupe ventilateur en inoxydable.",
      "Hélice de 8 pales avec déconnecter poulie avec système d’hélice variable instantanée (en 7 secondes vous pouvez changer la position des hélices).",
      "Robot de nettoyage intérieur à partir du modèle 500 lt.",
      "Hydro-remplisseur.",
      "Transmission renforcée.",
      "Protections selon normes CE."
    ]
  },
  {
    id: 14,
    name: "Broyeur Perfect",
    img: ["IMAGE_URL_1","IMAGE_URL_2","IMAGE_URL_3"],
    description: "Broyeur spécialement conçu pour les travaux très durs sur les restes d'élagage jusqu'à 12-15 cm de diamètre, sur les oliveraies, les vignes, les arbres fruitiers, les arbres à agrumes, l'herbe,…",
    category: "Broyeurs",
    modele: [
      { modele: "TPF160", mm: 1600, KG: 695, "n°": 16, "n°": "32+16", "C.V.": "48-60", "R.P.M.": 540, "n°": 4 },
      { modele: "TPF180", mm: 1800, KG: 780, "n°": 20, "n°": "40+20", "C.V.": "55-75", "R.P.M.": 540, "n°": 5 },
      { modele: "TPF200", mm: 2000, KG: 860, "n°": 22, "n°": "44+22", "C.V.": "65-80", "R.P.M.": 540, "n°": 5 },
      { modele: "TPF220", mm: 2200, KG: 945, "n°": 22, "n°": "44+22", "C.V.": "80-100", "R.P.M.": 540, "n°": 5 },
      { modele: "TPF250", mm: 2500, KG: 1070, "n°": 24, "n°": "48+24", "C.V.": "90-125", "R.P.M.": 540, "n°": 5 },
      { modele: "TPF280", mm: 2800, KG: 1070, "n°": 24, "n°": "48+24", "C.V.": "95-135", "R.P.M.": 540, "n°": 5 }
    ],
    equipment: [
      "Déport mécanique ou hydraulique sur barre massive zinguée.",
      "Boitier avec roue livre.",
      "Rotor de marteaux hélicoïdale.",
      "Tendeur des courroies automatique.",
      "Rouleau arrière de 220 mm diamètre avec décrottoir.",
      "Support avec protection pour roulements du rouleau arrière.",
      "Trois rangées de contre marteaux (un profil crénelée, un en « U » et d’autre en angle).",
      "Double ligne de chaines de protection devantières.",
      "Râteaux ramasseurs.",
      "Boulons et cardan compris.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles sont fournis avec marteaux de série, à exception d’indication sur la commande de montage des couteaux."
    ]
  },
  {
    id: 15,
    name: "Broyeur Thunder",
    img: ["IMAGE_URL_1", "IMAGE_URL_2", "IMAGE_URL_3"],
    description: "Broyeur spécialement conçu pour les travaux sur les restes d’élagage jusqu’à 8 cm de diamètre, sur les oliveraies, les vignes, les arbres fruitiers, les arbres à agrumes, le maïs, l’herbe, etc.",
    category: "Broyeurs",
    modele: [
      { modele: "TTN130", mm: 1300, KG: 530, "n°": 14, "n°": "28+14", "C.V.": "28-38", "R.P.M.": 540, "n°": 4 },
      { modele: "TTN150", mm: 1500, KG: 565, "n°": 16, "n°": "32+16", "C.V.": "38-48", "R.P.M.": 540, "n°": 4 },
      { modele: "TTN160", mm: 1600, KG: 595, "n°": 16, "n°": "32+16", "C.V.": "48-58", "R.P.M.": 540, "n°": 4 },
      { modele: "TTN180", mm: 1800, KG: 635, "n°": 20, "n°": "40+20", "C.V.": "55-65", "R.P.M.": 540, "n°": 4 },
      { modele: "TTN200", mm: 2000, KG: 685, "n°": 22, "n°": "44+22", "C.V.": "65-70", "R.P.M.": 540, "n°": 5 },
      { modele: "TTN220", mm: 2200, KG: 755, "n°": 22, "n°": "44+22", "C.V.": "70-85", "R.P.M.": 540, "n°": 5 },
      { modele: "TTN250", mm: 2500, KG: 810, "n°": 24, "n°": "48+24", "C.V.": "85-120", "R.P.M.": 540, "n°": 5 },
      { modele: "TTN280", mm: 2800, KG: 890, "n°": 24, "n°": "48+24", "C.V.": "95-130", "R.P.M.": 540, "n°": 5 },
      { modele: "TTN300", mm: 3000, KG: 970, "n°": 26, "n°": "52+26", "C.V.": "100-140", "R.P.M.": 540, "n°": 5 }
    ],
    equipment: [
      "Déport mécanique ou hydraulique sur barre massive zinguée.",
      "Boitier avec roue livre.",
      "Rotor de marteaux hélicoïdale.",
      "Rouleau arrière de 220 mm diamètre avec décrottoir.",
      "Support avec protection pour roulements du rouleau arrière.",
      "Double ligne de contre marteaux (une crénelé et d’autres en « U »).",
      "Portail arrière mécanique pour inspection.",
      "Bandes de protection en fer.",
      "Râteaux ramasseurs.",
      "Boulons et cardan compris.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles sont fournis avec marteaux de série, à exception d’indication sur la commande de montage des couteaux."
    ]
  },
  {
    "id": 16,
    "name": "Broyeur Fenix",
    "category": "Broyeurs",
    "description": "Broyeur pour tous types de travaux pour les pailles, les tiges de maïs, l'herbe, les arbustes, les tournesols, les jachères. Machine lourde et robuste conçue pour un travail intensif.",
    "modele": [
      {
        "modele": "TFX500",
        "mm": 5000,
        "Kg": 2980,
        "nº": 44,
        "nº": "88+44",
        "C.V.": "120-250",
        "R.P.M.": 1000,
        "nº": 5400
      },
      {
        "modele": "TFX640",
        "mm": 6400,
        "Kg": 3380,
        "nº": 48,
        "nº": "96+48",
        "C.V.": "160-250",
        "R.P.M.": 1000,
        "nº": 6800
      }
    ],
    "equipment": [
      "Tourelle centrale repliable CAT III au moyen de 2 pistons double effet et d’un troisième piston de sécurité pour le verrouiller pendant le transport",
      "Réglage de la hauteur par roulettes rotatives ou galet arrière Ø 220 mm (à préciser à la commande).",
      "Gamme exclusive Niubo de contre-marteaux spéciaux en forme de U avec crête vissée.",
      "Deux portes arrière mécaniques.",
      "Tendeur de courroie spécial avec troisième poulie par vis.",
      "Bandes de protection en fer très renforcées.",
      "Supports fortement renforcés de rotor et de rotor de marteau.",
      "Rotor hélicoïdal.",
      "Double transmission avec courroies haute performance et de grand revenu.",
      "Boulons et cardan avec roue libre.",
      "Protections pour éviter les accidents selon la norme CE.",
      "Tous les modèles sont toujours livrés avec des marteaux en standard, sauf indication contraire lors de la commande de l’ensemble lame."
    ]
  },
  {
    "id": 17,
    "name": "Broyeur Maxum Plus",
    "category": "Broyeurs",
    "description": "Broyeur conçu pour les travaux très durs avec bouche d’entrée plus grande pour les travaux moyens et grands sur les restes d’élagage jusqu’à 14 cm de diamètre, sur les oliveraies, les arbres fruitiers, les arbres à agrumes, etc.",
    "modele": [
      {
        "modele": "TMP200",
        "mm": 2000,
        "Kg": 1000,
        "nº": 16,
        "C.V.": "95-105",
        "R.P.M.": 540,
        "nº": 5
      },
      {
        "modele": "TMP220",
        "mm": 2200,
        "Kg": 1110,
        "nº": 18,
        "C.V.": "105-130",
        "R.P.M.": 540,
        "nº": 5
      },
      {
        "modele": "TMP250",
        "mm": 2500,
        "Kg": 1320,
        "nº": 20,
        "C.V.": "110-160",
        "R.P.M.": 540,
        "nº": 6
      }
    ],
    "equipment": [
      "Déport hydraulique sur barre massive zinguée.",
      "Boîtier très renforcée avec roue libre.",
      "Rouleau arrière de nivelage 170 mm ultra renforcé.",
      "Patins.",
      "Double rangée de contre-marteaux.",
      "Bandes de protection en fer ultra renforcées et chaines.",
      "Dents de rétention arrière réglables.",
      "Rotor de marteaux et supports ultra renforcés.",
      "Vis des marteaux de diamètre 22 et dureté 12.9",
      "Boulons et cardan.",
      "Protections pour éviter tout accident selon la norme CE."
    ]
  },
  {
    "id": 18,
    "name": "Broyeur Slot",
    "category": "Broyeurs",
    "description": "Broyeur d’accotement polyvalent conçu pour travaux sur herbe, sarments de vigne, restes d’élagage d’arbres fruitiers, etc. diamètre de branche de 6 à 8 cm.",
    "equipment": [
      "Châssis principal en acier d’haute résistance DOMEX.",
      "Nouvelle conception de châssis extra renforcé avec système d’éjection livre du matériel broyée.",
      "Boîtier avec roue livre placée dans le coté intérieur de la machine.",
      "Attelage très renforcé avec deux positions CAT II-III.",
      "Rouleau arrière de nivelage 170 mm avec décrottoir.",
      "Bande arrière de caoutchouc pour protection.",
      "Patins.",
      "Rotor et supports du rotor très renforcés.",
      "1 ligne de contre-marteaux spéciaux en crête vissés.",
      "1 ligne de contre-marteaux dentés avec système de broyage intensif.",
      "Bandes de protection en fer ultra renforcées.",
      "Système de suspension hydro pneumatique réglable.",
      "Système flottant mécanique.",
      "Articulations sans points de graissage, avec douilles autolubrifiantes.",
      "Tendeur des courroies spécial avec troisième poulie par vis.",
      "Couvercle protection des courroies soudée au châssis.",
      "Châssis avec angle antichoc.",
      "Protection moyeu extérieur.",
      "Pied d’appui.",
      "Boulons et cardan.",
      "Prédisposition pour kit double cardan.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Remarque: tous les modèles vont avec marteaux de série, excepté indication sur la commande de montage des lames."
    ]
  },
  {
    "id": 19,
    "name": "Broyeur King",
    "category": "Broyeurs",
    "description": "Broyeur d’accotement polyvalent pour l’herbe et branches jusqu’à 3 cm de diamètre.",
    "equipment": [
      "Boîtier avec roue libre.",
      "Rouleau arrière 140 mm de diamètre avec décrottoir.",
      "Supports des marteaux très renforcés.",
      "Jeu de patins latéraux longs avec protection du roulement.",
      "Portail arrière mécanique pour inspection avec nouveau système de grande ouverture.",
      "Bandes de protection en fer.",
      "Vérin d’inclinaison avec régulateur du débit.",
      "Pied d’appui.",
      "Boulons et cardan.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles vont avec marteaux de série, excepté indication sur la commande de montage des lames."
    ]
  },
  {
    "id": 20,
    "name": "Broyeur Max",
    "category": "Broyeurs",
    "description": "Broyeur spécial à double alimentateur pick-up hydraulique et un rotor avec marteaux internes pour le broyage dans les oliveraies, arbres à agrumes et cultures de grande envergure jusqu’à 10-12 cm de diamètre, pour lesquelles est indispensable le broyage très fin et précis.",
    "equipment": [
      "Attelage centrée.",
      "Attelage mobile très renforcée pour version devantière et arrière.",
      "Boîtier avec roue livre.",
      "Roues de contrôle de profondeur en caoutchouc.",
      "Rotor de couteaux réversibles en HARDOX avec des roulements oscillants.",
      "Double alimentateur pick-up hydraulique.",
      "5 courroies crantées XPB avec tendeur automatique.",
      "Couvercle courroies et alimentateur dans un seul coté.",
      "Broyeur sans grille arrière.",
      "Partie arrière avec une ouverture pour inspection du rotor.",
      "De série transmission à 540 tpm (1000 tpm sur demande).",
      "Boulons et cardan.",
      "Protections pour éviter des accidents selon les normes CE."
    ]
  },
  {
    "id": 21,
    "name": "Broyeur Panther",
    "category": "Broyeurs",
    "description": "Broyeur spécial pour le broyage de sarments de vigne, arbres fruitiers, etc. jusqu’à 6-7 cm diamètre, en particulier sur les terrains pierreux, mouilles ou sableux ainsi que pour les vignes pré-élaguées. Le tamis arrière permet un broyage et un vidage parfait.",
    "equipment": [
      "Attelage fixe et centré.",
      "Boîtier avec roue livre.",
      "Châssis et grille arrière très renforcés.",
      "Rotor multi-agressif de grande vitesse.",
      "Roues arrières tournantes ultra renforcées et réglables en hauteur ou rouleau arrière Ø170 mm (spécifier à la commande).",
      "Double rangée de profils droits et profil cranté inférieur.",
      "Portail arrière de maintenance interne de la machine.",
      "Alimentateur pick-up mécanique avec embrayage de sécurité.",
      "Pales de l’alimentateur pick-up en matériel anti usure.",
      "Guides latéraux d’alignement des branches d’élagage.",
      "Rotor de marteaux et supports très renforcés.",
      "Boulons et cardan.",
      "Protections pour éviter tout accident selon la norme CE."
    ]
  },
  {
    "id": 22,
    "name": "Broyeur Top",
    "category": "Broyeurs",
    "description": "Broyeur semi forestière conçu pour les travaux très durs avec bouche d’entrée plus grande pour les restes d’élagage jusqu’à 15-18 cm de diamètre, sur les oliveraies, les vignes, les arbres fruitiers, les arbres à agrumes, l’herbe, etc.",
    "equipment": [
      "Déport hydraulique sur barre massive zinguée.",
      "Boîtier avec roue libre.",
      "Rouleau arrière de 170 mm diamètre intégrée dans le portail arrière.",
      "Patins.",
      "Triple ligne de contre-marteaux (deux profils crénelés et un profil en « U »).",
      "Portail tamis avec ouverture hydraulique par deux vérins et rouleau arrière intégré dans le même.",
      "Bandes de protection en fer très renforcées.",
      "Rotor de marteaux et roulements très renforcés.",
      "Boulons et cardan.",
      "Protections pour éviter tout accident selon la norme CE."
    ]
  },
  {
    "id": 23,
    "name": "Broyeur Kompact",
    "category": "Broyeurs",
    "description": "Broyeur spécial avec châssis EXTRA BAISSE (seulement 49 cm) pour travailler excellemment dans l’intérieur des plantations de fruitiers, vignes, etc.. jusqu’à 6-7 cm diamètre. Châssis principal construit en acier d'haute résistance DOMEX 700.",
    "equipment": [
      "Attelage très renforcé, centré avec trois positions d’hauteur pour une meilleure adaptation aux tracteurs.",
      "Déport hydraulique sur barres massives zinguées.",
      "Boîtier avec roue libre.",
      "Rotor de marteau hélicoïdal.",
      "Rouleau arrière de 170 mm de diamètre.",
      "Jeu de patins en Hardox.",
      "Tendeur spécial avec troisième poulie avec boulon.",
      "Profil crénelé dans la partie devantière et ligne de contre-marteaux en “U”.",
      "Portail arrière avec la barre porte-rétenteurs intégrée dans le même pour faire un meilleur débroussaillement d’herbe à une grande vitesse grâce à la grande ouverture arrière.",
      "Râteaux ramasseurs.",
      "Boulons et cardan compris.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles sont fournis avec marteaux de série, à exception d’indication sur la commande de montage des couteaux."
    ]
  },
  {
    "id": 24,
    "name": "Broyeur Glider",
    "category": "Broyeurs",
    "description": "Broyeur spécialement conçu pour l’herbe, sarments de vigne, restes d’élagage des fruitiers, etc. pour un diamètre de branche jusqu’à 3-4 cm.",
    "equipment": [
      "Attelage à 3 points sur barres massives zinguées.",
      "Déport mécanique à manivelle ou hydraulique.",
      "Boîtier avec roue libre.",
      "Rouleau arrière de 150 mm de diamètre avec décrottoir.",
      "Ligne de contre-marteaux crénelée.",
      "Bandes de protection en fer.",
      "Dents de rétention arrières réglables.",
      "Boulons et cardan compris.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles sont fournis avec marteaux de série, à exception d’indication sur la commande de montage des couteaux."
    ]
  },
  {
    "id": 25,
    "name": "Broyeur Light",
    "category": "Broyeurs",
    "description": "Broyeur spécial pour l’herbe et branches jusqu’à 3 cm de diamètre.",
    "equipment": [
      "Boîtier déporté (pas au milieu de la machine)",
      "Attelage à 3 points sur barres massives zinguées.",
      "Déport mécanique à manivelle.",
      "Boîtier avec roue libre.",
      "Supports des marteaux très renforcés.",
      "Rouleau arrière de 140 mm de diamètre avec décrottoir.",
      "Jeu de patins latéraux longs avec protection du roulement.",
      "Portail arrière mécanique pour inspection avec nouveau système de grande ouverture.",
      "Ligne de contre-marteaux en “U”.",
      "Bandes de protection en fer.",
      "Râteaux ramasseurs.",
      "Boulons et cardan.",
      "Protections pour éviter tout accident selon la norme CE.",
      "Tous les modèles vont avec marteaux de série, excepté indication sur la commande de montage des lames."
    ]
  },
  {
    "id": 26,
    "name": "Épandeur de fumier Modèle L / 200 Sarico – Décharge frontale",
    "category": "Epandeur De Fumier",
    "specifications": {
      "Capacité totale certifiée": "200 quintaux",
      "Puissance requise": "130/160 CV",
      "Capacité moyenne approximative": "18/20 m³",
      "Longueur du corps": "7.5 m",
      "Hauteur latérale": "1.50 m",
      "Bande de roulement": "2.05 m",
      "Max. taille moyenne": "2.50 m",
      "Rotor": "2 m",
      "Max. largeur de l’épandeur de fumier": "10/12 m",
      "Pneus semi-neufs": "445/65 R.22.5",
      "Poids": "7200 kg"
    },
    "equipment_on_demand": [
      "Volet hydraulique",
      "Poussoir latéral sur chaînes",
      "Vanne d'écluse",
      "Freinage hydraulique ou pneumatique Homologation 200 quintaux",
      "Double fond",
      "Station de fumier semi-liquide"
    ]
  },
  {
    "id": 27,
    "name": "Épandeur à fumier Modèle L / 140 G (GIANT)",
    "category": "Epandeur De Fumier",
    "specifications": {
      "Capacité totale certifiée": "140 quintaux",
      "Puissance requise": "140/110 CV",
      "Capacité moyenne approximative": "15/17 m³",
      "Longueur du corps": "7 m",
      "Hauteur latérale": "1.50 m",
      "Bande de roulement": "2.05 m",
      "Max. taille moyenne": "2.45 m",
      "Rotor": "2 m",
      "Max. largeur de l’épandeur de fumier": "10/12 m",
      "Pneus semi-neufs": "445/65 R.22.5",
      "Poids": "5300 kg"
    },
    "equipment_on_demand": [
      "Volet hydraulique",
      "Poussoir latéral sur chaînes",
      "Freinage hydraulique ou pneumatique Homologué 140 quintaux",
      "Double fond",
      "Côtés galvanisés"
    ]
  },
  {
    "id": 28,
    "name": "Épandeur de fumier Modèle L / 35-C Décharge frontale",
    "category": "Epandeur De Fumier",
    "specifications": {
      "Capacité totale certifiée": "40 quintaux",
      "Puissance requise": "PV 30",
      "Capacité moyenne approximative": "2.5/2 m³",
      "Longueur du corps": "2.5 m",
      "Hauteur latérale": "0.75 m",
      "Bande de roulement": "1.60 m",
      "Max. taille moyenne": "1.50 m",
      "Rotor": "1.4 m",
      "Max. largeur de l’épandeur de fumier": "5/6 m",
      "Pneus semi-neufs": "11.5/80.15.3 | 12.5/80 R.20",
      "Poids": "1200 kg"
    },
    "equipment_on_demand": [
      "Avancement continu et oléo dynamique",
      "Freins mécaniques",
      "Inverseur à levier",
      "Installation pour lisier semi-liquide - Agrément mécanique",
      "Système d'éclairage",
      "Plateau basculant hydraulique",
      "Timon de direction"
    ]
  },
  {
    "id": 29,
    "name": "Epandeur de fumier Modèle LP200 MAX",
    "category": "Epandeur De Fumier",
    "specifications": {
      "Capacité totale certifiée": "4000 kg",
      "Puissance requise": "HP 150/ 180",
      "Capacité moyenne approximative": "18 / 22 m³",
      "Longueur du corps": "6 m",
      "Hauteur latérale": "1.50 m",
      "Bande de roulement": "1,90 m",
      "Max. taille moyenne": "2.50 m",
      "Rotor": "1.4 m",
      "Max. largeur de l’épandeur de fumier": "5/6 m",
      "Pneus semi-neufs": "11.5/80.15.3 | 12.5/80 R.20",
      "Poids": "9000 kg"
    },
    "equipment_on_demand": [
      "Vanne hydraulique double",
      "Banques de zinc",
      "Fermeture hydraulique arrière",
      "Homologation pneumatique et hydraulique"
    ]
  },
  {
    "id": 30,
    "category": "Epandeur De Fumier",
    "name": "Epandeur de fumier Modèle L /40 - Déchargement latéral antérieur",
    "specifications": {
      "Capacité totale certifiée": "4000 kg",
      "Puissance requise": "HP 40",
      "Capacité moyenne approximative": "¾ m³",
      "Longueur du corps": "3 m",
      "Hauteur latérale": "0,75 m",
      "Bande de roulement": "1,60 m",
      "Max. taille moyenne": "1,80 / 1,90 m",
      "Rotor": "1,4 m",
      "Max. largeur de l'épandeur de fumier": "5/6 m",
      "Pneus semi-neufs": "11,5 / 80.15.3 | 12,5 / 80 R.20",
      "Poids": "1200 kg"
    },
    "optional_equipment": [
      "Alimentation hydraulique",
      "Freins mécaniques",
      "Inverseur à levier",
      "Système pour lisier semi-liquide",
      "Système d’éclairage"
    ]
  },
  {
    "id": 31,
    "category": "Matériels de récolte des olives",
    "name": "OlivGreen ML 150 Plus",
    "equipments": ["câble d'extension de 15 m"],
    "specifications": {
      "Modèle": "OGML150PLUS",
      "Moteur": "MEOGML150PLUS",
      "Vitesse de rotation": "12",
      "Poids (kg)": "60",
      "Puissance absorbée (W)": "1200",
      "Nombre de doigts": "6/8",
      "Longueur max. de coupe (m)": "2.2>3.1",
      "Longueur de l'extension (m)": "3.1",
      "Débit d'air (m3/min)": "90/100"
    },
    "description": "La cueillette électrique Olivgreen ML 150 Plus est conçue pour une récolte complète des olives «professionnelle». Le moteur innovant à TROIS DIMENSIONS (haut-bas / rotation) et la configuration à double râteau garantissent une productivité maximale, dans le respect total de l’installation. Cette machine convient pour travailler sur différents types d’oliviers, avec une végétation généralement taillée. La machine est bien équilibrée et se compose d’un groupe d’en-tête, une perche télescopique avec mécanisme de verrouillage et poignée, où se trouvent le moteur / transformateur 12V et l’interrupteur MARCHE / ARRÊT."
  },
  {
    "id": 32,
    "category": "Matériels de récolte des olives",
    "name": "Ramasseuse d’olives manuelle",
    "models": [
      {
        "Modèle": "Modèle 1",
        "Largeur du rouleau": "35 cm",
        "Poids": "3 Kg",
        "Production": "120 Kg/h",
        "Description": "Plateau à vide pivotant Disponible avec plateau simple ou troué"
      },
      {
        "Modèle": "Modèle 2",
        "Largeur du rouleau": "70 cm",
        "Poids": "8 Kg",
        "Production": "250 Kg/h",
        "Description": "Disponible avec plateau simple ou troué"
      },
      {
        "Modèle": "Modèle 3",
        "Largeur du rouleau": "70 cm",
        "Poids": "15 Kg",
        "Production": "485 Kg/h",
        "Description": "Double rouleau: il cueille toutes les olives du terrain avec un seul passage"
      }
    ],
    "description": "Récolteuse d'olives pratique recommandée pour les zones d'accès difficile et les terrains accidentés. Ainsi qu'elle est connue par sa facilité d'utilisation, sa productivité et son efficacité en font une récolteuse unique."
  },
  {
    "id": 33,
    "category": "Matériels de récolte des olives",
    "name": "OlivGreen 500 Plus",
    "models": [
      {
        "Modèle": "OG500S-PLUS",
        "MEOG500S-PLUS": 12,
        "60": 60,
        "1200": 1200,
        "6/8": "6/8",
        "1.7>2.2": "1.7>2.2",
        "2.5": 2.5,
        "80/100": "80/100"
      },
      {
        "Modèle": "OG500PLUS",
        "MEOG500-PLUS": 12,
        "60": 60,
        "1200": 1200,
        "6/8": "6/8",
        "2.2>3.1": "2.2>3.1",
        "2.7": 2.7,
        "80/100": "80/100"
      }
    ],
    "description": "La cueilleuse électrique OlivGreen 500 Plus est conçue pour la récolte professionnelle des olives. Cette machine est adaptée pour travailler sur différents types d’oliviers, avec une végétation généralement taillée. La disposition et le mouvement latéral des râteaux assurent des rendements optimaux. La machine est bien équilibrée et se compose d’un groupe collecteur, d’une perche télescopique avec mécanisme de verrouillage et poignée, où se trouvent le moteur/transformateur 12V et l’interrupteur ON/OFF. Il dispose également d’un système de sécurité.",
    "equipment": [
      "Rallonge de 15m."
    ]
  },
  {
    "id": 34,
    "category": "Matériels de récolte des olives",
    "name": "OlivGreen 300 Plus",
    "models": [],
    "description": "La cueilleuse électrique Olivgreen 300 Plus est conçue pour la récolte « professionnelle » des olives. C’est une machine adaptée pour une utilisation sur des arbres à taille moyenne. La disposition et le mouvement frontal des andaineurs assurent des rendements optimaux. La machine est bien équilibrée et se compose d’un groupe collecteur, d’une perche télescopique avec mécanisme de verrouillage et poignée, où se trouvent le moteur/transformateur 12V et l’interrupteur ON/OFF. Il dispose également d’un système de sécurité.",
    "equipment": [
      "Rallonge de 15m."
    ]
  },
  {
    "id": 35,
    "category": "Travail du sol",
    "name": "Sous-soleuse Kansas",
    "models": [],
    "description": "Sous-soleuse avec un système mécanique de sécurité idéal pour la préparation du sol et l'obtention d'une meilleure efficacité au travail postérieur pour après obtenir un terrain totalement émietté et oxygéné.",
    "equipment": [
      "Système mécanique de sécurité au moyen d’un fusible.",
      "Bras avec des ailerons spéciaux pour mieux rompre la couche compacte du sous-sol.",
      "Protections selon normes CE."
    ]
  },
  {
    "id": 36,
    "category": "Travail du sol",
    "name": "Sous-soleuse Nebraska",
    "models": [],
    "description": "Sous-soleuses décompacteurs avec des bras incurvés dessinés pour qu'ils pénètrent profondément dans la terre et cassent la couche dure du sous-sol pour que il filtre l'eau et conserve mieux l'humidité, mais en même temps mouver la terre existante entre les bras, en la levant légèrement et en la laissant ensuite dans le lieu qui se trouvait."
  },
  {
    "id": 37,
    "category": "Travail du sol",
    "name": "Sous-soleuse Eagle",
    "models": [],
    "description": "Une sous-soleuse est indispensable pour déplacer la couche dure du sous-sol avec l'objectif de conserver l'humidité d'une pénétration facile et une grande robustesse."
  },
  {
    "id": 38,
    "category": "Travail du sol",
    "name": "Rotovateur Mega Flash",
    "models": [],
    "description": "Fraises, série Professional pour aération du sol.",
    "equipment_standard": {
      "Caisse d’engrenages": "à 4 vitesses.",
      "Châssis": "renforcé.",
      "Transmission": "latérale par engrenages.",
      "Rotor": "avec 6 couteaux par disque.",
      "Couteaux": "de grande résistance à tout type de sol.",
      "Portails arrière": "réglables par chaînes.",
      "Patins": "inclus.",
      "Cardan": "avec embrayage compris.",
      "Protections": "selon normes CE."
    }
  },
  {
    "id": 39,
    "category": "Travail du sol",
    "name": "Rotovateur Flash Top",
    "models": [],
    "description": "Fraises, série renforcée pour aération du sol.",
    "equipment_standard": {
      "Transmission": "latérale par engrenages.",
      "Rotor": "avec 6 couteaux par disque.",
      "Couteaux": "de grande résistance à tout type de sol.",
      "Portail arrière": "réglable par chaînes.",
      "Patins": "inclus.",
      "Cardan": "avec embrayage compris.",
      "Protections": "selon normes CE."
    }
  },
  {
    "id": 40,
    "category": "Travail du sol",
    "name": "Rotovateur Flash Plus",
    "models": [],
    "description": "Fraises, série renforcée pour aération du sol.",
    "equipment_standard": {
      "Transmission": "latérale par engrenages.",
      "Rotor": "avec 6 couteaux par disque.",
      "Couteaux": "de grande résistance à tout type de sol.",
      "Portail arrière": "réglable par chaînes.",
      "Patins": "inclus.",
      "Cardan": "avec embrayage compris.",
      "Protections": "selon normes CE."
    }
  },
  {
    "id": 41,
    "category": "Travail du sol",
    "name": "Rotovateur Flash",
    "models": [],
    "description": "Fraises, série standard pour aération du sol.",
    "equipment_standard": {
      "Transmission": "latérale par chaîne.",
      "Rotor": "avec 6 couteaux par disque.",
      "Couteaux": "courbes, de grande résistance à tout type de sol.",
      "Portail arrière": "réglable par chaînes.",
      "Patins": "inclus.",
      "Cardan": "avec embrayage compris.",
      "Protections": "selon normes CE."
    }
  },
  {
    "id": 42,
    "category": "Travail du sol",
    "name": "Rotovateur Eco Flash",
    "models": [],
    "description": "Fraises, série légère pour aération du sol.",
    "equipment_standard": {
      "Transmission": "latérale par chaîne.",
      "Rotor": "avec 4 couteaux par disque.",
      "Couteaux": "de grande résistance à tout type de sol.",
      "Portail arrière": "réglable par chaînes.",
      "Patins": "inclus.",
      "Cardan": "compris.",
      "Protections": "selon normes CE."
    }
  },
  {
    "id": 43,
    "category": "Travail du sol",
    "name": "Déchaumeur à disques CALIFORNIA",
    "models": [],
    "description": "Le déchaumeur à disques émiette et mêle la matière organique pour favoriser sa décomposition. Principalement l'humidité s'emploie à affirmer dans le sol et à enterrer les restes végétaux et les sarments restants quand le broyeur a passé. Le travail est de peu de profondeur mais de vitesse élevée. Les disques dentés pénètrent rapidement dans le sol et son angle d'attaque il assure un travail du sol sans des obstructions. Herse rapide pour vignes.",
    "features": {
      "Système modulaire de graduation": "du nombre de disques et de sa largeur de travail.",
      "Châssis": "80 x 80 x 8 mm.",
      "Disques individuels": "de 20 ″ (510 mm).",
      "Montage des disques": "en X.",
      "Amortissement": "par une suspension indépendante d’absorption choque 3D.",
      "Supports": "de haute qualité, étanches et sans entretien.",
      "Bras central": "pour couvrir toute la surface.",
      "Rouleau cage arrière": "Ø 400 mm.",
      "Attelage": "CAT II.",
      "Prédisposition": "pour grattoirs à disques.",
      "Protections": "pour éviter les accidents selon les normes CE."
    }
  },
  {
    "id": 44,
    "category": "Travail du sol",
    "name": "Porte-Interceps MERLOT",
    "models": [],
    "description": "Porte-interceps arrière avec attelage trois points avec une structure hautement renforcée pour le montage de différents outils inter-rangs.",
    "features": {
      "Equipement standard": [
        "Châssis à structure hautement renforcée",
        "Attaches CAT-I",
        "Réglage mécanique de la largeur.",
        "Ouverture 375 mm par bras (total 750 mm).",
        "Le support inter-filtres ne comprend pas en standard : Les interceps, les roues de contrôle de profondeur et les bras rigides avec socs piocheur.",
        "Protections pour éviter les accidents selon la réglementation CE."
      ]
    }
  },
  {
    "id": 45,
    "category": "Travail du sol",
    "name": "Interceps SNAKE UNIK/DUO",
    "models": [],
    "description": "Interceps pour montage dans cultivateurs ou semi-chisels pour une profondeur de travail entre 5 et 10 cm et vitesse de 5-10 km/h. Débit requis d'huile 12 lt / min par unité.",
    "features": {
      "Equipement standard": [
        "Sonde",
        "Lame anti-usure de L = 370, L = 500 ou L = 620 mm selon le modèle",
        "2 ou 3 ailettes selon la lame, pour éliminer les grumeaux.",
        "Piston spécial de simple effet et limiteur de pression",
        "Tubes hydrauliques jusqu’au tracteur",
        "Remarque importante : les deux tubes hydrauliques doivent toujours être connectés l’un sous pression et l’autre au retour sans pression (vers le réservoir).",
        "Protections pour éviter les accidents selon la réglementation CE."
      ]
    }
  },
  {
    "id": 46,
    "category": "Travail du sol",
    "name": "Cultivateur THOR",
    "models": [],
    "description": "Cultivateur pour la préparation du sol dans les vignes. Possibilité d'installer des kits interceps aux deux côtés du châssis.",
    "features": {
      "Equipement standard": [
        "Attelage fixe à plusieurs positions.",
        "Bras Bellota avec ressorts d’haute résistance.",
        "Bras des pointes déportées pour un meilleur rapprochement.",
        "Structure du châssis en tubes de 80 x 80 x 8",
        "Châssis réglable en largeur mécaniquement.",
        "Rouleau arrière réglable en hauteur très renforcé Ø400 mm de baguettes rondes (spécifier mesure à la commande).",
        "Prédisposition pour installer des kits interceps aux deux côtés du châssis.",
        "Protections selon normes CE."
      ]
    }
  },
  {
    "id": 47,
    "category": "Matériels agricoles",
    "name": "Rampe désherbage / manuelle",
    "models": [],
    "description": "Rampe désherbage manuelle avec réglage de la largeur de travail et de l’inclination du capot. Ressort antichoc sur la cloche. Buses avec anti goutte + jet orientable en bout. Cloche avec protecteur supérieur en plastique.",
    "features": {}
  },
  {
    "id": 48,
    "category": "Matériels agricoles",
    "name": "Rotovateur interligne",
    "models": [],
    "description": "Machine de base: Rotovateur inclinaison de la tête avec piston hydraulique (2 raccords rapides), déplacement latéral hydraulique (2 raccords rapides) transmission pour cardan, vanne de blocage, double attelage aux trois points du tracteur, câble de sécurité pour appel d’urgence. Machine appropriée pour l’éradication de l’herbe entre les plantes et autour du tronc.",
    "features": {}
  },
  {
    "id": 49,
    "category": "Fertigation automatique",
    "name": "Fertikit ™ 3G Netafim",
    "models": [],
    "description": "Tout est question de précision - optimisez les rendements tout en réduisant les coûts. Prenez le contrôle du dosage des nutriments et donc de votre résultat net ! Produisez des rendements plus élevés tout en économisant l'eau et la main-d'œuvre avec ce système de dosage de nutriments polyvalent. Vos cultures recevront exactement les nutriments dont elles ont besoin, au moment précis où elles en ont besoin. Avec Fertikit ™ 3G, vous contrôlez le dosage des cultures produites en plein champs, en vergers ou en petites structures.",
    "features": {
      "Contrôle": "Fertikit 3G vous permet de contrôler la nutrition des plantes en améliorant à la fois le rendement et la qualité des cultures. Avec six canaux de dosage distincts, vous aurez un contrôle total sur l’ensemble de votre programme de nutrition des plantes.",
      "Conception modulaire": "Avec la gamme de produits modulaires intelligents de Fertikit 3G, vous ne payez que pour les fonctionnalités que vous utilisez et vous pouvez ajouter autres fonctionnalités au fur et à mesure.",
      "Polyvalent": "Vous avez le choix entre sept modèles, avec ou sans pompe de surpression intégrée, pour convenir à toutes les tailles de champ et à une vaste gamme de capacités de système d’irrigation.",
      "Abordable": "Nécessite un investissement minimal et offre un retour sur investissement rapide.",
      "Bien conçu": "Le système est conçu pour durer, avec les meilleurs matériaux et des injecteurs venturi, sans pièces mobiles.",
      "Adaptable": "Compatible avec tout système de contrôle et de surveillance tiers existant, vous permettant d’exploiter votre irrigation et la nutrition des plantes à distance en vous connectant à la fois à des capteurs de terrain et à des sources de données externes."
    }
  },
  {
    "id": 50,
    "category": "Fertigation automatique",
    "name": "NetaJet 4G Netafim",
    "models": [],
    "description": "Les adeptes du contrôle total n’ont jamais été aussi bien servis. NetaJet 4G™ offre le plus haut niveau de ferti-irrigation de précision du secteur.",
    "features": {
      "Productif": "Améliore le rendement et la qualité des cultures en assurant un contrôle précis dupH et de l’Ec (électro-conductivité).",
      "Uniforme": "La chambre de mélange à réservoir ouvert fournit les nutriments en quantités et en proportions uniformes.",
      "Rentable": "Utilise une seule et même pompe pour mélanger et injecter les nutriments, minimisant la consommation d’énergie tout en préservant la main- d’œuvre, l’eau et les engrais.",
      "Stable": "Fonctionnement hydraulique lisse et stable.",
      "Facile": "Facile à installer et pratiquement sans entretien, sans pièces mobiles (technologie venturi).",
      "Rapide": "Réalisation rapide du point de consigne Ec / pH. Temps de stabilisation et cycles de ferti-irrigation courts.",
      "Précis": "Fournit 8 canaux de dosage d’engrais / acide très précis de 50-600 l/h (13-156 gal/h)."
    }
  },
  {
    "id": 51,
    "category": "Fertigation automatique",
    "name": "NetaFlex 3G Netafim",
    "models": [],
    "description": "Les producteurs en serre ont besoin d’un système de dosage en réservoir ouvert extrêmement précis et fiable pour tirer le meilleur parti de leurs cultures.",
    "features": {
      "Application": "Couvre toutes les applications allant de la serre plein champ jusqu’aux cultures intensives hors-sol.",
      "Complet": "Fonctionne avec une large gamme d’unités de canal de dosage et de débits (jusqu’à 6 unités de 50 à 600 l/h chacune).",
      "Evolutif": "Débit du système allant de 3 m3/h à 64 m3/h.",
      "Rapide": "Comporte des vannes de dosage à actionnements rapides et des ajustements efficaces de la recette de ferti-irrigation.",
      "Adaptable": "Offre une large gamme d’accessoires et de périphériques intégrés ainsi qu’une interface multilingue.",
      "Maintenance réduite": "Le cadre est en aluminium résistant à la corrosion. Les composants et la tuyauterie en PVC sont fabriqués à partir de matériaux de haute qualité.",
      "Polyvalent": "La capacité de débit va de 0,1 Ha à 10 Ha.",
      "Précis": "Fournit 6 canaux de dosage d’engrais/acide de 50 à 600 l/h (13-156 gal/h) très précis."
    }
  },
  {
    "id": 52,
    "category": "Lignes de goutteurs autorégulant",
    "name": "Tube lisse noir",
    "models": [
      {
        "diameter_mm": 16,
        "thickness_mm": 1,
        "roll_length_m": 500
      },
      {
        "diameter_mm": 20,
        "thickness_mm": 1,
        "roll_length_m": 300
      },
      {
        "diameter_mm": 20,
        "thickness_mm": 1.2,
        "roll_length_m": 300
      }
    ],
    "description": "Tous les tuyaux sont fabriqués à partir de matériaux durables, les rendent résistants aux UV et à l’oxydation pour au moins 50 ans.",
    "features": {
      "Résistance": "Résistant aux UV, à l’oxydation, à l’eau saline, aux solutions alcalines ou acides (à l’exception des solutions très concentrées) et à la plupart des substances utilisées dans des applications agricoles.",
      "Fiabilité": "Fabriqué avec les meilleures résines de polyéthylène disponibles de densité faible / moyenne pour résister à la fissuration et à la déformation, assurant une fiabilité à long terme.",
      "Uniformité": "Fabrication de précision pour assurer une uniformité du diamètre intérieur et de l’épaisseur de paroi.",
      "Utilisation": "Peut être utilisé comme connecteur, tuyau de distribution ou pour alimenter des tuyères et turbines. Peut être utilisé comme tuyau de distribution pour les systèmes d’irrigation par micro-aspersion."
    }
  },
  {
    "id": 53,
    "category": "Lignes de goutteurs autorégulant",
    "name": "Tuyaux Streamline X",
    "models": [
      {
        "spacing_cm": 10,
        "flow_rate_lph": 1,
        "roll_length_m": 2000
      },
      {
        "spacing_cm": 10,
        "flow_rate_lph": 2.2,
        "roll_length_m": 2000
      },
      {
        "spacing_cm": 15,
        "flow_rate_lph": 1.1,
        "roll_length_m": 2600
      },
      {
        "spacing_cm": 15,
        "flow_rate_lph": 1.6,
        "roll_length_m": 2600
      },
      {
        "spacing_cm": 15,
        "flow_rate_lph": 2.2,
        "roll_length_m": 2000
      },
      {
        "spacing_cm": 15,
        "flow_rate_lph": 2.2,
        "roll_length_m": 2200
      },
      {
        "spacing_cm": 20,
        "flow_rate_lph": 1.1,
        "roll_length_m": 2600
      },
      {
        "spacing_cm": 20,
        "flow_rate_lph": 1.6,
        "roll_length_m": 2600
      },
      {
        "spacing_cm": 25,
        "flow_rate_lph": 1.05,
        "roll_length_m": 2200
      },
      {
        "spacing_cm": 25,
        "flow_rate_lph": 1.6,
        "roll_length_m": 2200
      },
      {
        "spacing_cm": 30,
        "flow_rate_lph": 1.1,
        "roll_length_m": 3000
      },
      {
        "spacing_cm": 30,
        "flow_rate_lph": 1.6,
        "roll_length_m": 3000
      }
    ],
    "description": "Streamline™X est la ligne d'égouttement à paroi mince la plus résistante jamais conçue, incorporant des nervures internes et externes de renforcement qui améliorent la robustesse de la ligne d'égouttement et protègent le tuyau des dommages.",
    "features": {
      "Robustesse": "La surface nervurée unique agit comme une barrière entre le sol et le tuyau, elle protège le produit et rend l’installation et la récupération des lignes plus facile que jamais.",
      "Renforcement": "Streamline™ X comprend des nervures de renforcement externes mais également en interne qui améliorent la robustesse du goutteur et aident à protéger le tuyau contre les dommages mécaniques.",
      "Goutteur moulé": "Goutteur moulé de haute qualité. L’absence de soudure durant le processus de fabrication et les nervures internes augmentent la résistance des lignes de goutteurs.",
      "Uniformité": "Uniformité optimale et résistance au colmatage grâce au labyrinthe TurboNet ™.",
      "Protection contre le colmatage": "Goutteurs disposant du système FLAP : un clapet ouvert seulement pendant l’irrigation limitant ainsi l’obstruction du goutteur hors irrigation."
    },
    "specifications": {
      "Finesse de filtration": "130 microns / 120 mesh.",
      "Diamètres de tuyaux": "Gamme de diamètres de tuyaux de 12,0 à 22,0 mm.",
      "Variété de débits": "0,72 à 2,8 l / h."
    }
  },
  {
    "id": 54,
    "category": "Lignes de goutteurs autorégulant",
    "name": "Tuyaux Uniram AS",
    "models": [
      {
        "spacing_cm": 50,
        "flow_rate_lph": 1,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 2.3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 3.5,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 2.3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 3.5,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 1,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 2.3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 3.5,
        "roll_length_m": null
      }
    ],
    "description": "La ligne goutte à goutte UniRam™ AS offre une uniformité fiable dans l’irrigation goutte à goutte enterrée (SDI), même dans les topographies complexes, grâce à son mécanisme autorégulant et anti-siphon qui empêche l’aspiration des particules.",
    "features": {
      "Pression compensée": "Les quantités précises et uniformes d’eau sont livrées sur une large plage de pression. 100% d’uniformité de distribution de l’eau et des nutriments tout au long du réseau d’irrigation.",
      "Mécanisme Anti-Siphon": "Bloque l’aspiration des impuretés extérieures à l’arrêt de l’irrigation.",
      "Auto-nettoyage continu": "Goutteur auto-nettoyant avec une large surface de filtration permettant d’améliorer la résistance au colmatage. Les débris sont éjectés par les goutteurs durant toute l’opération d’irrigation.",
      "Barrière anti-racine": "Meilleure protection contre l’intrusion des racines sans utilisation de produits chimiques.",
      "Double labyrinthe TurboNetTM": "Assure une large et profonde section de passage d’eau, permettant d’augmenter la résistance au colmatage."
    },
    "specifications": {
      "Finesse de filtration": "130μ / 120 mesh.",
      "Diamètres de tuyaux": "Gamme de diamètres de tuyaux de 16,0 à 23,0 mm.",
      "Variété de débits": "5 débits différents (0,7, 1,0, 1,6, 2,3, 3,5 L / H).",
      "Plage de compensation de pression": "0,4-5,0 bar."
    }
  },
  {
    "id": 55,
    "category": "Lignes de goutteurs autorégulant",
    "name": "Tuyaux Dripnet AS",
    "models": [
      {
        "spacing_cm": 50,
        "flow_rate_lph": 1,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 2,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 50,
        "flow_rate_lph": 3.8,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 1,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 2,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 75,
        "flow_rate_lph": 3.8,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 1,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 1.6,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 2,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 3,
        "roll_length_m": null
      },
      {
        "spacing_cm": 100,
        "flow_rate_lph": 3.8,
        "roll_length_m": null
      }
    ],
    "description": "Doté d’un mécanisme anti-siphon, le goutteur PC intégré DripNet PC ™ AS garantit une irrigation goutte à goutte souterraine (SDI) fiable et uniforme dans tout type de topographie.",
    "features": {
      "Mécanisme Anti-Siphon": "Empêche l’aspiration de la saleté pendant la vidange du système, ce qui rend indispensable l’égouttage des conduites installées sous le sol.",
      "Auto-nettoyage continu": "Améliore la résistance au colmatage, en particulier dans des conditions d’eau difficiles.",
      "Variété de débits": "7 débits différents (0,4, 0,6, 1,0, 1,6, 2,0, 3,0, 3,8 L / H) peuvent répondre à n’importe quelle condition ou application."
    },
    "specifications": {
      "Finesse de filtration": "Selon le débit du goutteur.",
      "Plage de compensation de pression": "0,25, 0,40, 0,60 – 2,5, 3,0, 3,5 bar (selon le modèle de débit)."
    }
  },
  {
    "id": 56,
    "category": "Accessoires",
    "name": "Manomètre",
    "description": "Instrument de mesure de pression.",
    "additional_info": "Permet de surveiller la pression dans les systèmes d'irrigation."
  },
  {
    "id": 57,
    "category": "Accessoires",
    "name": "Réducteur de pression",
    "description": "Dispositif utilisé pour réduire la pression de l'eau dans un système d'irrigation.",
    "additional_info": "Permet de maintenir la pression de l'eau à un niveau constant et sûr, évitant ainsi les dommages aux équipements et assurant une irrigation efficace."
  },
  {
    "id": 58,
    "category": "Accessoires",
    "name": "Solénoïde Netafim"
  },
  {
    "id": 59,
    "name": "Vannes à air",
    "category": "Accessoires",
    "description": "Un produit idéal pour la protection des réseaux contre les dommages liés à la présence ou à l’absence d’air. C’est une valve cinétique d'air et de vide en plastique qui peut admettre ou évacuer de grandes quantités d'air vers / depuis un système. Les vannes d’air et de vide sont principalement utilisées là où l’installation est régulièrement vidangée et remplie pour éviter l’implosion (due au vide) et les coups de bélier (dus au «rebond» des colonnes d’eau). Une bonne ventilation permet au système d'être rempli plus rapidement et de manière plus sûre.",
    "features": {
      "Fiabilité dans le temps": "Exceptionnelle grâce à l’utilisation de matières premières de très haute qualité et du design éprouvé.",
      "Efficacité": "Réactivité élevée et capacité en volume maximum d’air évacué exceptionnelle.",
      "Offre étendue": "Large gamme permettant de couvrir toutes les utilisations agricoles (standard) et applications de transport de l’eau (sur demande).",
      "Installation facile": "Aucune expertise particulière n’est requise pour réaliser l’installation d’une vanne à air, produit simple et rapide à positionner.",
      "Pression maximum": "10 bars (145 psi) et 16 bars selon les modèles",
      "Débit recommandé": "Jusqu’à 500 m3/h pour la version 2’’ fileté EMEK AV- 10",
      "Température de fonctionnement maximum": "60°C (140°F)",
      "Conception dynamique": "Fonctionne jusqu’à une très grande différence de pression (différence de pression de 0,7 bar pour la libération d’air); empêche la fermeture prématurée."
    }
  },
  {
    "id": 60,
    "name": "Goutteur PC (Pression Compensée)",
    "category": "Accessoires",
    "description": "Lorsque vous avez besoin d'une irrigation goutte à goutte précise, les goutteurs à pression compensée PC fournissent un débit uniforme, quelles que soient les conditions topographiques ou hydriques. Disponible en 3 débits (2 l/h ; 4 l/h ; 8.5 l/h )",
    "features": {
      "Auto-nettoyage continu": "Goutteur auto-nettoyant avec une large surface de filtration permettant d’améliorer la résistance au colmatage. Durant toute l’opération d’irrigation (pas seulement au début et à la fin du cycle), les débris sont éjectés par les goutteurs, ce qui assure un fonctionnement sans interruption.",
      "Pression compensée": "Les quantités précises et uniformes d’eau sont livrées sur une large plage de 100% d’uniformité de distribution de l’eau et des nutriments tout au long du réseau d’irrigation.",
      "Labyrinthe TurboNet™": "Assure une large et profonde section de passage d’eau, permettant d’augmenter la résistance au colmatage. Plus larges passages d’eau dans le goutteur.",
      "Positionnement précis": "Le goutteur peut être positionné exactement là où c’est nécessaire.",
      "Augmentation du nombre de goutteurs": "Le nombre de goutteurs peut être augmenté de manière à accroître l’apport en eau afin de répondre aux exigences de croissance de la plante.",
      "Installation multi-sorties": "Permet une installation de type “multi-sorties”, rendant possible une distribution d’eau simultanée en plusieurs points (1, 2 ou 4).",
      "Débits disponibles": "Disponible en 3 débits (2 l/h ; 4 l/h ; 8.5 l/h )."
    },
    "specifications": {
      "Filtration recommandée": "130µ / 120 mesh. La méthode de filtration doit être choisie en fonction du type et de la concentration des particules d’impuretés présentes dans l’eau. Partout où le sable excède 2 ppm, un hydrocyclone doit être installé avant le filtre principal. Lorsque les sable / limon / argile dépassent 100 ppm, un pré-traitement sera appliqué selon les instructions de l’équipe d’experts Netafim™.",
      "Type de goutteur": "Goutteur à “insérer” dans une ligne de goutte à goutte à paroi épaisse (0.90, 1.00, 1.20 mm).",
      "Matériau": "Goutteur fabriqué par injection plastique de haute qualité, très faible coefficient de variation de débit d’irrigation.",
      "Résistance": "Résistant aux UV et aux nutriments standards utilisés en agriculture.",
      "Normes de production": "Produit conforme aux normes ISO 9261, production certifiée par l’Institut de normalisation (SII)."
    }
  },
  {
    "id": 61,
    "name": "Vanne de purge automatique",
    "category": "Accessoires",
    "description": "Des vannes de purge automatiques sont nécessaires pour une purge appropriée des latéraux et une efficacité améliorée du système d'irrigation.",
    "features": {
      "Modèles disponibles": "2 modèles – Raccord fileté mâle «Flare» et 0,5 »",
      "Compatibilité": "Convient à toutes les épaisseurs et diamètres de paroi des gouttières (avec les adaptateurs appropriés)",
      "Résistance aux UV": "Assure une durabilité prolongée en résistant aux rayons ultraviolets",
      "Facilité d'installation": "Plus grande économie de main-d’œuvre grâce à un montage et une installation faciles",
      "Faible entretien": "Opérations nécessitant peu d’entretien – pas de pièces mobiles ni de ressorts",
      "Durabilité": "Corps résistant aux produits chimiques et aux UV pour une durabilité prolongée",
      "Fiabilité": "Très fiable – faible sensibilité à la qualité de l’eau"
    },
    "specifications": {
      "Matériaux": "Corps résistant aux produits chimiques et aux UV",
      "Montage": "Montage facile avec des adaptateurs appropriés",
      "Entretien": "Opérations nécessitant peu d’entretien – pas de pièces mobiles ni de ressorts",
      "Sensibilité à la qualité de l’eau": "Faible sensibilité à la qualité de l’eau"
    }
  },
  {
    "id": 62,
    "name": "NetFlush",
    "category": "Accessoires",
    "description": "Le NetFlush ™ est une vanne de purge de ligne contrôlée pour l'irrigation goutte à goutte. Avec NetFlush ™, la purge des conduites n’est plus un casse-tête - c’est un travail que les producteurs peuvent faire facilement et automatiquement, en gardant leur système d’irrigation sans particules accumulées, en maximisant les performances et la longévité du système d’irrigation.",
    "features": {
      "Performances de purge optimales": "Vitesse de purge élevée pour maintenir le système d'irrigation propre",
      "Fréquence de purge ajustable": "Permet aux producteurs de purger fréquemment les lignes de goutte à goutte, aux bons intervalles de temps",
      "Efficacité de la purge": "Rend la purge très visible et efficace pour optimiser le système de goutte à goutte",
      "Sécurité maximale": "La seule vanne de purge normalement fermée (NC) sur le marché pour une sécurité maximale",
      "Réduction des coûts de main-d'œuvre": "Réduit le temps de travail d'environ 90% par rapport aux solutions manuelles classiques",
      "Facilité d'utilisation": "Facile à utiliser via une seule commande hydraulique, rinçant chaque ligne de goutte à goutte individuellement",
      "Rinçage simultané de plusieurs lignes": "Rince un groupe de lignes en même temps pour une efficacité accrue",
      "Rentabilité rapide": "Investissement rentabilisé après <1 an, compte tenu des coûts de main-d’œuvre",
      "Réduction des coûts énergétiques": "Réduit les coûts énergétiques grâce à une installation économique et à une disposition efficace"
    }
  },
  {
    "id": 63,
    "name": "Poinçon émetteur à poignée",
    "category": "Accessoires",
    "description": "Le poinçon permet de percer un trou exactement de la bonne dimension pour les pièces d’aspersion sur tube, ce qui permet d’éviter les fuites d’eau."
  },
  {
    "id": 64,
    "name": "Perforateur Universel NETAFIM",
    "category": "Accessoires"
  },
  {
    id: 65,
    name: "Asperseur DNET 9575",
    category: "Accessoires",
    description: "Asperseur DNET 9575 avec buses de couleur codant le débit pour une identification facile.",
    specifications: {
      debitsDisponibles: ["1200", "1400", "1600", "1800", "2000"],
      pressionNominale: "3.0 bar",
      pressionRecommandee: "2.0 à 4.0 bar (à l’arroseur)",
      concentrationSable: "Lorsque la concentration de sable excède 2 ppm, un hydro-cyclone doit être installé avant le filtre principal afin de protéger le système.",
      trajectoireEau: "24 degrés"
    },
    featuresAndBenefits: [
      "Assure un rendement élevé et uniforme",
      "Uniformité de distribution d’un niveau inégalée: efficacité maximum de répartition de l’eau grâce à son bras unique et innovant",
      "Offre une uniformité exceptionnelle en respectant le débit et l’espacement préconisés",
      "L'uniformité de distribution de l’arroseur est la plus élevée du marché"
    ]
  },
  {
    id: 66,
    name: "Asperseur Gyronet",
    category: "Accessoires",
    description: "Vous pouvez compter sur les micro-asperseurs pivotants Gyronet dynamic pour obtenir une uniformité élevée de la culture tout en maintenant vos coûts d'exploitation à un niveau raisonnable.",
    specificationsAndRecommendations: {
      robustesse: "Micro-asperseur très robuste.",
      debitsDifferents: ["200", "250", "300", "400", "500"],
      pressionNominaux: "2.2 bar",
      pressionMaximum: "3.0 bar",
      filtrationRecommandee: "200 micron / 80 mesh. La méthode de filtration doit être choisie en fonction du type et de la concentration des particules d’impuretés présentes dans l’eau. Partout où le sable excède 2 ppm, un hydrocyclone doit être installé avant le filtre principal. Lorsque les sable / limon / argile dépassent 100 ppm, un pré-traitement sera appliqué selon les instructions de l’équipe d’experts Netafim™.",
      connecteurEntree: "1/2″ mâle fileté",
      couleurTurbine: "Violet"
    },
    featuresAndBenefits: [
      "Assure un rendement élevé et uniforme.",
      "Pont étroit offrant peu de masquage de la zone irriguée et optimisant l’uniformité de distribution.",
      "Réduit des coûts de maintenance.",
      "Matières premières extrêmement résistantes à tous les produits chimiques agricoles, aux fertilisants et aux conditions météorologiques.",
      "Mécanisme anti-insecte empêchant la pénétration des insectes dans la zone de la buse du micro-arroseur.",
      "Produit durable et fiable pouvant offrir de longues années de service."
    ]
  },
  {
    id: 67,
    name: "Vanne Papillon",
    category: "Vannes",
    description: "Une vanne idéale placée en sécurité autour de certains systèmes hydrauliques (par exemple des filtres), utilisées par deux elles permettent une bonne isolation du réseau pour mise hors pression et interventions en maintenance. Disponibles en taille 2’’, 2’’1/2, 3 et 4’’ à intercaler entre-brides PN10. Pour réaliser des arrêts physiques de l’écoulement ou des restrictions manuelles. Pour des besoins de contrôle et d’isolement des systèmes sur les stations de tête d’irrigation, les parcelles sur le terrain, en productions agricoles (vigne, arboriculture, serres maraichage ou plein champ) et les systèmes de transport de l’eau.",
    featuresAndBenefits: [
      "Réaliser des économies de fonctionnement : avec une conception conviviale permettant un fonctionnement en douceur de la poignée d’ouverture, léger et très facile à installer, quelle que soit la position, elles permettent de faire des économies en facilitant l’entretien.",
      "Préserver la qualité : fabriqués à partir de matériaux résistant à la corrosion et aux UV, à des conditions hautement abrasives et pour assurer un service à long terme également dans des environnements liquides corrosifs."
    ]
  },
  {
    id: 68,
    name: "Vanne PVC manuelle",
    category: "Vannes",
    description: "Fait à partir du PVC, ces valves peuvent être collées ou filetées sur votre système. Ces vannes offrent un arrêt physique pour les besoins de contrôle ou de service dans les systèmes d’irrigation sur le terrain ou dans les commandes principales. Ils conviennent à toutes les applications. Elles sont idéales pour les installations souterraines ou pour l’usage dans l’industrie minière. Elles sont également extrêmement résistantes aux produits chimiques et aux acides concentrés. Et elles sont conçues pour être facilement configurées pour différents genres d’utilisations.",
    dimensions: ["3/4″", "1″", "1″ 1/4", "1 « 1/2", "2″", "2″1/2", "3″", "4″"]
  },
  {
    id: 69,
    name: "Power Tape",
    category: "Equipements hydrauliques et d'irrigation",
    description: "Power Tape est une gaine légère à labyrinthe continu, idéale en cas de petits espacements pour l'application dans les cultures horticoles et floricoles en plein champ.",
    specifications: {
      diameter: 16,
      coilLength: "3050 m",
      emitterSpacing: "10 cm",
      flowRate: "1.2 L/h"
    },
    features: [
      "Excellente résistance aux pics de pression, même sur les faibles épaisseurs.",
      "Excellente résistance à la traction.",
      "Le design particulier du labyrinthe permet d’atteindre de grandes longueurs avec une uniformité maximale.",
      "Performances élevées en termes d’uniformité, y compris pendant les cycles de fertigation.",
      "Comparée aux autres produits, elle est réalisée à travers un procédé d’extrusion unique qui évite les problèmes liés à la soudure.",
      "Construction sans couture pour plus de solidité et de facilité d’installation.",
      "Pour plus de fiabilité et pour une installation uniforme, le Power Tape d’IRRITEC est fabriqué à l’aide de goutteurs moulés par injection pour un degré élevé de résistance au colmatage et garantie une distribution uniforme de l’eau sur de longues distances."
    ]
  },
  {
    id: 70,
    name: "Compteur Multi-Jet",
    category: "Compteurs d'eau",
    description: "Compteur d’eau dont le système de mesure est placé dans le flux ce qui augmente la précision de la mesure, et destine le compteur à un usage sur eaux filtrées agricoles.",
    models: [
      { model: "M15", dimensions: "1/2\"", maxFlowRate: "3 m³/h" },
      { model: "M20", dimensions: "3/4\"", maxFlowRate: "5 m³/h" },
      { model: "M25/7", dimensions: "1'", maxFlowRate: "7 m³/h" },
      { model: "M25/10", dimensions: "1'", maxFlowRate: "10 m³/h" },
      { model: "M30", dimensions: "1\" 1/4", maxFlowRate: "12 m³/h" },
      { model: "MS40", dimensions: "1\" 1/2", maxFlowRate: "20 m³/h" }
    ]
  },
  {
    id: 71,
    name: "Compteur Octave",
    category: "Compteurs d'eau",
    description: "Un compteur d'eau en vrac à ultrasons révolutionnaire, précis et ultra fiable sans pièces mobiles. Avec des batteries hydrauliques et des batteries de qualité supérieure qui durent plus de 15 ans.",
    availableSizes: [
      { size: "DN50 – DN300 (2 ”-12”)", bodyMaterial: "fonte" },
      { size: "DN40 et DN50 (1½ « -2 »)", bodyMaterial: "polymère" },
      { size: "DN50 – DN200 (2 ”-8”)", bodyMaterial: "acier inoxydable" }
    ]
  },
  {
    id: 72,
    name: "Compteur WOLTMAN",
    category: "Compteurs d'eau",
    description: "Compteurs exceptionnellement précis avec des performances optimales. Convient à une large gamme d'applications et de mesures de débit.",
    features: {
      transmission: "Double transmission magnétique pour entraîner le registre, ce qui permet au compteur de gérer des charges élevées de sable car seule la roue est en contact avec l'eau.",
      gearsLocation: "Les engrenages de transmission sont situés dans un compartiment étanche et sec qui n’a aucun contact avec l’eau.",
      precision: "La roue, située au centre du flux, permet des mesures très précises sur une large gamme de débits."
    },
    availableSizes: ["3\"", "4\"", "6\"", "8\"", "10\"", "12\""]
  },
  {
    id: 73,
    "name": "Compteur Arad",
    "category": "Compteurs d'eau",
    "description": "La gamme de compteurs d’eau NETAFIM™ ARAD possède un niveau supérieur de qualité métrologique, ce qui en fait l’un des produits les plus fiable et précis du marché. Ce produit IRT (technologie de mesure tangentielle) permet de répondre parfaitement aux exigences liées à une irrigation localisée (par exemple irrigation au goutte à goutte enterré) pour contrôler efficacement le bon apport de la dose d’irrigation journalière. Présents sur le marché français depuis longtemps, ces produits comptent de nombreux utilisateurs satisfaits et exigeants lorsqu’il s’agit de sélectionner, suivre et maintenir les produits (pièces détachées disponibles). Le modèle présenté ici est avec entrée et sortie bride 2 »1/2 (ou DN65) pour travailler sur des débits allant de 10 à 150 m3/h (valeur idéale nominale de 70 m3/h offrant le maximum de précision). Il est important de respecter une longueur droite de 10 diamètres de canalisation (650 mm) avant le compteur et 5 diamètres (325 mm) après pour tranquilliser le flux et maximaliser la précision de lecture. La pression maximale d’utilisation est de 16 bars.",
    "features": {
      "technologie": "Technologie tangentielle compatibles avec des eaux agricoles",
      "entréeSortie": "Entrée et sortie à bride 2 »1/2",
      "débitMinimum": "Débit minimum 10 m3/h",
      "débitMaximum": "Débit maximum 150 m3/h",
      "longueurDroite": "Respecter une longueur droite de 650 mm en amont et 325 mm en aval"
    }
  }
  
  
  
  
  

  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
  
];

export default products;