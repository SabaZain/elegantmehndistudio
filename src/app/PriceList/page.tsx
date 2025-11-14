export default function Pricing() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-amber-50 via-rose-50 to-amber-100 text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto text-center mb-12">
        <h1 className="text-4xl font-extrabold text-rose-700 mb-4 font-serif">
           Mehndi Price List
        </h1>
        <p className="text-lg text-gray-700 font-serif">
          pricing for beautiful, elegant mehndi designs crafted just for you 🌿
        </p>
      </div>

      {/* Price Table */}
      <div className="overflow-x-auto max-w-4xl mx-auto bg-white/80 backdrop-blur-sm rounded-2xl shadow-lg border border-amber-200">
        <table className="min-w-full text-left text-gray-800 font-serif">
          <thead className="bg-rose-100 text-rose-800 text-lg font-semibold">
            <tr>
              <th className="py-4 px-6 border-b">Design Area</th>
              <th className="py-4 px-6 border-b text-right">Price (PKR)</th>
            </tr>
          </thead>
          <tbody>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">🌸 Fingers Only</td>
              <td className="py-3 px-6 border-b text-right">Rs. 200 – 400</td>
            </tr>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">🌺 Palm (Front or Back)</td>
              <td className="py-3 px-6 border-b text-right">Rs. 250 – 500</td>
            </tr>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">🌼 Half Hands (Front or Back)</td>
              <td className="py-3 px-6 border-b text-right">Rs. 350 – 600</td>
            </tr>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">💮 Full Hands (Front or Back)</td>
              <td className="py-3 px-6 border-b text-right">Rs. 1000 – 2000</td>
            </tr>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">🌹 Feet Mehndi (Both Feet)</td>
              <td className="py-3 px-6 border-b text-right">Rs. 400 – 800</td>
            </tr>
            <tr className="hover:bg-amber-50">
              <td className="py-3 px-6 border-b">👰‍♀️ Bridal Mehndi (Full Coverage)</td>
              <td className="py-3 px-6 border-b text-right">Custom – Contact for Quote</td>
            </tr>
          </tbody>
        </table>
      </div>

      {/* Note Section */}
      <div className="max-w-3xl mx-auto mt-10 bg-amber-100/70 border-l-4 border-rose-600 p-6 rounded-md shadow-md">
        <h2 className="text-2xl font-semibold text-rose-700 mb-2 font-serif">
          ✨ Special Occasions 
        </h2>
        <p className="text-lg text-gray-700 font-serif">
          For bridal, Eid, party, or group events, please contact us directly for customized packages and discounts.
          Our pricing may vary based on design complexity, travel distance, and booking date.
        </p>
      </div>

      {/* WhatsApp Contact Button */}
      <div className="mt-10 text-center">
        <a
          href="https://wa.me/923332509758"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-rose-600 hover:bg-rose-700 text-white font-semibold py-3 px-8 rounded-md transition duration-300"
        >
          💬 Get Detailed Quote on WhatsApp
        </a>
      </div>

      <p className="text-center text-md text-gray-600 mt-8 italic font-serif">
        Prices are subject to change based on design intricacy and occasion.  
        Elegant Mehndi Studio aims to make your moments beautifully memorable 💖
      </p>
    </section>
  );
}
