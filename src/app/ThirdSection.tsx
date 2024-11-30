"use client";
import React, { useState } from "react";
import Image from "next/image";
import exterior1 from './assets/villa exterior/villaEx1.jpeg'
import exterior2 from './assets/villa exterior/villaEx5.jpeg'
import exterior3 from './assets/villa exterior/villaEx2.jpeg'
import exterior4 from './assets/section2.jpg'
import twobd1 from './assets/two bedrooms/2bd-1.jpeg'
import twobd2 from './assets/two bedrooms/2bd-2.jpeg'
import twobd3 from './assets/two bedrooms/2bd-3.jpg'
import twobd4 from './assets/two bedrooms/2bd-4.jpg'
import bedroom21 from "./assets/2 bedrooms/bd2-1.jpg";
import bedroom22 from "./assets/2 bedrooms/bd2-2.jpg";
import bedroom23 from "./assets/2 bedrooms/bd2-3.jpg";
import bedroom24 from "./assets/2 bedrooms/bd2-4.jpg";
import fourbd1 from './assets/four bedrooms/4bd-1.jpeg'
import fourbd2 from './assets/four bedrooms/4bd-2.jpeg'
import fourbd3 from './assets/four bedrooms/4bd-3.jpg'
import fourbd4 from './assets/four bedrooms/4bd-4.jpg'




const villaImages = {
  VillaExteriors: [exterior1, exterior2, exterior3, exterior4],
  TwoBedroomsVilla: [twobd1, twobd2, twobd3, twobd4],
  ThreeBedroomsVilla: [bedroom21, bedroom22, bedroom23, bedroom24],
  FourToSixBedroomsVilla: [fourbd1, fourbd2, fourbd3, fourbd4],
};

const ThirdSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<
    "VillaExteriors" | "TwoBedroomsVilla" |  "ThreeBedroomsVilla" | "FourToSixBedroomsVilla"
  >("VillaExteriors");

  const handleButtonClick = (
    style: "VillaExteriors" | "TwoBedroomsVilla" |  "ThreeBedroomsVilla" | "FourToSixBedroomsVilla"
  ) => {
    setSelectedStyle(style);
  };

  return (
    <section className="flex flex-col items-center pb-20 pt-20 bg-customBg">
      {/* Buttons container */}
      <div className="flex flex-col lg:flex-row gap-4 mb-8 w-full max-w-[1385px]">
        {Object.keys(villaImages).map((style) => (
          <button
            key={style}
            onClick={() =>
              handleButtonClick(
                style as "VillaExteriors" | "TwoBedroomsVilla" |  "ThreeBedroomsVilla" | "FourToSixBedroomsVilla"
              )
            }
            className={`flex-1 px-5 py-4 text-md lg:rounded-xl transition-all font-mono duration-300 ${
              selectedStyle === style
                ? "bg-customText2 text-black"
                : "bg-none text-white hover:text-black hover:bg-customText2"
            }`}
          >
            {style.replace(/([A-Z])/g, " $1").trim().replace("Villa", " Villa")} {/* Format button text */}
          </button>
        ))}
      </div>

      {/* Images container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full px-5 sm:px-10 lg:px-64 pb-20">
        {villaImages[selectedStyle].map((imageSrc, index) => (
          <div key={index} className="flex justify-center w-full">
            <Image
              alt={`${selectedStyle} pic ${index + 1}`}
              className="hover:opacity-75 object-cover w-full h-96 transition-opacity duration-300"
              src={imageSrc}
              placeholder="blur" // For smooth loading effect
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ThirdSection;
