import React from 'react'
import { Link } from 'react-router-dom'

const CourseCategory = ({bg, text, icon}) => {
  return (
    <Link to="/spaces" className={`flex flex-col gap-2 items-center cursor-pointer`}>
      <div className={`rounded-md relative overflow-hidden grid place-items-center h-10 w-10 ${bg}`}>
        {icon} 
      </div>
      <p className="text-sm text-gray-600 text-center">{text}</p>
    </Link>
  )
}

export default CourseCategory