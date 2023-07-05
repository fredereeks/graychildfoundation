import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
        <div className="bg-slate-200 relative py-20 px-4">
            <div className="md:container md:px-10 pb-10 mx-0 md:mx-auto flex flex-col sm:flex-row justify-center md:justify-start md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-6">
                <div className="flex flex-col">
                    <h3 className="text-md md:text-xl font-bold text-slate-800 pb-2 uppercase">Working Hours</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs md:text-sm text-slate-600 text-justify">Monday - Friday: 9:00AM - 4:00PM.</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">Saturday (Closed)</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">Sunday (Closed)</p>
                    </div>
                </div>
                <div className="flex flex-col">
                    <h3 className="text-md md:text-xl font-bold text-slate-800 pb-2 uppercase">WE ARE HERE</h3>
                    <div className="flex flex-col gap-1">
                        <p className="text-xs md:text-sm text-slate-600 text-justify">18, Ademola Adetokunbo Street, Wuse II, Abuja</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">+234-703-681-9509</p>
                        <p className="text-xs md:text-sm text-slate-600 text-justify">help@graychildfoundation.org</p>
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
    )
}

export default Footer