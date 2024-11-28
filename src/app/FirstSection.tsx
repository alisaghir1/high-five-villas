import React from "react";
import Image from "next/image";
import studio from "./assets/studio/s1.jpg";
import bedroom1 from "./assets/1 bedroom/bd-1-5.jpg";
import bedroom2 from "./assets/2 bedrooms/bd2-5.jpg";
import townhouse from "./assets/Town House/th-5.jpg";

const FirstSection: React.FC = () => {
  return (
    <section className="bg-customBg h-full pt-20">
      <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
        <div className="flex items-center justify-between gap-8 mb-10">
          <div className="flex items-center gap-12">
            <h2 className="text-2xl font-bold text-white lg:text-3x custom-font">
              Our Property Gallery
            </h2>

            <p className="hidden max-w-screen-sm text-customText2 md:block font-mono">
              Explore our curated selection of properties across different
              categories. Whether you are looking for your dream home or
              commercial space, we have something for every need.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-2 gap-4 sm:grid-cols-3 md:gap-6 xl:gap-8">
          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg shadow-lg md:h-80">
            <Image
              src={studio}
              loading="lazy"
              alt="Photo by Minh Pham"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              Studio
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src={bedroom1}
              loading="lazy"
              alt="Photo by Magicle"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              1 Bedroom
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:col-span-2 md:h-80">
            <Image
              src={bedroom2}
              loading="lazy"
              alt="Photo by Martin Sanchez"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              2 Bedrooms
            </span>
          </div>

          <div className="group relative flex h-48 items-end overflow-hidden rounded-lg bg-gray-100 shadow-lg md:h-80">
            <Image
              src={townhouse}
              loading="lazy"
              alt="Photo by Lorenzo Herrera"
              className="absolute inset-0 h-full w-full object-fill object-center transition duration-200 group-hover:scale-110"
            />

            <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50"></div>

            <span className="relative ml-4 mb-3 inline-block text-sm text-white md:ml-5 md:text-lg font-mono">
              Town House
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
