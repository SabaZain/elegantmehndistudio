export default function Gallery() {
  const images = [
    "/Image/MD1.jpg",
    "/Image/MD47.jpg",
    "/Image/MD48.jpg",
    "/Image/MD49.jpg",
    "/Image/MD2.jpg",
    "/Image/MD10.jpg",
    "/Image/MD11.jpg",
    "/Image/MD12.jpg",
    "/Image/MD13.jpg",
    "/Image/MD14.jpg",
    "/Image/MD15.jpg",
    "/Image/MD3.jpg",
    "/Image/MD4.jpg",
    "/Image/MD5.jpg",
    "/Image/MD6.jpg",
    "/Image/MD7.jpg",
    "/Image/MD8.jpg",
    "/Image/MD9.jpg",
    "/Image/MD16.jpg",
    "/Image/MD17.jpg",
    "/Image/MD18.jpg",
    "/Image/MD19.jpg",
    "/Image/MD20.jpg",
    "/Image/MD21.jpg",
    "/Image/MD22.jpg",
    "/Image/MD23.jpg",
    "/Image/MD24.jpg",
    "/Image/MD25.jpg",
    "/Image/MD26.jpg",
    "/Image/MD27.jpg",
    "/Image/MD28.jpg",
    "/Image/MD29.jpg",
    "/Image/MD30.jpg",
    "/Image/MD31.jpg",
    "/Image/MD32.jpg",
    "/Image/MD33.jpg",
    "/Image/MD34.jpg",
    "/Image/MD35.jpg",
    "/Image/MD36.jpg",
    "/Image/MD37.jpg",
    "/Image/MD38.jpg",
    "/Image/MD39.jpg",
    "/Image/MD40.jpg",
    "/Image/MD41.jpg",
    "/Image/MD42.jpg",
    "/Image/MD43.jpg",
    "/Image/MD44.jpg",
    "/Image/MD45.jpg",
    "/Image/MD46.jpg",
    "/Image/Feet1.jpg",
    "/Image/Feet2.jpg",
    "/Image/Feet3.jpg",
    
];

  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 py-16 px-6 text-gray-800">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl font-extrabold text-rose-700 mb-3 font-serif">
          🌸 Elegant Mehndi Designs
        </h1>
        <p className="text-lg text-gray-700 font-serif">
          A collection of our most loved mehndi creations — crafted with passion and precision ✨
        </p>
      </div>

      {/* Responsive Gallery Grid */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 max-w-5xl mx-auto">
        {images.map((src, index) => (
          <div
            key={index}
            className="overflow-hidden rounded-lg shadow-md hover:shadow-xl hover:scale-[1.03] transition duration-300 bg-white/70 backdrop-blur-sm"
          >
            <img
              src={src}
              alt={`Mehndi Design ${index + 1}`}
              className="w-full h-64 object-cover"
            />
          </div>
        ))}
      </div>

      <p className="text-center text-md text-gray-600 mt-10 italic font-serif">
        🌿 More designs available on our Facebook — follow us for daily updates!
      </p>

      
    </section>
  );
}
