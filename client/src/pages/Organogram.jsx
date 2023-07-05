import React from 'react'
import { organogram } from '../assets/images'
import { Banner } from '../components'

function Organogram(){
    return (
        <main className="relative overflow-x-hidden">
            {/* <section className="steps bg-[#f9f9f9] py-10 px-4 lg:px-10"> */}
            <section className="steps bg-slate-50 py-10 px-4 lg:px-10">
                <div className="md:container flex flex-col gap-3 py-20 mx-auto">
                    <div className="flex flex-col items-center gap-3 md:w-[70%] mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 uppercase">Graychild <span className="text-pri">Organogram</span></h3>
                        <p className="text-sm md:text-md px-2 md:px-4 text-zinc-500 text-center leading-loose">At Gray Child Foundation (GCF), we <span className="text-sec">championing Positive Peace initiatives</span> and advocate for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.</p>
                    </div>
                    <div className="relative mx-auto max-w-[1024px] pt-10 pb-20 overflow-hidden rounded-lg">
                        <img src={organogram} alt="Gray Child Foundation Eight Pillars of Peace" className="relative z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <Banner change={true}/>
        </main>
    )
}

export default Organogram