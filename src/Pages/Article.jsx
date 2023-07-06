import React from 'react'
import Navbar from '../Component/Navbar'
import { NavLink } from 'react-router-dom'
import Bromo from '../Assets/bromo.png'
import GWK from '../Assets/GWK.png'
const Article = () => {
  return (
    <div>
      <Navbar/>
      <div className='max-md:pt-3 z-10 bg-white md:px-[240px] pt-32 font-popins'>
        <NavLink to="/" className=''>Back To Main Page</NavLink>
        <div>
          <div className='flex items-center sm:gap-14'>
              <img src={Bromo} alt="" />
              <div >
                  <h1 className='sm:mb-6 font-bold text-[32px]'>Pesona Gunung Bromo</h1>
                  <p className='sm:mb-20 font-medium text-[20px]'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Magnam repellendus doloremque illo consectetur harum inventore repellat culpa fuga dolorem, perspiciatis delectus eveniet voluptatem et nobis voluptatum tempore blanditiis sed reiciendis.</p>
                  <h5 className='font-medium text-[18px] '>By Ikhsan Assidiqie</h5>
              </div>
          </div>
          <div className='sm:pt-[100px] text-[24px] font-bold'>
            <h1 className='text-center'>Recently Added Posts</h1>
            <div className='flex gap-12'>
                <div>
                  <img src={GWK} alt="" className='sm:w-[448px] sm:h-[340px] object-cover rounded-3xl'/>
                  <h1 className='sm:mb-6 font-bold text-[32px]'>Garuda Wisnu Kencana</h1>
                  <p className='sm:mb-20 font-medium text-[20px]'>Garuda Wisnu Kencana Cultural Park, or GWK, is a tourist destination and attraction located at Ungasan, Badung on the island of Bali, Indonesia, about 10–15 minutes drive from Ngurah Rai International Airport.</p>
                  <h5 className='font-medium text-[18px]'>Dio Irsaputra Siregar</h5>
                </div>
                <div>
                  <img src={GWK} alt="" className='sm:w-[448px] sm:h-[340px] object-cover rounded-3xl'/>
                  <h1 className='sm:mb-6 font-bold text-[32px]'>Garuda Wisnu Kencana</h1>
                  <p className='sm:mb-20 font-medium text-[20px]'>Garuda Wisnu Kencana Cultural Park, or GWK, is a tourist destination and attraction located at Ungasan, Badung on the island of Bali, Indonesia, about 10–15 minutes drive from Ngurah Rai International Airport.</p>
                  <h5 className='font-medium text-[18px]'>Dio Irsaputra Siregar</h5>
                </div>
                <div>
                  <img src={GWK} alt="" className='sm:w-[448px] sm:h-[340px] object-cover rounded-3xl'/>
                  <h1 className='sm:mb-6 font-bold text-[32px]'>Garuda Wisnu Kencana</h1>
                  <p className='sm:mb-20 font-medium text-[20px]'>Garuda Wisnu Kencana Cultural Park, or GWK, is a tourist destination and attraction located at Ungasan, Badung on the island of Bali, Indonesia, about 10–15 minutes drive from Ngurah Rai International Airport.</p>
                  <h5 className='font-medium text-[18px]'>Dio Irsaputra Siregar</h5>
                </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Article