import React from 'react'
import { Link } from 'react-router-dom'
import { rocket } from '../assets/images'

function Splash() {
  return (
    // <section className="bg-teal-800 h-screen p-4 flex flex-col space-between gap-2">
    <section className="bg-[#15b66a] h-screen p-4 flex flex-col space-between gap-2">
        <div className="py-3 text-center flex flex-col gap-2 items-center">
            <h3 className="pt-5 text-white text-2xl font-bold">Start Your Favorite Online Course</h3>
            <p className="text-sm text-white opacity-7 lh-2">Online tutoring that trains skills according to their talents in a flexible methodology</p>
        </div>
        <div className="py-5 flex gap-2 justify-center">
            <span className="w-3 h-3 rounded-full opacity-50 cursor-pointer bg-orange-400 group-hover:opacity-100"></span>
            <span className="w-3 h-3 rounded-full opacity-50 cursor-pointer bg-orange-400 group-hover:opacity-100"></span>
            <span className="w-3 h-3 rounded-full cursor-pointer bg-orange-400 group-hover:opacity-100"></span>
        </div>
        <div className="relative flex-1 p-4 flex flex-col justify-end gap-2 items-center">
          <img src={rocket} alt="Splash Welcome" className="absolute w-full h-full object-cover left-0 top-0" />
          <div className="relative flex-1 w-full flex flex-col justify-end gap-2 items-center">
              <button className="rounded-md py-2 px-5 w-full text-md cursor-pointer bg-orange-400 text-white">Register</button>
              <Link to="/" className="text-white text-sm">Already have an Account? <span className="text-orange-400">Login</span></Link>
          </div>
        </div>
    </section>
  )
}

export default Splash