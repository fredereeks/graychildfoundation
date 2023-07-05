import React, {useState} from 'react'
import { meeting, groupread, slider, reset, rocket, verification } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaCaretDown, FaCaretRight, FaDribbble, FaEvernote, FaKaaba, FaLongArrowAltRight, FaOldRepublic, FaTwitter } from 'react-icons/fa'
import { IoBookOutline, IoFastFoodOutline, IoMedicalOutline, IoPeopleOutline } from 'react-icons/io5';

function Rough(){
    const [navshow, setNavshow] = useState(false);
    
    return (
        <main className="relative overflow-x-hidden">
            <header className="relative z-[999] bg-white">
                <div className="md:container mx-auto relative  py-4 px-2 flex flex-wrap justify-between items-center bg-white">
                    <Link to="/" className='w-[80px] text-gray-100'>
                        <img src={rocket} alt="Gray Child Foundation" className="w-full h-auto object-contain" />
                    </Link>
                    <nav style={{left: '0 !important'}} className={`absolute md:relative shadow-md transition-all duration-300 ${navshow ? 'left-0 top-full z-50' : 'left-full md:left-0 z-0 top-full'} md:top-0 w-full md:w-max md:shadow-none bg-white`}>
                        <ul className="list-none flex flex-col md:flex-row md:justify-between gap-0 md:gap-4">
                            <Link to="/" className="relative w-full md:w-max border-b-2 border-b-transparent hover:border-b-slate-700 p-4 hover:bg-slate-100 text-slate-700 text-md">Home</Link>
                            <Link to="/about" className="group relative w-full md:w-max border-b-2 border-b-transparent hover:border-b-slate-700 p-4 hover:bg-slate-100 z-50 text-slate-700 text-md flex gap-3 items-center">About <FaCaretDown className='text-slate-700 mt-1 rotate-0 text-sm font-extralight' />
                                <div className="dropdown absolute group-hover:max-h-max max-h-0 overflow-hidden z-40 flex flex-col left-0 top-full min-w-max w-full md:max-w-[20rem] bg-white">
                                    <Link to="/about#vision" className="relative w-full border-b-2 border-b-transparent hover:border-b-slate-700 px-4 py-3 hover:bg-slate-100 text-slate-700 text-md">Vision &amp; Mission</Link>
                                    <Link to="/organogram" className="relative w-full border-b-2 border-b-transparent hover:border-b-slate-700 px-4 py-3 hover:bg-slate-100 text-slate-700 text-md">Organogram</Link>
                                    <Link to="/" className="relative w-full border-b-2 border-b-transparent hover:border-b-slate-700 px-4 py-3 hover:bg-slate-100 text-slate-700 text-md">Partners</Link>
                                </div>
                            </Link>
                            <Link to="/" className="relative w-full md:w-max border-b-2 border-b-transparent hover:border-b-slate-700 p-4 hover:bg-slate-100 text-slate-700 text-md">News &amp; Features</Link>
                            <Link to="/donate" className="relative flex gap-2 items-center self-center rounded-sm w-full md:w-max md:ml-5 px-4 py-2 h-max bg-slate-700 text-slate-100 text-md">Donate <FaCaretRight className='text-slate-50 mt-1 rotate-0 text-sm font-extralight' /></Link>    
                        </ul>
                    </nav>
                    <div className="relative py-2 px-1 border-[1px] border-zinc-50 cursor-pointer rounded-sm w-[35px] h-[35px] flex md:hidden items-center" onClick={() => setNavshow(prev => !prev)}>
                        <div className={`relative h-[2px] w-full ${navshow ? 'bg-white' : 'bg-slate-500 rounded-lg'} ${navshow ? 'before:rotate-[45deg] before:-translate-y-[400%]' : 'before:rotate-0 before:-translate-y-[400%]'} before:transition-all before:duration-300 before:origin-top-left before:h-full before:w-full before:left-0 before:bg-slate-500 rounded-lg before:absolute before:z-10 ${navshow ? 'after:rotate-[-45deg] after:translate-y-[400%]' : 'after:rotate-0 after:translate-y-[400%]'} after:transition-all after:duration-300 after:origin-bottom-left after:h-full after:w-full after:right-0  after:bg-slate-500 rounded-lg after:absolute after:z-10`}></div>
                    </div>
                </div>
            </header>
            <section className="categories py-10 bg-slate-50">
                <div className="flex flex-col gap-4 py-10 items-center">
                    <p className="text-sm text-slate-500">Categories</p>
                    <h2 className="font-bold text-2xl text-slate-700">Programes to Empower Others</h2>
                </div>
                <div className="py-4 px-2 pb-20 md:container mx-auto md:px-4 grid lg:grid-cols-4 grid-cols-2 gap-2 md:gap-4">
                    {
                        [
                            [<IoFastFoodOutline className='text-yellow-500 text-2xl' />, 'text-yellow-500', 'bg-yellow-100', 'Healthy Food', 'Donate to charity for those who need healthy and nutritious food', "food"],
                            [<IoMedicalOutline className='text-sky-500 text-2xl' />, 'text-sky-500', 'bg-sky-100', 'Medical Help', 'We reach out to those in need of better medical care', "medical"],
                            [<IoPeopleOutline className='text-indigo-500 text-2xl' />, 'text-indigo-500', 'bg-indigo-100', 'Social Services', 'Being our core value, we spport charity causes to help people in need around the country', "charity"],
                            [<IoBookOutline className='text-emerald-500 text-2xl' />, 'text-emerald-500', 'bg-emerald-100', 'Education', 'We reach out to provide quality education and sensitization to children in need', "education"]
                        ].map(([icon, color, background, title, text, link]) => (
                            <aside className="bg-white p-4 pb-6 justify-between items-center flex flex-col gap-4 rounded-md shadow-lg">
                                <div className="flex flex-col gap-3">
                                    <div className={`w-12 h-12 mx-auto my-2 rounded-full grid place-items-center ${background}`}>
                                        {icon}
                                    </div>
                                    <h4 className={` text-lg font-semibold text-center ${color}`}>{title}</h4>
                                    <p className="text-slate-400 font-thin text-sm text-center">{text}</p>
                                </div>
                                <Link to={link} className={`w-max mx-auto ${color} text-center text-xs flex gap-1 items-center`} >Read More <FaCaretRight className={`${color} mt-1 rotate-0 text-xs font-extralight`} /> </Link>
                            </aside>
                        ))
                    }
                </div>
            </section>
            <section className="sponsor py-10 px-5 bg-pri">
                <div className="container flex flex-col md:flex-row justify-center items-center gap-4 mx-auto">
                    <h3 className="text-2xl text-white font-bold text-center md:text-left uppercase md:w-[15rem]">Loved by the company we keep</h3>
                    <div className="flex flex-1 gap-4 md:gap-8 px-4 items-center justify-center">
                        <span className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                            <FaTwitter className='text-white text-lg md:text-2xl' /> Twitter
                        </span>
                        <span className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                            <FaOldRepublic className='text-white text-lg md:text-2xl' /> Republic
                        </span>
                        <span className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                            <FaDribbble className='text-white text-lg md:text-2xl' /> Dribbbles
                        </span>
                        <span className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                            <FaEvernote className='text-white text-lg md:text-2xl' /> Evernote
                        </span>
                        <span className="cursor-pointer text-white flex flex-col items-center justify-center text-sm md:text-md">
                            <FaKaaba className='text-white text-lg md:text-2xl' /> Kaaba
                        </span>
                    </div>
                </div>
            </section>
            <section className="mission relative py-20 bg-white">
                <div className="md:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                    <div className="md:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                        <aside className="flex flex-col justify-center py-10 gap-0">
                            <p className="uppercase text-md pt-10 md:text-base font-semibold text-slate-400">Mission</p>
                            <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal uppercase">What we stand for</h3>
                            <p className="text-md pt-3 pb-10 md:text-md font-thin text-slate-400">We at GrachildFoundation stand for Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem, ipsum dolor sit amet consectetur adipisicing elit. Esse doloribus explicabo inventore quo? Dolores minus eaque fuga laborum modi dignissimos quasi explicabo quam rem quas placeat, neque enim magnam atque.</p>
                        </aside>
                        <div className="relative border-1 border-zinc-50 h-40 w-40 right-0 bottom-0 bg-sec-4">
                            <div className="h-40 w-40 right-0 bottom-0 bg-sec absolute p-4"></div>
                        </div>
                    </div>
                    <div className="md:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                        <aside className="flex flex-col justify-center py-10 gap-3 md:gap-5">
                            <p className="uppercase text-md md:text-base font-semibold text-sec">Volunteer</p>
                            <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Particiapte in Charity around the Whole World</h3>
                            <p className="text-md md:text-md font-semibold text-slate-600">Join our community to volunteer and help people in need around the world</p>
                            <Link to="/volunteer" className="bg-pri text-white text-xs sm:text-sm md:text-md w-max px-3 sm:py-4 flex gap-2 items-center py-3 my-3 sm:px-4 rounded-sm">Become a Volunteer <FaArrowRight className="mt-1 text-xs md:text-sm" /></Link>
                        </aside>
                        <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-sec before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-sec after:absolute p-4">
                            <img src={slider} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                        </div>
                    </div>
                    <div className="md:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                        <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-pri before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-pri after:absolute p-4">
                            <img src={slider} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                        </div>
                        <aside className="flex flex-col justify-center py-10 gap-3 md:gap-5">
                            <p className="uppercase text-md md:text-base font-semibold text-sec">Volunteer</p>
                            <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Particiapte in Charity around the Whole World</h3>
                            <p className="text-md md:text-md font-semibold text-slate-600">Join our community to volunteer and help people in need around the world</p>
                            <Link to="/volunteer" className="bg-pri text-white text-xs sm:text-sm md:text-md w-max px-3 sm:py-4 flex gap-2 items-center py-3 my-3 sm:px-4 rounded-sm">Become a Volunteer <FaArrowRight className="mt-1 text-xs md:text-sm" /></Link>
                        </aside>
                    </div>
                </div>
            </section>
            <section className="days pt-10 pb-20 px-2 sm:px-4 bg-[#f9f9f9]">
                <div className="container flex flex-col gap-4 py-4">
                    <h3 className="text-3xl text-zinc-700">Space Options</h3>
                    <div className="flex gap-2 justify-between md:flex-wrap">
                        <div className="flex-1 flex gap-4 flex-wrap items-center">
                            <button className="text-sm mr-10 border-b-[2px] border-transparent hover:border-yellow-500 py-2 text-zinc-600">Coworking</button>
                            <button className="text-sm mr-10 border-b-[2px] border-transparent hover:border-yellow-500 py-2 text-zinc-600">Private Offices</button>
                            <button className="text-sm mr-10 border-b-[2px] border-transparent hover:border-yellow-500 py-2 text-zinc-600">Meeting Rooms</button>
                            <button className="text-sm mr-10 border-b-[2px] border-transparent hover:border-yellow-500 py-2 text-zinc-600">Event Spaces</button>
                        </div>
                        <button className="border-b-2 border-transparent hover:border-zinc-800 py-2 text-zinc-600 flex items-center gap-2">Expore More <FaLongArrowAltRight className="font-thin text-sm text-zinc-600" /></button>
                    </div>
                </div>
                <div className="py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-3 gap-2 sm:gap-4 items-stretch">
                    {
                        [
                            [meeting, "Day One", "Guaranteed Desk in a shared workspance with 24hrs access for the day you pick", "/home", true],
                            [groupread, "Day Two", "Guaranteed Desk in a shared workspance with 24hrs access for the day you pick", "/home", false],
                            [verification, "Day Three", "Guaranteed Desk in a shared workspance with 24hrs access for the day you pick", "/home", false],
                        ].map(([picture, title, text, link, hovered]) => (
                            <aside className="flex gap-3 flex-col shadow-lg rounded-xs shadow-zinc-200 bg-white">
                                <div className="relative w-full h-[150px] sm:h-[200px] overflow-hidden">
                                    <img src={picture} alt={title} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                                <div className="flex flex-col gap-1 sm:gap-3 px-3 sm:px-4 sm:pt-2 pb-4 sm:pb-8">
                                    <h3 className="text-base font-semibold md:font-bold sm:text-lg md:text-xl text-zinc-600 uppercase">{title}</h3>
                                    <p className="text-xs sm:text-sm md:text-md text-justify leading-snug text-zinc-400">{text}</p>
                                    <Link to={link} className={`group ${hovered ? 'hover:bg-transparent hover:border-slate-600 bg-yellow-500 border-yellow-400' : 'border-slate-600 hover:border-yellow-400 hover:bg-yellow-500'} border-[1px] rounded-full md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer mt-2 md:mt-0`}><FaArrowRight className={`text-xs md:text-sm ${hovered ? 'text-slate-900' : 'text-slate-700 group-hover:text-slate-900'}`} /></Link>
                                </div>
                            </aside>
                        ))
                    }
                </div>
            </section>
            <section className="volunteer relative py-10 bg-orange-50">
                <div className="md:container md:mx-auto px-4 py-20 md:px-4 grid grid-cols-1 md:grid-cols-2 items-stretch">
                    <aside className="flex flex-col justify-center gap-3 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">Volunteer</p>
                        <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Particiapte in Charity around the Whole World</h3>
                        <p className="text-md md:text-md font-semibold text-slate-600">Join our community to volunteer and help people in need around the world</p>
                        <Link to="/volunteer" className="bg-pri text-white text-xs sm:text-sm md:text-md w-max px-3 sm:py-4 flex gap-2 items-center py-3 my-3 sm:px-4 rounded-sm">Become a Volunteer <FaArrowRight className="mt-1 text-xs md:text-sm" /></Link>
                    </aside>
                    <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-pri before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-sec after:absolute p-4">
                        <img src={slider} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <section className="workings bg-white shadow-lg shadow-zinc-400 py-10 px-4 md:px-10">
                <div className="container py-20 flex flex-col gap-3 mx-auto">
                    <div className="flex flex-col gap-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 uppercase text-center md:text-justify">How GrayChild Works</h3>
                        <p className="text-sm md:text-md text-zinc-500 text-center px-2 md:px-0 md:text-justify w-full md:w-[70%] leading-loose">At GrayChild, we are committed to ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur, adipisci iure consequuntur aspernatur earum incidunt delectus tenetur est. Recusandae iste quisquam illum sequi!</p>
                    </div>
                    <div className="grid py-10 grid-cols-2 md:grid-cols-2 xl:grid-cols-4 justify-center gap-1 md:gap-3 lg:gap-5">
                        {
                            [
                                ['we discover', 'Discovering is a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi fuga magnam? Perspiciatis', '/home'],
                                ['we expose', 'Graychild give exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi fuga magnam? Perspiciatis', '/home'],
                                ['we integrate', 'Having exposed a needy to the exposure they need, there is need to integrate and ingrain  as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi fuga magnam? Perspiciatis', '/home'],
                                ['we sustain', 'Sustenance is a important as a final step give exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi fuga magnam', '/home']
                            ].map(([title, text, url]) => (
                                <aside className="bg-slate-100 shadow-md shadow-slate-200 p-4 sm:p-6 md:p-8 rounded-xs flex flex-col justify-between my-4 gap-4">
                                    <div className="flex-col flex gap-4">
                                        <h3 className="text-md md:text-2xl font-bold text-slate-800 pt-4 uppercase">{title}</h3>
                                        <p className="text-xs md:text-base pt-0 md:pt-3 md:pb-6 text-slate-700 text-justify">{text}</p>
                                    </div>
                                    <Link to={url} className="cursor-pointer w-max text-xs md:text-sm text-slate-600 py-2 px-2 sm:px-4 border-[1px] border-slate-100 hover:border-slate-700 transition-all duration-300 rounded-xs flex items-center gap-2">Learn More <FaArrowRight size={8} fontWeight={100} className="text-xs md:text-sm mt-1 text-slate-600" /> </Link>
                                </aside>
                            ))
                        }
                    </div>
                </div>
            </section>
            <section className="relative py-20 flex flex-col justify-center items-center">
                <img src={reset} alt="Graychild Banner" className="absolute w-full h-full left-0 top-0 object-cover opacity-8" />
                <div className="flex relative z-10 py-5 flex-col gap-1">
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-none text-center">Join Our Action!</h3>
                    <h3 className="text-2xl sm:text-3xl md:text-4xl text-white font-bold leading-none text-center">Everyone can help.</h3>
                    <div className="flex gap-2 md:gap-5 py-8 justify-center">
                        <Link to="/" className="py-3 px-4 md:px-6 w-max bg-orange-500 cursor-pointer text-white rounded-sm font-semibold text-xs sm:text-sm md:text-md">Donate Now</Link>
                        <Link to="/" className="py-3 px-4 md:px-6 w-max bg-lime-500 cursor-pointer text-white rounded-sm font-semibold text-xs sm:text-sm md:text-md">Become a Volunteer</Link>
                    </div>
                </div>
            </section>
            <section className="steps bg-[#f9f9f9] py-10 px-4 lg:px-10">
                <div className="lg:container flex flex-col gap-3 py-20 mx-auto">
                    <div className="flex flex-col items-center gap-3 md:w-[70%] mx-auto">
                        <h3 className="text-2xl font-bold text-zinc-800 uppercase">Value Proposition</h3>
                        <p className="text-sm text-zinc-500 text-center leading-loose">Our values are Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptates pariatur, adipisci iure autem odit vel, quidem, iste dolore consequuntur aspernatur earum incidunt delectus tenetur est. Recusandae iste quisquam illum sequi!</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 py-20 lg:grid-cols-2 justify-center gap-3">
                        <div className="grid row-start-2 md:row-start-1 grid-cols-2 gap-3 md:gap-5 items-stretch">
                            {
                                [
                                    ['text-cyan-500', 'bg-cyan-100', 'Step 1', 'Love NOT Greed', 'We are motivated by our love and not human greed as a final step give exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi'],
                                    ['text-orange-500', 'bg-orange-100', 'Step 2', 'Empathy NOT Fun', 'We do not just feel sympathy but are empathetic towards those underprivileged to love and  give exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi'],
                                    ['text-lime-500', 'bg-lime-100', 'Step 3', 'Heart NOT Eyes', 'Our drive goes beyond the eye-service but a burning heart of gold towards giving exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi'],
                                    ['text-indigo-500', 'bg-indigo-100', 'Step 4', 'Interest NOT Pride', 'The goal is to find fulfilment in delivering excellent change, love and not human greed as a final step give exposure as a key graychild Lorem ipsum dolor sit, amet consectetur adipisicing elit. Doloribus hic impedit provident molestias maiores ducimus quae nisi'],
                                ].map(([color, background, step, heading, text]) => (
                                    <aside className="py-5 px-2 md:px-5 flex flex-col justify-center">
                                        <h4 className={`${color} ${background} px-3 mb-1 py-1 w-max rounded-2xl text-white text-xs md:text-xs font-semibold`}>{step}</h4>
                                        <h3 className="text-lg font-bold text-slate-800 uppercase">{heading}</h3>
                                        <p className="pb-6 text-xs text-slate-500 text-justify">{text}</p>
                                    </aside>
                                ))
                            }
                        </div>
                        <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-green-400 before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-cyan-400 after:absolute p-4">
                            <img src={meeting} alt="" className="relative z-10 w-full h-full object-cover" />
                        </div>
                    </div>
                </div>
            </section>
            <section className="contact px-0 -mx-2 bg-pri-light">
                <div className="md:px-10 md:container pt-20 mx-auto sm:grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 items-stretch">
                    <div className="flex col-start-1 flex-col justify-center items-center md:items-start gap-3">
                        <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-zinc-800 uppercase text-center md:text-justify">Get in Touch</h3>
                        <p className="text-sm md:text-md text-zinc-500 text-center px-4 sm:px-3 md:px-0 md:text-justify w-full md:w-[70%] leading-loose">Feel free to reach out to us Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati quae delectus vitae. Repellendus possimus hic aperiam, unde illo adipisci placea</p>
                    </div>
                    <div className="flex col-span-2 justify-center p-5">
                        <form action="" className="bg-white px-8 py-12 rounded-sm w-[80%] sm:max-w-[30rem] shadow-md shadow-slate-500 md:-mb-10 flex flex-col gap-5">
                            <h3 className="text-md md:text-xl text-center font-bold text-slate-800 uppercase">We Listen and Respond</h3>
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input type="text" placeholder='First Name' name='firstname'  required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input type="text" placeholder='Last Name'  name='lastname' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input type="email" placeholder='Email'  name='email' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <input type="phone" placeholder='Phone Number'  name='phone'   className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                                <textarea  placeholder='Enter your message here and we would'  name='message'   className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border.pri bg-transparent border-[1px] border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[10rem] lg:col-span-2 resize-y " ></textarea>
                            </div>
                            <button type="submit" className="py-2 px-5 rounded-sm mx-auto bg-sky-500 cursor-pointer text-center text-gray-100 w-max">Get in Touch</button>
                        </form>
                    </div>
                </div>
                <div className="bg-white py-20 px-4">
                    <div className="md:container md:px-10 bg-white mx-0 md:mx-auto flex justify-center md:justify-start md:grid md:grid-cols-3 lg:grid-cols-4 md:gap-4 gap-6">
                        <div className="flex flex-col">
                            <h3 className="text-md md:text-xl font-bold text-lime-500 pb-2 uppercase">Working Hours</h3>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">Monday - Friday: 9:00AM - 4:00PM.</p>
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">Saturday (Closed)</p>
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">Sunday (Closed)</p>
                            </div>
                        </div>
                        <div className="flex flex-col">
                            <h3 className="text-md md:text-xl font-bold text-lime-500 pb-2 uppercase">WE ARE HERE</h3>
                            <div className="flex flex-col gap-1">
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">8, Ademola Adetokunbo Street, Wuse II, Abuja</p>
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">+234-904-124-4913</p>
                                <p className="text-xs md:text-sm text-zinc-700 text-justify">help@graychildfoundation.org</p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Rough