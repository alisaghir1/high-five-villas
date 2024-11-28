
import React from 'react'
import Image from 'next/image'
import section1 from './assets/section1.jpeg'

const SecondSection: React.FC = () => {
  return (
    <div className='bg-customBg flex flex-col items-center justify-center gap-10 pb-20 pt-20'>
      <div className="text-center mx-2">
        <h2 className="text-2xl font-bold text-white lg:text-3xl pb-4 custom-font">
        Introducing the Innovative Climate-Controlled Sunken Garden
        </h2>

        <p className="max-w-screen-sm text-customText2 md:block mx-auto font-mono">
        At High Five Properties, we proudly present our exclusive Climate-Controlled Sunken Garden a patented design that redefines luxury living. Experience unmatched comfort, beauty, and innovation in every home we create.
        </p>
      </div>
      <Image className='w-full xl:w-5/6 rounded-none xl:rounded-2xl object-cover' src={section1} alt="second section image" />
    </div>
  )
}

export default SecondSection
