import React from 'react';
import Header from '../../component/Header2';
import AboutForPage from '../../component/plus/AboutForPage2';
import Footer from '../../component/Footer';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"
import WhyChooseUs from "../../component/plus/WhyChooseUs"
function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="A Propos"/>
      <Index title="A Propos"/>
      <AboutForPage />
      <WhyChooseUs />
      <Footer />
    </div>
  );
}

export default Page;