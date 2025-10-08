import React, { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-10 w-full p-4 flex justify-between items-center bg-gray-900">
      {/* Logo */}
      <div id="nav-logo">
        <img className="h-12" src="/src/assets/images/logo.png" alt="Logo" />
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="text-white focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Navigation Links */}
      <div
        id="nav-links"
        className={`flex flex-col md:flex-row md:items-center gap-4 absolute md:static top-full left-0 w-full md:w-auto bg-gray-900 md:bg-transparent transition-all duration-300 ${
          isOpen ? "block" : "hidden"
        }`}
      >
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Home
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          About
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          What We Do
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Media
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Properties
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Gallery
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Careers
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          EMI Calculator
        </a>
        <a
          href="/"
          className="text-white font-semibold px-4 py-2 hover:bg-gray-700 rounded"
        >
          Contact
        </a>
      </div>

      {/* Login Button */}
      <div id="nav-btn" className="hidden md:block">
        <button className="bg-[#E2252D] px-4 py-2 rounded text-white font-semibold">
          Login
        </button>
      </div>
    </div>
  );
};

export default Header;
