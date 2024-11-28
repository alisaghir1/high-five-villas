import React from "react";
import Image from "next/image";
import logo from "../assets/logo.svg";

const Footer: React.FC = () => {
  return (
    <footer className="bg-customBg font-mono">
      <div className="container px-4 mx-auto">
        <div className="pt-24 pb-11 mx-auto max-w-4xl">
          <a className="block md:mx-auto mb-5 max-w-max" href="#">
            <Image src={logo} alt="logo" className="p-5" />
          </a>
        </div>
      </div>
      <div className="border-b border-gray-100"></div>
      <div className="container px-4 mx-auto">
        <p className="py-10 md:pb-20 text-md text-white font-medium text-center">
          © 2024 High Five Properties. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
