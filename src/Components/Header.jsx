import React, { useState } from "react";
import { Link } from "react-router-dom"; // 👈 Link import kiya

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative z-[999999] w-full flex justify-between items-center font-[Cabinet] py-[4vw] md:py-[1.3vw] px-[4vw] md:px-[2vw]">
      {/* Logo */}
      <div id="nav-logo">
        <Link to="/" className="flex items-center space-x-2">
          <img
            src="/src/assets/images/logo.png"
            alt="Logo"
            className="h-10 sm:h-10 rounded-[8px]"
          />
        </Link>
      </div>

      {/* Hamburger Button (Mobile) */}
      <div className="md:hidden">
        <button
          onClick={() => setIsOpen(true)}
          className="text-white text-3xl focus:outline-none"
        >
          ☰
        </button>
      </div>

      {/* Sliding Navigation Panel (Mobile) */}
      <div
        className={`fixed top-0 left-0 h-full w-64 bg-[#E2252D] text-white transform transition-transform duration-300 ease-in-out z-50 ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <div className="flex justify-between items-center p-4 border-b border-white">
          <Link to="/" className="flex items-center space-x-2">
            <img
              src="/src/assets/images/logo.png"
              alt="Logo"
              className="h-10 sm:h-10 rounded-[8px]"
            />
          </Link>
          <button
            onClick={() => setIsOpen(false)}
            className="text-2xl focus:outline-none"
          >
            ✕
          </button>
        </div>

        <nav className="flex flex-col mt-4 gap-2.5 px-4 font-[600]">
          <Link to="/" className="hover:bg-gray-700 px-3 py-2 rounded">
            Home
          </Link>
          <Link to="/about" className="hover:bg-gray-700 px-3 py-2 rounded">
            About
          </Link>
          <Link
            to="/what-we-do"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            What We Do
          </Link>
          <Link to="/media" className="hover:bg-gray-700 px-3 py-2 rounded">
            Media
          </Link>
          <Link
            to="/properties"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            Properties
          </Link>
          <Link to="/gallery" className="hover:bg-gray-700 px-3 py-2 rounded">
            Gallery
          </Link>
          <Link to="/careers" className="hover:bg-gray-700 px-3 py-2 rounded">
            Careers
          </Link>
          <Link
            to="/emi-calculator"
            className="hover:bg-gray-700 px-3 py-2 rounded"
          >
            EMI Calculator
          </Link>
          <Link to="/contact" className="hover:bg-gray-700 px-3 py-2 rounded">
            Contact
          </Link>
          <Link
            to="/login"
            className="w-fit bg-white text-[#E2252D] ml-[2vw] px-6 py-2 rounded"
          >
            Login
          </Link>
        </nav>
      </div>

      {/* Desktop Nav Links */}
      <div className="hidden md:flex gap-0 items-center">
        <Link
          to="/"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Home
        </Link>
        <Link
          to="/about"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          About
        </Link>
        <Link
          to="/what-we-do"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          What We Do
        </Link>
        <Link
          to="/media"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Media
        </Link>
        <Link
          to="/properties"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Properties
        </Link>
        <Link
          to="/gallery"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Gallery
        </Link>
        <Link
          to="/careers"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Careers
        </Link>
        <Link
          to="/emi-calculator"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          EMI Calculator
        </Link>
        <Link
          to="/contact"
          className="text-white font-semibold px-4 py-2 hover:bg-[#E2252D] rounded"
        >
          Contact
        </Link>
      </div>

      {/* Login Button */}
      <div className="hidden md:block">
        <Link
          to="/login"
          className="bg-[#E2252D] px-4 py-2 rounded text-white font-semibold"
        >
          Login
        </Link>
      </div>
    </div>
  );
};

export default Header;
