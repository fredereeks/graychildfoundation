import React from 'react'
import { Link } from 'react-router-dom'
import { FaChevronRight } from 'react-icons/fa'

function PageLinks({id, link, title}) {
  return (
    <Link key={id} className="flex justify-between items-center py-2 px-4" to={link}>
        <p className="text-md text-gray-600">{title}</p>
        <FaChevronRight className='pr-0 text-lg pt-2 text-gray-500' />
    </Link>
  )
}

export default PageLinks