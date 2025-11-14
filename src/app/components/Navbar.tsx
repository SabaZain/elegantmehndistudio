"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { GiHamburgerMenu } from "react-icons/gi";


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "/" },
    { name: "About", href: "/About" },
    { name: "Mehndi Designs", href: "/MehndiDesigns" },
    { name: "Price List", href: "/PriceList" },
    { name: "Contact", href: "/Contact" },
  ];

  return (
    <nav className="bg-orange-500 text-gray-800 shadow-md w-full mb-2">
      <div className="flex justify-between items-center px-4 py-3 md:px-8">
        {/* Logo & Title */}
        <div className="flex items-center space-x-3">
          <Image
            src="/Image/MehndiStudioLogo.jpg"
            alt="Mehndi Studio Logo"
            width={70}
            height={70}
            className="rounded-full"
          />
          <h1 className="text-2xl font-bold text-green-700">Elegant Mehndi Studio</h1>
        </div>

        {/* Desktop Links */}
        <ul className="hidden md:flex space-x-8 text-lg font-medium">
          {navItems.map((item) => (
            <li key={item.name}>
              <Link
                href={item.href}
                className="hover:text-green-600 transition-colors duration-200"
              >
                {item.name}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Menu */}
        <div className="md:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          <GiHamburgerMenu
            size={26}
            className="text-gray-700 cursor-pointer hover:text-green-600"
          />
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {isMenuOpen && (
        <div className="md:hidden bg-green-100 text-gray-800">
          <ul className="flex flex-col px-4 py-3 space-y-3 font-semibold">
            {navItems.map((item) => (
              <li key={item.name}>
                <Link
                  href={item.href}
                  onClick={() => setIsMenuOpen(false)}
                  className="block hover:text-green-700"
                >
                  {item.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
