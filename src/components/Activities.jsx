import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO";

const activities = [
  {
    name: "Zip Lining",
    image: "./images/zipline.jpg",
    short: "Glide over scenic views with pure excitement...",
    price: "KSh 600",
    description:
      "Experience the thrill of zip lining across breathtaking views of the resort’s natural scenery. Perfect for adventurers seeking excitement in a safe, family-friendly setting.",
  },
  {
    name: "Bridge Swing",
    image: "./images/bridge.jpg",
    short: "Feel the rush as you swing above the river...",
    price: "KSh 500",
    description:
      "Our bridge swing gives you a unique adrenaline rush! Swing over the gentle river breeze and capture unforgettable moments in our scenic adventure zone.",
  },
  {
    name: "Trampoline",
    image: "./images/trampoline.jpg",
    short: "Bounce, laugh, and play endlessly...",
    price: "KSh 300",
    description:
      "Fun for both kids and adults! Enjoy endless laughter on our secure, family-sized trampoline — a favorite attraction for children and groups alike.",
  },
  {
    name: "Ferris Wheel",
    image: "./images/ferris-wheel.jpg",
    short: "A gentle ride with stunning views...",
    price: "KSh 400",
    description:
      "Take a calm ride on the Ferris wheel and enjoy a panoramic view of Le’Lesan’s beautiful surroundings — especially magical at sunset.",
  },
  {
    name: "Outdoor Garden",
    image: "./images/garden.jpg",
    short: "Relax among flowers and nature’s calm...",
    price: "Free access for visitors",
    description:
      "Walk through our serene gardens, surrounded by fresh air and beautiful plants — a perfect spot for photos, picnics, or a quiet afternoon break.",
  },
  {
    name: "Creative & Artwork",
    image: "./images/artwork.jpg",
    short: "Unleash creativity with art and crafts...",
    price: "KSh 350 (materials inclusive)",
    description:
      "Join our creative sessions to paint, craft, and enjoy guided art activities. Ideal for families and groups who want a relaxing, artistic experience.",
  },
];

const Activities = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>      <SEO
        title="Activities & Adventures | Le’Lesan Resort"
        description="Enjoy zip-lining, bridge swing, trampoline, creative artwork, and outdoor fun at Le’Lesan Resort in Kesses."
        url="https://lelesan-resort.vercel.app/#activities"
      />
    <section id="activities" className="py-16 px-4 md:px-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-3">
          Activities & Attractions
        </h2>
        <p className="text-gray-600">
          Explore a variety of fun and adventurous experiences for families,
          friends, and couples. Tap on any activity to learn more and view
          pricing details.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activities.map((act) => (
          <motion.div
            key={act.name}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(act)}
          >
            <img
              src={act.image}
              alt={act.name}
              className="h-64 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{act.name}</h3>
              <p className="text-sm text-gray-500 mt-1 italic">{act.short}</p>
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
              <div className="relative max-w-md w-full p-6 rounded-2xl shadow-2xl bg-white/90 backdrop-blur-md border border-gray-200">
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
                      `https://wa.me/254746495101?text=Hi, I’d like to know more about the ${selected.name} activity at Le’Lesan Resort.`,
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

export default Activities;
