import React from 'react'
import { Link } from 'react-router-dom'
import { logo } from '../assets/images'
import Partners from './Partners'

function Footer (){
  return (
        <>
            <div className="bg-gray-100 relative pt-5 px-4">
                <Partners />
            </div>
            <div className="bg-white relative py-10 px-4">
                <div className="md:container md:px-10 pb-10 mx-0 md:mx-auto justify-start grid sm:grid-cols-2 md:grid-cols-3 md:gap-4 gap-2">
                    <div className="flex flex-col">
                        <Link to="/" className='w-[120px] text-gray-100'>
                            <img src={logo} alt="Gray Child Foundation" className="w-full h-auto object-contain" />
                        </Link>
                        <div className="flex flex-col mt-3 gap-1">
                            <h3 className="text-md md:text-xl font-bold text-slate-800 py-2 capitalize">Useful Links</h3>
                            <div className="flex flex-col gap-1">
                                <Link to={"/volunteer"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>Volunteer</Link>
                                <Link to={"/donate"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>Donate</Link>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col">
                        <h3 className="text-md md:text-xl font-bold text-slate-800 pb-2 capitalize">WE ARE HERE</h3>
                        <div className="flex flex-col gap-1">
                            <p className="text-xs py-2 md:text-sm text-slate-600 text-justify">City Plaza, Plot 596 Ahmadu Bello Way, Garki II, Abuja – FCT, Nigeria</p>
                            <p className="text-xs py-2 md:text-sm text-slate-600 text-justify flex gap-2">
                                <Link className="text-inherit" to="tel:+234703681959">+234703681959</Link>
                                <Link className="text-inherit" to="tel:+2348054774501">+2348054774501</Link>
                            </p>
                            <p className="text-xs py-2 md:text-sm text-slate-600 text-justify flex flex-wrap gap-2">
                                <Link className="text-inherit" to="mailto:graychildfoundation@gmail.com">graychildfoundation@gmail.com</Link>
                                <Link className="text-inherit" to="mailto:help@graychildfoundation.org">help@graychildfoundation.org</Link>
                            </p>
                        </div>
                    </div>
                    <div className="flex flex-col md:pl-5">
                        <h3 className="text-md md:text-xl font-bold text-slate-800 pb-2 capitalize">Quick Links</h3>
                        <div className="flex flex-col gap-1">
                            <Link to={"/about"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>About</Link>
                            <Link to={"/gallery"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>Gallery</Link>
                            <Link to={"/news-and-features"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>News & Features</Link>
                            <Link to={"/pillars-of-positive-peace"} className={`relative w-full py-2 md:w-max hover:font-semibold hover:text-slate-900 text-slate-700 text-md`}>Pillars of Positive Peace</Link>
                        </div>
                    </div>
                </div>
                <div className="bg-slate-50 py-3 px-4 md:px-10 absolute left-0 bottom-0 w-full flex justify-between items-center">
                    <div className="sm:container mx-auto sm:px-4 flex flex-cols sm:flex-nowrap sm:flex-row gap-2 items-center md:items-center sm:justify-between">
                        <p className="text-slate-600 text-center sm:text-left text-xs font-thin">&copy;{new Date().getFullYear()} GrayChildFoundation.org. All rights reserved</p>
                        <div className="flex flex-1 justify-center sm:justify-end gap-2 w-full sm:w-max">
                            <Link to="/" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Privacy Policy</Link>
                            <Link to="/" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Cookies Policy</Link>
                            <Link to="/" className="hover:underline py-1 text-slate-600 mx-2 text-xs font-thin">Sitemap</Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer