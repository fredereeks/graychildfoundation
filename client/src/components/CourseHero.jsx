import React from 'react'
import { FaStar } from 'react-icons/fa'
import { Link } from 'react-router-dom'

const CourseHero = ({ course }) => {
  console.log({course})
  return (
    <section key={course?.id} className="flex flex-col gap-2 w-full">
      <figure style={{ background: course?.bg }} key={course?.id} className="flex gap-2 items-center rounded-md w-full h-[170px]">
        <div className="pb-2 pl-4 flex-1 flex flex-col">
          <h5 className="text-xs text-gray-500">{course?.category}</h5>
          <h3 className="text-xl text-gray-700 font-semibold">{course?.title}</h3>
          <span className="text-md pr-2 text-gray-600 flex gap-1">&#8358;{course?.price.toLocaleString()}</span>
        </div>
        <div className="w-28 h-full overflow-hidden rounded-md relative">
          <img src={course?.image} alt={course?.title} className="h-full w-full object-cover" />
        </div>
      </figure>
      <div className="flex justify-between items-center py-3">
        <h3 className="text-lg text-gray-700 font-semibold">About Course</h3>
        <Link to={`/reviews/${course?.id}`} className="flex gap-1 items-center">
          <FaStar className="w-4 h-4 text-yellow-500" />
          <p className="text-gray-700 font-semibold text-md">{course?.rating}</p>
          <p className="text-gray-500 mt-[1px] text-xs">({course?.reviews.length})</p>
        </Link>
      </div>
      <p className="bg-gray-50 text-md text-justify text-gray-400 px-4 py-5 -mx-4 font-medium">{course?.about}</p>
    </section>
  )
}

export default CourseHero