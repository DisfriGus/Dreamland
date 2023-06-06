import React, { useState } from 'react'
import {TbMenu2, TbSearch} from 'react-icons/tb'
import { NavLink } from 'react-router-dom'
import {RiCloseLine} from "react-icons/ri"
import {BsPerson} from "react-icons/bs"
const Navbar = () => {
  const [show, setShow] = useState(true)
  const [search, setSearch] = useState(true)
  return (
    <div className='fixed flex items-center justify-between w-full max-md:w-full max-md:justify-center max-md:pt-3 z-10 bg-white md:px-[240px] md:pt-8 '>
        <h1 className='font-popins text-[24px] font-bold'>Dreamland<span className='text-[#FF4D4D]'>.</span> </h1>
        <button className='md:hidden text-[24px] absolute  right-6' onClick={()=>setShow(!show)}>
          {show ? <TbMenu2/>:<RiCloseLine/>}
        </button>
        {/* Desktop Navbar */}
        <div className='max-md:hidden text-[18px] font-medium flex gap-7 ml-[10%]'>
            <NavLink to='/Article'>Article</NavLink>
            <NavLink to='/Destination'>Destination</NavLink>
            <NavLink to='/YourOrders'>Your Orders</NavLink>
        </div>
        {/* Tablet & Phone Navbar */}
        <div className={`md:hidden text-[18px] font-medium flex flex-col gap-10 pt-4 absolute top-12 duration-200 h-full bg-white z-10 items-center ${show ? 'translate-x-[1000px]':'translate-x-0'}`}>
            <NavLink to='/Article'>Article</NavLink>
            <NavLink to='/Destination'>Destination</NavLink>
            <NavLink to='/YourOrders'>Your Orders</NavLink>
        </div>
        <div className='max-sm:hidden sm:flex items-center font-medium text-lg w-[250px] relative justify-end text-left right-0'>
            <input className={`border-none outline-none transition-all duration-200 linear focus:outline-none ${search ? "w-0":"w-full"}`}  type="text" placeholder=' Search Destination'/>
            <div className='flex items-end gap-4 '>
                <button type='submit' className={`text-[24px] font-medium  relative grid `} onClick={()=>setSearch(!search)}><TbSearch/></button>
                <NavLink to='/Login' className='font-medium text-[24px] '><BsPerson/></NavLink>
            </div>
        </div>
    </div>
  )
}

export default Navbar