import React from 'react'
import { executive_summary } from '../assets/images'
import {Banner} from '../components'

function Executive(){
    return (
        <main className="relative overflow-x-hidden">
            <section className="steps bg-[#f9f9f9] py-10 px-4 lg:px-10">
                <div className="md:container flex flex-col gap-3 py-20 mx-auto">
                    <div className="flex flex-col items-center gap-3 md:w-[70%] mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 uppercase">Executive <span className="text-pri">Summary</span></h3>
                        <p className="text-sm md:text-md px-2 md:px-4 text-zinc-500 text-center leading-loose">Welcome to Gray Child Foundation. Gray Child Foundation (GCF) is a Pan-African non-partisan organization, working to improve communities and human capital development of people in Nigeria and Africa by championing Positive Peace initiatives and advocating for the re-enforcement of the eight Pillars of Positive Peace, so as to advance sustainable development.</p>
                    </div>
                    <div className="relative mx-auto max-w-[1024px] pt-10 pb-20">
                        <img src={executive_summary} alt="Gray Child Foundation Eight Pillars of Peace" className="relative z-10 w-full h-full object-cover" />
                    </div>
                </div>
            </section>
            <Banner change={false}/>
        </main>
    )
}

export default Executive