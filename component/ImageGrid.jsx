"use client"
import React from 'react';
import './ImageGrid.scss'; // Import your SCSS file

class ImageGrid extends React.Component {
  render() {
    const imgs = [
      // first col
      [
        { src: "/bloomimg/DSC_9381.jpg", alt: "DJI_0732.jpg" },
        { src: "/bloomimg/DJI_0732.jpg", alt: "DSC_9381.jpg" },
        { src: "/bloomimg/DJI_0740.jpg", alt: "DJI_0740.jpg" },
        { src: "/bloomimg/DSC_9317.jpg", alt: "DJI_0744.jpg" },
        { src: "/bloomimg/DJI_0747.jpg", alt: "DJI_0747.jpg" },
        { src: "/bloomimg/DJI_0750.jpg", alt: "DJI_0750.jpg" },
        { src: "/bloomimg/DJI_0755.jpg", alt: "DJI_0755.jpg" },
        { src: "/bloomimg/DJI_0756.jpg", alt: "DJI_0756.jpg" },
      ],
      // second col
      [
        { src: "/bloomimg/DJI_0789.jpg", alt: "DJI_0762.jpg" },
        { src: "/bloomimg/DJI_0766.jpg", alt: "DJI_0766.jpg" },
        { src: "/bloomimg/DJI_0779.jpg", alt: "DJI_0779.jpg" },
        { src: "/bloomimg/DJI_0781.jpg", alt: "DJI_0781.jpg" },
        { src: "/bloomimg/DJI_0785.jpg", alt: "DJI_0785.jpg" },
        { src: "/bloomimg/DJI_0789.jpg", alt: "DJI_0789.jpg" },
        { src: "/bloomimg/DJI_0792.jpg", alt: "DJI_0792.jpg" },
        { src: "/bloomimg/DJI_0795.jpg", alt: "DJI_0795.jpg" },
      ],
      // third col
      [
        { src: "/bloomimg/DJI_0795.jpg", alt: "DSC_9298.jpg" },
        { src: "/bloomimg/DSC_9300.jpg", alt: "DSC_9300.jpg" },
        { src: "/bloomimg/DSC_9303.jpg", alt: "DSC_9303.jpg" },
        { src: "/bloomimg/DSC_9304.jpg", alt: "DSC_9304.jpg" },
        { src: "/bloomimg/DSC_9346.jpg", alt: "DSC_9317.jpg" },
        { src: "/bloomimg/DSC_9318.jpg", alt: "DSC_9318.jpg" },
        { src: "/bloomimg/DSC_9329.jpg", alt: "DSC_9329.jpg" },
        { src: "/bloomimg/DSC_9337.jpg", alt: "DSC_9337.jpg" },
      ],
      // fourth col
      [
        { src: "/bloomimg/DSC_9346.jpg", alt: "DSC_9346.jpg" },
        { src: "/bloomimg/DSC_9348.jpg", alt: "DSC_9348.jpg" },
        { src: "/bloomimg/DSC_94311.jpg", alt: "DSC_9353.jpg" },
        { src: "/bloomimg/DSC_9362.jpg", alt: "DSC_9362.jpg" },
        { src: "/bloomimg/DSC_9368.jpg", alt: "DSC_9368.jpg" },
        { src: "/bloomimg/DSC_9369.jpg", alt: "DSC_9369.jpg" },
        { src: "/bloomimg/DSC_9377.jpg", alt: "DSC_9377.jpg" },
        { src: "/bloomimg/DSC_9379.jpg", alt: "DSC_9379.jpg" },
      ],
    ];
    

  return (
    <div className="page page-10">
      
      <main className="main main-10 page__main page__main-10">
        <div className="gallery gallery-10 main__gallery main__gallery-10 ">
          {imgs.map((col, colIndex) => (
            <div key={colIndex} className="gallery__col gallery__col-10">
              {col.map((img, imgIndex) => (
                <img
                  key={imgIndex}
                  className="gallery__img gallery__img-10 mb-2"
                  src={img.src}
                  alt={img.alt}
                />
              ))}
            </div>
          ))}
        </div>
      </main>
    </div>
  );
  }
}

export default ImageGrid;
