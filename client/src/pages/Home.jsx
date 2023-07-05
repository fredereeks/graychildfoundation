import React, {useEffect, useState, lazy, Suspense} from 'react'
import { Link, useLocation } from 'react-router-dom'
import axios from 'axios'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
// import {FacebookEmbed, FacebookEmbedProps, InstagramEmbed, InstagramEmbedProps, TwitterEmbed, TwitterEmbedProps} from 'react-social-media-embed'
import {  peace_map, gallery_WA0038, gallery_WA0040, gallery_WA0042, gallery_WA0051, gallery_WA0043, gallery_WA0041, gallery_WA0039, gallery_WA0045, gallery_WA0044, gallery_WA0049 } from '../assets/images'
import { FaArrowRight, FaCaretRight, FaLongArrowAltRight, } from 'react-icons/fa'
import { thematics } from '../data'
import { Sponsors } from '../components'
const Banner = lazy(() => import("../components/Banner"))
const NewsCard = lazy(() => import("../components/NewsCard"))
const PostSkeleton = lazy(() => import("../components/PostSkeleton"))

function Home(){
    const [news, setNews] = useState([])
    const [error, setError] = useState(undefined)
    const location = useLocation();

     const cancelToken = axios.CancelToken.source();

    useEffect(() => {
        const fetchPosts = async() => {
            try{
                const res = await axios.get(`http://localhost:4119/api/posts?max=3`);
                const data = res.data;
                setNews(data)
                console.log({data, news})
            }catch(err){
                if(axios.isCancel(err)){
                console.log("Request Cancelled");
                console.log({err})
                }
                else if(err.response){
                    const {message} = err.response.data
                    setError(message)
                }
                else setError(err.message)
                console.log({error})
            }
        }
        fetchPosts()
        return () => {
            cancelToken.cancel()
        }
        // eslint-disable-next-line
    },[location])
    
    return (
        <main className="relative">
            <section className="hero py-20 px-4 flex flex-col justify-center md:px-10 relative after:left-0 after:top-0 after:absolute after:z-5 after:bg-[#0008] after:w-full after:h-full min-h-[80vh]">
                <img src={gallery_WA0051} alt="Gray Child Hero" className="absolute z-2 w-full h-full left-0 top-0 object-cover" />
                <div className="container relative z-10 mx-auto py-10 px-4 flex flex-col gap-3">
                    <p className="text-sm md:text-lg lg:text-xl text-white leading-[1px]">Together, let's build a nation where</p>
                    <h2 className="text-white text-4xl md:text-5xl lg:text-6xl uppercase font-bold max-w-[90%] md:max-w-[35rem] lg:max-w-[45rem] leading-[1px]">Peace and Justice</h2>
                    <h2 className="text-white text-3xl md:text-4xl lg:text-5xl font-bold max-w-[90%] md:max-w-[35rem] lg:max-w-[45rem] leading-[1px] uppercase">Shall Reign</h2>
                    <Link to="/about" className='py-2 w-max px-6 rounded-[2rem] my-2 bg-sec text-sm md:text-md text-white'>Learn More</Link>
                </div>
            </section>
            <section className="categories py-10 bg-slate-200">
                <div className="flex flex-col gap-1 py-10 items-center">
                    <p className="text-sm sm:text-md md:text-base text-slate-500">We are committed to our</p>
                    <h2 className="font-bold text-2xl md:text-3xl text-slate-700">Thematic <span className="text-sec">Areas</span></h2>
                </div>
                <div className="py-4 px-2 sm:px-4 pb-20 md:container lg:container xl:container mx-auto md:px-6 grid lg:grid-cols-3 grid-cols-2 gap-2 md:gap-4">
                    {
                        thematics.map((item) => {
                            const {id, icon, color, background, title, link} = item;
                            return(
                                <aside key={id} className="bg-white px-4 pt-6 pb-8 justify-between items-center flex flex-col gap-2 md:gap-4 rounded-md hover:shadow-lg">
                                    <div className="flex flex-col md:gap-2">
                                        <div className={`w-12 h-12 mx-auto my-2 rounded-full grid place-items-center ${background}`}>
                                            {icon}
                                        </div>
                                        <h4 className={` text-lg font-semibold text-center ${color}`}>{title}</h4>
                                    </div>
                                    <Link to={link} className={`w-max mx-auto ${color} {hover:${background}} px-4 sm:py-2 rounded-sm text-center text-xs flex gap-1 items-center`} >Read More <FaCaretRight className={`${color} mt-1 rotate-0 text-xs font-extralight`} /> </Link>
                                </aside>
                            )
                        })
                    }
                </div>
            </section>
            <Sponsors />
            <section className="mission relative py-20 bg-white">
                <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:grid-cols-2 md:gap-4 items-stretch">
                    <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 px-4 md:px-10 md:gap-4 items-stretch">
                        <aside className="flex flex-col justify-center py-10 gap-0">
                            <p className="uppercase text-md pt-10 md:text-base font-semibold text-slate-400">What we</p>
                            <h3 className="text-2xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-3xl font-bold leading-normal uppercase">stand for</h3>
                            <p className="text-md py-2 md:text-md font-thin text-slate-400">Gray Child Foundation (GCF) is a Pan-African non-partisan organization, working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives and advocating for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.</p>
                            <p className="text-md py-2 md:text-md font-thin text-slate-400">We partner with governments, international organizations, civil societies and the private sector to bring about positive social change that would promote and support programmes that affect the rights, education and orientation of the African child. We encourage peace building in communities, and provide a forum for economic and community development in Nigeria and beyond.</p>
                            <p className="text-md pt-2 pb-5 md:text-md font-thin text-slate-400">Gray Child Foundation acts as advocates for the provision of clean water and environment, and we liaise with government agencies and other NGOs for the provision of medical aid, prevention and treatment of diseases etc.</p>
                        </aside>
                    </div>
                    <aside className="flex flex-col justify-center py-10 gap-0">
                        <div className="w-full h-[350px] py-5 px-4">
                            <img src={peace_map} alt="" className="w-full h-full object-contain" />
                        </div>
                    </aside>
                </div>
                <div className="md:container lg:container xl:container md:mx-auto grid grid-cols-1 sm:grid-cols-2 px-4 md:px-10 md:grid-cols-2 gap-[.5rem] sm:gap-2 md:gap-4 items-stretch">
                    <aside className="flex flex-col justify-start sm:py-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] font-bold leading-normal uppercase">Our <span className="text-sec">Mission</span></h3>
                        <p className="text-md pt-3 pb-10 md:text-md font-thin text-slate-400">Our Mission is to impact, influcence and innovate for the advancement of sustainable peace and development in Nigeria and beyond.</p>
                    </aside>
                    <aside className="flex flex-col justify-start sm:py-10">
                        <h3 className="text-xl sm:text-2xl md:text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] font-bold leading-normal uppercase">Our <span className="text-sec">Vision</span></h3>
                        <p className="text-md pt-3 pb-10 md:text-md font-thin text-slate-400">To influence and pilot the machineries that brings the dreams fo the African Child to reality.</p>
                    </aside>
                </div>
            </section>
            <section className="gallery pt-10 pb-20 px-2 sm:px-4 bg-[#f9f9f9]">
                <div className="container mx-auto flex items-center gap-4 py-4">
                    <h3 className="text-3xl font-bold text-slate-700 pr-3">Gallery and <span className="text-sec">Events</span></h3>
                    <Link to="/gallery" className="md:ml-auto border-b-2 border-transparent hover:border-slate-800 py-2 text-slate-600 flex items-center gap-2">Explore More <FaLongArrowAltRight className="font-thin mt-1 text-xs  text-slate-600" /></Link>
                </div>
                {/* <div className="md:container mx-auto lg:container xl:container py-2 grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-2 sm:gap-4 items-stretch"> */}
                <div className="w-full overflow-hidden">
                    <Carousel 
                        autoPlay={true}
                        className='w-full h-full my-5 mx-auto px-5 flex justify-center items-stretch'
                        infiniteLoop={true}
                        showArrows={false}
                        showIndicators={false}
                        showThumbs={false}
                        showStatus={false}
                        centerMode={true}
                        centerSlidePercentage={30}
                    >
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0040} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0041} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0039} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0045} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0038} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0044} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0049} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                        <Link to={'/gallery'} className="cursor-pointer text-white flex flex-col items-center justify-center w-[250px] h-[200px] my-5 bg-white hover:shadow-xl">
                            <img src={gallery_WA0042} alt={'gallery item link'} className="h-full w-full object-contain" />
                        </Link>
                    </Carousel>
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
            <section className="news-and-features py-20 bg-slate-100 px-2 sm:px-4 md:px-6">
                <div className="flex flex-col gap-3 mx-auto md:container">
                    <div className="flex flex-col items-center gap-3 pb-10 md:w-[75%] mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 uppercase">News and <span className="text-pri">Updates</span></h3>
                        <p className="text-sm md:text-md px-2 md:px-4 text-zinc-500 text-center leading-loose">Stay updated and informed with the latest developments on charity campaigns to keep you engaged.</p>
                        <Link to={"/news-and-features"} className='group flex items-center px-4 py-2 rounded-sm w-max justify-center gap-2 text-sm hover:bg-pri-light text-pri'>See All News <FaArrowRight className='-rotate-12 mt-1 transition-all duration-300 text-pri text-xs md:text-sm group-hover:rotate-0' /></Link>
                    </div>
                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch gap-2 md:gap-3">
                        {
                            news.length < 1 ?
                            ([1, 2, 3].map(el => (
                                <PostSkeleton key={el} />
                            ))) :
                            (news?.map((post) => (
                                <NewsCard key={post._id} {...post} />
                            )))
                        }
                    </div>
                </div>
            </section>
            <Suspense>
                <Banner key={199} change={false} />
            </Suspense>
        </main>
    )
}

export default Home