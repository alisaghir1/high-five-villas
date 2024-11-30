"use client";
import React from "react";
import Image from "next/image";
import villa from "./assets/home-villa.jpg";
import Typewriter from "typewriter-effect";

const Home: React.FC = () => {
  return (
    <div className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
      <div className="absolute inset-0">
        <Image
          src={villa}
          alt="Background Image"
          className="object-cover object-center w-full h-full"
        />
        <div className="absolute inset-0 bg-black opacity-75"></div>
      </div>

      <div className="relative z-10 flex flex-col justify-center items-center h-full text-center mx-2">
        <h1 className="text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 custom-font">
        Book your <span className="text-customText">villa</span> with installement today
        </h1>
        <div className="text-lg text-gray-300 mb-8 font-mono">
          <Typewriter
            options={{
              strings: [
                "Discover your dream villa with High Five Villas, where luxury meets comfort",
                "Your trusted partner in villa real estate.",
                "Explore luxurious villas and estates.",
                "Making your villa dreams come true.",
                "Join us in exploring the finest selection of villas that match your vision.",
              ],
              autoStart: true,
              loop: true,
              delay: 75,
            }}
          />
        </div>
        <a
          href="#Form"
          className="bg-customText font-mono text-white hover:bg-white hover:text-black py-2 px-6 rounded-md text-md md:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg"
        >
          Register Your Interest
        </a>
      </div>
    </div>
  );
};

export default Home;
