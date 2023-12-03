"use client";
import Image from 'next/image';
import React, { use, useState } from 'react';
import { NAV_LINKS } from '@/constants';
import Link from 'next/link';
import PrimaryButton from "./Buttons/PrimaryButton";
import SecondaryButton from "./Buttons/SecondaryButton";
import 'remixicon/fonts/remixicon.css';
import 'animate.css';


const Navbar = () => {
  const [menuClose, setMenuClose] = useState(true);

  const onMenuChange = () => {
    setMenuClose(!menuClose);
  }
  return (
    <>
      <nav className="py-5 md:px-10 px-5 flex items-center justify-between">
        <div className="flex flex-col gap-1 lg:items-end w-fit">
          <Image
            src="/images/site-logo.svg"
            alt="Full logo image"
            className="hidden lg:block"
            width={150}
            height={50}
          />
          <Image
            src="/images/site-icon.svg"
            alt="Icon logo image"
            className="lg:hidden block"
            width={50}
            height={50}
          />
          <div className="flex items-center gap-1 lg:ml-10 ml-5">
            <p className="text-[11px] font-bold text-[#063a4f]">by</p>
            <Image
              src="/images/moniepointLogo.svg"
              alt="Moniepoint logo image"
              width={80}
              height={50}
            />
          </div>
        </div>
        <div className="hidden lg:flex gap-16 items-center">
          <ul className="flex gap-10">
            {NAV_LINKS.map((item) => (
              <li key={item.key}>
                <Link href={item.href} className="hover:text-info text-[13px] font-[500] text-[#063a4f]">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex gap-5 items-center">
            <PrimaryButton css="btn-secondary" />
            <SecondaryButton />
          </div>
        </div>
        <div className="flex items-center gap-2 lg:hidden">
          <h1 className="text-[#00B8C2]">MENU</h1>
          <Image src="/images/hambuger.svg" alt="Hamburger" width={25} height={14} onClick={onMenuChange} />
        </div>
      </nav>

      <nav className={`md:hidden h-full bg-[#063A4F] w-full absolute top-0 z-50 transition-transform ${menuClose ? '' : ' duration-1000 ease-in-out'
        } ${menuClose ? 'transform translate-x-[100%]' : ''}`}
      >
        <ul className={`px-10 py-10 flex flex-col gap-8 mt-10 z-[10000] ${menuClose ? '' : 'animate__animated animate__fadeIn animate__delay-1s ease-in'
          }`}
        >
          {NAV_LINKS && NAV_LINKS.map((item) => (
            <Link key={item.key} href={item.href} className=' z-[10000]'>
              <li className='text-white text-[26px] font-[500] z-[10000]'>{item.label}</li>
            </Link>
          ))}
        </ul>
        <Image alt='bg-image' src="/images/logo-lg.svg" width={320} height={500} className={`absolute top-5 right-0 z-0 ${menuClose ? '' : 'animate__animated animate__fadeInRight animate__delay-1s'
          }`}
        />

        <div className={`flex gap-5 bg-[#053041] opacity-100 px-12 py-5 z-[1000] absolute right-0 left-0 bottom-0 ${menuClose ? '' : 'animate__animated animate__fadeIn animate__delay-2s ease-in'
          }`}
        >
          <PrimaryButton css="btn-secondary-white" />
          <SecondaryButton />
        </div>
        <i className="ri-close-line text-4xl text-white absolute top-5 right-7 font-thin" onClick={onMenuChange}></i>
      </nav>
    </>
  );
};

export default Navbar;
