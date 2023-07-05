import React from 'react'
import { Link } from 'react-router-dom'
import { gallery_WA0045, gallery_WA0047 } from '../assets/images'

function Banner({change}) {
  const imageURi = change ? gallery_WA0045 : gallery_WA0047;
  const btnColor = change ? 'bg-white border-[1px] border-orange-500 text-orange-500' : 'text-white bg-orange-500';
  return (
    <section className="banner relative py-20 flex flex-col justify-center items-center after:left-0 after:top-0 after:absolute after:z-20 after:bg-[#0008] after:w-full after:h-full">
        <img src={imageURi} alt="GraychildFoundations Help Banner" className="absolute z-10 w-full h-full left-0 top-0 object-cover opacity-8" />
        <div className="flex relative z-50 py-5 flex-col gap-1">
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-none text-center">Join Our Action!</h3>
            <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-none text-center">Everyone can help.</h3>
            <div className="flex gap-2 md:gap-5 py-8 justify-center">
                <Link to="/donate" className={`py-3 px-4 md:px-6 w-max cursor-pointer ${btnColor} rounded-sm font-semibold text-xs sm:text-sm md:text-md`}>Donate Now</Link>
                <Link to="/volunteer" className="py-3 px-4 md:px-6 w-max bg-teal-500 cursor-pointer text-white rounded-sm font-semibold text-xs sm:text-sm md:text-md">Become a Volunteer</Link>
            </div>
        </div>
    </section>
  )
}

export default Banner