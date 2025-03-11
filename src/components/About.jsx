import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Ls from './Ls';
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";

const teamMembers = [
  {
    name: "Mr. Meet Patel",
    title: "Exporter, International Exim Trainer",
    education: "BSC CHEMISTRY",
    image: "../../spices/meet.jpg",
    description:
      "Mr. Meet is an exporter & international export-import trainer with over 9 years of experience in global business. He provides practical knowledge and inspires many to do export-import business.",
  },
  {
    name: "Mr. Atul Patel",
    title: "Exporter, Digital Marketer",
    education: "ME Mechanical Engineering",
    image: "../../spices/atul.jpg",
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
                    <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                    <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                    <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
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