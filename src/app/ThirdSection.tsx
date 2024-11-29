"use client";
import React, { useState } from "react";
import Image from "next/image";
import studio1 from "./assets/studio/s1.jpg";
import studio2 from "./assets/studio/s2.jpg";
import studio3 from "./assets/studio/s3.jpg";
import studio4 from "./assets/studio/s4.jpg";
import bedroom11 from "./assets/1 bedroom/bd-1-1.jpg";
import bedroom12 from "./assets/1 bedroom/bd-1-2.jpg";
import bedroom13 from "./assets/1 bedroom/bd-1-3.jpg";
import bedroom14 from "./assets/1 bedroom/bd-1-4.jpg";
import bedroom21 from "./assets/2 bedrooms/bd2-1.jpg";
import bedroom22 from "./assets/2 bedrooms/bd2-2.jpg";
import bedroom23 from "./assets/2 bedrooms/bd2-3.jpg";
import bedroom24 from "./assets/2 bedrooms/bd2-4.jpg";
import townhouse1 from "./assets/Town House/th-1.jpg";
import townhouse2 from "./assets/Town House/th-2.jpg";
import townhouse3 from "./assets/Town House/th-3.jpg";
import townhouse4 from "./assets/Town House/th-4.jpg";



const villaImages = {
  VillaInteriors: [studio1, studio2, studio3, studio4],
  VillaExteriors: [bedroom11, bedroom12, bedroom13, bedroom14],
  VillasAmenities: [bedroom21, bedroom22, bedroom23, bedroom24],
  VillasLocations: [townhouse1, townhouse2, townhouse3, townhouse4],
};

const ThirdSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<
    "VillaInteriors" | "VillaExteriors" | "VillasAmenities" | "VillasLocations"
  >("VillaInteriors");

  const handleButtonClick = (
    style: "VillaInteriors" | "VillaExteriors" | "VillasAmenities" | "VillasLocations"
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
                style as "VillaInteriors" | "VillaExteriors" | "VillasAmenities" | "VillasLocations"
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
              className="hover:opacity-75 w-full h-96 transition-opacity duration-300"
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
