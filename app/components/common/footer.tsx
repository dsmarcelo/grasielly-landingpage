import Image from 'next/image'
import React from 'react'
import { IoLogoWhatsapp } from "react-icons/io";
import { IoMailOpen } from "react-icons/io5";

export const Footer = () => {
  return (
    <div
      className='h-40 w-full bg-[#000] mt-auto gap-2 flex flex-col items-center justify-center'
    >
      <Image
        className=""
        src="/icons/Logo.svg"
        alt="Logo"
        width={120}
        height={0}
        priority
      />
      <div className='gap-1'>
        <div className='flex flex-row justify-center items-center gap-1'>
          <IoLogoWhatsapp />
          <p className='label-normal'>62 99352-1688</p>
        </div>
        <div className='flex flex-row justify-center items-center gap-1'>
          <IoMailOpen />
          <p className='label-normal'>grasiellylarisse@gmail.com</p>
        </div>
      </div>
    </div >
  )
}
