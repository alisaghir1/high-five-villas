"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from 'react-phone-number-input';
import 'react-phone-number-input/style.css';

interface FormData {
  firstName?: string;
  lastName?: string;
  phone?: string;
  country?: string;
  email?: string;
  bedrooms?: string;
  buySoon?: string;
  purpose?: string;
}

const Form: React.FC = () => {
  const [formData, setFormData] = useState<FormData>({
    firstName: "",
    lastName: "",
    phone: "",
    country: "",
    email: "",
    bedrooms: "",
    buySoon: "",
    purpose: "",
  });

  const [isChecked, setIsChecked] = useState(false);

  // Handle checkbox state change
  const handleCheckboxChange = () => {
    setIsChecked(!isChecked);
  };

  // Create a ref for the form element
  const formRef = useRef<HTMLFormElement>(null);

  // Prepare data for emailjs.send()
  const prepareEmailData = (): Record<string, unknown> => ({
    firstName: formData.firstName,
    lastName: formData.lastName,
    phone: formData.phone,
    country: formData.country,
    email: formData.email,
    bedrooms: formData.bedrooms,
    buySoon: formData.buySoon,
    purpose: formData.purpose,
    consent: isChecked,
  });

  // Handle form submission and send email via EmailJS
  const sendEmail = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      await emailjs.send(
        'service_tgdvry2',
        'template_n4traqr',
        prepareEmailData(),
        'bz-racFIdw40qpvrn'
      );
      
      console.log("SUCCESS!");
      setFormData({
        firstName: "",
        lastName: "",
        phone: "",
        country: "",
        email: "",
        bedrooms: "",
        buySoon: "",
        purpose: "",
      });
      alert("SUCCESS! Your message has been sent.");
    } catch (error) {
      alert("FAILED! Something went wrong, please try again.");
      console.error("FAILED...", error);
    }
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, phone: value || "" }); // Ensure the value is either a string or empty
  };



  return (
    <div id="Form" className="bg-customText2">
      <div className="flex justify-center items-center gap-12 w-100 pb-20 pt-20">
        <h2 className="text-2xl font-bold text-center text-customBg lg:text-3xl custom-font">
          REGISTER YOUR INTEREST
        </h2>
      </div>
      <form
        ref={formRef}
        onSubmit={sendEmail}
        className="max-w-4xl mx-auto pb-20 font-mono"
      >
        <div className="grid sm:grid-cols-2 gap-6">
          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="FIRST NAME"
              value={formData.firstName}
              onChange={(e) =>
                setFormData({ ...formData, firstName: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="LAST NAME"
              value={formData.lastName}
              onChange={(e) =>
                setFormData({ ...formData, lastName: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="relative flex items-center">
          <PhoneInput
          required
          international
          defaultCountry="US"
          value={formData.phone || undefined}
          onChange={handlePhoneChange}
          className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
        />
          </div>

          <div className="relative flex items-center">
            <input
              required
              type="text"
              placeholder="COUNTRY OF RESIDENCE"
              value={formData.country}
              onChange={(e) =>
                setFormData({ ...formData, country: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="email"
              placeholder="EMAIL"
              value={formData.email}
              onChange={(e) =>
                setFormData({ ...formData, email: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#bbb"
              stroke="#bbb"
              className="w-[18px] h-[18px] absolute right-2"
              viewBox="0 0 682.667 682.667"
            >
              <defs>
                <clipPath id="a" clipPathUnits="userSpaceOnUse">
                  <path d="M0 512h512V0H0Z" data-original="#000000"></path>
                </clipPath>
              </defs>
            </svg>
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="text"
              placeholder="NUMBER OF BEDROOMS"
              value={formData.bedrooms}
              onChange={(e) =>
                setFormData({ ...formData, bedrooms: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="text"
              placeholder="HOW SOON ARE YOU LOOKING TO BUY"
              value={formData.buySoon}
              onChange={(e) =>
                setFormData({ ...formData, buySoon: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="relative flex items-center sm:col-span-2">
            <input
              required
              type="text"
              placeholder="PURPOSE OF BUYING"
              value={formData.purpose}
              onChange={(e) =>
                setFormData({ ...formData, purpose: e.target.value })
              }
              className="px-2 py-6 bg-transparent text-black w-full text-lg border-b-2 border-customText focus:border-customBg outline-none"
            />
          </div>

          <div className="sm:col-span-2 flex items-start px-2">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2 w-8 h-8 bg-customBg"
              required
            />
            <label htmlFor="consent" className="text-lg text-customBg">
              By accepting and providing my personal information, I am
              consenting to High Five Properties Privacy Policy, as well as the
              applicable data protection laws.
            </label>
          </div>
        </div>

        <button
          type="submit"
          className="mt-10 px-6 py-2.5 w-full text-lg bg-customBg text-white transition 300 ease-in-out hover:bg-white hover:text-black rounded-sm"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
