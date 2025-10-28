import React from "react";
import { motion } from "framer-motion";
import SEO from "../components/SEO";

const Hero = () => {
  return (
    <>
      <SEO
          title="Home | Le’Lesan Resort"
          description="Discover Le’Lesan Resort — a paradise in Kesses offering romantic dining, thrilling adventures, and family-friendly activities."
          url="https://lelesan-resort.vercel.app/"
      />
    
  
    <section
      id="home"
      className="h-screen bg-[url('/images/children.jpg')] bg-cover bg-center flex flex-col justify-center items-center text-center text-white relative"
    >
      <div className="bg-black/50 absolute inset-0"></div>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
        className="z-10"
      >
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Welcome to Le’Lesan Resort</h1>
        <p className="text-lg md:text-2xl">Nature, Fun & Unforgettable Memories</p>
        <a
          href="#contact"
          className="mt-6 inline-block bg-green-700 text-white px-6 py-3 rounded-full hover:bg-green-800 transition"
        >
          Book Your Experience
        </a>
      </motion.div>
    </section>
    </>
  );
};

export default Hero;
