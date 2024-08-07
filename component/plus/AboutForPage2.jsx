"use client"
import React from 'react'
import {Container ,Flex, Text, List, ListItem, ListIcon, Image} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";
import { AiFillCheckCircle } from "react-icons/ai";
function AboutForPage() {
  return (
    <div className='AboutP bg-white' >
    <div className="containerAbout">
  <div className="contentRight">
    <div className="content md:mt-[-55px]">
      <h4 style={{textTransform:"uppercase"}}>PRéSENTATION</h4>
      <h2>Qui sommes nous?</h2>
      <p className='d pr-7' style={{textAlign: "justify", marginBottom:"20px"}}>Nous offrons une vaste sélection de machines professionnelles, incluant leurs pièces de rechange d’origine. Parmi nos fournisseurs, DEUTZ FAHR se distingue comme un géant mondial dans la fabrication de tracteurs de grandes puissances et de moissonneuses-batteuses. DAEDONG-KIOTI est également un partenaire clé, spécialisé dans les petits tracteurs, offrant ainsi une gamme complète adaptée à divers besoins agricoles.<br/>

En ce qui concerne les engrais chimiques hydrosolubles et solides, nous détenons le monopole du marché avec des produits provenant de K+S Minerals and Agriculture GmbH, une entreprise allemande renommée pour la qualité de ses engrais. Nous représentons également YARA, une multinationale norvégienne réputée pour ses solutions innovantes en matière de nutrition des cultures, ainsi que Futureco Bioscience, spécialisée dans les biostimulants et compléments minéraux, apportant une valeur ajoutée notable à notre offre.<br/>

Par ailleurs, nous proposons des solutions de filtration et d’irrigation avec des marques reconnues telles qu’Aqua 4D, Metzer et Irritec. Ces partenariats nous permettent de fournir à nos clients des solutions complètes et fiables pour optimiser leurs systèmes agricoles. Grâce à notre expertise et à ces collaborations stratégiques, nous sommes en mesure de vous offrir un soutien commercial et technique de premier ordre.
</p>
      {/* <List spacing={15} textColor="black" fontSize="medium" fontWeight="500">
        <ListItem className="flex items-center">
            <ListIcon as={AiFillCheckCircle} color='#46C7C7' className="mr-2 mb-1" />
            Meilleure qualite 
        </ListItem>
        <ListItem className="flex items-center">
            <ListIcon as={AiFillCheckCircle} color='#46C7C7' className="mr-2 mb-1" />
            Prix imbattable
        </ListItem>
        <ListItem className="flex items-center">
            <ListIcon as={AiFillCheckCircle} color='#46C7C7' className="mr-2 mb-1" />
            Satisfaction client
        </ListItem>
        </List> */}
      
    </div>
  </div>
  <div className="contentLeft">
    <div className="row">
    <div className=" md:hidden">
  <div className="imgWrapper">
    <img src="/bloomimg/DSC_9303.jpg" alt=""/>
  </div>
</div>

        <div className="imgWrapper">
            <img src="/images/olive3.jpg" alt=""/>
        </div>
        <div className="imgWrapper">
            <img src="/images/olive2.jpg" alt=""/>
        </div>
        <div className="imgWrapper">
            <img src="/images/olive1.jpg" alt=""/>
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default AboutForPage