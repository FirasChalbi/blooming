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
  Select,
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
} from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import { uploadStagedFile } from "../../lib/uploadStagedFile";
import Image from 'next/image';
import { ReactNotifications, Store } from "react-notifications-component";

import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

interface Product {
  _id: string;
  name: string;
  description: string;
  category: string;
  images: string[];
}

const ProductContent: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [products, setProducts] = useState<Product[]>([]);
  const [otherCategory, setOtherCategory] = useState("");
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
        body: JSON.stringify({ name, description, category: category === "Other" ? otherCategory : category, images }),
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
      setOtherCategory("");
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
      const data: Product[] = await response.json();
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
      <Box p={4} paddingLeft="1%" bg="#f8f9f8" ml={{ base: "0%", md: "17%" }}>
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
                <Select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  placeholder="Select Category"
                  borderColor="gray.300"
                  focusBorderColor="blue.500"
                >
                  <option value="Matériels agricoles">Matériels agricoles</option>
                  <option value="Fertigation automatique">Fertigation automatique</option>
                  <option value="Equipements hydrauliques et d'irrigation">Equipements hydrauliques et d'irrigation</option>
                  <option value="Matériels de filtration">Matériels de filtration</option>
                  <option value="Matériels de protection des cultures">Matériels de protection des cultures</option>
                  <option value="Outils professionnels">Outils professionnels</option>
                  <option value="Engrais et produits de fertilisation">Engrais et produits de fertilisation</option>
                  <option value="Other">Other</option>
                </Select>
              </FormControl>
              {category === "Other" && (
                <FormControl>
                  <FormLabel fontWeight="medium" color="black">
                    Other Category
                  </FormLabel>
                  <Input
                    value={otherCategory}
                    onChange={(e) => setOtherCategory(e.target.value)}
                    placeholder="Enter Category"
                    borderColor="gray.300"
                    focusBorderColor="blue.500"
                  />
                </FormControl>
              )}
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
      <Box p={4} bg="#f8f9f8" ml={{ base: "0%", md: "17%" }}>
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
              {products.map((product) => (
                <Tr key={product._id}>
                  <Td>{product.name}</Td>
                  <Td>{product.description}</Td>
                  <Td>{product.category}</Td>
                  <Td>
                    {product.images.map((url, imgIndex) => (
                      <Image
                        key={imgIndex}
                        src={url}
                        alt={`Product ${product.name} Image ${imgIndex}`}
                        width={50}
                        height={50}
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
