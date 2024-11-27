'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import reef from './assets/algedra.avif'; // Replace with actual paths
import logo from './assets/logo.svg'; // Replace with actual paths

const apartmentImages = {
  Studio: [reef, reef, reef, reef],
  OneBedroom: [logo, logo, logo, logo],
  TwoBedroom: [logo, reef, logo,reef],
  Townhouse: [reef, logo, logo, logo],
};

const ThirdSection: React.FC = () => {
  const [selectedStyle, setSelectedStyle] = useState<'Studio' | 'OneBedroom' | 'TwoBedroom' | 'Townhouse'>('Studio');

  const handleButtonClick = (style: 'Studio' | 'OneBedroom' | 'TwoBedroom' | 'Townhouse') => {
    setSelectedStyle(style);
  };

  return (
    <div className="flex flex-col items-center pb-10 mt-20">
      {/* Buttons container */}
      <div className="flex gap-4 mb-8 w-full max-w-[1385px]">
        {Object.keys(apartmentImages).map((style) => (
          <button
            key={style}
            onClick={() => handleButtonClick(style as 'Studio' | 'OneBedroom' | 'TwoBedroom' | 'Townhouse')}
            className={`flex-1 px-5 py-4 text-md rounded transition-all duration-300 ${selectedStyle === style ? 'bg-customBg text-black' : 'bg-none text-black hover:bg-customBg'}`}
          >
            {style.replace(/([A-Z])/g, ' $1').trim()} {/* Format button text */}
          </button>
        ))}
      </div>

      {/* Images container */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-5 w-full px-5 sm:px-10 lg:px-64">
        {apartmentImages[selectedStyle].map((imageSrc, index) => (
          <div key={index} className="flex justify-center w-full">
            <Image
              alt={`${selectedStyle} pic ${index + 1}`}
              className="hover:opacity-75 w-full h-auto transition-opacity duration-300"
              src={imageSrc}
              placeholder="blur" // For smooth loading effect
              blurDataURL="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zY3JpcHQtY2FwYWJpbGlpdGllZXMiIHdpZHRoPSIxMDAiIGhlaWdodD0iMTAwIj4KPHBhdGggZD0iTTEwMCw2MEw1MiwxMDAgTDEwMCw2MCBNNTAsMjAgTDUsNCAiLz4KPC9zdmc+Cg==" // Base64 placeholder (simple SVG image)
            />
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThirdSection;
