"use client"
import React from 'react'
import {Container ,Flex, Text, List, ListItem, ListIcon, Image} from "@chakra-ui/react";
import { MdCheckCircle } from "react-icons/md";

function Test() {
  return (
    <>
      <Flex bgColor="white"  direction={{ base: "column", md: "row" }}>
      <Container width="50%" pl="10%" mt="50px" textColor="black">
        <Text mb="3%">OUR INFO</Text>
        <Text mb="3%">Agriculture & Organic Product Form</Text>
        <Text mb="3%">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud ullamco laboris.</Text>
        <List spacing={3}>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Lorem ipsum dolor sit amet, consectetur adipisicing elit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Assumenda, quia temporibus eveniet a libero incidunt suscipit
          </ListItem>
          <ListItem>
            <ListIcon as={MdCheckCircle} color='green.500' />
            Quidem, ipsam illum quis sed voluptatum quae eum fugit earum
          </ListItem>
        </List>
        </Container>
        <Flex mt="50px" mb="50px">
        <Image h="411px" w="274px" borderRadius="10px"  src='/images/a1.jpg'/>
        <Container mt="20px" ml="30px">
        <Image h="202px" w="274px" mb="20px" borderRadius="10px" src='/images/a2.jpg'/>
        <Image h="202px" w="274px" borderRadius="10px" src='/images/a3.jpg'/>
        </Container>
        </Flex>
      </Flex>
    </>
  )
}

export default Test;
