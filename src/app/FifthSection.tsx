import React from "react";
import Swipper from "./components/Swipper";

const FifthSection: React.FC = () => {
  return (
    <section className="bg-customText2">
      <div className="text-center mx-2 py-20 ">
        <h2 className="text-2xl font-bold text-customBg lg:text-3xl pb-4 custom-font">
          ELEGANCE
        </h2>
        <p className="max-w-screen-sm black md:block mx-auto font-mono">
        At High Five Properties, we provide unparalleled elegance by seamlessly blending luxury, sophisticated design, and timeless style, ensuring each of our properties offers an exceptional living experience.
        </p>
      </div>
      <Swipper />
    </section>
  );
};

export default FifthSection;
