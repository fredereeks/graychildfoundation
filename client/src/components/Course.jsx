import React from 'react'
import {Link} from 'react-router-dom'
import {durationCounter} from '../utils'

const Course = ({course}) => {
  const {id, bg, image, title, category, classes } = course;
  const duration = classes.reduce((oldDuration, el) => el.duration + oldDuration, 0);
  return (
    <Link state={course} to={`/course/${id}`} key={id} className="flex flex-col gap-2 shadow-md">
        <div className="h-30 overflow-hidden w-full rounded-md relative" style={{background: bg}}>
            <img src={image} alt="Web Development" className="h-full w-full object-contain" />
        </div>
        <div className="pb-2 px-2 bg-white flex flex-col">
            <h5 className="text-xs text-gray-400">{category}</h5>
            <h3 className="text-md text-gray-700 font-semibold">{title}</h3>
            <div className="flex items-center text-gray-400">
                <span className="text-xs pr-2 text-gray-400 flex gap-1">{durationCounter(duration)}</span> -
                <span className="text-xs pl-2 text-gray-400 flex gap-1">{classes.length}classes</span>
            </div>
        </div>
    </Link>
  )
}

export default Course