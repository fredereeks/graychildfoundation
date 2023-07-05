import React from 'react'
import { Link } from 'react-router-dom'
import {Carousel} from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import { partners } from '../data'


function Partners() {
  return (
    <section className="partners p-5">
        <div className="container flex flex-col justify-center items-center mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-slate-600 uppercase">Our Esteem <span className="text-pri">Partners</span></h3>
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
            {
                partners.map(partner => (
                    <Link key={partner.id} to={partner.link} className="cursor-pointer text-white flex flex-col items-center justify-center w-[150px] h-[100px] my-5 bg-white hover:shadow-xl">
                        <img src={partner.image} alt={partner.link} className="h-full w-full object-contain" />
                    </Link>
                ))
            }
            </Carousel>
        </div>
    </section>
  )
}

export default Partners