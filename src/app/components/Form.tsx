"use client";
import React, { useState, useRef } from "react";
import emailjs from "@emailjs/browser";
import PhoneInput from "react-phone-number-input";
import "react-phone-number-input/style.css";

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
  const [loading, setLoading] = useState(false);
  const [alertMessage, setAlertMessage] = useState<string>("");
  const [showAlert, setShowAlert] = useState<boolean>(false);

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
    setLoading(true); // Show loader

    try {
      await emailjs.send(
        "service_tgdvry2",
        "template_n4traqr",
        prepareEmailData(),
        "bz-racFIdw40qpvrn"
      );

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
      setAlertMessage("Thanks for Your Interest! Our Team Will Contact You Soon.");
      setShowAlert(true);
    } catch (error) {
      setAlertMessage("FAILED! Something went wrong, please try again.");
      setShowAlert(true);
      console.error("FAILED...", error);
    } finally {
      setLoading(false); // Hide loader
    }
  };

  const handlePhoneChange = (value: string | undefined) => {
    setFormData({ ...formData, phone: value || "" });
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
          disabled={loading} // Disable the button while loading
          className="mt-10 px-6 py-2.5 w-full text-lg bg-customBg text-white transition 300 ease-in-out hover:bg-white hover:text-black rounded-sm"
        >
          {loading ? (
            <div className="flex justify-center items-center">
              <div className="spinner"></div> {/* Spinner when loading */}
            </div>
          ) : (
            "Submit"
          )}
        </button>
      </form>

      {/* Custom Alert */}
      {showAlert && (
        <div className="alert-container">
          <div className="alert-box bg-customBg text-customText2">
            <p>{alertMessage}</p>
            <button onClick={() => setShowAlert(false)} className="alert-close">
              Close
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .spinner {
          border: 3px solid #f3f3f3;
          border-top: 3px solid #3498db;
          border-radius: 50%;
          width: 24px;
          height: 24px;
          animation: spin 2s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .alert-container {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          display: flex;
          justify-content: center;
          align-items: center;
          background: #e5e0da;
          z-index: 1000;
        }

        .alert-box {
          background-color: #fff;
          padding: 20px;
          border-radius: 8px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
          text-align: center;
          max-width: 400px;
          width: 90%;
          color: #453c35;
        }

        .alert-text {
          color: #453c35; /* Same color as the close button */
        }

        .alert-close {
          background-color: #453c35;
          color: white;
          border: none;
          padding: 8px 16px;
          border-radius: 4px;
          cursor: pointer;
          margin-top: 10px;
        }

        .alert-close:hover {
          background-color: #e5e0da;
          color: black;
        }
      `}</style>
    </div>
  );
};

export default Form;
