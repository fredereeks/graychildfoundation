import React from 'react'
import { FaArrowRight } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import Parser from 'html-react-parser'
import moment from 'moment'

function NewsCard({images,title,createdAt, category,text,_id}) {
  return (
    <Link state={{images,title,createdAt, category,text,_id}} to={`/post/${_id}`} className="rounded-sm hover:shadow-md flex flex-col gap-2 bg-white">
        <img src={images[0]} alt={title} className="h-[200px] w-full object-cover" />
        <div className="flex flex-col flex-1 gap-2 justify-between px-4 pb-6">
        <div className="flex flex-col gap-2">
            <p className="bg-slate-100 text-slate-500 w-max rounded-[2rem] py-1 px-3 text-center text-xs">{moment(createdAt).format("MM-DD-YYYY")}</p>
            <h3 className="text-slate-700 text-md sm:text-base font-semibold md:font-bold">{title}</h3>
            <article className="text-slate-400 text-sm leading-loose text-justify text-ellipsis line-clamp-4">{Parser(text)}</article>
        </div>
        <button className='group flex items-center px-4 py-2 rounded-sm w-max justify-center gap-2 text-sm hover:bg-pri-light text-pri'>Read More <FaArrowRight className='-rotate-12 mt-1 transition-all duration-300 text-pri text-xs md:text-sm group-hover:rotate-0' /></button>
        </div>
    </Link>
  )
}

export default NewsCard