import React, {useEffect, useRef, useState} from 'react'
import { peace_map, gallery_WA0038, gallery_WA0040, gallery_WA0042, gallery_WA0049, gallery_WA0043 } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaArrowRight, FaLongArrowAltRight } from 'react-icons/fa'
import { Banner } from '../components'
import { values } from '../data/values';
import axios from 'axios'

function About(){
    const [inputs, setInputs] = useState({
        firstname: "",
        lastname: "",
        email: "",
        phone: "",
        message: ""
    });
    const [error, setError] = useState(undefined);
    const [loading, setLoading] = useState(false);
    const [success, setSuccess] = useState("");
    const formRef = useRef(null);

    useEffect(() => {
        document.title = "Gray Child Foundation :: About Us";
    },[])

    useEffect(() => {
        const timer = setTimeout(() => {
            setSuccess("");
            setError(undefined)
        },2000)
        return () => {
            clearTimeout(timer);
        }
    },[success,error])

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async(e) => {
        e.preventDefault();
        setLoading(true)
        setSuccess("")
        setSuccess(undefined)
        try{
            const res = await axios.post("http://localhost:4119/api/contact", inputs);
            setSuccess(res.data);
            formRef.current.reset();
        }catch(err){
            console.log({err})
            setError(err.message)
        }
        setLoading(false);
    }
    
    return (
        <main className="relative">
            <section className="mission relative py-10 bg-white">
                <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                    <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:gap-4 items-stretch">
                        <aside className="flex flex-col justify-center py-10 gap-0">
                            {/* <p className="uppercase text-md pt-10 md:text-base font-semibold text-slate-400">What we</p> */}
                            <h3 className="text-2xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-3xl font-bold leading-normal uppercase">About Us</h3>
                            <p className="text-md pb-2 pt-4 md:text-md font-normal text-slate-500">Gray Child Foundation (GCF) is a Pan-African non-partisan organization working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives, and advocating for the reinforcement of the <Link className="text-sec" to="/pillars-of-postive-peace">eight pillars of positive peace</Link> so as to advance sustainable development.</p>
                            <p className="text-md py-2 md:text-md font-normal text-slate-500">We are an indigenous think-tank peace research and programmes organization that mobilizes, coordinates and provides technical support to <Link className="text-pri" to="https://www.rotary.org">Rotary Nigeria Peace Commission</Link> and other development Organizations. We partner and collaborate with governments and government agencies, international and corporate organizations, civil societies and the private sector to implement interventions that bring about positive social change that promotes and support initiatives that build, advance and sustain positive peace in communities, thereby creating an environment conducive for the actualization of sustainable peace and development in Nigeria.</p>
                        </aside>
                    </div>
                    <aside className="hidden md:flex flex-col justify-center py-10 gap-0">
                        <div className="relative h-[300px] md:h-[400px] border-1 border-slate-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-pri before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-sec after:absolute p-4">
                            <img src={gallery_WA0049} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                        </div>
                    </aside>
                    <div className="col-span-2 col-start-1 md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                        <aside className="flex flex-col justify-center py-10 gap-0">
                            <div className="w-full h-[350px] py-5 px-4">
                                <img src={peace_map} alt="" className="w-full h-full object-contain" />
                            </div>
                        </aside>
                        <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:gap-4 items-stretch">
                            <aside className="flex flex-col justify-center py-10 gap-0">
                                {/* <p className="uppercase text-md pt-10 md:text-base font-normal text-slate-400">What we</p> */}
                                <h3 className="text-2xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-3xl font-bold leading-normal uppercase">National Peace <span className="text-sec">Infrastructure</span></h3>
                                <p className="text-md pb-2 pt-4 md:text-md font-normal text-slate-500">Activating Positive Peace in Nigeria (APP.N) is a signature intervention and trademark of Gray Child Foundation.</p>
                                <p className="text-md py-2 md:text-md font-normal text-slate-500">It is a preventive proactive whole-of-society peacebuilding framework and action plan, which utilizes key methodologies (positive peace framework, theory of change, transformative pedagogy etc) for the design and implementation of intervention programmes that triggers measurable sustainable positive social change in communities of Nigeria.</p>
                                <p className="text-md pt-2 pb-5 md:text-md font-normal text-slate-500">APP.N has articulated goals, objectives and deliverables to actualize a more peaceful Nigerian society, and we have established and operates peace infrastructures in each sector of the <Link className="text-sec" to="/pillars-of-postive-peace">”eight pillars of positive peace framework”</Link> to actualize these goals.</p>
                            </aside>
                        </div>
                    </div>
                </div>
                <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 md:px-10 md:grid-cols-2 gap-[.5rem] sm:gap-2 md:gap-4 items-stretch">
                    <aside className="flex flex-col justify-start sm:py-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] font-bold leading-normal uppercase">Our <span className="text-sec">Mission</span></h3>
                        <p className="text-md pt-3 pb-10 md:text-md font-thin text-slate-500">Our Mission is to impact, influcence and innovate for the advancement of sustainable peace and development in Nigeria and beyond.</p>
                    </aside>
                    <aside className="flex flex-col justify-start sm:py-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] font-bold leading-normal uppercase">Our <span className="text-sec">Vision</span></h3>
                        <p className="text-md pt-3 pb-10 md:text-md font-thin text-slate-500">To influence and pilot the machineries that brings the dreams fo the African Child to reality.</p>
                    </aside>
                </div>
            </section>
            <section className="core-values bg-slate-60 shadow-lg shadow-slate-400 py-10 px-4 md:px-10">
                <div className="container py-20 flex flex-col gap-2 sm:gap-3 mx-auto">
                    <div className="grid py-10 grid-cols-2 md:grid-cols-3 xl:grid-cols-4 justify-center gap-[.5rem] md:gap-3 lg:gap-5">
                        <div className="flex flex-col justify-center gap-2 md:gap-3">
                            <p className="text-slate-500 text-center md:text-left text-md md:text-md">What we stand for</p>
                            <h3 className="text-xl sm:text-2xl md:text-3xl font-bold text-slate-800 uppercase text-center md:text-left">OUR <span className="text-sec">CORE VALUES</span></h3>
                            <p className="text-xs sm:text-sm md:text-md text-slate-600 text-center px-2 md:px-0 md:text-justify w-full md:w-[70%] leading-loose">At Gray Child Foundation, we are committed and driven by our values, goals, objectives and purpose. They are:</p>
                        </div>
                            {
                                values.map(({id, title, text}) => (
                                    <aside key={id} className="bg-slate-100 shadow-md shadow-slate-200 p-4 sm:p-6 md:p-8 rounded-xs flex flex-col justify-between my-2 md:my-4 gap-1">
                                        <div className="flex-col flex gap-1">
                                            <h3 className="text-md md:text-xl font-bold text-slate-800 pt-4 uppercase">{title}</h3>
                                            <p className="text-xs sm:text-sm md:text-md pt-0 md:pt-3 md:pb-6 text-slate-700 text-justify">{text}</p>
                                        </div>
                                        <Link to={"/about"} className="cursor-pointer w-max text-xs md:text-sm text-slate-600 py-2 px-2 sm:px-4 border-[1px] border-slate-100 hover:border-slate-700 transition-all duration-300 rounded-xs flex items-center gap-2">See Our Works <FaArrowRight size={8} fontWeight={100} className="text-xs md:text-sm mt-1 text-slate-600" /> </Link>
                                    </aside>
                                ))
                            }
                    </div>
                </div>
            </section>
            <section className="volunteer relative py-10 bg-orange-50">
                <div className="md:container lg:container xl:container md:mx-auto px-4 py-20 md:px-4 grid grid-cols-1 md:grid-cols-2 items-stretch">
                    <aside className="flex flex-col justify-center gap-3 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">Volunteer</p>
                        <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Particiapte in Charity within Nigeria and beyond!</h3>
                        {/* <p className="text-md md:text-md font-semibold text-slate-600">Join our community to volunteer and help people in need around the world</p> */}
                        <Link to="/volunteer" className="bg-pri text-white text-xs sm:text-sm md:text-md w-max px-3 sm:py-4 flex gap-2 items-center py-3 my-3 sm:px-4 rounded-sm">Become a Volunteer <FaArrowRight className="mt-1 text-xs md:text-sm" /></Link>
                    </aside>
                    <div className="relative h-[300px] md:h-[400px] border-1 border-slate-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-pri before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-sec after:absolute p-4">
                        <img src={gallery_WA0043} alt="" className="relative shadow-lg z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <Banner change={true} key={234} />
            <section className="gallery pt-10 pb-20 px-2 sm:px-4 bg-[#f9f9f9]">
                <div className="container mx-auto flex items-center gap-4 py-4">
                    <h3 className="text-3xl font-bold text-slate-700 pr-3">Gallery and <span className="text-sec">Events</span></h3>
                    <Link to="/gallery" className="md:ml-auto border-b-2 border-transparent hover:border-slate-800 py-2 text-slate-600 flex items-center gap-2">Explore More <FaLongArrowAltRight className="font-thin mt-1 text-xs  text-slate-600" /></Link>
                </div>
                <div className="md:container mx-auto lg:container xl:container py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 items-stretch">
                    {
                        [
                            [121, gallery_WA0038, "Awareness & Empowerment", "We constantly creating awareness and empowering those in need", "/gallery", true],
                            [122, gallery_WA0040, "Peacekeeping & Resolutions", "We are not shy to play a peacekeeping and resolutory role", "/gallery", false],
                            [123, gallery_WA0042, "Enlightenment & Education", "We are always enlightening, sensitizing and educating equality", "/gallery", false],
                            [124, gallery_WA0038, "Capacity Building", "We provide helps to those in need of a lifting up through our platform", "/gallery", false],
                        ].map(([id, picture, title, text, link, hovered]) => (
                            <Link to="/gallery" key={id} className="flex gap-3 flex-col shadow-lg rounded-xs shadow-slate-200 bg-white">
                                <div className="relative w-full h-[150px] sm:h-[200px] overflow-hidden">
                                    <img src={picture} alt={title} className="absolute left-0 top-0 h-full w-full object-cover" />
                                </div>
                                {/* <div className="flex flex-col gap-1 sm:gap-3 px-3 sm:px-4 sm:pt-2 pb-4 sm:pb-8">
                                    <h3 className="text-base font-semibold md:font-bold sm:text-lg md:text-xl text-slate-600 uppercase">{title}</h3>
                                    <p className="text-xs sm:text-sm md:text-md text-justify leading-snug text-slate-400">{text}</p>
                                    <Link to={link} className={`group ${hovered ? 'hover:bg-transparent hover:border-slate-600 bg-sec border-sec' : 'border-slate-600 hover:border-sec hover:bg-sec'} border-[1px] rounded-full md:h-10 md:w-10 sm:h-8 sm:w-8 h-6 w-6 flex justify-center items-center cursor-pointer mt-2 md:mt-0`}><FaArrowRight className={`text-xs md:text-sm ${hovered ? 'text-white' : 'text-slate-700 group-hover:text-slate-50'}`} /></Link>
                                </div> */}
                            </Link>
                        ))
                    }
                </div>
            </section>
            <section className="contact px-0 -mx-2 bg-slate-100">
                <div className="md:px-10 md:container lg:container xl:container pt-20 mx-auto sm:grid grid-cols-1 md:grid-cols-2 justify-center items-stretch">
                    <div className="flex col-span-2 justify-center px-2 py-5 md:p-5">
                        <form ref={formRef} onSubmit={handleSubmit} className="relative z-50 bg-white px-8 py-12 rounded-sm w-[90%] sm:max-w-[30rem] shadow-md shadow-slate-200 md:-mb-10 flex flex-col gap-5">
                            <div className="flex flex-col gap-1">
                                <h3 className="text-md md:text-xl text-center font-bold text-slate-800 uppercase">We Listen and Respond</h3>
                                <p className="text-sm md:text-md text-slate-500 text-center px-4 sm:px-3 md:px-0 md:text-justify w-full md:w-[70%] leading-loose">Feel free to reach out to contact us</p>
                            </div>
                            {success && <div className="text-sm text-white py-2 my-2 px-4 bg-pri text-center rounded-md">{success}</div>}
                            {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                                <input onChange={handleChange} type="text" placeholder='First Name' name='firstname'  required className="w-full outline-none placeholder-opacity-70 text-slate-500 focus:border-pri bg-transparent border-[1px] border-slate-200 rounded-md py-2 px-4" />
                                <input onChange={handleChange} type="text" placeholder='Last Name'  name='lastname' required className="w-full outline-none placeholder-opacity-70 text-slate-500 focus:border-pri bg-transparent border-[1px] border-slate-200 rounded-md py-2 px-4" />
                                <input onChange={handleChange} type="email" placeholder='Email'  name='email' required className="w-full outline-none placeholder-opacity-70 text-slate-500 focus:border-pri bg-transparent border-[1px] border-slate-200 rounded-md py-2 px-4" />
                                <input onChange={handleChange} type="phone" placeholder='Phone Number'  name='phone'   className="w-full outline-none placeholder-opacity-70 text-slate-500 focus:border-pri bg-transparent border-[1px] border-slate-200 rounded-md py-2 px-4" />
                                <textarea onChange={handleChange}  placeholder='Enter your message here and we would'  name='message'   className="w-full outline-none placeholder-opacity-70 text-slate-500 focus:border-pri bg-transparent border-[1px] border-slate-200 rounded-md py-4 px-4 col-start-1 h-[10rem] lg:col-span-2 resize-y " ></textarea>
                            </div>
                            <button type="submit" disabled={loading} className="py-2 px-5 rounded-md mx-auto bg-slate-800 cursor-pointer text-center text-gray-100 w-full">{loading ? 'Processing...' : 'Contact Us'}</button>
                        </form>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default About