import React, { lazy, useContext, Suspense } from 'react'
import { createHashRouter, Outlet, RouterProvider, useNavigate} from 'react-router-dom'
import AuthContext from './context/AuthContext'
// import { randomColor } from './utils'

const About = lazy(() => import("./pages/About"))
const CreateNews = lazy(() => import("./pages/CreateNews"))
const BlogPage = lazy(() => import("./pages/BlogPage"))
const Donate = lazy(() => import("./pages/Donate"))
const Error = lazy(() => import("./pages/Error"))
const Executive = lazy(() => import("./pages/Executive"))
const Footer = lazy(() => import("./components/Footer"))
const Gallery = lazy(() => import("./pages/Gallery"))
const Home = lazy(() => import("./pages/Home"))
const Header = lazy(() => import("./components/Header"))
const Login = lazy(() => import("./pages/Login"))
const NewsFeatures = lazy(() => import("./pages/NewsFeatures"))
const Organogram = lazy(() => import("./pages/Organogram"))
const Signup = lazy(() => import("./pages/Signup"))
const SingleBlog = lazy(() => import("./pages/SingleBlog"))
const Splash = lazy(() => import("./pages/Splash"))
const PeacePillars = lazy(() => import("./pages/PeacePillars"))
const Volunteer = lazy(() => import("./pages/Volunteer"))

// const SuspenseFcn = ({children}) => {
//   <Suspense fallback={
//     <div style={{background: randomColor(.8)}} className="min-h-screen flex flex-col gap-4 justify-center items-center w-full">
//       <div className="transition-all duration-300 animate-spin h-20 w-20 border-10 relative rounded-full border-slate-100 mx-auto before:absolute before:h-20 before:w-20 before:rounded-full before:border-l-10 before:border-white before:z-10"></div>
//       <h2 className='text-white text-sm font-semibold text-center'>Loading...</h2>
//     </div>
    
//   }>
//   {children}
//   </Suspense>
// }



function App() {
  const { currentUser } = useContext(AuthContext)
  // const [isPending, startTransition] = useTransition()

  const Protected = () => {
    const navigate = useNavigate();
      if(currentUser){
          <Outlet />
      }
      else{
        navigate("/login")
      }
  }
  
  const Layout = () => {
    return (
      <>
          <Suspense callback={<h2>Loading...</h2>}>
            <Header />
            <Outlet />
            <Footer />
          </Suspense>
      </>
    )
  }
  
  const router = createHashRouter([
    {
      element: <Layout />,
      path: "/",
      children: [
        {
          path: "/",
          element: <Home />
        },
        {
          path: "/about",
          element: <About />
        },
        {
          path: "/blog",
          element: <BlogPage />
        },
        {
          path: "/pillars-of-positive-peace",
          element: <PeacePillars />
        },
        {
          path: "/donate",
          element: <Donate />
        },
        {
          path: "/executive-summary",
          element: <Executive />
        },
        {
          path: "/gallery",
          element: <Gallery />
        },
        {
          path: "/news-and-features",
          element: <NewsFeatures />
        },
        {
          path: "/organogram",
          element: <Organogram />
        },
        {
          path: "/post/:title",
          element: <SingleBlog />
        },
        {
          path: "/volunteer",
          element: <Volunteer />
        },
        {
          path: "*",
          element: <Error />
        },
      ],
      errorElement: <Error />
    },
    {
      element: <Protected />,
      path: "/",
      children: [
        {
          path: "/create-news",
          element: <Suspense callback={<h2>Loading...</h2>}><CreateNews /></Suspense> 
        },
        {
          path: "/create-gallery",
          element: <Suspense callback={<h2>Loading...</h2>}><CreateNews /></Suspense> 
        },
        {
          path: "/create-news/:id",
          element: <Suspense callback={<h2>Loading...</h2>}><CreateNews /></Suspense> 
        },
        {
          path: "/logout",
          element: <Suspense callback={<h2>Loading...</h2>}><Home /></Suspense> 
        },
      ],
      errorElement: <Error />
    },
    {
      path: "/login",
      element: <Suspense callback={<h2>Loading...</h2>}><Login /></Suspense>,
      errorElement: <Error />
    },
    {
      path: "/signup",
      element: <Suspense callback={<h2>Loading...</h2>}><Signup /></Suspense>,
      errorElement: <Error />
    },
    {
      path: "/reset",
      element: <Suspense callback={<h2>Loading...</h2>}><Splash /></Suspense>,
      errorElement: <Error />
    }
  ])
  
  return (
    <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
