import React from 'react';
import Header from '../../component/Header';
import AboutForPage from '../../component/AboutForPage';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"

function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="A Propos"/>
      <Index title="A Propos"/>
      <AboutForPage />
    </div>
  );
}

export default Page;