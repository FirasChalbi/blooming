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
      <p className='d pr-7'>Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.<br/>
      Qui font référence à un système d’implémentation qui vise à unifier les intérêts, les objectifs et les pratiques, même au sein de projets
individuels, grâce à un processus basé sur le travail
d'une équipe complète.
</p>
      <List spacing={15} textColor="black" fontSize="medium" fontWeight="500">
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
        </List>
      
    </div>
  </div>
  <div className="contentLeft">
    <div className="row">
    <div className=" md:hidden">
  <div className="imgWrapper">
    <img src="/images/a1.jpg" alt=""/>
  </div>
</div>

        <div className="imgWrapper">
            <img src="/images/a1.jpg" alt=""/>
        </div>
        <div className="imgWrapper">
            <img src="/images/service3.jpg" alt=""/>
        </div>
        <div className="imgWrapper">
            <img src="/images/banner3.jpg" alt=""/>
        </div>
    </div>
  </div>
</div>
</div>
  )
}

export default AboutForPage