import React from 'react';
import ImageGrid from '../../component/ImageGrid'; // Assuming ImageGrid component is in the same directory
import Header from '../../component/Header2';
import Footer from '../../component/Footer';
import Contact from '../../component/plus/Contact2';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"
import Whatsapp from "../../component/common/Whatsapp"

function Page() {
  // Define your image data
  const images = [
    // Array of image objects
  ];

  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Galery"/>
      <Index title="Galery"/>
      <ImageGrid images={images} />
      
      <Whatsapp />
    </div>
      
  );
}

export default Page;




