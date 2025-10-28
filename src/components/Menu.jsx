import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import SEO from "./SEO";

const menuItems = [
  {
    name: "Grilled Tilapia with Ugali",
    price: "KSh 850",
    image: "/images/tilapia.jpg",
    short: "Crispy lakeside tilapia served with soft ugali...",
    description:
      "Freshly grilled lake tilapia served with soft ugali and kachumbari — a Le’Lesan signature that captures the authentic lakeside flavor and charm.",
  },
  {
    name: "Chicken Curry & Rice",
    price: "KSh 750",
    image: "/images/chicken.jpg",
    short: "Tender chicken simmered in rich curry sauce...",
    description:
      "Deliciously tender chicken cooked in creamy curry sauce and served with aromatic rice. The perfect blend of spice, aroma, and warmth.",
  },
  {
    name: "Fresh Juice (Mango, Passion, Orange)",
    price: "KSh 250",
    image: "/images/juice.jpg",
    short: "Naturally fresh and healthy fruit juice...",
    description:
      "Purely fresh fruit juice made from locally sourced fruits — available in mango, passion, or orange. Refreshing, healthy, and perfect for sunny afternoons.",
  },
  {
    name: "Beef Nyama Choma",
    price: "KSh 900",
    image: "/images/nyama-choma.jpg",
    short: "Smoky, perfectly grilled beef cuts...",
    description:
      "Succulent beef grilled to perfection, seasoned with local spices and served with your choice of ugali or fries — a classic Kenyan delight.",
  },
];

const Menu = () => {
  const [selected, setSelected] = useState(null);

  return (
    <>
    <SEO
        title="Restaurant Menu | Le’Lesan Resort"
        description="Explore our resort menu — from grilled tilapia and chicken curry to fresh juices and Nyama Choma. Enjoy nature dining in Kesses."
        url="https://lelesan-resort.vercel.app/#menu"
      />
    <section id="menu" className="py-16 px-4 md:px-20 bg-white">
      <div className="text-center max-w-2xl mx-auto mb-10">
        <h2 className="text-3xl font-bold text-green-700 mb-3">Menu & Prices</h2>
        <p className="text-gray-600">
          Discover our signature dishes and refreshing drinks — prepared fresh
          every day at Le’Lesan Resort. Tap on a dish to view full details and
          prices.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <motion.div
            key={item.name}
            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
            transition={{ type: "spring", stiffness: 200 }}
            className="rounded-xl overflow-hidden bg-white border border-gray-100 shadow hover:shadow-lg transition cursor-pointer"
            onClick={() => setSelected(item)}
          >
            <img
              src={item.image}
              alt={item.name}
              className="h-48 w-full object-cover"
            />
            <div className="p-4 text-center">
              <h3 className="font-semibold text-gray-800">{item.name}</h3>
              <p className="text-sm text-gray-500 mt-1 italic">{item.short}</p>
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
                      `https://wa.me/254746495101?text=Hi, I’d like to order ${selected.name} from Le’Lesan Resort menu.`,
                      "_blank"
                    )
                  }
                  className="bg-green-700 text-white px-6 py-2 rounded-full hover:bg-green-800 transition-all"
                >
                  Order on WhatsApp
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

export default Menu;
