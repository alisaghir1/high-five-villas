import React from "react";
import Image from "next/image";
import section1 from "./assets/section1.jpeg";

const SecondSection: React.FC = () => {
  return (
    <section className="bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20">
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-white lg:text-3xl pb-4 custom-font">
          Exclusive Off-Plan Villas in Dubai
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
          At High Five Villas, we specialize in offering a wide range of premium
          off-plan villa real estate solutions across Dubai and the United Arab
          Emirates. From luxurious standalone villas and townhouses to exquisite
          penthouses, our portfolio is designed to meet the diverse needs of
          discerning buyers. With a focus on quality, innovation, and
          exceptional customer service, we provide unparalleled opportunities
          for those looking to invest in one of the most dynamic real estate
          markets in the world. Whether you are seeking a new home or a
          profitable investment, High Five Villas ensures that every step of
          your journey is seamless and rewarding. Contact us today to explore
          your dream villa and experience the best in Dubai’s villa real estate!
        </p>
      </div>
      <Image
        className="w-full xl:w-5/6 rounded-none xl:rounded-2xl object-cover"
        src={section1}
        alt="second section image"
      />
    </section>
  );
};

export default SecondSection;
