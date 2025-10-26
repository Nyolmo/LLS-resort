

const activities = [
  { name: "Zip Lining", image: "./images/zipline.jpg" },
  { name: "Bridge Swing", image: "./images/bridge.jpg" },
  { name: "Trampoline", image: "./images/trampoline.jpg" },
  { name: "Ferris Wheel", image: "./images/ferris-wheel.jpg" },
  { name: "Outdoor Garden", image: "./images/garden.jpg" },
  { name: "Creative & Artwork", image: "./images/artwork.jpg" },
];

const Activities = () => {
  return (
    <section id="activities" className="py-16 px-4 md:px-20 bg-green-50">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Activities & Attractions</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {activities.map((act) => (
          <div key={act.name} className="rounded-xl overflow-hidden shadow hover:shadow-lg transition">
            <img src={act.image} alt={act.name} className="h-64 w-full object-cover" />
            <div className="p-4 text-center font-semibold text-lg">{act.name}</div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
