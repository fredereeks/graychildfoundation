import React from 'react'
import { Link } from 'react-router-dom'
import { FaBookReader, FaPlay } from 'react-icons/fa'
import { pluralize } from '../utils'

function CourseLink({id, topic, duration}) {
  const icon = duration < 12 ? <span className="grid place-items-center h-9 w-9 bg-gray-200 rounded-full"><FaBookReader className='text-lg  text-[#15b66a]' /></span> : <span className="flex justify-center items-center rounded-full bg-[#15b66a] h-9 w-9"><FaPlay className='text-sm text-gray-50' /></span>
  
  return (
    <Link key={id} className="flex justify-between items-center py-2 mx-2 my-1 rounded-md overflow-hidden px-4 bg-white drop-shadow-md" to={`/course/topic/${id}`}>
        <div className="flex flex-1 gap-2 items-center">
          {icon}
          <p className="text-sm text-gray-600">{topic}</p>
        </div>
        <p className="text-xs text-gray-600">{duration}{pluralize(duration, "min")}</p>
    </Link>
  )
}

export default CourseLink