
import React from 'react'
import reef from './assets/algedra.avif'
import Image from 'next/image'

const SecondSection: React.FC = () => {
  return (
    <div className='bg-white flex flex-col items-center justify-center gap-10 pb-8'>
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-gray-800 lg:text-3xl dark:text-white pb-4">
        Introducing the Innovative Climate-Controlled Sunken Garden
        </h2>

        <p className="max-w-screen-sm text-gray-500 dark:text-gray-300 md:block mx-auto">
        At High5 Properties, we proudly present our exclusive Climate-Controlled Sunken Garden a patented design that redefines luxury living. Experience unmatched comfort, beauty, and innovation in every home we create.
        </p>
      </div>
      <Image className='w-full xl:w-5/6 rounded-none xl:rounded-2xl' src={reef} alt="second section image" />
    </div>
  )
}

export default SecondSection
