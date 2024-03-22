import Image from "next/image";
import Header from "../component/Header"
import FirstSection from "../component/FirstSection"
import About from "../component/About"
import Partner from "../component/Partner"
import Services from "../component/Services"
import "../styles/global.css"

export default function Home() {
  return (
    <>
    <Header />
    <FirstSection />
    <About />
    <Services />
    <Partner />
    </>
  );
}
