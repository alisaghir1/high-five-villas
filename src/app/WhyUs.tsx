import React from "react";

const WhyUs: React.FC = () => {
  return (
    <section className="pb-40 bg-customText2 font-mono">
      <div className="text-center px-2 mb-20 bg-customBg py-20">
        <h2 className="text-2xl font-bold text-white lg:text-3x pb-4 custom-font">
          Why Choose High Five Villas?
        </h2>
      </div>
      <div className="">
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mx-4 lg:px-20">
          {/* Question 1 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Why Choose High Five Villas?
            </h2>
            <p className="text-gray-600">
              At High Five Villas, we specialize in offering a curated selection of luxury villas and townhouses in Dubai’s most prestigious locations. Our portfolio features exclusive off-plan villas with unmatched quality, design, and exceptional value, ensuring a seamless investment experience.
            </p>
          </div>

          {/* Question 2 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              What Are the Benefits of Investing in Dubai Villas?
            </h2>
            <p className="text-gray-600">
              Investing in villas in Dubai offers unparalleled benefits. Enjoy strong potential for appreciation, tax-free returns on investment, and the prestige of owning property in one of the world’s most dynamic real estate markets. Our villas also offer the potential for residency, adding long-term value to your investment.
            </p>
          </div>

          {/* Question 3 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              What Kind of Villas Does High Five Villas Offer?
            </h2>
            <p className="text-gray-600">
              High Five Villas offers an exclusive selection of luxury villas, townhouses, and off-plan properties. Our villas are designed for discerning buyers seeking spacious layouts, exquisite finishes, private amenities, and unparalleled views. Whether you’re looking for a modern contemporary villa or a traditional Arabian-style home, we have something to suit every taste and lifestyle.
            </p>
          </div>

          {/* Question 4 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Where Are These Villas Located?
            </h2>
            <p className="text-gray-600">
              Our villas are located in the most prestigious neighborhoods across Dubai, including Palm Jumeirah, Downtown Dubai, Dubai Hills Estate, Arabian Ranches, and more. These locations are known for their breathtaking views, luxurious amenities, and convenient access to everything Dubai has to offer.
            </p>
          </div>

          {/* Question 5 */}
          <div className="p-6 shadow-lg rounded-xl">
            <h2 className="text-2xl font-semibold text-customBg mb-4">
              Why Are We Trusted by Leading Developers?
            </h2>
            <p className="text-gray-600">
              High Five Villas has earned the trust of leading developers in the UAE due to our commitment to delivering quality, excellence, and value. Our long-standing relationships with top developers allow us to offer exclusive off-plan villas and properties, ensuring our clients receive the best investment opportunities in the market.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhyUs;
