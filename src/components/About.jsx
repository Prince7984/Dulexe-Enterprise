import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Ls from './Ls';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";

const teamMembers = [
  {
    name: "Mr. Meet Patel",
    title: "Exporter, International Trade Expert",
    education: "BSC(Bachelor Science)",
    image: "../../spices/meet.jpg",
    linkedin: "https://www.linkedin.com/in/patel-meet-1a0399348?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description:
      "Mr. Meet Patel, an export industry expert with 5+ years of experience. Skilled in market research, logistics, documentation, and compliance. Dedicated to helping businesses succeed in global trade. Let's connect and grow your export business together, achieving new heights of success!",
  },
  {
    name: "Mr. Atul Patel",
    title: "Exporter, Digital Marketer",
    education: "M.Tech Mechanical Engineering",
    image: "../../spices/atul.jpg",
    linkedin: "https://www.linkedin.com/in/atul-patel-0417321a2?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app",
    description:
      "By education, Mr. Atul is a Mechanical engineer. By passion & profession, he has deep knowledge & interest in global business, consulting on digital marketing and global brand representation.",
  },
];

const logos = [
  { name: "MSME", img: "../../cirty/MSME.png" },
  { name: "Udyog Aadhaar", img: "../../cirty/UA.png" },
  { name: "FICCI", img: "../../cirty/FICCI.png" },
  { name: "ISO", img: "../../cirty/ISO.png" },
  { name: "DGFT", img: "../../cirty/DGFT.png" },
  { name: "FIEO", img: "../../cirty/FIEO.png" },
  { name: "FSSAI", img: "../../cirty/FSSAI.png" },
  { name: "GCCI", img: "../../cirty/GCCI.png" },
  { name: "GMP", img: "../../cirty/GMP.png" },
  { name: "GST", img: "../../cirty/GST.png" },
  { name: "SP", img: "../../cirty/SP.png" },
  { name: "APEDA", img: "../../cirty/APEDA.png" },
];

const About = () => {
  const [selectedImage, setSelectedImage] = useState(null);
 
  useEffect(() => {
    document.body.classList.toggle("overflow-hidden", !!selectedImage);
  }, [selectedImage]);

  return (
    <>
      <Navbar />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
      </div>

      <div className="mx-auto w-full py-10 px-4 overflow-hidden">
        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-black text-white py-4">
          Company
        </h1>
        
        <div className="flex flex-wrap items-center justify-center mt-10">
          <div className="w-full md:w-1/2 flex flex-col items-center text-center md:text-left">
            <h1 className="text-3xl sm:text-5xl font-bold">--About Us--</h1>
            <p className="text-base sm:text-lg mt-5 max-w-lg">
              <strong>About DULEXE ENTERPRISE</strong> <br />
              Dulexe Enterprise is a leading exporter of high-quality spices, pulses, grains, and agricultural commodities. 
              Established in 2020, the company has quickly built a reputation for excellence, reliability, and customer satisfaction.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="du.jpg" alt="Dulexe Enterprise" className="w-full max-w-md h-auto rounded-lg shadow-md" />
          </div>
        </div>

        <h1 className="text-3xl sm:text-4xl font-bold text-center bg-black text-white py-4 mt-10">
          Certifications
        </h1>
        <br />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 sm:gap-6">
          {logos.map((certificate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition-transform hover:scale-105"
            >
              <img
                src={certificate.img}
                alt={certificate.name}
                className="w-full object-cover mb-2 rounded-lg cursor-pointer"
                onClick={() => setSelectedImage(certificate.img)}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{certificate.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {selectedImage && (
          <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50">
            <div className="relative bg-white p-5 rounded-lg shadow-lg">
              <button
                onClick={() => setSelectedImage(null)}
                className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-800"
              >
                ✖ Close
              </button>
              <img src={selectedImage} alt="Certificate Preview" className="max-w-full max-h-[80vh] rounded-lg" />
            </div>
          </div>
        )}
        
        <div className="py-12 bg-gray-100">
          <h1 className="text-3xl sm:text-4xl font-bold text-center bg-black text-white py-4">
            Key Person
          </h1>
          <br />
          <div className="flex flex-wrap justify-center gap-6">
            {teamMembers.map((member, index) => (
              <div key={index} className="w-full sm:w-80 bg-white rounded-lg shadow-lg overflow-hidden">
                <img src={member.image} alt={member.name} className="w-full h-80 object-cover" />
                <div className="p-4 text-center">
                  <h3 className="text-xl font-bold text-blue-600">{member.name}</h3>
                  <p className="text-orange-500 font-semibold">{member.education}</p>
                  <p className="text-gray-700 font-medium mt-1">{member.title}</p>
                  <div className="flex justify-center gap-4 text-xl text-gray-600 my-4">
                  <a href="https://www.facebook.com/share/1A2k641vLF/" target="_blank" rel="noopener noreferrer">
                    <Facebook className="hover:text-blue-500 transition"/>
                  </a>
                  <a href="https://qr.me-qr.com/WCgEEPCp" target="_blank" rel="noopener noreferrer">
                    <Instagram  className="hover:text-pink-500 transition"/>
                  </a>
                  <a href={member.linkedin}>
                    <Linkedin  className="hover:text-blue-700 transition" />
                  </a>
                  </div>
                  <p className="text-gray-600 text-sm">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Ls />
    </>
  );
};

export default About;