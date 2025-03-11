import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react"; // Icons for menu

const Navbar2 = () => {
  const [isOpen, setIsOpen] = useState(false); // State to toggle menu

  return (
    <nav className="bg-gray-100 text-black shadow-md">
      <div className="flex justify-between items-center px-4 py-2">
        {/* Logo Section */}
        <div className="flex items-center">
          <img src="/logo2.png" alt="Logo" className="h-16 w-16" />
        </div>

        {/* Hamburger Button (Visible only on mobile) */}
        <button
          className="md:hidden p-2 rounded focus:outline-none"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={30} /> : <Menu size={30} />}
        </button>

        {/* Desktop Menu */}
        <ol className="hidden md:flex gap-8 text-lg font-bold">
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/">Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/about">About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/product">Product</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/contact">Contact Us</Link>
          </li>
        </ol>
      </div>

      {/* Mobile Menu (Shown when isOpen is true) */}
      {isOpen && (
        <ol className="md:hidden flex flex-col items-center gap-4 py-4 bg-gray-200 text-lg font-bold">
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/" onClick={() => setIsOpen(false)}>Home</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/about" onClick={() => setIsOpen(false)}>About</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/product" onClick={() => setIsOpen(false)}>Product</Link>
          </li>
          <li className="cursor-pointer hover:text-gray-600">
            <Link to="/contact" onClick={() => setIsOpen(false)}>Contact Us</Link>
          </li>
        </ol>
      )}
    </nav>
  );
};

export default Navbar2;
