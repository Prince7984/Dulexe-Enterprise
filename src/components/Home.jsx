import React from "react";
import { useNavigate } from "react-router-dom"; // <-- Import useNavigate
import { Link } from "react-router-dom";
import Navbar2 from "./Navbar2";
import Navbar from "./Navbar";
import HeroSlider from "./HeroSlider";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import Ls from "./Ls";
import Pulses from "./Pulses";
import { ChevronRight } from "lucide-react";
import { MapPin, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
const logos = [
  { name: "MSME", img:"../../cirty/MSME.png" },
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

const features = [
  { img: "y1.jpg", title: "We Build Relations" },
  { img: "y2.jpg", title: "Experience & Professional" },
  { img: "y3.jpg", title: "High Quality Products" },
  { img: "y4.jpg", title: "We Deliver On Time" },
  { img: "y5.jpg", title: "Price Benefits" },
  { img: "y6.jpg", title: "Complete Client Satisfaction" },
];

const Home = () => {
  const navigate = useNavigate(); // <-- Initialize navigate function

  return (
    <>
      <div className="relative">
        <Navbar />
        <div className="sticky top-0 z-50 bg-white shadow-md">
        <Navbar2 />
        </div>
        <HeroSlider />
        <div className="flex flex-wrap items-center justify-center mt-10 px-4">
          {/* Left Side - Content Section */}
          <div className="w-full md:w-1/2 flex flex-col items-start">
            <h1 className="text-[60px] font-bold self-center">--About Us--</h1>
            <p className=" text-[18px] mt-5 max-w-lg self-center">
            About DULEXE ENTERPRISE
            Dulexe Enterprise is a leading exporter of high-quality spices, pulses, grains, and agricultural commodities, serving global markets with premium products sourced from trusted suppliers. <br />Established in 2020, the company has quickly built a reputation for excellence, reliability, and customer satisfaction  With a strong commitment to quality and sustainability, Dulexe Enterprise ensures that all its products meet international standards, providing customers with fresh and authentic agricultural goods. <br />The company specializes in bulk exports, catering to wholesalers, retailers, and food manufacturers worldwide.  By leveraging industry expertise and a well-established supply chain, Dulexe Enterprise continues to expand its reach, delivering pure, natural, and high-grade agricultural products to clients across various regions.
            </p>
          </div>
          {/* Right Side - Image Section */}
          <div className="w-full md:w-1/2 flex justify-center mt-6 md:mt-0">
            <img src="du.jpg" alt="Dulexe Enterprise" className="w-full h-auto rounded-lg shadow-md" />
          </div>
        </div>

        {/* What We Export Section */}
        <section className="container mx-auto py-10">
          <h2 className="text-4xl font-bold text-center mb-10">What We Export</h2>

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
                  onClick={() => navigate("/spices")}  // <-- Use navigate function
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
                  onClick={() => navigate("/Pulses")}  // <-- Use navigate function
                  className="mt-4 px-6 py-2 bg-green-600 text-white font-bold rounded-lg hover:bg-green-700 transition"
                >
                 View
                </button>
                
              </div>
            </div>
          </div>
        </section>
        <section className="mt-20 relative w-full h-auto bg-cover bg-center py-16" style={{ backgroundImage: "url('what.jpg')" }}>
      <div className="container mx-auto text-center">
        <h2 className="text-4xl font-bold text-neutral-900 mb-10">What We Do</h2>

        <div className="grid md:grid-cols-3 gap-10 text-white">
          {/* Export Section */}
          <div className="flex flex-col items-center text-center bg-black bg-opacity-50 p-6 rounded-lg">
            <img src="export.jpg" alt="Export" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold">Export</h3>
            <p className="mt-2">
              We are exporting the best quality products worldwide. If you need the best products on time, you are at the right place.
            </p>
          </div>

          {/* Import Section */}
          <div className="flex flex-col items-center text-center bg-black bg-opacity-50 p-6 rounded-lg">
            <img src="import.jpg" alt="Import" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold">Import Agent</h3>
            <p className="mt-2">
              We help foreign companies introduce their best quality products in India and connect them with local partners.
            </p>
          </div>

          {/* Sourcing Agent Section */}
          <div className="flex flex-col items-center text-center bg-black bg-opacity-50 p-6 rounded-lg">
            <img src="source.jpg" alt="Sourcing Agent" className="w-20 h-20 mb-4" />
            <h3 className="text-2xl font-bold">Sourcing Agent</h3>
            <p className="mt-2">
              We work as a local partner for foreign clients, sourcing the best quality products from India as per their requirements.
            </p>
          </div>
        </div>
      </div>
    </section>
        <section className="container mx-auto text-center py-16">
      <h2 className="text-4xl font-bold mb-10">Why You Choose Us</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {features.map((feature, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-xl p-6 flex flex-col items-center transition transform hover:-translate-y-2"
            style={{
              boxShadow: "10px 10px 20px rgba(0, 0, 0, 0.2), -10px -10px 20px rgba(255, 255, 255, 0.9)",
            }}
          >
            <img src={feature.img} alt={feature.title} className="w-40 h-40 mb-6" />
            <h3 className="text-lg font-semibold">{feature.title}</h3>
          </div>
          
        ))}
      </div>
    </section>
    <section className="container mx-auto py-10 text-center">
      <h2 className="text-3xl font-bold mb-6">Membership & Certification</h2>
      <Swiper
        slidesPerView={3}
        spaceBetween={20}
        centeredSlides={true}
        autoplay={{ delay: 2000 }}
        loop={true}
        navigation={true}
        pagination={{ clickable: true }}
        modules={[Autoplay, Navigation, Pagination]}
        breakpoints={{
          320: { slidesPerView: 1 },
          768: { slidesPerView: 2 },
          1024: { slidesPerView: 3 },
        }}
      >
        {logos.map((logo, index) => (
          <SwiperSlide key={index} className="flex justify-center">
            <div className="bg-white shadow-lg rounded-lg p-6">
              <img src={logo.img} alt={logo.name} className="w-32 h-32 object-contain mx-auto" />
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
   
        </div>
        <Ls></Ls>
    </>
  );
};

export default Home;
