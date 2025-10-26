import React from "react";

const menuItems = [
  { name: "Grilled Tilapia with Ugali", price: "KSh 850", image: "/images/tilapia.jpg" },
  { name: "Chicken Curry & Rice", price: "KSh 750", image: "/images/chicken.jpg" },
  { name: "Fresh Juice (Mango, Passion, Orange)", price: "KSh 250", image: "/images/juice.jpg" },
  { name: "Beef Nyama Choma", price: "KSh 900", image: "/images/nyama-choma.jpg" },
];

const Menu = () => {
  return (
    <section id="menu" className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Menu & Prices</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
        {menuItems.map((item) => (
          <div key={item.name} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={item.image} alt={item.name} className="h-48 w-full object-cover" />
            <div className="p-4 text-center">
              <h3 className="font-semibold">{item.name}</h3>
              <p className="text-green-700 font-bold mt-2">{item.price}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Menu;
