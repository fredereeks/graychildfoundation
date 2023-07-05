import React, {useEffect, useRef, useState} from 'react'
import { useLocation } from 'react-router-dom'
import { FacebookIcon, FacebookShareButton, TwitterIcon, TwitterShareButton, EmailIcon, EmailShareButton, LinkedinIcon, LinkedinShareButton, WhatsappIcon, WhatsappShareButton} from 'react-share'
import Parser from 'html-react-parser'
import moment from 'moment'
import axios from 'axios'
import { BreadCrumb, Button, CommentCard, SideNewsCard, SideNewsSkeleton } from '../components'
// import { FaFacebook, FaLinkedin, FaTiktok, FaTwitter, FaWhatsapp } from 'react-icons/fa'

function SingleBlog() {
    const [news, setNews] = useState([])
    const [comments, setComments] = useState([])
    const [error, setError] = useState(undefined)
    const location = useLocation()
    const postId = location.pathname.split("/").slice(-1)[0]
    const [post, setPost] = useState(location.state ? location.state: {images: '',title: '',category: '',createdAt: '',text: '',_id: postId})
    // const {images,title,category,createdAt,text,_id} = post;
    const commentRef = useRef(null);
    const [inputs, setInputs] = useState({
        fullname: "",
        email: "",
        text: "",
    })

  // const cancelToken = axios.CancelToken.source();

    useEffect(() => {
        console.log({postId, state: location.state})
        if(!location.state){
            const fetchSinglePost = async() => {
                try{
                    const res = await axios.get(`http://localhost:4119/api/posts?id=${postId}`);
                    const data = res.data;
                    setPost(data)
                }catch(err){
                    // if(axios.isCancel(err)){
                    //   console.log("Request Cancelled");
                    //   console.log({err})
                    // }
                    setError(err.message)
                }
            }
            fetchSinglePost()
        }
        else{
            setPost(location.state)
        }
        const fetchPosts = async() => {
            try{
                const res = await axios.get(`http://localhost:4119/api/posts?category=${post?.category}&max=2`);
                const data = res.data;
                setNews(data)
                console.log({data, news})
            }catch(err){
                // if(axios.isCancel(err)){
                //   console.log("Request Cancelled");
                //   console.log({err})
                // }
                setError(err.message)
            }
        }
        fetchPosts();
        const fetchComments = async() => {
            try{
                const res = await axios.get(`http://localhost:4119/api/comment/${postId}`);
                const data = res.data;
                setComments(data)
                console.log({data, comments})
            }catch(err){
                // if(axios.isCancel(err)){
                //   console.log("Request Cancelled");
                //   console.log({err})
                // }
                setError(err.message)
            }
        }
        fetchComments();
        document.title = `Gray Child Foundation :: ${post?.title}`

        return () => {
        // cancelToken.cancel()
        // setPost({images: [],title: '',category: '',createdAt: '',text: '',_id: postId})
        }
        // eslint-disable-next-line
    },[postId, location, location.state])
    
    
    const handleChange = e => {
        setInputs(prev => ({...prev, [e.target.name] : e.target.value}))
    }


    const handleSubmit = async(e) => {
        e.preventDefault();
        try{
            const formData = new FormData(commentRef.current)
            const res = await axios.post(`http://localhost:4119/api/comment/create/${postId}`, formData);
            setComments(prev => ([res.data, ...prev]))
        }catch(err){
            if(err.response.data){
                const {message} = err.response.data
                setError(message)
            }
        }
    }

  return (
    <section key={post?._id} className="py-10 bg-[#fff]">
        <div className="mx-auto flex flex-col gap-2 md:flex-row md:gap-4">
            <BreadCrumb key={199} page={post?.title} />
        </div>
        <div className="container py-20 mx-auto flex flex-col gap-2 md:flex-row md:gap-4">
            <article className="flex flex-1 pb-10 flex-col gap-2">
                <h3 className="text-xl sm:text-2xl text-slate-600 font-bold md:text-3xl uppercase">{post?.title}</h3>
                <div className="flex gap-5 sm:gap-10 md:gap-20 items-center">
                    <div className="flex gap-2 items-center">
                        <div className="h-7 w-7 rounded-full bg-slate-300"></div>
                        <p className="text-xs md:text-sm font-bold"><span className="text-slate-500">Admin</span></p>
                    </div>
                    <p className="text-xs text-slate-600 md:text-sm"><span className="text-slate-300">Published: </span> {moment(post?.createdAt || new Date().getTime()).fromNow()}</p>
                </div>
                <div className="py-5">
                    <img src={post?.images ? post?.images[0] : ""} alt={post?.title} className="h-[500px] my-5 w-full rounded-md object-cover" />
                    <div className="flex flex-col justify-between gap-3 p-2">
                        <div className="flex flex-col gap-5">
                            <article className="post__paragraph text-slate-500 text-md md:text-base leading-loose">{Parser(post?.text ? post?.text : "loading post text...")}</article>
                            <div className="flex gap-2 py-10 items-center">
                                <h4 className="text-md md:text-base text-slate-500 font-semibold">Share:</h4>
                                <div className="flex gap-3 items-center">
                                    <FacebookShareButton 
                                        url={`https://graychildfoundation.netlify.app/post/${post?.title}`}
                                        quote={`Gray Child Foundation :: ${post?.title}`}
                                        hashtag={post?.category}
                                    >
                                        <FacebookIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full'/>
                                    </FacebookShareButton>
                                    <TwitterShareButton 
                                        url={`https://graychildfoundation.netlify.app/post/${post?.title}`}
                                        quote={`Gray Child Foundation :: ${post?.title}`}
                                        hashtag={post?.category}
                                    >
                                        <TwitterIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full'/>
                                    </TwitterShareButton>
                                    <WhatsappShareButton 
                                        url={`https://graychildfoundation.netlify.app/post/${post?.title}`}
                                        quote={`Gray Child Foundation :: ${post?.title}`}
                                        hashtag={post?.category}
                                    >
                                        <WhatsappIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full'/>
                                    </WhatsappShareButton>
                                    <LinkedinShareButton 
                                        url={`https://graychildfoundation.netlify.app/post/${post?.title}`}
                                        quote={`Gray Child Foundation :: ${post?.title}`}
                                        hashtag={post?.category}
                                    >
                                        <LinkedinIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full'/>
                                    </LinkedinShareButton>
                                    <EmailShareButton 
                                        url={`https://graychildfoundation.netlify.app/post/${post?.title}`}
                                        quote={`Gray Child Foundation :: ${post?.title}`}
                                        hashtag={post?.category}
                                    >
                                        <EmailIcon round className='h-6 md:h-8 w-6 md:w-8 rounded-full'/>
                                    </EmailShareButton>
                                </div>
                            </div>
                            <div className="comment flex flex-col gap-2">
                                {/* <label htmlFor="comment" className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">Post a Comment</label>
                                <input type="checkbox" className="hidden peer" id="comment" /> */}
                                {/* <div className="peer-checked:flex hidden flex-col gap-2 py-5"> */}
                                <div className="flex gap-4">
                                    <label htmlFor={`comment`} className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-100 bg-slate-700 rounded-md">Post a Comment</label>
                                    <label htmlFor="all_comments" className="w-max cursor-pointer py-2 px-4 text-xs md:text-sm text-slate-600 bg-slate-300 rounded-md">View Comments</label>
                                </div>
                                <input type="checkbox" className={`hidden peer`} id={`comment`} />
                                <div className={`hidden peer-checked:flex flex-col gap-2 py-5`}>
                                    {error && <div className="text-sm text-white py-2 my-2 px-4 bg-pink-500 text-center rounded-md">{error}</div>}
                                    <form onSubmit={handleSubmit} ref={commentRef} className="flex-col gap-1 max-w-[35rem]">
                                        <input type="hidden" name="date" value={moment(Date.now()).format("YYYY-MM-DD HH:mm:ss")} />
                                        <textarea name="text" placeholder="Write your reply here..." value={inputs.text} onChange={handleChange} className='outline-none w-full placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4' cols="30" required rows="6"></textarea> 
                                        <div className="flex w-full flex-col mt-3 gap-1 md:flex-row md:gap-2">
                                            <div className="w-full">
                                                <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Full Name*'} onChange={handleChange} value={inputs.fullname} name={'fullname'}/>
                                            </div>
                                            <div className="w-full">
                                                <input type="text" required className="outline-none placeholder-opacity-70 text-slate-500 text-sm sm:text-md bg-transparent border-[1px] border-zinc-200 rounded-[.25rem] py-2 px-4 w-full" placeholder={'Enter Email*'} onChange={handleChange} value={inputs.email} name={'email'}/>
                                            </div>
                                        </div>
                                        <Button styles={'bg-sec mt-3 px-4 text-white'} text={'Comment'} key={Math.random()+Date.now()} />
                                    </form>
                                </div>
                                {/* </div>           */}
                                {comments.length > 0 ? <>
                                        <input type="checkbox" className="hidden peer" id="all_comments" />
                                        <div className="peer-checked:flex hidden flex-col gap-2 py-5">          
                                            {comments.map(comment => (
                                                <>
                                                    <CommentCard key={comment._id} {...comment}  />
                                                </>
                                            ))}
                                        </div>
                                    </>: <h3 className="peer-unchecked:hidden text-slate-600 font-bold text-sm md:text-md">No comments. Be the first to comment.</h3>
                                }
                            </div>
                        </div>
                    </div>
                </div>
            </article>
            <aside className="flex flex-col gap-5 w-full md:w-[20rem]  md:shadow-none rounded-md bg-white py-5 px-4 md:px-5">
                <h3 className="text-slate-700 text-xl md:text-2xl font-bold">Related Links</h3>
                <div className="flex flex-col gap-5">
                    {
                        news.length < 1 ?
                        ([2, 4, 9, 10].map((item,i) => (
                            <SideNewsSkeleton key={item} />
                        ))) :
                        (news?.map((post) => (
                            <SideNewsCard key={post._id} {...post} />
                        )))
                    }
                </div>
            </aside>
        </div>
    </section>
  )
}

export default SingleBlog
