"use client"
import React from 'react'
import {Container ,Flex, Text, List, ListItem, ListIcon, Image} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function AboutForPage() {
  return (
    <div className='AboutP bg-white' >
    <div className="containerAbout">
  <div className="contentRight">
    <div className="content md:mt-[-55px]">
      <h4>OUR INFO</h4>
      <h2>Agriculture & Organic Product Form</h2>
      <p className='d pr-7'>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris.</p>
      <List spacing={15} textColor="black" fontSize="medium" fontWeight="500">
        <ListItem className="flex items-center">
            <ListIcon as={MdCheckCircle} color='green.500' className="mr-2" />
            Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem className="flex items-center">
            <ListIcon as={MdCheckCircle} color='green.500' className="mr-2" />
            Lorem ipsum dolor sit amet
        </ListItem>
        <ListItem className="flex items-center">
            <ListIcon as={MdCheckCircle} color='green.500' className="mr-2" />
            Lorem ipsum dolor sit amet
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