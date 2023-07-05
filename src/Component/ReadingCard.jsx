import React from "react";
import { BsArrowRight } from "react-icons/bs";
import { TbMapPin}from "react-icons/tb"

const ReadingCard = (props)=>{
    return(
        <div className="flex items-center sm:w-[800px] justify-center sm:gap-5 border px-6 py-5 rounded-2xl max-sm:flex-col">
            <div >
                <img className="sm:w-[280px] sm:h-[280px]" src={props.images} alt="" />
            </div>
            <div className="sm:w-[450px] flex flex-col gap-6">
                <h1 className="font-bold text-[32px] sm:mb-2 ">{props.name}</h1>
                <p className="flex items-center text-[18px] text-[#6A707D] sm:mb-5"><TbMapPin/>{props.location}</p>
                <p className="text-[#535864] font-medium sm:text-[15px] sm:mb-10">{props.desc}</p>
                <button className="flex items-center text-[16px] border border-black px-6 py-2 w-fit">Explore <BsArrowRight/> </button>
            </div>
        </div>
    )
}

export default ReadingCard