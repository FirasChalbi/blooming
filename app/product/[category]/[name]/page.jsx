"use client"
import React, { useState } from 'react';
import Header from '../../../../component/Header2';
import Footer from '../../../../component/Footer';
import TopTitle from '../../../../component/common/fields/TopTitle';
import Index from '../../../../component/common/fields/Index';
import categories from '../../../../lib/categories3'; // Import categories data
import products from '../../../../lib/products2'; // Import products data
// const thumbnailsData = [
//   { src: '/images/001.png' },
//   { src: '/images/002.png' },
//   { src: '/images/003.png' },
//   { src: '/images/004.png' },
// ];

function Page({ params }) {
  const { name, category } = params; // Destructuring name and category from params
  const decodedName = decodeURIComponent(name); // Decoding name
  const decodedCategory = decodeURIComponent(category); // Decoding category
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? 3 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 3 ? 0 : prevIndex + 1));
  };

  // Filter products based on decodedName and decodedCategory
  const filteredProducts = products.filter(product => {
    // Convert both decodedName and decodedCategory to lowercase for case-insensitive comparison
    const lowerCaseName = decodedName.toLowerCase();
    const lowerCaseCategory = decodedCategory.toLowerCase();

    // Check if product name or category matches the provided decodedName and decodedCategory
    return product.name.toLowerCase().includes(lowerCaseName) && product.category.toLowerCase() === lowerCaseCategory;
  });
  const thumbnailsData = filteredProducts.map(product => ({
    src: product.img,
  }));
  console.log(thumbnailsData[0].src[0])
  console.log(filteredProducts[0])
  
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title={decodedName} />
      <Index title="Product" />

      {/* Product */}
      <div className="container-produit">
        <div className="product">
          {/* Image Preview */}
          <div className="product-left">
            <div className="preview-current">
              <img className="current-image" src={thumbnailsData[0].src[currentImageIndex]} alt="Product" />
              <img className="previous-image" src="/images/icon-previous.svg" alt="Previous" onClick={handlePreviousImage} />
              <img className="next-image" src="/images/icon-next.svg" alt="Next" onClick={handleNextImage} />
            </div>
            <div className="preview-all">
              {thumbnailsData.map((thumbnail, index) => (
                <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(index)}>
                  <img src={thumbnail.src} alt={`Thumbnail ${index + 1}`} />
                  <div className={`thumbnail-overlay ${index === currentImageIndex && 'thumbnail-selected'}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-right">
            {/* Display filtered products */}
            {filteredProducts.map(product => (
              <div key={product.id}>
                <p className="product-brand">{product.category}</p>
                <p className="product-name">{product.name}</p>
                <p className="product-description">{product.description}</p>
                {/* <div className="product-value">
                  <div className="product-price">
                    <p className="price-value">$125.00</p>
                    <p className="price-discount">50%</p>
                  </div>
                  <p className="product-discount">$250.00</p>
                </div> */}

                <div className="product-cart">
                  
                  <div className="cart-add">
                    <img src="/images/info.png" alt="Cart" className='h-8'/> Description
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
