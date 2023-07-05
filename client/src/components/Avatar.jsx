import React from 'react'

const Avatar = ({source, alt}) => {
  return (
    <figure className="rounded-md relative overflow-hidden h-10 w-10">
        <img className='absolute h-full w-full object-cover' src={source} alt="Someone's Reflection"/>
    </figure>
  )
}

export default Avatar