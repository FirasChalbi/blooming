const categories = [
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Atomiseurs",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Broyeurs",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Epandeur De Fumier",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels de récolte des olives",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Pulvérisateurs",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Travail du sol",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Fertigation automatique",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Equipements hydrauliques et d'irrigation",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Accessoires",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Compteurs d'eau",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Gaine goutte-à-goutte légère à labyrinthe continu Power Tape",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Lignes de goutteurs autorégulant",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Vannes",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels de filtration",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels de protection des cultures",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Outils professionnels",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Electrique",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Pneumatique",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Engrais et produits de fertilisation",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Activateurs phénologiques",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Activateurs pour fertirrigation",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Biostimulants",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Correcteurs de carences",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Correcteurs de pH",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Correcteurs de salinité",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Correcteurs nutritionnels",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Dynamisation des sols",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Engrais foliaires",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Engrais Organo-minéraux",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Engrais solubles et NPK liquides",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Microgranulés",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "NPK granulés",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Technologies pour engrais de mélange",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    }
  ];
  
  export default categories;
  