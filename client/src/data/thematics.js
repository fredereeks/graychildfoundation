import { IoIosWater, IoIosContract, IoIosTrophy, IoIosTrendingUp} from 'react-icons/io'
// import { IoMdBriefcase, IoMdLaptop, IoIosWater, IoIosContract, IoIosTrophy, IoIosTrendingUp} from 'react-icons/io'
import { IoBookOutline, IoPeopleOutline } from 'react-icons/io5';


export const thematics = [
    {
        id: 401,
        title: "Peacebuilding & Advocacy",
        color: "text-red-500",
        background: "bg-red-100",
        icon: <IoIosContract  className={`text-red-500 text-2xl`} />,
        link: "/peacebuilding_and_advocacy"
    },
    {
        id: 402,
        title: "Economic & Community Development",
        color: "text-yellow-500",
        background: "bg-yellow-100",
        icon: <IoIosTrophy  className={`text-yellow-500 text-2xl`} />,
        link: "/economic_and_community_development"
    },
    {
        id: 403,
        title: "Education & Literacy",
        color: "text-indigo-500",
        background: "bg-indigo-100",
        icon: <IoBookOutline  className={`text-indigo-500 text-2xl`} />,
        link: "/education_and_literacy"
    },
    {
        id: 404,
        title: "Clean Water & Environment",
        color: "text-orange-500",
        background: "bg-orange-100",
        icon: <IoIosWater  className={`text-orange-500 text-2xl`} />,
        link: "/clean_water_and_environment"
    },
    {
        id: 405,
        title: "Young Generation",
        color: "text-sky-500",
        background: "bg-sky-100",
        icon: <IoIosTrendingUp  className={`text-sky-500 text-2xl`} />,
        link: "/young_generation"
    },
    {
        id: 406,
        title: "Public Health",
        color: "text-slate-500",
        background: "bg-slate-100",
        icon: <IoPeopleOutline  className={`text-slate-500 text-2xl`} />,
        link: "/public_health"
    },
]