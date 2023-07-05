import React from 'react'
import { FaChevronLeft, FaEllipsisV } from 'react-icons/fa'
import { Link } from 'react-router-dom'
import { melina } from '../assets/images'
import { profileLinks } from '../data'
import { PageLink } from '../components'

function Profile() {
    
  return (
    <main className="flex flex-col gap-2 bg-white min-h-screen py-4">
        <section className="flex flex-col justify-between gap-2">
            <div className="flex px-4 justify-between items-center">
                <Link to={'/home'} className="rounded-md grid place-items-center relative overflow-hidden h-5 w-5" >
                   <FaChevronLeft className="text-gray-500 h-4 w-4" /> 
                </Link>
                <p className="text-xl font-semibold text-gray-600">Profile</p>
                <Link to={'/home'} className="rounded-md grid place-items-center relative overflow-hidden h-5 w-5" >
                   <FaEllipsisV className="text-gray-500 h-4 w-4" /> 
                </Link>
            </div>
            <div className="p-4 mb-4 drop-shadow-sm border-b-1 border-gray-100 flex flex-col gap-2 items-center">
                <img src={melina} alt="Melina Jones" className="h-24 w-24 rounded-full object-cover" />
                <div className="flex flex-col items-center">
                    <h3 className="text-xl font-semibold text-gray-600">Melina Jones</h3>
                    <p className="text-gray-400 text-sm">Best Programmer</p>
                </div>
            </div>
            <div className="flex flex-col">
                {
                    profileLinks.map(({id, heading, links}) => {
                        return(
                            <div key={id}>
                                <p className="bg-gray-100 text-md text-gray-400 px-4 py-3">{heading}</p>
                                {
                                    links.map((link) => <PageLink key={link.id} {...link} />)
                                }
                            </div>
                        )

                    })
                }
                
            </div>
        </section>
    </main>
  )
}

export default Profile