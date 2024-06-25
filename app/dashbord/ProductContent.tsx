"use client";

import React, { useState, useEffect } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { uploadStagedFile } from "../../lib/uploadStagedFile";
import { ReactNotifications, Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import 'animate.css/animate.compat.css';

const ProductContent: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [products, setProducts] = useState<any[]>([]);
  const router = useRouter();

  const handleFileChange = async (event: React.ChangeEvent<HTMLInputElement>) => {
    if (event.target.files) {
      const files = Array.from(event.target.files);
      const uploadedImages = await Promise.all(
        files.map((file) => uploadStagedFile(file))
      );

      const successfulUploads = uploadedImages.filter(
        (url): url is string => !!url
      );

      setImages((prevImages) => [...prevImages, ...successfulUploads]);

      event.target.value = "";
    }
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    console.log("Submitting form with images:", images);
    try {
      const response = await fetch("/api/products", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, category, images }),
      });
      if (!response.ok) {
        throw new Error("Failed to create product");
      }

      Store.addNotification({
        title: "Success",
        message: "Product created successfully",
        type: "success",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });

      fetchProducts();

      setName("");
      setDescription("");
      setCategory("");
      setImages([]);
    } catch (error) {
      console.error("Error creating product:", error);
      Store.addNotification({
        title: "Error",
        message: "Failed to create product",
        type: "danger",
        insert: "top",
        container: "top-right",
        animationIn: ["animate__animated", "animate__fadeIn"],
        animationOut: ["animate__animated", "animate__fadeOut"],
        dismiss: {
          duration: 3000,
          onScreen: true,
        },
      });
    }
  };

  const fetchProducts = async () => {
    try {
      const response = await fetch("/api/products");
      const data = await response.json();
      setProducts(data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  React.useEffect(() => {
    const container = document.querySelector(".react-notifications-component");
    if (container) {
      container.classList.add("custom-notification-container");
    }
  }, []);

  return (
    <>
      <ReactNotifications />
      <Box p={4} paddingLeft="1%" bg="#f8f9f8" ml={{base:"0%" , md:"17%"}}>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={6}
          bg="white"
          shadow="md"
        >
          <Box borderBottom="1px" borderColor="gray.200" pb={4} mb={6}>
            <Box fontWeight="medium" fontSize="lg" color="black">
              Add Product
            </Box>
          </Box>
          <form onSubmit={handleSubmit}>
            <VStack spacing={4}>
              <FormControl>
                <FormLabel fontWeight="medium" color="black">
                  Name
                </FormLabel>
                <Input
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Product Name"
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="medium" color="black">
                  Description
                </FormLabel>
                <Textarea
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Product Description"
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                  rows={6}
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="medium" color="black">
                  Category
                </FormLabel>
                <Input
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Product Category"
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                />
              </FormControl>
              <FormControl>
                <FormLabel fontWeight="medium" color="black">
                  Images
                </FormLabel>
                <Input
                  type="file"
                  accept="image/*"
                  multiple
                  onChange={handleFileChange}
                />
                <VStack spacing={2} mt={4}>
                  {images.map((url, index) => (
                    <Box
                      key={index}
                      border="1px"
                      borderColor="gray.200"
                      borderRadius="md"
                      p={2}
                      width="100%"
                    >
                      <img
                        src={url}
                        alt={`Uploaded ${index}`}
                        style={{ width: "100px", height: "100px" }}
                      />
                    </Box>
                  ))}
                </VStack>
              </FormControl>
              <Button type="submit" colorScheme="blue" width="full">
                Submit
              </Button>
            </VStack>
          </form>
        </Box>
      </Box>
      <Box p={4} bg="#f8f9f8" ml={{base:"0%" , md:"17%"}}>
        <Box
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={6}
          bg="white"
          shadow="md"
        >
          <Box borderBottom="1px" borderColor="gray.200" pb={4} mb={6}>
            <Box fontWeight="medium" fontSize="lg" color="black">
              Products List
            </Box>
          </Box>
          <Table variant="simple">
            <Thead>
              <Tr>
                <Th>Name</Th>
                <Th>Description</Th>
                <Th>Category</Th>
                <Th>Images</Th>
              </Tr>
            </Thead>
            <Tbody>
              {products.map((product, index) => (
                <Tr key={index}>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.category}</Td>
                  <Td>
                    {product.images.map((url, imgIndex) => (
                      <img
                        key={imgIndex}
                        src={url}
                        alt={`Product ${index} Image ${imgIndex}`}
                        style={{ width: "50px", height: "50px" }}
                      />
                    ))}
                  </Td>
                </Tr>
              ))}
            </Tbody>
          </Table>
        </Box>
      </Box>
    </>
  );
};

export default ProductContent;
