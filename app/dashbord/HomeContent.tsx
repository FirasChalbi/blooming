// app/components/HomeContent.tsx
"use client";

import React, { useEffect, useState } from "react";
import { Box, Button, Flex, Image, Text } from "@chakra-ui/react";
import { useRouter } from "next/navigation";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { FaChevronLeft } from "react-icons/fa6";
import { FaChevronRight } from "react-icons/fa6";

type Product = {
  _id: string;
  name: string;
  category: string;
  description: string;
  images: string[];
};


const HomeContent = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const router = useRouter();

  useEffect(() => {
    fetch("/api/products")
      .then(async (response) => {
        if (!response.ok) {
          const errorText = await response.text();
          throw new Error(`Network response was not ok: ${errorText}`);
        }
        const text = await response.text();
        return text ? JSON.parse(text) : [];
      })
      .then((data) => setProducts(data))
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  const handleDelete = async (id: string) => {
    try {
      const response = await fetch(`/api/products`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id }),
      });
      if (!response.ok) {
        const errorText = await response.text();
        throw new Error(`Failed to delete product: ${errorText}`);
      }
      setProducts((prevProducts) =>
        prevProducts.filter((product) => product._id !== id)
      );
    } catch (error) {
      console.error("Error deleting product:", error);
    }
  };

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    nextArrow: <FaChevronRight color="black" />,
    prevArrow: <FaChevronLeft color="black" />,
  };  

  return (
    <Box ml={{base:"0%" , md:"17%"}}>
      <Flex justify="space-between" mb={4} >
        <Text fontWeight="bold" fontSize="xl" color="gray.600" ml={5}>All Products</Text>
      </Flex>
      <Box>
        {products.map((product) => (
          <Flex
            key={product._id}
            mb={4}
            p={4}
            borderWidth="1px"
            borderRadius="lg"
            align="center"
            justify="space-between"
          >
            <Box width={{ base: "90px", md: "200px" }} mx={4} my={4}>
              {product.images.length > 1 ? (
                <Slider {...sliderSettings} >
                  {product.images.map((image, index) => (
                    <Image
                      key={index}
                      src={image}
                      alt={product.name}
                      // boxSize={{ base: "150px", md: "200px" }}
                      h="100%"
                      w="100%"
                      objectFit="cover"
                      borderRadius="lg"
                    />
                  ))}
                </Slider>
              ) : (
                <Image
                  src={product.images[0]}
                  alt={product.name}
                  h="100%"
                  w="100%"
                  objectFit="cover"
                  borderRadius="lg"
                />
              )}
            </Box>
            <Box flex="1" ml={6}>
              <Box fontWeight="bold" fontSize="lg">
                {product.name}
              </Box>
              <Box color="gray.600">{product.category}</Box>
              <Box>{product.description}</Box>
            </Box>
            <Flex>
              <Button
                mr={2}
                onClick={() => router.push(`#`)}
              >
                See
              </Button>
              <Button
              mr={2}
              // onClick={() => router.push(`/dashbord/products?id=${product._id}`)}
              onClick={() => router.push(`#`)}
            >
              Modify
            </Button>
              <Button colorScheme="red" onClick={() => handleDelete(product._id)}>
                Delete
              </Button>
            </Flex>
          </Flex>
        ))}
      </Box>
    </Box>
  );
};

export default HomeContent;
