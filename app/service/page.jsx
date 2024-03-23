import React from 'react';
import Header from '../../component/Header';
import Contact from '../../component/Contact';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"

function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Service"/>
      <Index title="Service"/>
      
    </div>
  );
}

export default Page;