import React from 'react';
import { Link } from "react-router-dom";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const Ls = () => {
  return (
    <section className="relative mt-10 w-full text-center bg-gray-800 px-6 py-6">
      <div className="flex flex-wrap justify-between items-center gap-6 md:flex-row flex-col text-center md:text-left">
        
        {/* Logo Section */}
        <div className="flex flex-col items-center md:items-start">
          <img className="w-[120px] md:w-[150px]" src="logo2.png" alt="Logo" />
        </div>

        {/* Quick Links */}
        <div className="space-y-2">
          <h1 className="font-bold text-white text-[24px] md:text-[28px]">Quick Links</h1>
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
        <div className="space-y-2">
          <h1 className="font-bold text-white text-[24px] md:text-[28px]">Products</h1>
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
        <div className="text-white space-y-4">
          <div className="flex items-center justify-center md:justify-start">
            <MapPin size={18} />
            <a href="https://maps.app.goo.gl/rJyebbK4Zhtyf48n6" target="_blank" rel="noopener noreferrer" className="ml-2 hover:underline">
              Unjha, Gujarat, India
            </a>
          </div>
          <div className="flex items-center justify-center md:justify-start">
            <Mail size={18} />
            <a href="mailto:info@dulexeenterprise.com" className="ml-2 hover:underline">
            info@dulexeenterprise.com
            </a>
          </div>

          {/* Social Media Icons */}
          <div className="flex justify-center md:justify-start space-x-4 mt-3">
            <a href="https://www.facebook.com/share/1A2k641vLF/" target="_blank" rel="noopener noreferrer">
              <Facebook size={24} className="hover:text-blue-500 transition" />
            </a>
            <a href="https://www.instagram.com/dulexe_enterprise?utm_source=qr&igsh=MXFyc3NwcDBrMmc3ZQ==" target="_blank" rel="noopener noreferrer">
              <Instagram size={24} className="hover:text-pink-500 transition" />
            </a>
            <a href="https://www.linkedin.com/company/105642990/admin/dashboard/" target="_blank" rel="noopener noreferrer">
              <Linkedin size={24} className="hover:text-blue-700 transition" />
            </a>
          </div>
        </div>
      </div>

      {/* Footer Text */}
      <div className="mt-5">
        <h1 className="text-white font-bold text-[16px]">DULEXE ENTERPRISE</h1>
      </div>
    </section>
  );
}

export default Ls;
