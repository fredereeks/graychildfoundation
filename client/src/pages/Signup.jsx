import React, { useState, useRef, useLayoutEffect, useContext} from 'react'
import { rocket } from '../assets/images'
import { Button, TextInput } from '../components'
import { Link, useNavigate } from 'react-router-dom'
import AuthContext from '../context/AuthContext'

function Signup(){
    const [inputs, setInputs] = useState({
            username: "",
            password: "",
            firstname: "",
            lastname: "",
            email: "",
            image: "",
            confirmPassword: ""
        });
        const formRef = useRef(null);

        const { register, error, success, loading } = useContext(AuthContext)

        const navigate = useNavigate();
    
        useLayoutEffect(() => {
            document.title = "Gray Child Foundation :: Register";
        },[]);
    
        

    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try{
            await register(inputs)
            formRef.current.reset();
            navigate("/login")
        }catch(err){
            console.log({err})
        }
    }

    return(
        <section className="bg-white min-h-screen grid grid-cols-1 md:grid-cols-2">
            <div className="relative flex items-center justify-center">
                <form action="" onSubmit={handleSubmit} ref={formRef} className="form max-w-[40rem] w-[15rem] relative mx-auto flex flex-col gap-3 ">
                    <div className="flex flex-col py-4 items-center">
                        <h3 className="text-lg md:text-xl text-indigo-500 font-semibold">Become a CTTI Student</h3>
                        <p className="text-xs md:text-sm text-slate-400">Please an account to get started</p>
                        {success && <div className="text-sm text-white py-2 my-2 px-4 bg-green-500 text-center rounded-md">{success}</div>}
                        {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}    
                    </div>
                    <TextInput styles={'w-full'} holder={'Enter Firstname'} name={'firstname'} value={inputs.firstname} onChange={handleChange} type={'text'} key={100} />
                    <TextInput styles={'w-full'} holder={'Enter Lastname'} name={'lastname'} value={inputs.lastname} onChange={handleChange} type={'text'} key={101} />
                    <TextInput styles={'w-full'} holder={'Enter Username'} name={'username'} value={inputs.username} onChange={handleChange} type={'text'} key={102} />
                    <TextInput styles={'w-full'} holder={'Enter Email'} name={'email'} value={inputs.email} onChange={handleChange} type={'email'} key={103} />
                    <TextInput styles={'w-full'} holder={'Enter Password'} name={'password'} value={inputs.password} onChange={handleChange} type={'password'} key={106} />
                    <TextInput styles={'w-full'} holder={'Confirm Password'} name={'confirmPassword'} value={inputs.confirmPassword} onChange={handleChange} type={'password'} key={107} />
                    <Button styles={'text-white font-semibold bg-gradient-to-r from-pink-500 to-pink-600 w-full'} text={`${loading ? 'Processing...' : 'Sign Up'}`} key={118} />
                    <Link to="/login" className="text-xs md:text-sm text-center text-slate-400 py-1">Have an Account already? <span className="text-indigo-500 font-semibold">Login</span></Link>
                </form>
            </div>
            <div className="relative hidden md:flex">
                <img src={rocket} alt="CTTI Swift Students" className="absolute w-full h-full left-0 top-0 object-cover" />
            </div>
        </section>
    )
}

export default Signup;
