import React from 'react';
import { Link } from 'react-router-dom';

const Navbar2 = () => {
  return (
    <nav className="flex flex-col md:flex-row justify-between items-center px-4 py-2 bg-gray-100 text-black">
      
      {/* Logo Section */}
      <div className="flex items-center">
        <img src="/logo2.png" alt="Logo" className="h-20 w-20 mr-2" />
      </div>

      {/* Navigation Menu */}
      <ol className="flex flex-col  gap-4 md:flex-row  md:gap-15 text-lg font-bold mt-3 md:mt-0">
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

    </nav>
  );
};

export default Navbar2;
