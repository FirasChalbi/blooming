import React from 'react';
import Header from '../../component/Header2';
import Footer from '../../component/Footer';
import Contact from '../../component/plus/Contact2';
import TopTitle from "../../component/common/fields/TopTitle"
import Index from "../../component/common/fields/Index"
import Whatsapp from "../../component/common/Whatsapp"

function Page() {
  return (
    <div className="bg-gray-100">
      <Header />
      <TopTitle title="Contact"/>
      <Index title="Contact"/>
      <Contact />
      <Footer />
      <Whatsapp />
    </div>
  );
}

export default Page;


{/* <section className="page-title style-two centred" style={{backgroundImage: 'url(https://agrisud.com.tn/wp-content/uploads/2021/06/bg1.jpg)', marginBottom: "100px"}}>
        <div className="auto-container">
          <div className="content-box">
            <div className="title">
              <h1>Contact</h1>
            </div>
            <ul className="bread-crumb clearfix">
              <li><a href="https://agrisud.com.tn">Accueil</a></li>
              <li>Contact</li>
            </ul>
          </div>
        </div>
      </section> */}