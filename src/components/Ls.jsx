import React from 'react';
import { Link } from "react-router-dom";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Ls = () => {
  return (
    <section className="relative mt-[10px] w-full text-center bg-gray-800 px-6 py-6">
      <div className="flex flex-wrap justify-between items-center gap-6">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center">
          <img className="mt-[5px] w-[150px]" src="logo2.png" alt="Logo" />
        </div>

        {/* Quick Links */}
        <div>
          <h1 className="font-bold text-white text-[28px]">Quick Links</h1>
          <ol className="text-white text-md font-bold space-y-1">
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/">Home</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/about">About</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/product">Product</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/contact">Contact Us</Link>
            </li>
          </ol>
        </div>

        {/* Products Section */}
        <div>
          <h1 className="font-bold text-white mt-[-55px] text-[28px]">Products</h1>
          <ol className="text-white text-md font-bold space-y-1">
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/Spices">Spices</Link>
            </li>
            <li className="cursor-pointer hover:text-orange-300">
              <Link to="/Pulses">Pulses</Link>
            </li>
          </ol>
        </div>

        {/* Contact Section */}
        <div className="text-white mt-[-55px] space-y-1">
          <div className="flex items-center">
            <MapPin size={16} />
            <a href="https://maps.app.goo.gl/rJyebbK4Zhtyf48n6" target="_blank" rel="noopener noreferrer" className="ml-1 hover:underline">
              Unjha, Gujarat, India
            </a>
          </div>
          <div className="flex items-center">
            <Mail size={16} />
            <a href="mailto:info.dulexeenterprise@gmail.com" className="ml-1 hover:underline">
              info.dulexeenterprise@gmail.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex space-x-3 mt-2">
            <a href="https://facebook.com" target="_blank" rel="noopener noreferrer">
              <Facebook size={20} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
              <Instagram size={20} className="hover:text-pink-500 transition" />
            </a>
            <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
              <Linkedin size={20} className="hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-3">
        <h1 className="text-white font-bold text-[16px]">DULEXE ENTERPRISE</h1>
      </div>
    </section>
  );
}

export default Ls;
