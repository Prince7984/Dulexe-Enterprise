import React, { useState, useEffect } from 'react';
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Ls from './Ls';
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter, FaYoutube } from "react-icons/fa";


const teamMembers = [
  {
    name: "Mr. Meet Patel",
    title: "Exporter, International Exim Trainer",
    education: "BSC CHEMISTRY",
    image: "../../spices/meet.jpg", // Replace with actual image path
    description:
      "Mr. Meet is an exporter & international export-import trainer with over 9 years of experience in global business. He provides practical knowledge and inspires many to do export-import business.",
  },
  {
    name: "Mr. Atul Patel",
    title: "Exporter, Digital Marketer",
    education: "ME Mechanical Engineering",
    image: "../../spices/atul.jpg", // Replace with actual image path
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
    if (selectedImage) {
      document.body.classList.add("overflow-hidden");
    } else {
      document.body.classList.remove("overflow-hidden");
    }
  }, [selectedImage]);

  return (
    <>
      <Navbar />
      
      {/* Sticky Navbar2 */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
      </div>

      {/* Main Content */}
      <div className="mx-auto w-full py-10 overflow-hidden">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center bg-black text-white py-4">
          Company
        </h1>
        
        {/* About Us Section */}
        <div className="flex flex-wrap items-center justify-center mt-10 px-4">
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="text-[60px] font-bold self-center">--About Us--</h1>
            <p className="text-[18px] mt-5 max-w-lg self-center">
              <strong>About DULEXE ENTERPRISE</strong> <br />
              Dulexe Enterprise is a leading exporter of high-quality spices, pulses, grains, and agricultural commodities, serving global markets with premium products sourced from trusted suppliers. 
              <br />Established in 2020, the company has quickly built a reputation for excellence, reliability, and customer satisfaction.  
              <br />With a strong commitment to quality and sustainability, Dulexe Enterprise ensures that all its products meet international standards, providing customers with fresh and authentic agricultural goods.
            </p>
          </div>
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="du.jpg" alt="Dulexe Enterprise" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* Certification Section */}
        <h1 className="text-4xl font-bold text-center bg-black text-white py-4 mt-10">
          Certifications
        </h1>
        <br /><br />

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {logos.map((certificate, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9)",
              }}
            >
              <img
                src={certificate.img}
                alt={certificate.name}
                className="w-full h-90 object-cover mb-2 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(certificate.img)}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{certificate.name}</h3>
              </div>
            </div>
          ))}
        </div>

        {/* Modal for Image Preview */}
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
        <h1 className="text-4xl font-bold text-center bg-black text-white py-4">
        Key Person
        </h1>
        <br /><br />
      <div className="flex flex-wrap justify-center gap-8 px-4">
        {teamMembers.map((member, index) => (
          <div
            key={index}
            className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden border border-gray-300"
          >
            <img
              src={member.image}
              alt={member.name}
              className="w-full h-100 object-cover border-b"
            />
            <div className="p-6 text-center">
              <h3 className="text-xl font-bold text-blue-600">{member.name}</h3>
              <p className="text-orange-500 font-semibold">{member.education}</p>
              <p className="text-gray-700 font-medium mt-1">{member.title}</p>
              <div className="flex justify-center gap-4 text-xl text-gray-600 my-4">
                <FaFacebook className="hover:text-blue-600 cursor-pointer" />
                <FaInstagram className="hover:text-pink-600 cursor-pointer" />
                <FaLinkedin className="hover:text-blue-800 cursor-pointer" />
                {/* <FaTwitter className="hover:text-blue-400 cursor-pointer" />
                <FaYoutube className="hover:text-red-600 cursor-pointer" /> */}
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
