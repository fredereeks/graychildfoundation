import React, { useLayoutEffect } from 'react'
import { FaHandsHelping, FaUserAlt } from 'react-icons/fa'
import {MotifCard} from '../components'
import { photos } from '../data';

function Gallery(){
    useLayoutEffect(() => {
        document.title = "Gray Child Foundation :: Gallery";
    },[]);
    
    return (
        <main className="relative">
            <section className="gallery relative py-10 bg-slate-200">
                <div className="md:container md:mx-auto px-4 py-20 md:px-0 grid grid-cols-1 md:grid-cols-2 items-stretch relative">
                    <aside className="relative z-50 flex flex-col justify-center items-center md:items-left gap-2 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">We are always on the quest</p>
                        <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">To Reach Out <span className="text-pri">all around the world</span></h3>
                        <p className="text-md md:text-md max-w-[70%] md:max-w-[75%] font-thin text-slate-600">This is who we are and what we represent. Please, have a look at captures of moments with our incredible partners, benefactors and beneficiaries</p>
                    </aside>
                    <div className="flex flex-col flex-3 md:flex-row md:gap-2 items-center justify-center py-5 px-3">
                        {
                            [
                                [111,'right-20 bottom-50 md:-right-10 md:top-40', 'bg-yellow-200', <FaUserAlt className='text-yellow-600 text-lg md:text-xl' />, 'You can contribute your knowledge, time, and skills'],
                                [112,'left-0 bottom-0', 'bg-pink-200', <FaHandsHelping className='text-pink-600 text-lg md:text-xl' />, "What you think is little could change someone's life"],
                            ].map(([id, position, background, icon, text]) => (
                                <MotifCard key={id} id={id} position={null} background={background}icon={icon}text={text} />
                            ))
                        }
                    </div>
                </div>
                <div className="py-10 bg-slate-100 px-4">
                    <div className="container mx-auto">
                        {/* <div className="flex gap-2 py-4 justify-between md:flex-wrap">
                            <div className="flex-1 flex gap-4 flex-wrap items-center">
                                <button className="text-sm mr-10 border-b-[3px] border-transparent hover:border-sec py-2 text-slate-600">Awareness &amp; Empowerment</button>
                                <button className="text-sm mr-10 border-b-[3px] border-transparent hover:border-sec py-2 text-slate-600">Peacekeeping &amp; Resolutions</button>
                                <button className="text-sm mr-10 border-b-[3px] border-transparent hover:border-sec py-2 text-slate-600">Enlightenment &amp; Education</button>
                                <button className="text-sm mr-10 border-b-[3px] border-transparent hover:border-sec py-2 text-slate-600">Capacity Building</button>
                            </div>
                        </div> */}
                        <div className="gallery__wrap sm:gallery__wrap--sm md:gallery__wrap--md gap-2">
                            {
                                photos.map(({id,image, name}) => (
                                    <div key={id} className="relative my-3 h-full w-full rounded-sm overflow-hidden shadow-md hover:shadow-lg">
                                        <img src={image} alt={name} className='w-full h-full object-cover'/>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
                </div>
            </section>
        </main>
    )
}

export default Gallery