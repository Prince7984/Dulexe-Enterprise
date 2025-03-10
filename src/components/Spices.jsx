import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Ls from "./Ls";

const Spices = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Hide scrollbar on page load
  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, []);

  // Disable scrolling when modal is open
  useEffect(() => {
    if (selectedImage) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [selectedImage]);

  const spicesList = [
    { name: "Black Pepper", image: "../../spices/Black Pepper.png" },
    { name: "Cardamom seeds", image: "../../spices/Cardamom seed.jpg" },
    { name: "Chilli Powder Kashmiri", image: "../../spices/Chilli Powder Kashmiri.png" },
    { name: "Chilli Powder Medium Hot", image: "../../spices/Chilli Powder Medium Hot.png" },
    { name: "Chilli Powder Resham Patti", image: "../../spices/Chilli Powder Resham Patti.png" },
    { name: "Chilli Whole", image: "../../spices/Chilli Whole.png" },
    { name: "Cinnamon Flat", image: "../../spices/Cinnamon Flat.png" },
    { name: "Cinnamon Round", image: "../../spices/Cinnamon Round.png" },
    { name: "Clove Powder", image: "../../spices/Clove Powder.png" },
    { name: "Clove whole", image: "../../spices/Clove whole.png" },
    { name: "Coriander Powder", image: "../../spices/Coriander Powder.png" },
    { name: "Coriander Seeds", image: "../../spices/Coriander Seeds.png" },
    { name: "Curry Leave", image: "../../spices/Curry Leave.png" },
    { name: "Dill Seed", image: "../../spices/Dill Seed.png" },
    { name: "Dry Ginger Slice", image: "../../spices/Dry Ginger Slice.png" },
    { name: "Dry Ginger", image: "../../spices/Dry Ginger.png" },
    { name: "Fennel seeds pure Green", image: "../../spices/Fennel seeds pure Green.png" },
    { name: "Fennel Seeds", image: "../../spices/Fennel Seeds.png" },
    { name: "Fenugreek Seeds", image: "../../spices/Fenugreek Seeds.png" },
    { name: "Mustard Seeds Bold", image: "../../spices/Mustard Seeds Bold.png" },
    { name: "Mustard Seeds Small", image: "../../spices/Mustard Seeds Small.png" },
    { name: "Mustard Seeds Yellow", image: "../../spices/Mustard Seeds Yellow.png" },
    { name: "Sesame Black", image: "../../spices/Sesame Black.png" },
    { name: "Sesame Brown", image: "../../spices/Sesame Brown.png" },
    { name: "Sesame Holled", image: "../../spices/Sesame Holled.png" },
    { name: "Sesame White", image: "../../spices/Sesame White.png" },
    { name: "Turmeric Powder", image: "../../spices/Turmeric Powder.png" },
    { name: "Turmeric Whole", image: "../../spices/Turmeric Whole.png" }
  ];

  return (
    <>
      <Navbar />
      {/* Sticky Navbar2 */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
      </div>

      <div className="mx-auto w-full py-10">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center bg-black text-white py-4">
          Spices
        </h1>

        {/* About Section */}
        <div className="flex flex-wrap items-center justify-center my-10 px-4">
          <div className="w-full md:w-1/2 p-4">
            <img src="/spises2.jpg" alt="Spices" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-gray-700">
            <h2 className="text-3xl font-bold mb-4">About Spices</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Spices are one of the most important ingredients in Indian dishes.</li>
              <li>India leads in spice production and export.</li>
              <li>Used in food, cosmetics, medicine, and perfumery industries.</li>
              <li>Spices provide distinct flavors, colors, and nutritional benefits.</li>
              <li>They contain antioxidants and antimicrobial agents.</li>
            </ul>
          </div>
        </div>

        {/* Spices Products Grid */}
        <h2 className="text-3xl font-bold text-center text-blue-600 my-8">
          Spices Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 px-4">
          {spicesList.map((spice, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9)",
              }}
            >
              <img
                src={spice.image}
                alt={spice.name}
                className="w-full h-60 object-cover mb-2 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(spice.image)}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{spice.name}</h3>
              </div>
            </div>
          ))}
        </div>
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
            <img src={selectedImage} alt="Spice Preview" className="max-w-full max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}

      <Ls />
    </>
  );
};

export default Spices;
