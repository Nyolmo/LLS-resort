import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO";

const packages = [
  {
    name: "Valentine’s Romantic Dinner",
    image: "./images/valentine-dinner.jpg",
    short: "Candlelit dinner setup with live music and flowers...",
    price: "KSh 4,500 / couple",
    description:
      "Celebrate love at Le’Lesan with our exclusive Valentine’s Romantic Dinner package. Enjoy a beautifully arranged candlelit dinner, a bouquet of fresh flowers, complimentary dessert, and live acoustic music by the lake. Ideal for couples seeking a magical evening.",
  },
  {
    name: "Family Fun Day Package",
    image: "./images/family-fun.jpg",
    short: "A full day of fun, games, and relaxation for the family...",
    price: "KSh 3,000 / family",
    description:
      "Spend quality time together with full-day access to our family park — including the trampoline, swings, and picnic garden. Comes with a complimentary soft drink for each family member and reserved seating in our outdoor dining area.",
  },
  {
    name: "Team Building Package",
    image: "./images/team-building.jpg",
    short: "Boost teamwork with games, meals, and bonding sessions...",
    price: "KSh 2,500 / person",
    description:
      "Strengthen team spirit with a guided day of fun challenges, group games, and shared meals at our open field. Includes a professional team-building facilitator, light breakfast, and buffet lunch for your group.",
  },
];

const Packages = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
      <SEO
        title="Packages & Offers | Le’Lesan Resort"
        description="Romantic dinners, family fun packages, and team-building experiences await at Le’Lesan Resort."
        url="https://lelesan-resort.vercel.app/#packages"
      />
    <section id="packages" className="py-16 px-4 md:px-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-3">
          Packages & Special Offers
        </h2>
        <p className="text-gray-600">
          Discover our exclusive packages designed for couples, families, and
          groups. Tap to view full details and pricing for each experience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <motion.div
            key={p.name}
            whileHover={{ scale: 1.03 }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(p)}
          >
            <img src={p.image} alt={p.name} className="h-64 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{p.name}</h3>
              <p className="text-sm text-gray-500 mt-1 italic">{p.short}</p>
              <p className="text-green-600 text-xs mt-2 font-medium">
                Tap to view more →
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      <AnimatePresence>
        {selected && (
          <>
            <motion.div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm z-40"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setSelected(null)}
            />
            <motion.div
              key="popup"
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: 50 }}
              transition={{ duration: 0.3 }}
              className="fixed inset-0 flex justify-center items-center z-50 px-4"
            >
              <div
                className={`relative max-w-md w-full p-6 rounded-2xl shadow-2xl backdrop-blur-md border border-gray-200 ${
                  selected.name.includes("Valentine")
                    ? "bg-gradient-to-br from-pink-100 via-white to-pink-50"
                    : "bg-white/90"
                }`}
              >
                <button
                  onClick={() => setSelected(null)}
                  className="absolute top-3 right-3 text-gray-400 hover:text-green-600 text-2xl leading-none"
                >
                  &times;
                </button>

                <img
                  src={selected.image}
                  alt={selected.name}
                  className="w-full h-56 object-cover rounded-xl mb-4"
                />
                <h3 className="text-2xl font-semibold text-green-700 mb-3">
                  {selected.name}
                </h3>
                <p className="text-gray-700 mb-4 leading-relaxed text-sm">
                  {selected.description}
                </p>
                <p className="text-green-800 font-semibold text-lg mb-4">
                  {selected.price}
                </p>
                <motion.button
                  whileTap={{ scale: 0.95 }}
                  onClick={() =>
                    window.open(
                      `https://wa.me/254746495101?text=Hi, I’d like to know more about the ${selected.name} package at Le’Lesan Resort.`,
                      "_blank"
                    )
                  }
                  className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all"
                >
                  Inquire on WhatsApp
                </motion.button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </section>
  </>
  );
};

export default Packages;
