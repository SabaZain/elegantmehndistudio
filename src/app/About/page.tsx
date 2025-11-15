export default function About() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-3xl text-center font-extrabold text-rose-700 mb-4 font-serif">
          🌿 About Elegant Mehndi Studio
        </h1>
        <p className="text-lg text-gray-700 font-serif">
          Where tradition meets elegance creating timeless mehndi art for every special moment.
        </p>
      </div>

      <div className="max-w-4xl mx-auto bg-white/70 backdrop-blur-sm rounded-2xl shadow-lg p-8 text-gray-800 border border-amber-200">
        <p className="text-lg text-center mb-6 leading-relaxed font-serif">
          Welcome to <span className="font-semibold text-rose-700">Elegant Mehndi Studio</span>
          <span className="font-semibold text-green-900"> By Sidra Kashif</span>, 
          your destination for intricate and luxurious mehndi designs. My journey began with a 
          deep love for the art of mehndi, a centuries old tradition that celebrates beauty, culture, 
          and joy. What started as a passion has grown into a professional studio that brings 
          elegance, creativity, and artistry to every hand we adorn.
        </p>

        <p className="text-lg text-center mb-6 leading-relaxed font-serif">
          Specialize in <span className="font-semibold text-rose-600">
          bridal mehndi, festive celebrations, engagement events,</span> 
          and <span className="font-semibold text-rose-600">custom party designs</span>.  
          Every stroke of mehndi tells a story, blending traditional motifs with modern styles 
          to match your unique personality and occasion.
        </p>

        <p className="text-lg text-center mb-6 leading-relaxed font-serif">
          At Elegant Mehndi Studio, we use only natural and high quality mehndi, ensuring rich color, 
          safe application, and long lasting beauty.
        </p>

        <div className="bg-amber-100/80 border-l-4 border-rose-600 p-4 rounded-md my-8 text-left">
          <h2 className="text-2xl text-center font-semibold text-rose-700 mb-2 font-serif">
            💮 Vision
          </h2>
          <p className="text-lg text-center text-orange-600 font-serif">
            To make every occasion more memorable by turning simple hands into a canvas of art  
            spreading happiness, tradition, and beauty through the art of mehndi.
          </p>
        </div>

        <p className="text-lg text-center leading-relaxed font-serif">
          Whether you are a bride to be, celebrating Eid, or simply love the elegance of mehndi, 
          we promise to make your experience truly special.  
          Join us and let your hands tell your story with <span className="text-rose-700 font-semibold">Elegant Mehndi Studio</span>. 🌸
        </p>
      </div>

      <div className="mt-12 text-center">
        <a
          href="/Contact"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          💌 Book Your Mehndi Appointment
        </a>
      </div>
    </section>
  );
}
