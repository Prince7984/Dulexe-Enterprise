import React from 'react';
import { useNavigate } from "react-router-dom"; // Import useNavigate
import { Link } from "react-router-dom";
import Navbar from './Navbar';
import Navbar2 from './Navbar2';
import Ls from './Ls';

const Product = () => {
  const navigate = useNavigate();  // ✅ Initialize navigate here

  return (
    <div>
      <Navbar />
      <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
        </div>
      <section className="container mx-auto py-10">
        <h2 className="text-4xl font-bold text-center mb-10">Products</h2>

        <div className="grid md:grid-cols-2 gap-8">
          {/* Spices Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/spises2.jpg" alt="Spices" className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-orange-600">Spices Products</h3>
              <p className="mt-3 text-gray-600">
                A spice is a seed, fruit, root, bark, or other plant substance primarily used for flavoring or coloring food. Spices are distinguished from herbs…
              </p>
              <button 
                onClick={() => navigate("/spices")}  // ✅ Now navigate is defined
                className="mt-4 px-6 py-2 bg-orange-600 text-white font-bold rounded-lg hover:bg-orange-700 transition"
              >
                View
              </button>
            </div>
          </div>

          {/* Pulses Card */}
          <div className="bg-white shadow-lg rounded-lg overflow-hidden">
            <img src="/pulses.jpg" alt="Pulses" className="w-full h-64 object-cover" />
            <div className="p-6 text-center">
              <h3 className="text-2xl font-bold text-green-600">Pulses Products</h3>
              <p className="mt-3 text-gray-600">
                Pulses are edible seeds of plants in the legume family, rich in proteins and essential nutrients...
              </p>
              <button 
                onClick={() => navigate("/pulses")}  // ✅ Now navigate is defined
                className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
              >
                View
              </button>
            </div>
          </div>
        </div>
      </section>
      <Ls />
    </div>
  );
}

export default Product;
