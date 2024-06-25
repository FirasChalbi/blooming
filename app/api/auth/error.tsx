// app/auth/error.tsx
"use client";

import React from "react";
import { Box, Text } from "@chakra-ui/react";

const ErrorPage: React.FC = () => {
  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Text fontSize="xl" color="red.500">
        Authentication Error: Please check your credentials and try again.
      </Text>
    </Box>
  );
};

export default ErrorPage;
