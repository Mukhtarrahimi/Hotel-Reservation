import React from "react";
import bgImage from "../assets/hero2.jpg";

function Hero() {
  return (
    <div
      className="relative h-[100vh] w-full bg-cover bg-center bg-no-repeat"
      style={{ backgroundImage: `url(${bgImage})` }}
    >
      <div className="absolute inset-0 bg-gray-900 opacity-30 z-10"></div>
      <div className="relative z-20 flex flex-col items-center justify-center h-full text-center text-white px-4">
        <h2 className=" text-lg mb-4 tracking-widest uppercase">
          Welcome to Nigar Hotel
        </h2>
        <h2 className="text-4xl font-bold mb-6">
          Experience comfort, elegance, and easy booking — all in one place.
        </h2>
        <button className="bg-lime-500 text-black font-bold py-3 px-6 rounded-lg hover:bg-lime-600 transform">
          Book Now
        </button>
      </div>
    </div>
  );
}

export default Hero;
