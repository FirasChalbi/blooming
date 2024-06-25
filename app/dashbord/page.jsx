"use client";

import React, { useState, useEffect } from "react";
import { HamburgerIcon } from "@chakra-ui/icons";
import {
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  DrawerCloseButton,
  Button,
  useDisclosure,
  Box,
  extendTheme,
  ChakraProvider,
  IconButton,
  Flex,
  useBreakpointValue,
  Heading ,
  Container,
} from "@chakra-ui/react";
import Image from "next/image";
import Link from "next/link";
import ProductContent from "./ProductContent";
import HomeContent from "./HomeContent";
import { useSession, getSession } from "next-auth/react"
import { useRouter } from "next/navigation";
import { ReactNotifications } from 'react-notifications-component'

const components = {
  Drawer: {
    variants: {
      alwaysOpen: {
        dialog: {
          pointerEvents: "auto",
        },
        dialogContainer: {
          pointerEvents: "none",
        },
      },
    },
  },
};

const theme = extendTheme({
  components,
});

function DrawerExample({ setView }) {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const isMobile = useBreakpointValue({ base: true, md: false });

  if (isMobile) {
    return (
      <>
        <IconButton
          icon={<HamburgerIcon />}
          aria-label="Open Drawer"
          onClick={onOpen}
          width="10%"
        />
        <Drawer placement="left" onClose={onClose} isOpen={isOpen}>
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerBody>
              <Flex direction="column" mt={10}>
                <Button
                  onClick={() => {
                    setView("home");
                    onClose();
                  }}
                  w="full"
                  variant="ghost"
                  leftIcon={<HamburgerIcon />}
                  bgColor="white"
                >
                  Home
                </Button>
                <Button
                  onClick={() => {
                    setView("products");
                    onClose();
                  }}
                  w="full"
                  variant="ghost"
                  leftIcon={<HamburgerIcon />}
                  bgColor="white"
                >
                  Products
                </Button>
                
              </Flex>
            </DrawerBody>
          </DrawerContent>
        </Drawer>
      </>
    );
  }

  return (
    <Box
      as="aside"
      position="fixed"
      left="0"
      top="0"
      bottom="0"
      width="17%"
      bg="#f8f9f8"
      color="white"
      p={4}
    >
      <Flex direction="column" align="center">
        <Box mb={10}>
          <Link href="/" passHref>
            <Image
              src="/images/logobb.png"
              width={70}
              height={70}
              alt="Picture of the author"
            />
          </Link>
        </Box>
        <Button
          onClick={() => setView("home")}
          w="full"
          variant="ghost"
          leftIcon={<HamburgerIcon />}
          bgColor="white"
        >
          Home
        </Button>
        <Button
          onClick={() => setView("products")}
          w="full"
          variant="ghost"
          leftIcon={<HamburgerIcon />}
          bgColor="white"
        >
          Add Product
        </Button>
      </Flex>
    </Box>
  );
}

export default function App() {
  const [view, setView] = useState("home");
  const { data: session, status } = useSession();
  const router = useRouter();

  useEffect(() => {
    if (status === "unauthenticated") {
      router.push("/login");
    }
  }, [status, router]);

  if (status === "loading") {
    return <div>Loading...</div>;
  }

  if (status === "unauthenticated") {
    return <p>Access Denied</p>;
  } 
  return (
    <ChakraProvider theme={theme}>
      <ReactNotifications />
      <DrawerExample setView={setView} />
      <Box p={4} >
      {view === "home" && <HomeContent />}
      {view === "products" && <ProductContent />}
      
      </Box>
    </ChakraProvider>
  );
}
