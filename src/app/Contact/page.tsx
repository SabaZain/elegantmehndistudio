export default function Contact() {
  return (
    <div className="bg-white max-w-full mx-auto bg-gradient-to-br from-amber-100 via-rose-50 to-amber-200 rounded-2xl shadow-xl p-8 text-gray-800 border border-amber-300">
      <h1 className="text-4xl font-extrabold mb-8 text-center text-rose-700 font-serif">
        🌸 Contact Elegant Mehndi Studio
      </h1>

      <p className="text-lg mb-4 text-gray-700 font-serif text-center">
        Have a special event coming up? Get in touch with us for bridal, party, or festive mehndi bookings.  
        I would love to create elegant Mehndi Art for your big day!
      </p>

      <ul className="list-disc list-inside mb-6 space-y-2 text-lg font-serif text-gray-800">
        <li>💫 Type of booking (Bridal / Party / Group / Festival)</li>
        <li>📅 Preferred date & time</li>
        <li>📍 Location or event venue</li>
        <li>📱 Your contact number</li>
      </ul>

      <p className="text-md font-semibold text-rose-800 mb-6 text-center">
        ✨ For price quotes and design options, message directly on WhatsApp!
      </p>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/923332509758"
        target="_blank"
        rel="noopener noreferrer"
        className="block w-full text-center bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-6 rounded-md transition duration-300 mb-4"
      >
        💬 Chat with us on WhatsApp
      </a>

      

      <div className="bg-white/60 backdrop-blur-sm p-5 rounded-lg shadow-inner">
        <h3 className="text-xl font-semibold mb-2 text-rose-700">
          🕒 Booking Hours:
        </h3>
        <p className="text-lg font-serif text-gray-800">
          We take bookings <span className="font-semibold text-rose-700">24/7</span> — but response hours are
          <span className="font-semibold text-rose-600"> 10:00 AM - 11:00 PM</span>.
        </p>
        <p className="text-lg font-serif text-gray-700 mt-2">
          Will reply as quickly as possible to help you plan your perfect mehndi experience 💖
        </p>
      </div>

      <p className="mt-8 italic text-md font-bold text-rose-900 font-serif text-center">
        🌿 Thank you for choosing Elegant Mehndi Studio — where tradition meets art ✨
      </p>
    </div>
  );
}
