"use client"
import React, { useState, useEffect } from 'react';
import Header from '../../../component/Header2';
import Footer from '../../../component/Footer';
import TopTitle from "../../../component/common/fields/TopTitle"
import Index from "../../../component/common/fields/Index"

import { Box, VStack, Link, Image, Flex, Text, SimpleGrid, StackDivider, Drawer, DrawerOverlay, DrawerContent, DrawerCloseButton, DrawerHeader, DrawerBody, Button, Icon } from '@chakra-ui/react';
import { BiChevronDown , BiChevronUp} from 'react-icons/bi'; // Import BiChevronDown icon from react-icons

import ProductCard from '../../../component/ProductCard';
import categories from '../../../lib/categories'; // Import categories data
import products from '../../../lib/products'; // Import products data

function Page({ params }) {
  const [selectedCategory, setSelectedCategory] = useState(null);

  // Effect to update selectedCategory based on URL change
  useEffect(() => {
    const { category } = params; // Get category from URL query
    if (category && categories.some(item => item.title === category)) {
      setSelectedCategory(category); // Update selectedCategory if category exists in categories data
    } else {
      setSelectedCategory(null); // Reset selectedCategory if category doesn't exist or not provided in URL
    }
  }, params); // Re-run effect when URL query changes

  // Sample categories data
  const menuItems = categories;

  // Filter products based on the selected category
  const filteredProducts = selectedCategory ? products.filter(product => product.category === selectedCategory) : products;

  return (
    <>
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Product"/>
      <Index title="Product"/>
      <Flex className='ml'>
        {/* Category Menu */}
        <Box width="290px" height="min-content" bgColor="white" borderRadius={15} mx={20} my={20} top="100px" zIndex="10"
          className="category-menu stick"
        >
          <Box mx={20} mb={10}>
            <Box borderRadius={15} bgColor='#46C7C7' my={20} h={45} textAlign="center" display="flex" justifyContent="center" alignItems="center">
              <Text color="white">PRODUCT BY CATEGORIES</Text>
            </Box>
            <VStack
      divider={<StackDivider borderColor='gray.200' />}
      spacing={5}
      align='stretch'
      color="black"
    >
      {/* Map through menu items */}
      {menuItems.map((category, index) => (
        <Box key={index}>
          <Flex h='40px' bg='transparent'  justifyContent="left" alignItems="center" onClick={() => setSelectedCategory(selectedCategory === category.title ? null : category.title)} style={{ cursor: 'pointer' }}>
            <Image src={category.iconSrc} alt="icon items" w='35px' h='35px' mr={10}/>
            <span style={{ overflow: 'hidden', textOverflow: 'ellipsis', whiteSpace: 'nowrap' }}>{category.title}</span>
            {category.subcategories.length > 0 && (
              <Icon as={selectedCategory === category.title ? BiChevronUp : BiChevronDown} color="gray.500" ml={2} />
            )}
          </Flex>
          {/* Display subcategories if available */}
          {selectedCategory === category.title && category.subcategories.length > 0 && (
            <VStack ml={5} mt={2} align='stretch' color="black">
              {category.subcategories.map((subcategory, subIndex) => (
                <Box key={subIndex}>
                  <Flex fontSize="15px" ml="5%" h='auto'  bg='transparent'  justifyContent="left" alignItems="center" onClick={() => setSelectedCategory(subcategory.title)} style={{ cursor: 'pointer' }}>
                    <span>{subcategory.title}</span>
                  </Flex>
                </Box>
              ))}
            </VStack>
          )}
        </Box>
      ))}
    </VStack>
          </Box>
        </Box>

        {/* Button to Open Drawer
        <Button onClick={onOpen}>Open Drawer</Button> */}

        

        {/* Products */}
        <Box flex="1" mr={10} >
          {/* Display filtered product cards in a responsive grid */}
          <SimpleGrid columns={[2, null, 3]} spacing={{ base: '20px', md: '30px', lg: '40px' }} spacingX={30} spacingY={30} mx={20} my={20}>
            {filteredProducts.map((product) => (
              <Link key={product.id} href={`/product/${product.category}/${product.name}`} passHref>
                <ProductCard product={product} />
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
      <Footer />
    </div>
    {/* Drawer Component */}
    {/* <Drawer
          isOpen={isOpen}
          placement="right"
          onClose={onClose}
          finalFocusRef={btnRef}
        >
          <DrawerOverlay />
          <DrawerContent>
            <DrawerCloseButton />
            <DrawerHeader>Drawer Example</DrawerHeader>
            <DrawerBody>
              {/* Your drawer content here */}
            {/* </DrawerBody>
          </DrawerContent>
        </Drawer> */} 
    </>
  );
}

export default Page;
