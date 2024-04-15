import React from 'react';
import Header from '../../component/Header2';
import Footer from '../../component/Footer';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"
import { Box, VStack, Link, Image, Flex, Text, SimpleGrid, StackDivider } from '@chakra-ui/react';
import ProductCard from '../../component/ProductCard'; // Import your ProductCard component

function Page() {
  // Define menuItems array
  const menuItems = [
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    {
      title: "Matériels agricoles",
      iconSrc: "https://magento2.magentech.com/themes/sm_marketnew/pub/media/wysiwyg/mega-menu/icon/icon-1.png"
    },
    // Add more menu items as needed
  ];

  // Sample products array
  const products = [
    { id: 1, name: "Product 1", category: "Matériels agricoles" },
    { id: 2, name: "Product 2", category: "Matériels agricoles" },
    { id: 3, name: "Product 3", category: "Matériels agricoles" },
    { id: 1, name: "Product 1", category: "Matériels agricoles" },
    { id: 2, name: "Product 2", category: "Matériels agricoles" },
    { id: 3, name: "Product 3", category: "Matériels agricoles" },
    { id: 1, name: "Product 1", category: "Matériels agricoles" },
    
    // Add more products as needed
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Product"/>
      <Index title="Product"/>
      <Flex>
        {/* Category Menu */}
        <Box width="270px" height="min-content" bgColor="white" borderRadius={15} mx={20} my={20} position="sticky" top="100px" zIndex="10">
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
              {menuItems.map((item, index) => (
                <Link key={index} href={`/product/${item.title}`} passHref>
                  <Flex h='40px' bg='transparent'  justifyContent="left" alignItems="center" >
                    <Image src={item.iconSrc} alt="icon items" w='35px' h='35px' mr={10}/>
                    <span>{item.title}</span>
                  </Flex>
                </Link>
              ))}
            </VStack>
          </Box>
        </Box>
        
        {/* Products */}
        <Box flex="1" mr={10} >
          {/* Display product cards in a responsive grid */}
          <SimpleGrid columns={[2, null, 3]} spacing={{ base: '20px', md: '30px', lg: '40px' }} spacingX={30} spacingY={30} mx={20} my={20}>
            {products.map((product) => (
              <Link key={product.id} href={`/product/${product.category}/${product.name}`} passHref>
                <ProductCard product={product} />
              </Link>
            ))}
          </SimpleGrid>
        </Box>
      </Flex>
      <Footer />
    </div>
  );
}

export default Page;
