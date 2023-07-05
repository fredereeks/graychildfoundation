import axios from 'axios';
import React, {useEffect, useState, createContext} from 'react'

export const AuthContext = createContext();

export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser] = useState(JSON.parse(localStorage.getItem("access_token")) || null);
    const [error, setError] = useState(undefined)
    const [success, setSuccess] = useState("")
    const [loading, setLoading] = useState(false)

    useEffect(() => {
        localStorage.setItem("gray_admin", JSON.stringify(currentUser))
    },[currentUser])

    useEffect(() => {
        let timer;
        clearTimeout(timer);
        timer = setTimeout(() => {
            setSuccess("");
            setError(undefined)
        },5000)
        return () => {
            clearTimeout(timer);
        }
    },[success,error])

    const login = async(inputs) => {
        setLoading(true)
        setError(undefined)
        setSuccess("")
        try{
            const res = await axios.post(`http://localhost:4119/api/auth/login`, inputs)
            setCurrentUser(res.data)
            setSuccess(res.data)
            localStorage.setItem("gray_admin", JSON.stringify(res.data))
        }catch(err){
            if(err.response){
                const {message} = err.response.data;
                setError(message)
            }
            else setError(err.message)
            setCurrentUser(null)
            localStorage.removeItem("gray_admin")
        }
        setLoading(false);
    }
    const register = async(inputs) => {
        setLoading(true)
        setError(undefined)
        setSuccess("")
        try{
            const res = await axios.post(`http://localhost:4119/api/auth/register`, inputs)
            setSuccess(res.data)
        }catch(err){
            if(err.response){
                const {message} = err.response.data;
                setError(message)
            }
            else setError(err.message)
        }
        setLoading(false);
    }
    const logout = async() => {
        await axios.post(`http://localhost:4119/api/auth/logout`)
        localStorage.removeItem("gray_admin")
        setCurrentUser(null)
    }

  return (
    <AuthContext.Provider value={{loading, error, success, currentUser, login, register, logout}}>
        {children}
    </AuthContext.Provider>
  )
}

export default AuthContext