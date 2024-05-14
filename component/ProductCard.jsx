import React from 'react';
import { Box, Text } from '@chakra-ui/react';

const ProductCard = ({ product }) => {
  // Check if product.img exists and it's an array with at least one element
  const hasImages = product.img && Array.isArray(product.img) && product.img.length > 0;

  return (
    <Box
      className="product-card"
      m={2}
      width={{ base: "100%", md: "45%", lg: "30%" }}
      textAlign="center"
      _hover={{ border: "2px solid #46C7C7" }}
      borderWidth="1px"
      borderRadius="20"
      // overflow="hidden"
      mb={10}
    >
      <div className="image-container">
        {/* Conditionally render the main image if product.img exists */}
        {hasImages && (
          <img
            src={product.img[0]} // Use the first image from the img array
            alt={product.name}
            className="product-image-photo"
          />
        )}
        {/* Conditionally render the second image only if there are more than one image */}
        {hasImages && product.img.length > 1 && (
          <img
            src={product.img[1]} // Use the second image from the img array
            alt={product.name}
            className="image-product-hover"
          />
        )}
      </div>
      <Box p="6">
        <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight"  color="black">
          {product.name}
        </Box>
        <Box display="flex" justifyContent="center" py={5}>
          <div className="cart-add2">
            Discover
          </div>
        </Box>
      </Box>
    </Box>
  );
};

export default ProductCard;





// import React from 'react';
// import { Box, Text } from '@chakra-ui/react';

// const ProductCard = ({ product }) => {
//   return (
//     <Box
//       className="product-card"
//       m={2}
//       width={{ base: "100%", md: "45%", lg: "30%" }}
//       textAlign="center"
//       _hover={{ border: "2px solid #46C7C7" }}
//       borderWidth="1px"
//       borderRadius="20"
//       overflow="hidden"
//     >
//       <div className="image-container">
//         <img
//           src={`/images/001.png`}
//           alt={product.name}
//           className="product-image-photo"
//         />
//         <img
//           src={`/images/003.png`}
//           alt={product.name}
//           className="image-product-hover"
//         />
//       </div>
//       <Box p="6">
//         <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight" isTruncated color="black">
//           {product.name}
//         </Box>
//         <Box display="flex" justifyContent="center" py={5}>
//         <div className="cart-add2" >
//             Discover
//         </div>
//         </Box>
//       </Box>
//     </Box>
//   );
// };

// export default ProductCard;
