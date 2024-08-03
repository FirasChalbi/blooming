"use client";

import React, { useState } from "react";
import { useRouter } from "next/navigation";
import { Box, Button, FormControl, FormLabel, Input, VStack, Text } from "@chakra-ui/react";
import { signIn } from "next-auth/react";

const LoginPage: React.FC = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const router = useRouter();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const res = await signIn("credentials", {
      redirect: false,
      username,
      password,
    });

    if (res?.error) {
      setError(res.error);
    } else {
      router.push("/dashbord"); // Corrected route to match your config
    }
  };

  return (
    <Box display="flex" justifyContent="center" alignItems="center" height="100vh" bg="gray.50">
      <Box
        p={6}
        bg="white"
        boxShadow="15px"
        borderRadius="15px"
        height="200px"
        width={{ base: "90%", md: "400px" }}
        
      >
        <form onSubmit={handleSubmit} >
          <VStack spacing={4} textColor="black" mx="10px"
                my="10px">
            <FormControl>
              <FormLabel>Username</FormLabel>
              <Input
                type="text"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                placeholder="Enter your username"
                mx="10px"
                my="10px"
              />
            </FormControl>
            <FormControl>
              <FormLabel>Password</FormLabel>
              <Input
              mx="10px"
                my="10px"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                placeholder="Enter your password"
              />
            </FormControl>
            {error && <Text color="red.500">{error}</Text>}
            <Button type="submit" colorScheme="blue" width="full" mx="10px">
              Login
            </Button>
          </VStack>
        </form>
      </Box>
    </Box>
  );
};

export default LoginPage;
