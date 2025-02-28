import React from 'react'
import {FaArrowRightLong} from "react-icons/fa6";

const page = () => {
    return (
        <div className={"flex flex-col gap-4 items-center justify-center h-screen text-center"}>
            <p className={"text-[#4F46E5] font-bold"}>Success</p>
            <h1 className={"text-3xl sm:text-5xl font-bold text-gray-900"}>Your Order has been Placed! 🎊</h1>
            <p className={"text-gray-600 font-bold"}>Thank you for your purchase</p>
            <a href='/' className={" flex bg-[#4F46E5] items-center justify-center gap-2 text-white px-3.5 py-2.5 rounded-md font-semibold"}> Continue Shopping <FaArrowRightLong/> </a>
        </div>
    )
}
export default page
