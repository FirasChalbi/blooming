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
import Update from "./Update";
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


export default function App() {
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
      <Box p={4} >
      <Update />
      </Box>
    </ChakraProvider>
  );
}
