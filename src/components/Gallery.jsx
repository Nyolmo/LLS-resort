import React from "react";

const gallery = [
  "/images/view.jpg",
  "/images/pool.jpg",
  "/images/pool2.jpg",
  "/images/ziplining.jpg",
  "/images/zipline2.jpg",
  "/images/bridge.jpg",
  "/images/zipline.jpg",
  "/images/kuku.jpg",
  "/images/view.jpg",
  
];

const Gallery = () => {
  return (
    <section id="gallery" className="py-16 px-4 md:px-20 bg-white">
      <h2 className="text-3xl font-bold text-center mb-10 text-green-700">Gallery</h2>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {gallery.map((img, i) => (
          <img key={i} src={img} alt="Resort" className="rounded-xl object-cover w-full h-64" />
        ))}
      </div>
    </section>
  );
};

export default Gallery;
