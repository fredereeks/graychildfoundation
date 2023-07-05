import React, {useEffect, useRef, useState} from 'react'
import { logo } from '../assets/images'
import { Link, useLocation } from 'react-router-dom'
import { FaCaretRight } from 'react-icons/fa'
import { profileLinks } from '../data';
import LinkCard from './LinkCard';

function Home(){
    const [navshow, setNavShow] = useState(false);
    const [fixed, setFixed] = useState(false);
    const header = useRef();
    const location = useLocation();

    useEffect(() => {
        window.onscroll = () => {
            if(window.scrollY > 60) {
                setFixed(true)
            }
            else {
                setFixed(false)
            }
        }
        return () => {
            setFixed(false);
            window.scrollTo(0,0)
            setNavShow(false);
        }
    },[location])

    return (
        <header ref={header} className={`top-0 left-0 z-[999] px-2 w-full ${fixed ? 'fixed shadow-md shadow-pri-light' : 'relative'} bg-white`}>
            <div className="md:container mx-auto relative py-4 md:px-2 flex flex-wrap justify-between items-center bg-white">
                <Link to="/" className='w-[120px] text-gray-100'>
                    <img src={logo} alt="Gray Child Foundation" className="w-full h-auto object-contain" />
                </Link>
                <nav style={{left: '0 !important'}} className={`absolute md:relative shadow-md transition-all duration-300 ${navshow ? 'left-0 top-full z-50' : 'left-[110%] md:left-0 z-0 top-full'} md:top-0 w-screen md:w-max md:shadow-none bg-white -mx-2 md:mx-0`}>
                    <ul className="list-none flex flex-col md:flex-row md:justify-between gap-0 md:gap-4">
                        {profileLinks.map((link) => (
                            <LinkCard key={link.id} {...link} />
                        ))}
                        <Link to="/donate" className="relative flex gap-2 items-center self-center rounded-sm w-full md:w-max md:ml-5 px-4 pt-1 pb-2 h-max bg-sec text-white text-md">Donate <FaCaretRight className='text-slate-50 mt-1 rotate-0 text-sm font-extralight' /></Link>    
                    </ul>
                </nav>
                <div className="relative py-2 px-1 border-[1px] border-zinc-50 cursor-pointer rounded-sm w-[35px] h-[35px] flex md:hidden items-center" onClick={() => setNavShow(prev => !prev)}>
                    <div className={`relative h-[2px] w-full ${navshow ? 'bg-white' : 'bg-slate-500 rounded-lg'} ${navshow ? 'before:rotate-[45deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-slate-500 rounded-lg before:absolute before:z-10 ${navshow ? 'after:rotate-[-45deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-slate-500 rounded-lg after:absolute after:z-10`}></div>
                </div>
            </div>
        </header>
    )
}

export default Home