import React from 'react'
import Image from 'next/image'
import reef from './assets/algedra.avif'

const Home = () => {
  return (
    <div className="relative bg-gradient-to-r h-screen text-white overflow-hidden">
    <div className="absolute inset-0">
      <Image src={reef} alt="Background Image" className="object-cover object-center w-full h-full" />
      <div className="absolute inset-0 bg-black opacity-50"></div>
    </div>
    
    <div className="relative z-10 flex flex-col justify-center items-center h-full text-center">
      <h1 className="text-5xl font-bold leading-tight mb-4">Welcome to <span className='text-customText'>High5</span>  Properties</h1>
      <p className="text-lg text-gray-300 mb-8">Your trusted partner in the dynamic world of real estate.</p>
      <a href="#" className="bg-customBg text-gray-900 hover:bg-yellow-300 py-2 px-6 rounded-md text-sm md:text-lg font-semibold transition duration-300 ease-in-out transform hover:scale-105 hover:shadow-lg">Register Your Intereset</a>
    </div>
  </div>
  
  )
}

export default Home