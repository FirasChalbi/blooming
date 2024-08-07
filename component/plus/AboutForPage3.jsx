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
      <p className='d pr-7' style={{textAlign: "justify"}}>Blooming Agri Africa est une entreprise opérant dans le secteur agricole, notamment dans des projets intégrés.</p>
      <a href="/propos" className="btn btn-style btn-outline-light mt-sm-5 mt-4" style={{background:"#46C7C7"}}>
                Voir Plus
              </a>      
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