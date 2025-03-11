import React from 'react';
import { MapPin, Mail } from 'lucide-react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import RequirementForm from './RequirementForm';
import Ls from './Ls';

const Contact = () => {
  return (
    <>
      <Navbar />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
      </div>
      
      <h1 className="text-4xl font-bold text-center bg-black text-white py-4">
        Contact Us
      </h1>
      
      <div className="flex flex-col md:flex-row justify-between items-center mt-10 px-6 md:px-10">
        {/* Left Section - Text Content */}
        <div className="md:w-1/2 w-full mb-auto text-center md:text-left">
          <h1 className="text-blue-800 font-bold text-3xl md:text-5xl">
            Keep in touch
          </h1>
          <p className="mt-6 text-gray-700 font-semibold leading-relaxed">
            We operate a business built on trust. This can only be achieved
            through communication and experience support. From the first contact,
            you’re more and more anniversary with us.
          </p>
          <p className="mt-4 text-gray-700 font-semibold leading-relaxed">
            We are eager to discuss your business needs and answer any questions
            you may have. Enter your details, and we will get back to you
            shortly.
          </p>
        </div>

        {/* Right Section - Requirement Form */}
        <div className="md:w-1/2 w-full flex justify-center mt-10 md:mt-0">
          <div className="bg-blue-800 text-white p-6 md:p-8 rounded-lg shadow-lg w-full max-w-md">
            <RequirementForm />
          </div>
        </div>
      </div>

      {/* Contact Info Section */}
      <div className="bg-gray-900 text-white py-10 px-5 mt-10 flex flex-col md:flex-row justify-around items-center text-center md:text-left">
        <div className="flex items-center space-x-4 mb-6 md:mb-0">
          <Mail className="w-10 h-10 text-blue-500" />
          <div>
            <h2 className="text-orange-400 text-lg font-semibold">Email ID</h2>
            <p>info.dulexeenterprise@gmail.com</p>
          </div>
        </div>
        <div className="flex items-center space-x-4">
          <MapPin className="w-10 h-10 text-blue-500" />
          <div>
            <h2 className="text-orange-400 text-lg font-semibold">Address</h2>
            <p>GF-34, Dulexe Enterprise, s9 complex, Highway Road,</p>
            <p>Bharatnagar, Unjha – 384170, Gujarat, INDIA</p>
          </div>
        </div>
      </div>

      {/* Social Media QR Codes */}
      <div className="text-center mt-10 px-4">
        <h2 className="text-2xl text-[50px] font-semibold">Stay Connected</h2>
        <div className="flex flex-wrap justify-center mt-5 gap-4">
          <img src="../../spices/face.jpg" alt="Facebook QR" className="w-50 h-50 md:w-48 md:h-48" />
          <img src="../../spices/insta.jpg" alt="Instagram QR" className="w-50 h-50 md:w-48 md:h-48" />
          <img src="../../spices/link.jpg" alt="LinkedIn QR" className="w-50 h-50 md:w-48 md:h-48" />
        </div>
      </div>
      <Ls></Ls>
    </>
  );
};

export default Contact;