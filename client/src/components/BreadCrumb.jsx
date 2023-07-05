import React from 'react'
import { FaChevronRight } from 'react-icons/fa'
import { Link, useLocation } from 'react-router-dom'

function BreadCrumb({page}) {
    const location = useLocation();
    const caption = page ? page : location.pathname.split("/").slice(1)
  return (
    <section className="bg-slate-800 py-20 w-full">
      <div className="container mx-auto px-5 flex gap-4 items-center w-full">
        <Link className='text-md text-slate-100 font-bold sm:text-base'>Home</Link>
        <div className="px-1">
            <FaChevronRight className="text-xs text-slate-50" />
        </div>
        <Link className='text-md text-slate-100 font-semibold sm:text-lg'>{caption}</Link>
      </div>
    </section>
  )
}

export default BreadCrumb