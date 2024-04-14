import React from 'react';
import Link from 'next/link';
import { Box, Heading, UnorderedList, ListItem, Link as ChakraLink } from '@chakra-ui/react';
import Header from '../../../component/Header2';
import Footer from '../../../component/Footer';
import TopTitle from "../../../component/common/fields/TopTitle"
import Index from "../../../component/common/fields/Index"

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
      <Box color="black">
        <Heading as="h1" mb={4}>Category: {category}</Heading>
        <UnorderedList>
          {products.map((product) => (
            <ListItem key={product.id}>
              <Link href={`/product/${category}/${product.name}`} passHref>
                {product.name}
              </Link>
            </ListItem>
          ))}
        </UnorderedList>
      </Box>
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
