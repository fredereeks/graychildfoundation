import {useEffect, useState} from 'react'
import axios from 'axios'
import { useLocation } from 'react-router-dom'

const useFetch = (url, method, payload = {}) => {
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)
    const cancelToken = axios.CancelToken.source();
    const location = useLocation();

    useEffect(() => {
        const fetchData = async() => {
            try {
                setLoading(true)
                let res;
                if(method === "post"){
                    res = await axios.post(url, {
                        cancelToken: cancelToken.token,
                        data: payload
                    })
                }
                else if(method === "post"){
                    res = await axios.put(url, {
                        cancelToken: cancelToken.token,
                        data: payload
                    })
                }
                else{
                    res = await axios.get(url, {
                        cancelToken: cancelToken.token,
                        data: payload
                    })
                }
                setData(res.data)
            } catch (error) {
                if(axios.isCancel(error)){
                    console.log("Request Cancelled")
                }
                else{
                    setError(error)
                }
            }
            setLoading(false)
            cancelToken.cancel()
        }
        fetchData();
      return () => {
        // cancelToken.cancel()
      }
      //eslint-disable-next-line
    }, [location]);
    // }, [url,cancelToken]);

    const reFetch = async() => {
        try {
            setLoading(true)
            let res;
            if(method === "post"){
                res = await axios.post(url, {
                    cancelToken: cancelToken.token,
                    data: payload
                })
            }
            else if(method === "post"){
                res = await axios.put(url, {
                    cancelToken: cancelToken.token,
                    data: payload
                })
            }
            else{
                res = await axios.get(url, {
                    cancelToken: cancelToken.token,
                    data: payload
                })
            }
            setData(res.data)
        } catch (error) {
            if(axios.isCancel(error)){
                console.log("Request Cancelled")
            }
            else{
                setError(error)
            }
        }
        setLoading(false)
    }

    return {data, loading, error, reFetch}
}

export default useFetch;