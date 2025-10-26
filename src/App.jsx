import React from "react";
import Navbar from "./components/Navbar";
import Hero from "./components/Hero"
import About from "./components/About";
import Activities from "./components/Activities";
import Menu from "./components/Menu";
import Packages from "./components/Packages";
import Gallery from "./components/Gallery";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  return (
    <div className="font-sans scroll-smooth bg-white text-gray-800 pt-20">
      <Navbar />
      <Hero/>
      <About/>
      <Activities/>
      <Menu/>
      <Packages/>
      <Gallery/>
      <Contact/>
      <Footer/>
      <WhatsAppButton/>

    </div>
  );
}
