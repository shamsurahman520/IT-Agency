"use client"
import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import { useState } from 'react';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false)
  return (
    <>
    <header className="absolute top-0 bg-transparent shadow-md lg:shadow-xl md:shadow-xl px-5 py-4 z-30 w-full">
        <nav className="flex justify-between items-center">
        <Link href='#'>
            <Image
            src="/assets/logo.png"
            width={130}
            height={35}
            alt='logo'
            className='object-contain z-10'
            />
        </Link>

           {/* Hamburger Icon (Mobile Only) */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className="block lg:hidden md:hidden text-3xl w-10 text-[#F9004D] bg-[#EEEEEE] focus:outline-none rounded-md">
          ☰
        </button>
            <ul className='md:flex hidden gap-8 items-center font-inter text-white cursor-pointer'>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#ourservices">Services</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#contactus">Contact Us</Link></li>

                <li><Link href="#" className="relative text-[#F9004D] border-[1px] border-[#F9004D] 
                  w-32 h-12 py-3 rounded-3xl text-center block group"> 
                  Get Started
                 <div
                className="absolute inset-0 mx-auto py-3 w-full bg-[#F9004D] group-hover:w-0 
                rounded-3xl duration-700 flex justify-center overflow-hidden text-white font-inter text-nowrap"
                 >
                Get Started
              </div>
              </Link></li>
            </ul>
            {isMenuOpen && ( 
                <ul className='flex flex-col gap-y-3 text-md font-semibold rounded-br-full bg-gray-100 w-36 pb-12 pl-5 absolute top-[68.4px] left-0 p-2'>
                <li><Link href="#">Home</Link></li>
                <li><Link href="#">Services</Link></li>
                <li><Link href="#">About Us</Link></li>
                <li><Link href="#">Contact Us</Link></li>

                <li><Link href="#" className="relative text-xs font-bold text-[#F9004D]  
                  w-[70px] h-8 py-2  rounded-full text-center block group"> 
                  Get Started
                 <div
                className="absolute inset-0 w-full text-xs font-bold group-hover:w-0 
                rounded-full duration-700 py-2  overflow-hidden bg-[#F9004D] text-white text-nowrap"
                 >
                Get Started
              </div>
              </Link></li>
            </ul>
            )}
        </nav>
    </header>
    </>
  )
}

export default Header;