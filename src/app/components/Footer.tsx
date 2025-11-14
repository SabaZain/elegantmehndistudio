import React from "react";
import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-900 text-white mt-2 py-8 w-full">
      <div className="max-w-6xl mx-auto mt-2 px-6 flex flex-col md:flex-row justify-between items-start gap-8">
        {/* Branding */}
        <div>
          <h2 className="text-2xl font-bold text-green-600 mb-2">Elegant Mehndi Studio</h2>
          <p className="text-md text-gray-300">
            Intricate, artistic, and elegant mehndi designs crafted with love for your special moments.
          </p>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-2">📞 Contact</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li>
              📱 WhatsApp <a href="https://wa.me/923332509758" className="text-green-600 hover:underline" target="_blank">+92 333 2509758</a>
            </li>
            <li>
              📞 Phone <a href="tel:+923332509758" className="text-green-600 hover:underline">+92 333 2509758</a>
            </li>
            <li>🌐 Facebook: <a href="https://www.facebook.com/share/1Ba3Xbm3gR/" target="_blank" className="text-red-700 hover:underline">Ssidra Kashif</a></li>
            <li>
              📍 Location: <span className="text-gray-300">Karachi, Pakistan</span>
            </li>
          </ul>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-lg font-semibold text-green-500 mb-2">🔗 Quick Links</h3>
          <ul className="text-sm text-gray-300 space-y-1">
            <li><Link href="/About" className="hover:underline">About</Link></li>
            <li><Link href="/MehndiDesigns" className="hover:underline">Explore Designs</Link></li>
            <li><Link href="/Contact" className="hover:underline">Contact</Link></li>
          </ul>
        </div>
      </div>

      {/* Bottom Copyright */}
      <div className="text-center text-white text-sm mt-10 border-t border-gray-700 pt-4">
        © {new Date().getFullYear()} Elegant Mehndi Studio. All rights reserved.
      </div>
    </footer>
  );
}