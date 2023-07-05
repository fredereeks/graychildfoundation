import React, {useEffect, useState} from 'react'
import { FaCaretDown } from 'react-icons/fa';
import { Link, useLocation } from 'react-router-dom'

const LinkCard = ({title, link, sublinks}) => {
    const location = useLocation();
    const [activeLink, setActiveLink] = useState(false);
    useEffect(() => {
        location.pathname === link ? setActiveLink(true) : setActiveLink(false);
        return () => {
            setActiveLink(false);
        } 
    },[location, link]);
    
    useEffect(() => {
        window.scrollTo(0,0);
    },[location.pathname])
    
    if(sublinks.length > 0){
        return(
            <span className={`group relative w-full md:w-max border-b-2 ${activeLink ? 'bg-slate-100' : 'border-b-white'} hover:border-b-slate-700 p-4 hover:bg-slate-100 z-50 text-slate-700 text-md`}><Link className='flex gap-3 items-center' to={link}>{title} <FaCaretDown className='text-slate-700 mt-1 rotate-0 text-sm font-extralight' /></Link>
                <div className="dropdown absolute group-hover:max-h-max max-h-0 overflow-hidden z-40 flex flex-col left-0 top-full min-w-max w-full md:max-w-[20rem] bg-white">
                    {sublinks.map(({id,link,title}) => (<Link key={id} to={link} className={`relative w-full border-b-2 ${activeLink ? 'bg-slate-100' : 'border-b-white'} hover:border-b-slate-700 px-4 py-3 hover:bg-slate-100 text-slate-700 text-md`}>{title}</Link>))}
                </div>
            </span>
        )
    }
    else return (<Link to={link} className={`relative w-full md:w-max border-b-2 ${activeLink ? 'bg-slate-100' : 'border-b-white'} hover:border-b-slate-700 p-4 hover:bg-slate-100 text-slate-700 text-md`}>{title}</Link>)
}

export default LinkCard