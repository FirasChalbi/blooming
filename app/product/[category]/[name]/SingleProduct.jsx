"use client";
import React, { useState, useEffect } from 'react';
import TopTitle from '../../../../component/common/fields/TopTitle';
import Index from '../../../../component/common/fields/Index';
import { FaFilePdf } from "react-icons/fa6";

function Page({ product }) {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const handleThumbnailClick = (index) => {
    setCurrentImageIndex(index);
  };

  const handlePreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === 0 ? product.images.length - 1 : prevIndex - 1));
  };

  const handleNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex === product.images.length - 1 ? 0 : prevIndex + 1));
  };


  const handleDownloadPdf = (pdfName) => {
    const pdfUrl = `/assets/${pdfName}`;
    const link = document.createElement('a');
    link.href = pdfUrl;
    link.download = pdfName;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const thumbnailsData = product ? product.images : [];
  const pdfsData = product ? product.pdfs : [];


  return (
    <div className="bg-gray-100">
      <TopTitle title="Product" />
      <Index title="Product" />

      {/* Product */}
      <div className="container-produit">
        <div className="product">
          {/* Image Preview */}
          <div className="product-left">
            <div className="preview-current">
              {product && (
                <>
                  <img className="current-image" src={thumbnailsData[currentImageIndex]} alt="Product" />
                  <img className="previous-image" src="/images/icon-previous.svg" alt="Previous" onClick={handlePreviousImage} />
                  <img className="next-image" src="/images/icon-next.svg" alt="Next" onClick={handleNextImage} />
                </>
              )}
            </div>
            <div className="preview-all">
              {thumbnailsData.map((src, index) => (
                <div key={index} className="thumbnail" onClick={() => handleThumbnailClick(index)}>
                  <img src={src} alt={`Thumbnail ${index + 1}`} />
                  <div className={`thumbnail-overlay ${index === currentImageIndex ? 'thumbnail-selected' : ''}`} />
                </div>
              ))}
            </div>
          </div>

          {/* Product Details */}
          <div className="product-right">
            {product && (
              <div key={product.id}>
                <p className="product-brand">{product.category}</p>
                <p className="product-name">{product.name}</p>
                <div className="product-description" dangerouslySetInnerHTML={{ __html: product.description.replace(/\n/g, '<br>') }} />
                <div className="product-cart">
                  {pdfsData.length > 0 && (
                    <div className="cart-add" onClick={() => handleDownloadPdf(pdfsData[0])}>
                      <FaFilePdf alt="Cart" style={{ height: "25px", width: "25px", marginRight: "30px" }} /> Télécharger PDF
                    </div>
                  )}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Page;
