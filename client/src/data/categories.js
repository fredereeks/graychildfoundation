import { IoMdBriefcase, IoMdLaptop } from 'react-icons/io'
import {FaRaspberryPi, FaReceipt} from 'react-icons/fa'

export const categories = [
    {
        id: 419,
        text: "Arts",
        bg: "bg-pink-100",
        icon: <FaRaspberryPi size={20} className={"text-pink-600"} />
    },
    {
        id: 416,
        text: "Science",
        bg: "bg-indigo-100",
        icon: <FaReceipt  size={20} className={"text-indigo-600"} />
    },
    {
        id: 417,
        text: "Coding",
        bg: "bg-orange-100",
        icon: <IoMdLaptop  size={20} className={"text-orange-600"} />
    },
    {
        id: 418,
        text: "Creative",
        bg: "bg-teal-100",
        icon: <IoMdBriefcase  size={20} className={"text-teal-600"} />
    },
]