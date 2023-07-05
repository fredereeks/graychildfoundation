import React from 'react'
import { Link } from 'react-router-dom'
import { FaArrowRight } from 'react-icons/fa'
import { peace_tour, women_awareness, certified_peacebuilding } from '../assets/images'

function Stories() {
  return (
    <section className="py-20 bg-slate-50 px-2 sm:px-4 md:px-6">
      <div className="flex flex-col py-10 gap-3 mx-auto md:container">
        <div className="grid grid-cols-1 gap-4 py-10 md:grid-cols-2">
          <h3 className="md:w-[60%] text-lg md:text-2xl font-bold text-slate-700"><span className="text-pri">Learn the Stories</span> of those we've already helped</h3>
          <div className="flex flex-col gap-3 w-[80%]">
            <p className="text-sm md:text-md text-slate-500 leading-loose w-max">Stay updated and informed with the latest developments on charity campaigns to keep you engaged</p>
            <Link to={"/news-and-features"} className='group flex items-center px-4 py-2 rounded-sm w-max justify-center gap-2 text-sm hover:bg-pri-light text-pri'>See All News <FaArrowRight className='-rotate-12 mt-1 transition-all duration-300 text-pri text-xs md:text-sm group-hover:rotate-0' /></Link>
          </div>
        </div>
        <div className="grid grid-cols-2 md:grid-cols-3 justify-center items-stretch gap-2 md:gap-3">
            {
              [
                [women_awareness, 'July 26, 2022', 'Awareness Campaign for Women inclusion in peacebuilding and the fight against terrorism in Nigeria, Federal Capital Territory, Abuja', "Gray Child Foundation (GCF) is a Pan-African non-partisan organization, working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives and advocating for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.", "Women-inclusion-in-peacebuilding-and-the-fight-against-terrorism-in-Nigeria"],
                [peace_tour, 'March 31, 2022', 'Peace and Conflict Resolution Seminar', "Gray Child Foundation (GCF) is a Pan-African non-partisan organization, working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives and advocating for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.", "peace-and-conflict-resolution-seminar"],
                [certified_peacebuilding, '15th January, 2022', 'Prison Decongestion and Reintegration', "Gray Child Foundation (GCF) is a Pan-African non-partisan organization, working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives and advocating for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.", "peace-and-conflict-resolution-seminar"],
              ].map(([image,date,title,text,link]) => (
                <aside className="rounded-sm overflow-hidden max-w-[20rem] hover:shadow-md flex flex-col gap-2 bg-white">
                  <img src={image} alt={title} className="h-[200px] w-full object-cover" />
                  <div className="flex flex-col flex-1 gap-2 justify-between px-4 pb-6">
                    <div className="flex flex-col gap-2">
                      <p className="bg-slate-100 text-slate-500 w-max rounded-[2rem] py-1 px-3 text-center text-xs">{date}</p>
                      <h3 className="text-slate-700 text-md sm:text-base font-semibold md:font-bold">{title}</h3>
                      <p className="text-slate-400 text-sm leading-loose text-justify text-ellipsis line-clamp-4">{text}</p>
                    </div>
                    <Link to={link} className='group flex items-center px-4 py-2 rounded-sm w-max justify-center gap-2 text-sm hover:bg-pri-light text-pri'>Read More <FaArrowRight className='-rotate-12 mt-1 transition-all duration-300 text-pri text-xs md:text-sm group-hover:rotate-0' /></Link>
                  </div>
                </aside>
              ))
            }
        </div>
      </div>
    </section>
  )
}

export default Stories