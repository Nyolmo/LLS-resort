import { useState } from "react";
import { Menu, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);


  const handleLinkClick = () => setIsOpen(false);

  return (
    <nav className="fixed top-0 left-0 w-full bg-white/80 backdrop-blur-md shadow-md z-50">
      <div className="max-w-7xl mx-auto flex justify-between items-center p-4">
        <h1 className="text-2xl font-bold text-green-700">Le’Lesan Resort</h1>


        <div className="hidden md:flex space-x-6 text-sm font-medium">
          <a href="#about" className="hover:text-green-700 transition">About</a>
          <a href="#activities" className="hover:text-green-700 transition">Activities</a>
          <a href="#menu" className="hover:text-green-700 transition">Menu</a>
          <a href="#packages" className="hover:text-green-700 transition">Packages</a>
          <a href="#gallery" className="hover:text-green-700 transition">Gallery</a>
          <a href="#contact" className="hover:text-green-700 transition">Contact</a>
        </div>


        <button
          aria-label={isOpen ? "Close menu" : "Open menu"}
          aria-expanded={isOpen}
          className="md:hidden text-green-700"
          onClick={() => setIsOpen((s) => !s)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

 
      <AnimatePresence>
        {isOpen && (

          <motion.div
            key="mobile-menu"
            initial={{ opacity: 0, y: -10, height: 0 }}
            animate={{ opacity: 1, y: 0, height: "auto" }}
            exit={{ opacity: 0, y: -10, height: 0 }}
            transition={{ duration: 0.28, ease: "easeOut" }}
            className="md:hidden absolute top-full left-0 w-full bg-white/95 backdrop-blur-md shadow-md z-40 overflow-hidden"
          >
            <div className="flex flex-col space-y-3 p-4 text-center">
              <a href="#about" onClick={handleLinkClick} className="text-green-700 font-medium">About</a>
              <a href="#activities" onClick={handleLinkClick} className="text-green-700 font-medium">Activities</a>
              <a href="#menu" onClick={handleLinkClick} className="text-green-700 font-medium">Menu</a>
              <a href="#packages" onClick={handleLinkClick} className="text-green-700 font-medium">Packages</a>
              <a href="#gallery" onClick={handleLinkClick} className="text-green-700 font-medium">Gallery</a>
              <a href="#contact" onClick={handleLinkClick} className="text-green-700 font-medium">Contact</a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
