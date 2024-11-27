import React from "react";
import Swipper from "./components/Swipper";

const FifthSection: React.FC = () => {
  return (
    <div>
      <div className="text-center mx-2 mb-20">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white pb-4">
          ELEGANCE
        </h2>
        <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block mx-auto">
        At High5 Properties, we provide unparalleled elegance by seamlessly blending luxury, sophisticated design, and timeless style, ensuring each of our properties offers an exceptional living experience.
        </p>
      </div>
      <Swipper />
    </div>
  );
};

export default FifthSection;
