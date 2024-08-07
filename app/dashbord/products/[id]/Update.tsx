"use client";

import React, { useState, useEffect, useRef } from "react";
import {
  Box,
  Button,
  Input,
  FormControl,
  FormLabel,
  Textarea,
  VStack,
  Select,
  ChakraProvider
} from "@chakra-ui/react";
import { useRouter, useParams } from "next/navigation";
import { uploadStagedFile } from "../../../../lib/uploadStagedFile";
import { ReactNotifications, Store } from "react-notifications-component";
import { IoClose } from "react-icons/io5";
import "react-notifications-component/dist/theme.css";
import "animate.css/animate.min.css";
import "animate.css/animate.compat.css";

const ModifyProduct = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [images, setImages] = useState<string[]>([]);
  const [pdfs, setPdfs] = useState<File[]>([]);
  const [existingPdfs, setExistingPdfs] = useState<string[]>([]);
  const [otherCategory, setOtherCategory] = useState("");
  const fileInputRef = useRef<HTMLInputElement>(null);

  const router = useRouter();
  const Params = useParams();
  const productId = Params.id;

  const handleFileChange = async (acceptedFiles: File[]) => {
    const uploadedImages = await Promise.all(
      acceptedFiles.map((file) => uploadStagedFile(file))
    );

    const successfulUploads = uploadedImages.filter(
      (url): url is string => !!url
    );

    setImages((prevImages) => [...prevImages, ...successfulUploads]);
  };

  const handleDeleteImage = (urlToDelete: string) => {
    setImages((prevImages) => prevImages.filter((url) => url !== urlToDelete));
  };

  const handlePdfUpload = (event: React.ChangeEvent<HTMLInputElement>) => {
    const files = event.target.files;
    if (files) {
      setPdfs(Array.from(files));
    }
  };

  const handleDeletePdf = (pdfToDelete: string) => {
    setExistingPdfs((prevPdfs) => prevPdfs.filter((pdf) => pdf !== pdfToDelete));
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    const formData = new FormData();
    pdfs.forEach((pdf) => {
      formData.append("pdfs", pdf);
    });

    formData.append("name", name);
    formData.append("description", description);
    formData.append("category", category === "Other" ? otherCategory : category);
    formData.append("images", JSON.stringify(images));
    formData.append("existingPdfs", JSON.stringify(existingPdfs));

    try {
      const response = await fetch(`/api/products/product/${productId}`, {
        method: "PUT",
        body: formData,
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

      router.push("/dashbord");
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

  const fetchProductDetails = async () => {
    try {
      const response = await fetch(`/api/products/product/${productId}`);
      const product = await response.json();
      setName(product.name);
      setDescription(product.description);
      setCategory(product.category);
      setImages(product.images);
      setExistingPdfs(product.pdfs || []);
    } catch (error) {
      console.error("Error fetching product details:", error);
    }
  };

  useEffect(() => {
    if (productId) {
      fetchProductDetails();
    }
  }, [productId]);

  useEffect(() => {
    const container = document.querySelector(".react-notifications-component");
    if (container) {
      container.classList.add("custom-notification-container");
    }
  }, []);

  return (
    <>
      <ReactNotifications />
      <Box p={4} bg="#f8f9f8">
        <Box
          maxW="800px"
          mx="auto"
          border="1px"
          borderColor="gray.200"
          borderRadius="md"
          p={6}
          bg="white"
          color="black"
          shadow="md"
        >
          <Box borderBottom="1px" borderColor="gray.200" pb={4} mb={6} style={{ borderColor: "black" }}>
            <Box fontWeight="medium" fontSize="lg" color="black" mb={5}>
              Modify Product
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
                    size="md"
                    mt={1}
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
                      size="md"
                      mt={1}
                    />
                  </FormControl>
                )}
                <FormControl>
                  <FormLabel fontWeight="medium" color="black">
                    Images
                  </FormLabel>
                  <div
                    onClick={() => fileInputRef.current?.click()}
                    onDrop={(e) => {
                      e.preventDefault();
                      handleFileChange(Array.from(e.dataTransfer.files));
                    }}
                    onDragOver={(e) => e.preventDefault()}
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
                    <input
                      ref={fileInputRef}
                      type="file"
                      multiple
                      accept="image/*"
                      onChange={(e) => {
                        const files = e.target.files;
                        if (files) {
                          handleFileChange(Array.from(files));
                        }
                      }}
                      style={{ display: "none" }}
                    />
                    {images.length > 0 ? (
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
                <FormControl>
                  <FormLabel fontWeight="medium" color="black">
                    PDFs
                  </FormLabel>
                  <input type="file" accept=".pdf" multiple onChange={handlePdfUpload} />
                  <div style={{ marginTop: "10px" }}>
                    {existingPdfs.map((pdf, index) => (
                      <div key={index} style={{ position: "relative" }}>
                        <a href={`/assets/${pdf}`} target="_blank" rel="noopener noreferrer">
                          {pdf}
                        </a>
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
                          onClick={() => handleDeletePdf(pdf)}
                        >
                          <IoClose size={20} />
                        </button>
                      </div>
                    ))}
                    {pdfs.map((pdf, index) => (
                      <div key={index}>{pdf.name}</div>
                    ))}
                  </div>
                </FormControl>
                <Button type="submit" colorScheme="blue" width="full">
                  Update Product
                </Button>
              </VStack>
            </form>
          </Box>
        </Box>
      </Box>
    </>
  );
};

export default ModifyProduct;
