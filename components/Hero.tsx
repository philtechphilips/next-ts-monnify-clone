"use client"
import React, { useEffect, useState } from 'react'
import SecondaryButton from './Buttons/SecondaryButton'
import Image from 'next/image'

const Hero = () => {
  const [showImage1, setShowImage1] = useState(true);

  useEffect(() => {
    const switchInterval = setInterval(() => {
      setShowImage1((prev) => !prev);
    }, 8000);

    return () => clearInterval(switchInterval);
  }, []);

  return (
    <div className='w-full pl-20 py-20 flex'>
      <div className='w-1/2'>
        <h1 className='text-[65px] text-[#063A4F] font-medium' style={{ lineHeight: "64px", overflowY: "hidden" }}>A Better Way To Collect Payments</h1>
        <p className='text-[22px] text-[#063a4f90] font-[Oxygen] mt-8 pr-3'>
          Monnify has simplified how businesses accept payments in Nigeria
        </p>

        <div className='flex mt-10'>
          <SecondaryButton text="Create Free Account" />
        </div>
      </div>

      <div className='w-1/2 h-[800px] relative'>
        <Image src="/images/logo-art.png" className='absolute bottom-0 right-0 z-10' width="500" height="520" alt="logo-art" />
        <Image src="/images/dot-pattern.svg" className='absolute top-36 left-20 z-0' alt='dotted-line' width={300} height={300} />
      </div>
      <Image
        src={showImage1 ? '/images/shutter-1.png' : '/images/shutter-2.png'}
        className={`absolute right-0 z-10 -bottom-[282px]`}
        style={{
          opacity: showImage1 ? 1 : 0,
          transform: `translateY(${showImage1 ? 0 : 50}px)`,
          transition: showImage1 ? 'opacity 1s ease-in-out, transform 1s ease-in-out' : 'none',
        }}
        width={900}
        height={996}
        alt="logo-art"
      />

      <Image
        src={'/images/shutter-2.png'}
        className={`absolute right-0 z-10 -bottom-[385px]`}
        style={{
          opacity: showImage1 ? 0 : 1,
          transform: `translateY(${showImage1 ? 50 : 0}px)`,
          transition: showImage1 ? 'none' : 'opacity 1s ease-in-out, transform 1s ease-in-out',
        }}
        width={900}
        height={996}
        alt="logo-art"
      />
    </div>
  )
}

export default Hero
