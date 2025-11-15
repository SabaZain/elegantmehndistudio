"use client";
import { useEffect, useState } from "react";

const images = [
  "/Image/mehndihero.jpg",
  "/Image/heromehndiimage.webp",
  "/Image/MD1.jpg",
  "/Image/heromehndiimage2.webp",
  
];

export default function HeroSection() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev === images.length - 1 ? 0 : prev + 1));
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative w-full min-h-[calc(100vh-80px)] flex flex-col md:flex-row overflow-hidden bg-black text-white">
      {/* -------- LEFT SIDE: TEXT (Top-aligned) -------- */}
      <div className="flex flex-col justify-start items-start w-full md:w-[55%] px-6 md:px-20 py-10 md:py-20 text-left">
        <div className="space-y-6 max-w-xl">
          <h1 className="text-3xl text-center md:text-5xl font-extrabold text-amber-400 leading-tight drop-shadow-lg">
            Elegant Mehndi Studio
          </h1>

          <p className="text-gray-300 text-sm md:text-lg leading-relaxed">
            Where art meets tradition — discover our exquisite mehndi designs
            crafted with passion and precision to make every celebration
            unforgettable.
          </p>
         <div className="text-center">
          <a
            href="/MehndiDesigns"
            className=" bg-amber-500 hover:bg-amber-600 text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 shadow-lg"
          >
            Explore Designs
          </a>
          </div>
        </div>
      </div>

      {/* -------- RIGHT SIDE: IMAGE SLIDER (Top-aligned) -------- */}
      <div className="relative flex justify-start items-start w-full md:w-[45%] h-[50vh] md:h-[90vh] overflow-hidden rounded-lg shadow-lg">
        {images.map((img, index) => (
          <div
            key={index}
            className={`absolute inset-0 flex justify-center items-center transition-opacity duration-1000 ease-in-out ${
              index === current ? "opacity-100 z-10" : "opacity-0 z-0"
            }`}
          >
            <img
              src={img}
              alt={`Mehndi design ${index + 1}`}
              className="w-full h-full object-contain md:object-cover"
            />
          </div>
        ))}

        {/* Overlay */}
        <div className="absolute inset-0 bg-black" />

        {/* Indicators */}
        <div className="absolute bottom-3 left-1/2 transform -translate-x-1/2 flex space-x-2 z-20">
          {images.map((_, index) => (
            <span
              key={index}
              className={`w-3 h-3 rounded-full transition-all duration-500 ${
                current === index ? "bg-amber-400 scale-110" : "bg-white/50"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
