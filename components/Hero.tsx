"use client"
import Image from 'next/image'
import CustomButton from './CustomButton'
import { redirect } from 'next/dist/server/api-utils'

const Hero = () => {
  const redirect=()=>{

  }
  return (
    <div className='hero text-center'>
      <div style={{display:'flex', flexDirection:"column", alignItems:"center",flexWrap:"wrap"}} className='content-center flex-1  padding-x'>
      <img
      className=" w-1/3  object-cover object-center"
      src="https://tally.so/images/personas/forms.png"
      alt="form image"
    />
      <h1 className='hero__title'>
      The simplest way to create forms
      </h1>
      <p className='hero__subtitle'>
      Create forms for all purposes in seconds.
      <p>

      Without knowing how to code, and for free!
      </p>
      </p>

      <CustomButton
      title="Create Form"
      containerStyles="hero__button bg-purple-900 text-white rounded-full mt-10"
      handleClick={redirect}
      
      />



      </div>
    </div>
  )
}

export default Hero