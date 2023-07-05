import React from 'react'

function MotifCard({id, icon, background, position, text}) {
    const placement = position ? `${position} absolute` : `relative`;
  return (
    <aside key={id} className={`z-50 w-[17rem] ${placement} py-3 px-4 my-2 mx-1 bg-white rounded-md shadow-lg flex gap-2 items-center`}>
        <div className={`${background} rounded-md shrink-0 grid place-items-center h-14 w-14`}>{icon}</div>
        <p className="text-sm p-2 md:text-md lg:text-md leading-tight text-slate-500">{text}</p>
    </aside>
  )
}

export default MotifCard