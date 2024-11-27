import React from 'react'
import Image from 'next/image'
import reef from './assets/algedra.avif'
import { MdHolidayVillage } from "react-icons/md";
import { IoFlowerSharp } from "react-icons/io5";
import { MdEventSeat } from "react-icons/md";
import { GrYoga } from "react-icons/gr";
import { GiFruitTree } from "react-icons/gi";
import { MdElectricCar } from "react-icons/md";
import { GiRoundTable } from "react-icons/gi";
import { TbMeat } from "react-icons/tb";
import { MdOutlineSportsCricket } from "react-icons/md";
import { MdSportsHockey } from "react-icons/md";
import { MdOutlineDeck } from "react-icons/md";
import { CgGym } from "react-icons/cg";
import { TbPool } from "react-icons/tb";
import { RiBikeFill } from "react-icons/ri";
import { FaPersonRunning } from "react-icons/fa6";
import { GiKidSlide } from "react-icons/gi";
import { GiTennisCourt } from "react-icons/gi";
import { PiProjectorScreenChartLight } from "react-icons/pi";
import { GiWeightLiftingUp } from "react-icons/gi";
import { MdOutlinePool } from "react-icons/md";
import { FaTableTennis } from "react-icons/fa";
import { MdOutlineLocalLaundryService } from "react-icons/md";
import { GrLounge } from "react-icons/gr";
import { GiWaterPolo } from "react-icons/gi";
import { PiChairThin } from "react-icons/pi";


















