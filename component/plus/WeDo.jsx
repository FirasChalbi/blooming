import React from 'react';
import { Container, Flex, Text, Image, Box, Grid } from "@chakra-ui/react";

function WeDo() {
  // Sample data array
  const items = [
    {
      imageSrc: '/images/a1.jpg',
      title: 'Agriculture Leader 1',
      description: 'Venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit.'
    },
    {
      imageSrc: '/images/a2.jpg',
      title: 'Agriculture Leader 2',
      description: 'Venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit.'
    },
    {
      imageSrc: '/images/a3.jpg',
      title: 'Agriculture Leader 3',
      description: 'Venenatis eros et, sed commodo risus. Nullam sit amet laoreet elit.'
    }
  ];

  return (
    <>
      <Container bgColor="#f5f9f7" color="black">
        <Text textAlign="center" fontSize="xl" fontWeight="bold">WHAT WE DO</Text>
        <Text textAlign="center" fontSize="lg" fontWeight="bold">What We’re Offering</Text>
        <Grid templateColumns='repeat(3, 1fr)' gap={6}>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src="https://bit.ly/2Z4KKcF" alt='Rear view of modern home with pool' />

      <Box p='6'>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          transform='translateY(-40px)'
          bgColor="blue"
          textAlign="center"
          width="50%"
        >
          title text
        </Box>

        <Box>
          <Box as='span' color='gray.600' fontSize='sm'>
              azfafa fazfafz fafzfaf
          </Box>
        </Box>

        
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src="https://bit.ly/2Z4KKcF" alt='Rear view of modern home with pool' />

      <Box p='6'>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          transform='translateY(-40px)'
          bgColor="blue"
          textAlign="center"
          width="50%"
        >
          title text
        </Box>

        <Box>
          <Box as='span' color='gray.600' fontSize='sm'>
              azfafa fazfafz fafzfaf
          </Box>
        </Box>

        
      </Box>
    </Box>
    <Box maxW='sm' borderWidth='1px' borderRadius='lg' overflow='hidden'>
      <Image src="https://bit.ly/2Z4KKcF" alt='Rear view of modern home with pool' />

      <Box p='6'>

        <Box
          mt='1'
          fontWeight='semibold'
          as='h4'
          lineHeight='tight'
          noOfLines={1}
          transform='translateY(-40px)'
          bgColor="blue"
          textAlign="center"
          width="50%"
        >
          title text
        </Box>

        <Box>
          <Box as='span' color='gray.600' fontSize='sm'>
              azfafa fazfafz fafzfaf
          </Box>
        </Box>

        
      </Box>
    </Box>
    </Grid>
      </Container>
    </>
  );
}

export default WeDo;
