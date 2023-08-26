"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'

const Hero = () => {
  const handleScroll=()=>{

  }
  return (
    <div className='hero'>
      <div className='flex-1 pt-36 padding-x'></div>
      <h1 className='hero__title'>
      The simplest way to create forms
      </h1>
      <p className='hero__subtitle'>
      Create forms for all purposes in seconds.
      Without knowing how to code, and for free!
      </p>

      <CustomButton
      title="Create Form"
      containerStyles="bg-primary-blue text-white rounded-full mt-10"
      handleClick={handleScroll}

      />

    </div>
  )
}

export default Hero