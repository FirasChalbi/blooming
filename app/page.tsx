import Image from "next/image";
import Header from "../component/Header"
import Header2 from "../component/Header2"
import FirstSection from "../component/FirstSection"
import About from "../component/About"
import Partner from "../component/Partner"
import Services from "../component/Services"
import Footer from "../component/Footer"

export default function Home() {
  return (
    <>
    <Header2 />
    <FirstSection />
    <About />
    <Services />
    <Partner />
    <Footer />
    </>
  );
}