const FourthSection: React.FC = () => {
  return (
    <div className='my-20 bg-white flex flex-col items-center justify-center gap-10 pb-8'>
      <Image className='w-full h-screen object-cover' src={reef} alt="reef pic" />
      
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white pb-4">
        WE PROVIDE EXCEPTIONAL VALUE
        </h2>
        <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block mx-auto">
        by combining luxury, quality and affordability, ensuring our clients receive the best possible living experience for their investments.
        </p>
      </div>

      <div className='flex flex-wrap gap-6 justify-center'>
        {/* Image 1 */}
        <Image 
          className='w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:scale-105' 
          src={reef} 
          alt="reef pic 1" 
        />
        {/* Image 2 */}
        <Image 
          className='w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:scale-105' 
          src={reef} 
          alt="reef pic 2" 
        />
        {/* Image 3 */}
        <Image 
          className='w-full sm:w-1/3 md:w-1/3 lg:w-1/3 h-[300px] sm:h-[400px] rounded-lg transition-transform transform hover:scale-105' 
          src={reef} 
          alt="reef pic 3" 
        />
      </div>
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white pb-4">
        COMMUNITY & AMINITIES
        </h2>
        <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block mx-auto">
        We believe in creating vibrant and connected communities where people can thrive, enjoy their moments and benefit from a range of amenities that foster these connections.
        </p>
      </div>
      <div className="my-10 p-4">
      {/* Grid container */}
      <div className="grid grid-cols-2 sm:grid-cols-5 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 gap-20 lg:mx-20">
        {/* Icon 1 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
          <MdHolidayVillage className="fa fa-home text-7xl text-gray-700" />
          <span>GUEST VILLA</span>
        </div>

        {/* Icon 2 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <IoFlowerSharp className="fa fa-home text-7xl text-gray-700" />
          <span>PRIVATE GARDEN</span>
        </div>

        {/* Icon 3 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <MdEventSeat className="fa fa-home text-7xl text-gray-700" />
          <span>SUNKEN SEATS</span>
        </div>

        {/* Icon 4 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GrYoga className="fa fa-home text-7xl text-gray-700" />
          <span>YOGA AREAS</span>
        </div>

        {/* Icon 5 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiFruitTree  className="fa fa-home text-7xl text-gray-700" />
          <span>VEGETABLE GARDEN</span>
        </div>

        {/* Icon 6 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg text-center">
        <MdElectricCar  className="fa fa-home text-7xl text-gray-700" />
          <span>ELECTRIC VEHICLE RECHARGE STATION</span>
        </div>

        {/* Icon 7 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiRoundTable className="fa fa-home text-7xl text-gray-700" />
          <span>CO-WORKING SPACE</span>
        </div>

        {/* Icon 8 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <TbMeat  className="fa fa-home text-7xl text-gray-700" />
          <span>4X BBQ AREA</span>
        </div>

        {/* Icon 9 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <MdOutlineSportsCricket className="fa fa-home text-7xl text-gray-700" />
          <span>CRICKET PITCH</span>
        </div>

        {/* Icon 10 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
          <MdSportsHockey className="fa fa-home text-7xl text-gray-700" />
          <span>CROSSFIT AREA</span>
        </div>

        {/* Icon 11 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
          <MdOutlineDeck className="fa fa-home text-7xl text-gray-700" />
          <span>DECKING AREA</span>
        </div>

        {/* Icon 12 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <CgGym  className="fa fa-home text-7xl text-gray-700" />
          <span>INDOOR GYM</span>
        </div>

        {/* Icon 13 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <RiBikeFill className="fa fa-home text-7xl text-gray-700" />
          <span>AQUA BIKE</span>
        </div>

        {/* Icon 14 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
          <TbPool className="fa fa-home text-7xl text-gray-700" />
          <span>JACUZZI</span>
        </div>

        {/* Icon 15 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <FaPersonRunning className="fa fa-home text-7xl text-gray-700" />
          <span>JOGGING TRACK</span>
        </div>

        {/* Icon 16 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiKidSlide  className="fa fa-home text-7xl text-gray-700" />
          <span>KIDS PLAY AREA</span>
        </div>

        {/* Icon 17 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiTennisCourt className="fa fa-home text-7xl text-gray-700" />
          <span>MULTIPURPOSE COURT</span>
        </div>

        {/* Icon 18 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <PiProjectorScreenChartLight className="fa fa-home text-7xl text-gray-700" />
          <span>ROOFTOP CINEMA</span>
        </div>

        {/* Icon 19 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiWeightLiftingUp className="fa fa-home text-7xl text-gray-700" />
          <span>OUTDOOR GYM</span>
        </div>
        {/* Icon 20 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <MdOutlinePool className="fa fa-home text-7xl text-gray-700" />
          <span>SWIMMING POOL</span>
        </div>

        {/* Icon 21 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <FaTableTennis className="fa fa-home text-7xl text-gray-700" />
          <span>PICKLE BALL</span>
        </div>

        {/* Icon 22 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <MdOutlineLocalLaundryService className="fa fa-home text-7xl text-gray-700" />
          <span>HIGH-END LAUNDARY SERVICE</span>
        </div>

        {/* Icon 23 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
          <GrLounge className="fa fa-home text-7xl text-gray-700" />
          <span>LOUNGE SEATING</span>
        </div>

        {/* Icon 24 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <GiWaterPolo className="fa fa-home text-7xl text-gray-700" />
          <span>EXERCISE POOL</span>
        </div>

        {/* Icon 25 */}
        <div className="flex flex-col justify-center items-center p-4 rounded-lg">
        <PiChairThin className="fa fa-home text-7xl text-gray-700" />
          <span>SITTING AREA</span>
        </div>
      </div>
      <div className="grid lg:grid-cols-2 gap-3 lg:mx-20 lg:px-20 md:mx-10 md:px-10 pt-20">
  <div className="grid grid-cols-2 lg:grid-cols-1 gap-3">
    <figure className="relative w-full h-60">
      <Image
        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
        src={reef}
        alt="Image Description"
      />
    </figure>
    <figure className="relative w-full h-60">
      <Image
        className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
        src={reef}
        alt="Image Description"
      />
    </figure>
  </div>
  <figure className="relative w-full h-72 sm:h-96 lg:h-full">
    <Image
      className="w-full h-full absolute top-0 start-0 object-cover rounded-xl transform transition-all duration-300 hover:opacity-80"
      src={reef}
      alt="Image Description"
    />
  </figure>
</div>

    </div>
    </div>
  )
}

export default FourthSection
