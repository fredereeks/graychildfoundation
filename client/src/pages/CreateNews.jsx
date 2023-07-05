import React, {useLayoutEffect, useState, useRef} from 'react'
import { rocket } from '../assets/images'
import axios from 'axios'
import { Button, TextInput } from '../components'
import { useLocation, } from 'react-router-dom/dist'
import { randomColor} from '../utils'
import ReactQuill from 'react-quill'
import "react-quill/dist/quill.snow.css"
import moment from 'moment'

function CreateNews(){
    const state = useLocation().state;
    const [inputs, setInputs] = useState({
        title: state?.title || "",
        text: state?.text || "",
        images: state?.images || "",
        date: state?.date || "",
        category: state?.category || "",
        isActive: state?.isActive || true,
        featured: state?.featured || true,
    })
    const [error, setError] = useState(undefined)
    const [success, setSuccess] = useState("")
    const [value, setValue] = useState(state?.title || '')
    const [loading, setLoading] = useState(false)
    const formRef = useRef(null);
    const imageRef = useRef(null);
    const inputRef = useRef(null);
    const docTitle = state?.title ? "Edit" : "Create";
    
    useLayoutEffect(() => {
        document.title = `Gray Child Foundation :: ${docTitle} News`;
        //eslint-disable-next-line
    },[]);

    const handleChange = e => {
        const value = e.target.name === "date" ? moment(new Date(e.target.value)).format("DD-MM-YYYY HH:mm:ss") : e.target.value; 
        setInputs(prev => ({...prev, [e.target.name] : value}))
    }

    const handleImageChange = async() => {
        const allImages = imageRef.current.files;
        const formData = new FormData();
        for(let item in allImages){
            formData.append(`images`, allImages[item])
        }
        formData.append("folder", "news")
        const res = await axios.post("http://localhost:4119/api/upload", formData)
        setInputs(prev => ({...prev, images: JSON.stringify([...res.data])}))
        return res.data;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true)
        setError(undefined)
        setSuccess("")
        setInputs(prev => ({...prev, date: moment(new Date(inputs.date).getTime()).format("DD-MM-YYYY HH:mm:ss")}))
        try{
            const images = await handleImageChange();
            const formData = new FormData(formRef.current);
            formData.append('images', JSON.stringify([...images]));
            const res = await axios.post(`http://localhost:4119/api/posts/create`, formData)
            setSuccess(res.data)
            formRef.current.reset();
        }catch(err){
            if(err.response){
                const {message} = err.response.data;
                setError(message)
            }
            else setError(err.message)
        }
        setLoading(false);
    }

    return(
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div style={{background: randomColor(.8)}} className="relative hidden md:flex">
                <img src={rocket} alt="CTTI Web Students" className="absolute w-full h-full left-0 top-0 object-cover" />
            </div>
            <div className={`flex items-center border-2 boder-gray-600`}>
                <form onSubmit={handleSubmit} ref={formRef} className="form max-w-full w-[90%] md:w-[25rem] relative mx-auto flex flex-col gap-3 ">
                    <div className="flex flex-col items-center py-2">
                        <h3 className="text-lg md:text-xl text-transparent bg-gradient-to-r from-indigo-400 to-indigo-500 bg-clip-text font-semibold">{docTitle} News</h3>
                        <p className="pb-5 text-xs md:text-sm text-slate-400">This post will fall under "News and Features" Page</p>
                        {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                        {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                    </div>
                    <TextInput label={'News Title'} required styles={'w-full'} holder={'News Title'} name={'title'} value={inputs.title} onChange={handleChange} type={'text'} key={110} />
                    <TextInput label={'News Date'} required styles={'w-full'} holder={'News Date'} name={'date'} value={inputs.date} onChange={handleChange} type={'date'} key={111} />
                    <label htmlFor={"category"} className='text-sm text-bold text-gray-300' >News Category</label>
                    <select name="category" onChange={handleChange} className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4">
                        <option value="News">News</option>
                        <option value="Updates">Updates</option>
                        <option value="Interventions">Interventions</option>
                        <option value="Quick Response">Quick Response</option>
                    </select>
                    <label htmlFor={"photo"} className='text-sm text-bold text-gray-300' >News Images</label>
                    <input ref={imageRef} type="file" multiple required name="photo" className="w-full outline-none placeholder-opacity-70 text-zinc-500 focus:border-pri bg-transparent border-[1px] border-zinc-200 rounded-md py-2 px-4"/>
                    <label htmlFor={"text"} className='text-sm text-bold text-gray-300' >News Text</label>
                    <div className='h-[300px]'>
                        <ReactQuill className='h-full w-full rounded-md  text-sm text-slate-700' theme="snow" value={value} onChange={setValue} />
                    </div>
                    <input type="hidden" ref={inputRef} value={value} name="text" />
                    <Button styles={'text-white bg-gradient-to-r from-indigo-400 to-indigo-600 w-max'} text={`${loading ? 'Processing...' : docTitle}`} key={112} />
                </form>
            </div>
        </section>
    )
}

export default CreateNews;
