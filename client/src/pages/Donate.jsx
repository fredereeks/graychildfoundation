import React, { useLayoutEffect, useState, useRef } from 'react'
// import { Link } from 'react-router-dom'
import { FaHandsHelping, FaUserAlt } from 'react-icons/fa'
import {MotifCard, Sponsors} from '../components'
import { usePaystackPayment } from 'react-paystack';
import axios from 'axios'

// import { useNavigation } from 'react-router-dom';
// import BasicCarousel from '../components/BasicCarousel'

function Donate(){
    const formRef = useRef(null)
    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        amount: "",
        currency: "USD",
        phone: "",
        message: "",
        reference: '',
    });
    const [error, setError] = useState(undefined)
    const [success, setSuccess] = useState('')
    const [loading, setLoading] = useState(false)
    const [min, setMin] = useState(true)
    useLayoutEffect(() => {
        document.title = "Gray Child Foundation :: Donation";
    },[]);

    const config = {
        reference: 'GCF'+ (new Date()).getTime().toString(),
        email: inputs.email,
        amount: inputs.amount, //Amount is in the country's lowest currency. E.g Kobo, so 20000 kobo = N200
        publicKey: process.env.REACT_APP_PUBLIC_KEY,
        label: `A donation from ${inputs?.fullname} worth ${inputs?.currency}${inputs?.amount}`,
    };

    const onSuccess = async(reference) => {
        // Implementation for whatever you want to do with reference and after success call.
        setInputs(prev => ({...prev, reference}))
        try{
            const res = await axios.post("http://localhost:4119/api/donation/create", inputs)
            console.log({data: res.data})
            setSuccess(res.data)
        }catch(err){
            if(err.response){
                setError(err.response.data)
            }else{
                setError(err.data)
            }
        }
        setLoading(false)
        console.log(reference);
    };

    const onClose = () => {
        // implementation for  whatever you want to do when the Paystack dialog closed.
        setError("Payment Cancelled!")
    }
    
    const initializePayment = usePaystackPayment(config);

    async function handleSubmit(e) {
        e.preventDefault();
        setError(undefined)
        setSuccess('')
        setLoading(true)
        // const email = inputs?.email, currency = inputs?.currency, amount = +inputs?.amount, fullname = inputs?.fullname;
        try{
            initializePayment(onSuccess, onClose)    
            // alert(`Thank you for donating ${currency}${amount} to Gray Child Foundation, ${fullname}.\nWe have sent a copy of the payment receipt to your email at ${email}`)
            formRef.reset();
        }catch(err){
            if(err.response){
                setError(err.response.data)
            }else{
                setError(err.data)
            }
        }
        
    }
    
    return (
        <main className="relative">
            <section className="donation relative py-10 bg-slate-200">
                <div className="md:container md:mx-auto px-4 py-20 md:px-0 grid grid-cols-1 md:grid-cols-2 items-stretch relative">
                    <aside className="relative z-50 flex flex-col justify-center items-center md:items-left gap-2 md:gap-5">
                        <p className="uppercase text-md md:text-base font-semibold text-sec">Contribute to a good cause</p>
                        <h3 className="text-3xl text-slate-800 max-w-[70%] md:max-w-[75%] md:text-4xl font-bold leading-normal">Help strengthen our capacity to <span className="text-pri">reach out even further</span></h3>
                        <p className="text-md md:text-md max-w-[70%] md:max-w-[75%] font-thin text-slate-600">Your donations can go a long way in ensuring someone does not go hungry or have roof over their head</p>
                        <div className="flex flex-col flex-3 md:flex-row md:gap-2 justify-center py-5 px-3">
                            {
                                [
                                    [111,'right-20 bottom-50 md:-right-10 md:top-40', 'bg-yellow-200', <FaUserAlt className='text-yellow-600 text-lg md:text-xl' />, 'You can contribute your knowledge, time, and skills'],
                                    [112,'left-0 bottom-0', 'bg-pink-200', <FaHandsHelping className='text-pink-600 text-lg md:text-xl' />, "What you think is little could change someone's life"],
                                ].map(([id, position, background, icon, text]) => (
                                    <MotifCard key={id} position={null} background={background}icon={icon}text={text} />
                                ))
                            }
                        </div>
                    </aside>
                <div id="donate-form" className="relative z-50 flex justify-center py-5 px-2">
                    <form action="" ref={formRef} onSubmit={handleSubmit} className="bg-white px-8 py-12 rounded-sm w-full sm:max-w-[30rem] shadow-md shadow-slate-300 md:-mb-10 flex flex-col gap-5">
                        <div className="flex flex-col">
                            <h3 className="text-md md:text-xl text-center font-bold text-sec uppercase">Please, state your commitment details</h3>
                            {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                            {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                        </div>
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
                            <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="text" placeholder='Full Name' name='fullname'  required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                            <div className="flex gap-1 border-[1px] border-zinc-200 hover:border-pri rounded-md bg-transparent outline-none">
                                <select onChange={(e) => {
                                    setInputs(prev => ({...prev, [e.target.name]: e.target.value}));
                                    e.target.value === "USD" ? setMin(true) : setMin(false);
                                }} type="text" placeholder='currency'  name='currency' required className="w-20 outline-none placeholder-opacity-70 text-zinc-500 bg-transparent border-[1px] border-transparent rounded-md py-2 px-4">
                                    <option value="USD" className="text-zinc-700 font-semibold bg-transparent hover:bg-light-pri">$</option>
                                    <option value="EUR" className="text-zinc-700 font-semibold bg-transparent hover:bg-light-pri">&#8364;</option>
                                    <option value="GBP" className="text-zinc-700 font-semibold bg-transparent hover:bg-light-pri">&#163;</option>
                                    <option value="NGN" className="text-zinc-700 font-semibold bg-transparent hover:bg-light-pri">&#8358;</option>
                                </select>
                                <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: +e.target.value}))} type="text" placeholder='Amount' min={min ? 5 : 500}  name='amount' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 bg-transparent border-[1px] border-transparent rounded-md py-2 px-4" />
                            </div>
                            <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="email" placeholder='Email'  name='email' required className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                            <input onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))} type="phone" placeholder='Phone Number (optional)'  name='phone' className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4" />
                            <textarea onChange={(e) => setInputs(prev => ({...prev, [e.target.name]: e.target.value}))}  placeholder='Would be interested in knowing your drive (optional)'  name='message'   className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-4 px-4 col-start-1 h-[10rem] lg:col-span-2 resize-y " ></textarea>
                        </div>
                        <button type="submit" disabled={loading} className="py-2 px-5 rounded-md mx-auto bg-slate-800 cursor-pointer text-center text-gray-100 w-full">{loading ? 'Processing...' : 'Initiate Payment'}</button>
                    </form>
                </div>
                </div>
                
            </section>
            <Sponsors />
        </main>
    )
}

export default Donate