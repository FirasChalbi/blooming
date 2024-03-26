import React from 'react';
import Header from '../../component/Header2';
import AboutForPage from '../../component/AboutForPage';
import Footer from '../../component/Footer';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"

function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="A Propos"/>
      <Index title="A Propos"/>
      <AboutForPage />
      <Footer />
    </div>
  );
}

export default Page;