import React, { useEffect } from 'react'
import { eight_pillars } from '../assets/images'
import Banner from '../components/Banner';

function PeacePillars(){
    useEffect(() => {
        document.title = "Gray Child Foundation: Pillars of Positive Peace";
    },[])
    return (
        <main className="relative overflow-x-hidden">
            <section className="steps bg-[#f9f9f9] py-10 px-4 lg:px-10">
                <div className="lg:container flex flex-col gap-3 py-20 mx-auto">
                    <div className="flex flex-col items-center gap-3 md:w-[75%] mx-auto">
                        <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 uppercase">Pillars of <span className="text-pri">Positive Peace</span></h3>
                        <p className="text-sm md:text-md px-2 md:px-4 text-zinc-500 text-center leading-loose">These eight areas, known as the Pillars of Positive Peace, were derived from the datasets that had the strongest correlation with internal peacefulness, as measured by the <a href="https://www.visionofhumanity.org/maps/" className='text-sec font-semibold hover:underline'>Global Peace Index,</a> an index that defines peace as “absence of violence or the fear of violence”. The PPI measures the eight Pillars using three indicators for each. The indicators represent the best available globally-comparable data with the strongest statistically significant relationship to levels of peace.</p>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 pt-20 lg:grid-cols-2 justify-center gap-1">
                        <div className="relative pt-20 grid row-start-2 md:row-start-1 grid-cols-2 gap-3 md:gap-5 items-stretch">
                            <h2 className="absolute pr-2 top-0 left-0 text-slate-800 font-semibold text-lg">The <span className="text-pri">eight key factors, or pillars,</span> that comprise Positive Peace are:</h2>
                            {
                                [
                                    [123, 'text-cyan-500', 'bg-cyan-200', 'Pillar 1', 'Well-functioning Government', 'A well-functioning government delivers high-quality public and civil services, engenders trust and participation, demonstrates political stability and upholds the rule of law'],
                                    [122, 'text-orange-500', 'bg-orange-200', 'Pillar 2', 'Sound Business Environment', 'The strength of economic conditions as well as the formal institutions that support the operation of the private sector. Business competitiveness and economic productivity are both associated with the most peaceful countries and are key to a robust business environment.'],
                                    [121, 'text-lime-500', 'bg-lime-200', 'Pillar 3', 'Equitable Distribution of Resources', 'Peaceful countries tend to ensure equity in access to resources such as education, health and, to a lesser extent, equity in income distribution.'],
                                    [129, 'text-indigo-500', 'bg-indigo-200', 'Pillar 4', 'Acceptance of the Rights of Others', 'Peaceful nations enforce formal laws that guarantee basic human rights and freedoms and the informal social and cultural norms that relate to behaviours of citizens.'],
                                ].map(([id, color, background, pillar, heading, text]) => (
                                    <aside key={id} className="py-5 px-2 md:px-5 flex flex-col justify-start">
                                        <div className="flex flex-col gap-1 pb-3">
                                            <h4 className={`${color} ${background} px-3 mb-1 py-1 w-max rounded-2xl text-xs md:text-xs font-semibold`}>{pillar}</h4>
                                            <h3 className="text-lg font-bold text-slate-800 uppercase">{heading}</h3>
                                        </div>
                                        <p className="pb-6 text-xs text-slate-500 text-justify">{text}</p>
                                    </aside>
                                ))
                            }
                        </div>
                        <div className="relative border-1 border-zinc-50 before:h-40 before:w-40 before:left-0 before:top-0 before:bg-green-400 before:absolute after:h-40 after:w-40 after:right-0 after:bottom-0 after:bg-cyan-400 after:absolute p-4">
                            <img src={eight_pillars} alt="Gray Child Foundation Eight Pillars of Peace" className="relative z-10 w-full h-full bg-white object-contain" />
                        </div>
          
                    </div>
                </div>
                <div className="grid grid-cols-2 -mt-5 sm:grid-cols-2 md:grid-cols-4 pb-5 justify-center gap-3">
                        {
                            [
                                [128, 'text-green-500', 'bg-green-200', 'Pillar 5', 'Good Relations with Neighbours', 'Harmonious relations with other countries or between ethnic, religious and cultural groups within a country are vital for peace. Countries with positive internal and external relations are more peaceful and tend to be more politically stable, have better functioning governments, are regionally integrated and have lower levels of organised internal conflict.'],
                                [122, 'text-purple-500', 'bg-purple-200', 'Pillar 6', 'Free Flow of Information', 'Free and independent media disseminates information in a way that leads to greater knowledge and helps individuals, business and civil society make better decisions. This leads to better outcomes and more rational responses in times of crisis.'],
                                [125, 'text-yellow-500', 'bg-yellow-200', 'Pillar 7', 'High Levels of Human Capital','A skilled human capital base reflects the extent to which societies educate citizens and promote the development of knowledge, thereby improving economic productivity, care for the young, political participation and social capital.'],
                                [129, 'text-red-500', 'bg-red-200', 'Pillar 8', 'Low Levels of Corruption', 'In societies with high levels of corruption, resources are inefficiently allocated, often leading to a lack of funding for essential services, which in turn can lead to dissatisfaction and civil unrest. Low corruption can enhance confidence and trust in institutions as well as improve the efficiency of business and the competitiveness of the country.'],
                            ].map(([id, color, background, pillar, heading, text]) => (
                                <aside key={id} className="py-5 px-2 md:px-5 flex flex-col justify-start">
                                    <div className="flex flex-col gap-1 pb-3">
                                        <p className={`${color} ${background} px-3 mb-1 py-1 w-max rounded-2xl text-xs md:text-xs font-semibold`}>{pillar}</p>
                                        <h3 className="text-lg font-bold text-slate-800 uppercase">{heading}</h3>
                                    </div>
                                    <p className="pb-6 text-xs text-slate-500 text-justify">{text}</p>
                                </aside>
                            ))
                        }
                </div>
            </section>
            <Banner />
        </main>
    )
}

export default PeacePillars