import Image from "next/image";
import Header from "../component/Header"
import Header2 from "../component/Header3"
import FirstSection from "../component/FirstSection"
import About from "../component/About"
import Partner from "../component/Partner"
import Services from "../component/Services"
import Footer from "../component/Footer"
import Aboutx from "../component/plus/Cover"
import Test from "../component/plus/Test"
import WeDo from "../component/plus/WeDo"
import WeDo2 from "../component/plus/WeDo2"
import WhyUs from "../component/plus/WhyUs"
import Footer2 from "../component/Footer2"
import AboutForPage2 from "../component/plus/AboutForPage3"
import Whatsapp from "../component/common/Whatsapp"


export default function Home() {
  return (
    <>
    
    <Header2 />
    <FirstSection />
    <AboutForPage2 />
    <WeDo2 />
    <WhyUs />
    <Aboutx />
    <Partner />
    <Footer />
    <Whatsapp />
    </>
  );
}
