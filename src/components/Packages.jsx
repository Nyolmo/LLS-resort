import React from "react";

const packages = [
  {
    name: "Valentine’s Romantic Dinner",
    price: "KSh 4,500 / couple",
    desc: "Includes candlelit dinner, flowers, and live music.",
  },
  {
    name: "Family Fun Day Package",
    price: "KSh 3,000 / family",
    desc: "Access to kids park, swings, and trampoline all day.",
  },
  {
    name: "Team Building Package",
    price: "KSh 2,500 / person",
    desc: "Includes meals, games, and guided activities.",
  },
];

const Packages = () => {
  return (
    <section id="packages" className="py-16 px-4 md:px-20 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Packages & Offers</h2>
      <div className="grid md:grid-cols-3 gap-6">
        {packages.map((p) => (
          <div key={p.name} className="p-6 bg-white rounded-xl shadow hover:shadow-lg transition">
            <h3 className="font-bold text-xl text-green-700 mb-2">{p.name}</h3>
            <p className="text-sm mb-3">{p.desc}</p>
            <p className="font-semibold text-lg text-green-800">{p.price}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Packages;
