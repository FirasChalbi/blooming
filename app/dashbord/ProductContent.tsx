"use client";

import React, { useState, useEffect } from "react";
import { useDropzone } from "react-dropzone";
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
import { IoClose } from "react-icons/io5";
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

  const onDrop = async (acceptedFiles: File[]) => {
    const uploadedImages = await Promise.all(
      acceptedFiles.map((file) => uploadStagedFile(file))
    );

    const successfulUploads = uploadedImages.filter(
      (url): url is string => !!url
    );

    setImages((prevImages) => [...prevImages, ...successfulUploads]);
  };

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  const handleDeleteImage = (urlToDelete: string) => {
    setImages((prevImages) => prevImages.filter((url) => url !== urlToDelete));
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
                  <option value="Aqua 4d">Aqua 4d</option>
                  <option value="Metzer">Metzer</option>
                  <option value="Deutz fahr">Deutz fahr</option>
                  <option value="Kiotti">Kiotti</option>
                  <option value="Kali k+s">Kali k+s</option>
                  <option value="Irritech filtration">Irritech filtration</option>
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
                <div
                  {...getRootProps()}
                  style={{
                    position: "relative",
                    padding: "16px",
                    border: "2px dashed #ccc",
                    borderRadius: "8px",
                    textAlign: "center",
                    cursor: "pointer",
                    backgroundColor: "#f9f9f9",
                  }}
                >
                  <input {...getInputProps()} />
                  {isDragActive ? (
                    <p>Drop the files here...</p>
                  ) : images.length > 0 ? (
                    <div style={{ display: "flex", flexWrap: "wrap", gap: "10px" }}>
                      {images.map((url, index) => (
                        <div key={index} style={{ position: "relative" }}>
                          <img
                            src={url}
                            alt={`Uploaded ${index}`}
                            style={{
                              width: "100px",
                              height: "100px",
                              objectFit: "cover",
                              borderRadius: "4px",
                            }}
                          />
                          <button
                            style={{
                              position: "absolute",
                              top: "8px",
                              right: "8px",
                              background: "transparent",
                              border: "none",
                              cursor: "pointer",
                              padding: "4px",
                              borderRadius: "50%",
                              backgroundColor: "#fff",
                            }}
                            onClick={() => handleDeleteImage(url)}
                          >
                            <IoClose size={20} />
                          </button>
                        </div>
                      ))}
                    </div>
                  ) : (
                    <p>Drag & drop an image. Recommended size 300 x 300</p>
                  )}
                </div>
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
