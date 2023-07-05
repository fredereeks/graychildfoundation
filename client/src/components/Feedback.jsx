import React, { useEffect, useRef, useState } from 'react'
// import { FaBookmark, FaChevronLeft, FaChevronRight, FaEllipsisV, FaHeart, FaRegBookmark, FaShareAlt, FaShoppingBasket } from 'react-icons/fa'
// import { IoCheckmarkCircleOutline, IoInformationOutline, IoWarningOutline, IoCheckmarkDoneCircleOutline, IoTrashOutline } from 'react-icons/io5'
import { IoWarningOutline, IoCheckmarkDoneCircleOutline, IoTrashOutline } from 'react-icons/io5'

function Feedback({ type, text, heading }) {
  const [show, setShow] = useState(true);
  const icon = type === "undefined" || type === "success" ? <IoCheckmarkDoneCircleOutline className='text-gray-50' size={30} /> : type === "warning" ? <IoWarningOutline className='text-gray-50' size={30} /> : <IoTrashOutline className='text-gray-50' size={30} />;
  const background = type === "undefined" || type === "success" ? "bg-emerald-500" : type === "warning" ? "bg-yellow-500" : "bg-red-500";
  let timer = useRef(null);
  useEffect(() => {
    timer.current = setTimeout(() => {
      setShow(prev => !prev);
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    }
  }, [])
  useEffect(() => {
    clearTimeout(timer.current);
    timer.current = setTimeout(() => {
      setShow(prev => !prev);
    }, 2000);
    return () => {
      clearTimeout(timer.current);
    }
  }, [show])

  return (
    <aside className={`fixed border-1 border-gray-100 rounded-xs flex items-center gap-2 origin-top-right transition-all duration-300 ${show ? 'top-5 right-10 scale-100' : '-top-5 -right-10 sclae-0'}`}>
      <button onClick={() => setShow(prev => (prev = true))} className="absolute p-2 grid place-items-center cursor-pointer top-5 right-5 text-gray-700 font-semibold">x</button>
      <div style={{ background }} className="px-3 py-2 w-8 h-full grid place-items-center">
        {icon}
      </div>
      <div className="p-3 flex flex-col justify-center gap-2">
        <h3 className="text-2xl text-gray-100 font-semibold">{heading}</h3>
        <p className="text-md text-gray-100 font-thin">{text}</p>
      </div>
    </aside>
  )
}

export default Feedback