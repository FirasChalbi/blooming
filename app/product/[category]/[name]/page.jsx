"use client"
import React, { useState } from 'react';
import Header from '../../../../component/Header2';
import Footer from '../../../../component/Footer';
import TopTitle from '../../../../component/common/fields/TopTitle';
import Index from '../../../../component/common/fields/Index';

const thumbnailsData = [
  { src: '/images/001.png' },
  { src: '/images/002.png' },
  { src: '/images/003.png' },
  { src: '/images/004.png' },
];

function Page({ params }) {
  const { name } = params;
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

  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title={name} />
      <Index title="Product" />

      {/* Product */}
      <div className="container-produit">
      <div className="product">
        {/* Image Preview */}
        <div className="product-left">
          <div className="preview-current">
            <img className="current-image" src={`/images/00${currentImageIndex + 1}.png`} alt="Product" />
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
          <p className="product-brand">TRACTOR COMPANY</p>
          <p className="product-name">Epandeur de fumier Modèle LP200 MAX</p>
          <p className="product-description">
            These low-profile sneakers are your perfect casual wear companion.
            Featuring a durable rubber outer sole, they’ll withstand everything
            the weather can offer.
          </p>
          <div className="product-value">
            <div className="product-price">
              <p className="price-value">$125.00</p>
              <p className="price-discount">50%</p>
            </div>
            <p className="product-discount">$250.00</p>
          </div>

          <div className="product-cart">
            <div className="cart-quantity">
              <div className="quantity-minus">
                <img src="/images/icon-minus.svg" alt="Minus" />
              </div>
              <div className="quantity-value" color='black'>0</div>
              <div className="quantity-plus">
                <img src="/images/icon-plus.svg" alt="Plus" />
              </div>
            </div>
            <div className="cart-add">
              <img src="/images/icon-cart-light.svg" alt="Cart" /> Add to cart
            </div>
          </div>
        </div>
      </div>
      </div>

      <Footer />
    </div>
  );
}

export default Page;
