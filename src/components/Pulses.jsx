import React, { useState, useEffect } from "react";
import Navbar from "./Navbar";
import Navbar2 from "./Navbar2";
import Ls from "./Ls";

const Pulses = () => {
  const [selectedImage, setSelectedImage] = useState(null);

  // Disable scroll when modal is open
  useEffect(() => {
    document.body.style.overflow = selectedImage ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [selectedImage]);

  const pulsesList = [
    { name: "Chana Dal", image: "../../pulseslist/Chana Dal.png" },
    { name: "Kabuli Chana", image: "../../pulseslist/Kabuli Chana.png" },
    { name: "Kala Chana", image: "../../pulseslist/Kala Chana.png" },
    { name: "Kashmiri Rajma", image: "../../pulseslist/Kashmiri Rajma.png" },
    { name: "Moong Dal", image: "../../pulseslist/Moong Dal.png" },
    { name: "Moong Whole", image: "../../pulseslist/Moong Whole.png" },
    { name: "Toor Dal", image: "../../pulseslist/Toor Dal.png" },
    { name: "Urad Dal", image: "../../pulseslist/Urad Dal.png" }
  ];

  return (
    <>
      <Navbar />
      {/* Sticky Navbar2 */}
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
      </div>

      <div className="mx-auto w-full py-10 px-4">
        {/* Header */}
        <h1 className="text-4xl font-bold text-center bg-black text-white py-4">
          Pulses
        </h1>

        {/* About Section */}
        <div className="flex flex-wrap items-center justify-center my-10">
          <div className="w-full md:w-1/2 p-4">
            <img src="/pulses.jpg" alt="Pulses" className="w-full rounded-lg shadow-lg" />
          </div>
          <div className="w-full md:w-1/2 p-4 text-gray-700">
            <h2 className="text-3xl font-bold mb-4">About Pulses</h2>
            <ul className="list-disc ml-6 space-y-2">
              <li>Pulses are an excellent source of plant-based protein.</li>
              <li>They are rich in fiber, vitamins, and minerals.</li>
              <li>Commonly used in various cuisines worldwide.</li>
              <li>Essential for vegetarian and vegan diets.</li>
              <li>Environmentally friendly due to low water consumption.</li>
            </ul>
          </div>
        </div>

        {/* Pulses Products Grid */}
        <h2 className="text-3xl font-bold text-center text-green-600 my-8">
          Pulses Products
        </h2>

        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {pulsesList.map((pulse, index) => (
            <div
              key={index}
              className="bg-white shadow-lg rounded-lg overflow-hidden transition transform hover:-translate-y-2"
              style={{
                boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9)",
              }}
            >
              <img
                src={pulse.image}
                alt={pulse.name}
                className="w-full h-50 object-cover mb-2 rounded-lg transition-transform duration-300 hover:scale-110 cursor-pointer"
                onClick={() => setSelectedImage(pulse.image)}
              />
              <div className="p-4 text-center">
                <h3 className="text-lg font-semibold">{pulse.name}</h3>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Modal for Image Preview */}
      {selectedImage && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-75 z-50 p-4">
          <div className="relative bg-white p-5 rounded-lg shadow-lg max-w-[90%] max-h-[90%]">
            <button
              onClick={() => setSelectedImage(null)}
              className="absolute top-2 right-2 bg-red-600 text-white px-3 py-1 rounded-full hover:bg-red-800"
            >
              ✖ Close
            </button>
            <img src={selectedImage} alt="Pulse Preview" className="max-w-full max-h-[80vh] rounded-lg" />
          </div>
        </div>
      )}

      <Ls />
    </>
  );
};

export default Pulses;
