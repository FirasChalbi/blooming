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
} from "@chakra-ui/react";
import { useRouter, useSearchParams } from "next/navigation";
import { uploadStagedFile } from "../../../lib/uploadStagedFile";
import { ReactNotifications, Store } from "react-notifications-component";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import 'animate.css/animate.compat.css';

const ModifyProduct: React.FC = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const router = useRouter();
  const searchParams = useSearchParams();
  const productId = searchParams.get("id");

  useEffect(() => {
    const fetchProduct = async () => {
      try {
        const response = await fetch(`/api/products/${productId}`);
        if (!response.ok) {
          throw new Error("Failed to fetch product");
        }
        const product = await response.json();
        setName(product.name);
        setDescription(product.description);
        setCategory(product.category);
        setImages(product.images);
      } catch (error) {
        console.error("Error fetching product:", error);
        Store.addNotification({
          title: "Error",
          message: "Failed to fetch product",
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

    if (productId) {
      fetchProduct();
    }
  }, [productId]);

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
    try {
      const response = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ name, description, category, images }),
      });
      if (!response.ok) {
        throw new Error("Failed to update product");
      }

      Store.addNotification({
        title: "Success",
        message: "Product updated successfully",
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

      router.push("/");
    } catch (error) {
      console.error("Error updating product:", error);
      Store.addNotification({
        title: "Error",
        message: "Failed to update product",
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
              Modify Product
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
    </>
  );
};

export default ModifyProduct;
