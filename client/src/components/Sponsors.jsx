import React from 'react'
import { FaYoutube, FaEnvelope, FaFacebook, FaTwitter } from 'react-icons/fa'
import { Link } from 'react-router-dom';
// import { useSnapCarousel } from 'react-snap-carousel';

function Sponsors() {
    // const { scrollRef } = useSnapCarousel();
    const scrollRef = React.useRef();
  return (
    <section className="sponsor py-10 px-5 bg-pri">
        <div className="container flex flex-col md:flex-row justify-center items-center gap-4 mx-auto">
            <h3 className="text-2xl text-white font-bold text-center md:text-right uppercase sm:w-[15rem] md:flex-1 md:w-max">Our Social Media Links</h3>
            <div ref={scrollRef} className="flex flex-1 gap-4 md:gap-8 px-4 items-center justify-center md:justify-start">
                <Link to="https://twitter.com/graychildf9971" className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                    <FaTwitter className='text-white text-lg md:text-2xl' /> Twitter
                </Link>
                <Link to="https://web.facebook.com/GCFpositivepeace" className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                    <FaFacebook className='text-white text-lg md:text-2xl' /> Facebook
                </Link>
                <Link to="https://youtu.be/o0DeGIKMh5k" className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                    <FaYoutube className='text-white text-lg md:text-2xl' /> Youtube
                </Link>
                <Link to="mailto:graychildfoundation@gmail.com" className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                    <FaEnvelope className='text-white text-lg md:text-2xl' /> Email
                </Link>
            </div>
        </div>
    </section>
  )
}

export default Sponsors