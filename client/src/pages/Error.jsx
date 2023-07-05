import React, { useEffect } from 'react'
import { error404 } from '../assets/images'
import { Link } from 'react-router-dom'
import { FaArrowLeft } from 'react-icons/fa'
import { randomColor } from '../utils'
// import { Footer, Header } from '../components'

function Error() {
  useEffect(() => {
    document.title = "Gray Child Foundation: Page NOT Found";
},[])
  return (
    <main style={{background: randomColor()}} className='min-h-screen flex flex-col justify-center'>
        {/* <Header /> */}
        <section className="flex pt-10 flex-col gap-1 items-center">
            <h2 className="text-2xl font-bold text-gray-200">Houston, we have a Problem!</h2>
            <p className="text-sm text-gray-200">Looks like this page does not exist...ouch!</p>
        </section>
        <section className="flex flex-col gap-1 items-center">
            <img src={error404} alt="Error 404" className="h-15 w-15 object-cover" />
            <Link to="/" className="transition-all duration-300 hover:scale-100 scale-[.95]  flex items-center group gap-2"><FaArrowLeft className='pr-0 text-md pt-0 text-gray-200' /> <p className="text-md text-gray-200">Back to Home</p></Link>
        </section>
        {/* <Footer /> */}
    </main>
  )
}

export default Error