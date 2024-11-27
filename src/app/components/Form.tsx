'use client'
import React, { useState } from 'react';


const Form:React.FC = () => {
    const [isChecked, setIsChecked] = useState(false);

    const handleCheckboxChange = () => {
      setIsChecked(!isChecked);
    };
    
  return (
    <div id='Form' className='bg-customText2'>
       <div className="flex justify-center items-center gap-12 w-100 pb-20 pt-20">
                <h2 className="text-2xl font-bold text-center text-customBg lg:text-3xl custom-font">REGISTER YOUR INTERESET</h2>
            </div>
    <form className="font-[sans-serif] max-w-4xl mx-auto  pb-20 font-mono">
      <div className="grid sm:grid-cols-2 gap-6">
        <div className="relative flex items-center">
          <input type="text" placeholder="FIRST NAME"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center">
          <input type="text" placeholder="LAST NAME"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center">
          <input type="number" placeholder="PHONE NO."
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center">
          <input type="text" placeholder="COUNTRY OF RESIDENCE"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <input type="email" placeholder="EMAIL"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
          <svg xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2"
            viewBox="0 0 682.667 682.667">
            <defs>
              <clipPath id="a" clipPathUnits="userSpaceOnUse">
                <path d="M0 512h512V0H0Z" data-original="#000000"></path>
              </clipPath>
            </defs>
          </svg>
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <input type="text" placeholder="NUMBER OF BEDROOMS"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <input type="text" placeholder="HOW SOON ARE YOU LOOKING TO BUY"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="relative flex items-center sm:col-span-2">
          <input type="text" placeholder="PURPOSE OF BUYING"
            className="px-2 py-6 bg-transparent text-black w-full text-sm border-b-2 border-customText focus:border-customBg outline-none" />
        </div>

        <div className="sm:col-span-2 flex items-start px-2">
            <input
              type="checkbox"
              id="consent"
              checked={isChecked}
              onChange={handleCheckboxChange}
              className="mr-2 mt-1"
            />
            <label htmlFor="consent" className="text-sm text-customBg">
              By accepting and providing my personal information, I am consenting to High Five Properties Privacy Policy, as well as the applicable data protection laws.
            </label>
          </div>

      </div>

      

      <button type="button"
        className="mt-10 px-6 py-2.5 w-full text-sm bg-customBg text-white transition 300 ease-in-out hover:bg-white hover:text-black rounded-sm">Submit</button>
    </form>
    </div>

  )
}

export default Form