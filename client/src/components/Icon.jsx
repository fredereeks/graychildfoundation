import React from 'react'

const Icon = ({source}) => {
  return (
    <figure className="rounded-md relative overflow-hidden h-5 w-5">
        <img className='absolute h-full w-full object-cover' src={source} />
    </figure>
  )
}

export default Icon