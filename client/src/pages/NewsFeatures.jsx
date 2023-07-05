import React, {useEffect, useState} from 'react'
import axios from 'axios'
import { NewsCard, PostSkeleton } from '../components'
// import { news } from '../data'
import { useLocation } from 'react-router-dom'
// import { useFetch } from '../utils'

function NewsandFeatures() {
  const [news, setNews] = useState([])
  const [error, setError] = useState(undefined)
  // const {data, error: fetchError, reFetch} = useFetch(`http://localhost:4119/api/posts`, "get");
  const location = useLocation();
  // const cancelToken = axios.CancelToken.source();

  useEffect(() => {
    const fetchPosts = async() => {
      try{
        const res = await axios.get(`http://localhost:4119/api/posts`);
        const data = res.data;
        setNews(data)
        console.log({data, news})
      }catch(err){
        // if(axios.isCancel(err)){
        //   console.log("Request Cancelled");
        //   console.log({err})
        // }
        if(err.response){
          const {message} = err.response.data;
          setError(message)
          console.log({error})
        }
        setError(err.message)
      }
    }
    fetchPosts()
    return () => {
      // cancelToken.cancel()
    }
    // eslint-disable-next-line
  },[location])

  useEffect(() => {
    document.title = "Gray Child Foundation: News and Features";
},[])
  
  return (
    <section className="news-and-features py-20 bg-slate-100 px-2 sm:px-4 md:px-6">
      <div className="flex flex-col gap-3 mx-auto md:container">
        <div className="flex flex-col items-center gap-3 pb-10 md:w-[75%] mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-zinc-800 uppercase">News and <span className="text-pri">Updates</span></h3>
            <p className="text-sm md:text-md px-2 md:px-4 text-zinc-500 text-center leading-loose">We constantly tell the stories of our outreaches, ensure to visit to stay updated and informed with the latest developments on charity campaigns to keep you engaged.</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 justify-center items-stretch gap-2 md:gap-3">
            {
              news.length < 1 ?
              ([1, 2, 3].map(el => (
                  <PostSkeleton key={el} />
              ))) :
              (news?.map((post) => (
                  <NewsCard key={post._id} {...post} />
              )))
            }
        </div>       
      </div>
    </section>
  )
}

export default NewsandFeatures