import React from 'react'

function Loading() {
  return (
    <div className="absolute h-full top-0 left-0 w-full bg-slate-50 grid place-items-center">
        <div className="border-7 border-pri h-10 w-10 rounded-full shrink-0 spin transition-all duration-300 animate-spin"></div>
    </div>
  )
}

export default Loading  