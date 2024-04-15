import React from 'react';
import Link from 'next/link';
import { Box, Heading, UnorderedList, ListItem, Link as ChakraLink, Text, Flex } from '@chakra-ui/react';
import Header from '../../../component/Header2';
import Footer from '../../../component/Footer';
import TopTitle from "../../../component/common/fields/TopTitle"
import Index from "../../../component/common/fields/Index"
import ProductCard from "../../../component/ProductCard"; 

export default function ProductPage({ params }) {
  // Define your categories and products
  const categories = {
    electronics: [
      { id: 1, name: 'Smartphone' },
      { id: 2, name: 'Laptop' },
      { id: 3, name: 'Tablet' },
    ],
    clothing: [
      { id: 1, name: 'T-shirt' },
      { id: 2, name: 'Jeans' },
      { id: 3, name: 'Dress' },
    ],
    books: [
      { id: 1, name: 'Novel' },
      { id: 2, name: 'Textbook' },
      { id: 3, name: 'Biography' },
    ],
  };

  const { category } = params;

  // Get products based on the selected category
  const products = categories[category] || [];

  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Product"/>
      <Index title="Product"/>
      {/* <Flex color="black">
        <Box width="30%">
          <Heading as="h2" mb={4}>Categories</Heading>
          <UnorderedList>
            {Object.keys(categories).map((cat) => (
              <ListItem key={cat}>
                <Link href={`/product/${cat}`} passHref>
                  {cat}
                </Link>
              </ListItem>
            ))}
          </UnorderedList>
        </Box>
        <Box width="70%">
          <Heading as="h1" mb={4}>Category: {category}</Heading>
          <Flex flexWrap="wrap">
            {products.map((product) => (
              <Link key={product.id} href={`/product/${category}/${product.name}`} passHref>
                <ProductCard product={product} />
              </Link>
            ))}
          </Flex>
        </Box>
      </Flex> */}
      <Footer />
    </div>
  );
}

async function generateStaticParams() {
  const categories = Object.keys(categories);
  return categories.map((category) => ({
    params: {
      category,
    },
  }));
}
