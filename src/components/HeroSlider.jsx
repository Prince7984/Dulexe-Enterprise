import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

const HeroSlider = () => {
  return (
    <div className="relative w-full h-screen">
      <Swiper
        spaceBetween={0}
        slidesPerView={1}
        autoplay={{ delay: 3000, disableOnInteraction: false }}
        pagination={{ clickable: true }}
        navigation={true}
        modules={[Autoplay, Pagination, Navigation]}
        className="w-full h-full"
      >
        {/* Slide 1 */}
        <SwiperSlide>
          <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/import2.png')" }}
          >
            <div className="bg-opacity-50 p-6 rounded-md text-center">
              <h1 className="text-4xl font-bold text-white border-b-4 border-black inline-block pb-2">
                Welcome to
              </h1>
              <p className=" text-[50px] font-bold text-lg text-white  mt-2">Dulexe Enterprise Export Import</p>
              <Link to="/contact">
                <button className="text-[20px] font-bold mt-4 px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                  Contact Us
                </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 2 */}
        <SwiperSlide>
          <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/spises2.jpg')" }}
          >
            <div className=" bg-opacity-50 p-6 rounded-md text-center">
              <h1 className="text-[25px] font-bold text-white border-b-4 border-white inline-block pb-2 ">
                WE ARE HERE TO EXPORT 
              </h1>
              <p className="text-[70px] text-white mt-1">Indian Spices</p>
              <Link to="/spices">
              <button className="text-[20px] font-bold mt-4 px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                View More
              </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>

        {/* Slide 3 */}
        <SwiperSlide>
          <div
            className="relative w-full h-screen bg-cover bg-center flex items-center justify-center"
            style={{ backgroundImage: "url('/pulses.jpg')" }}
          >
            <div className=" bg-opacity-50 p-6 rounded-md text-center">
            <h1 className="text-[25px] font-bold text-white border-b-4 border-white inline-block pb-2 ">
                WE ARE HERE TO EXPORT 
              </h1>
              <p className="text-[70px] text-white mt-1">Indian Pulses</p>
              <Link to="/pulses">
              <button className="text-[20px] font-bold mt-4 px-8 py-4 border border-white rounded-full text-white hover:bg-white hover:text-black transition">
                View More
              </button>
              </Link>
            </div>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default HeroSlider;
