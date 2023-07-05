import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import Borobudur from '../Assets/Borobudur.png'
import GWK from '../Assets/GWK.png'
import Bromo from '../Assets/Bromo1.png'
import Kelingking from '../Assets/Kelingking.png'
// import required modules
import { Pagination, Navigation } from "swiper";
const Slider = () => {
    
  return (
    <>
    <Swiper 
      breakpoints={{
        320:{
          slidesPerView:1,
          slidesPerGroup:1,
          spaceBetween:20    
        },
        640:{
          slidesPerGroup:3,
          slidesPerView:3,
          spaceBetween:20
        }
      }}
      
      loop={true}
      loopFillGroupWithBlank={true}
      pagination={{
        clickable: true,
      }}
      navigation={true}
      modules={[Pagination, Navigation]}
      className="mySwiper max-sm:w-[350px]"
    >
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${Borobudur})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Borobudur Temple</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Magelang Regency, Center Java</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${Kelingking})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Kelingking Beach</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Klungkung Regency, Bali</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${Bromo})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Bromo Mountain</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Pasuruan Regency, East Java</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${GWK})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Garuda Wisnu Kencana</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Badung Regency, Bali</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${Bromo})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Bromo Mountain</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Pasuruan Regency, East Java</p>
        </div>
      </SwiperSlide>
      <SwiperSlide>
        <div className='h-[560px] border w-[400px] flex flex-col justify-end' style={{backgroundImage:`url(${Borobudur})`}}>
            <h1 className='text-white text-[22px] font-bold ml-[32px]'>Borobudur Temple</h1>
            <p className='text-white mb-[52px] ml-[32px]'>Magelang Regency, Central Java</p>
        </div>
      </SwiperSlide>
    </Swiper>
  </>
  )
}

export default Slider