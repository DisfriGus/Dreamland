import React, {useState} from 'react'
import Navbar from '../Component/Navbar'
import imageBromo from '../Assets/bromo.png'
import GWK from '../Assets/GWK.png'
import Borobudur from '../Assets/Borobudur.png'
import Kelingking from '../Assets/Kelingking.png'
import {TbApple, TbBuildingMonument,TbUser, TbArrowRight} from 'react-icons/tb'
import {BsArrowUpShort, BsArrowDownShort} from 'react-icons/bs'
import Slider from '../Component/Slider'
import Sapiens from '../Assets/illu-sapiens1.png'
import ReadingCard from '../Component/ReadingCard'
import NTT from '../Assets/image_ntt.png'
const Home = () => {
  const slides = [
    {url: Borobudur},
    {url: GWK},
    {url: imageBromo},
    {url: Kelingking},
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    const isFirstSlide = currentIndex === 0
    const newIndex = isFirstSlide ? slides.length - 1: currentIndex - 1
    setCurrentIndex(newIndex)
  }
  const nextSlide = () => {
    const isLastSlide = currentIndex === slides.length - 1
    const newIndex = isLastSlide ? 0: currentIndex + 1
    setCurrentIndex(newIndex)
  }
  return (
    <div className='bg-white font-popins'>
        <Navbar/>
        <div className='pt-[184px] sm:mx-[240px] relative'>
          <div className='flex items-center justify-between'>
            <div className='sm:w-[700px]'>
              <h1 className='sm:text-[52px] font-bold sm:w-[500px] mb-[18px] '><span className='font-medium'>Explore</span> the <br className='max-sm:hidden'/>Beauty of Indonesia</h1>
              <p className='text-[#6A707D] text-[18px] font-medium sm:w-[650px] mb-11'>Discover the beauty of Indonesia coincide with Indonesia independence day, you will feel the unforgettable experience of Indonesia.</p>
              <div className='flex justify-between mb-16'>
                <div className='flex items-center gap-3 max-sm:flex-col'>
                  <div className='text-[32px] w-fit p-3 bg-[#E4E7FF] text-[#4C5EFF] rounded-xl'>
                    <TbApple />
                  </div>
                  <div>
                    <h6 className='text-[24px] font-bold'>5000 +</h6>
                    <p className='text-[16px] font-medium'>Local Traditional</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='text-[32px] w-fit p-3 bg-[#FFE4E4] text-[#FF4C4C] rounded-xl'>
                    <TbBuildingMonument />
                  </div>
                  <div>
                    <h6 className='text-[24px] font-bold'>5000 +</h6>
                    <p className='text-[16px] font-medium'>Local Traditional</p>
                  </div>
                </div>
                <div className='flex items-center gap-3'>
                  <div className='text-[32px] w-fit p-3 bg-[#F8E4FF] text-[#D04CFF] rounded-xl '>
                    <TbUser />
                  </div>
                  <div>
                    <h6 className='text-[24px] font-bold'>5000 +</h6>
                    <p className='text-[16px] font-medium'>Local Traditional</p>
                  </div>
                </div>
              </div>
              <div className='flex max-sm:flex-col gap-7'>
                <button className='flex gap-3 items-center w-fit px-8 py-4 bg-[#FF4C4C] text-white rounded-[32px] text-[16px]'>Start Tour<TbArrowRight/></button>
                <button className='flex gap-3 items-center w-fit px-8 py-4 rounded-[32px] text-[16px] border-2 border-black'>See References<TbArrowRight/> </button>
              </div>
            </div>
            <div className='flex items-center gap-3'>
              <div className=' flex flex-col gap-10'>
                <div className='cursor-pointer max-sm:hidden'>
                  <BsArrowUpShort onClick={prevSlide} className='text-[32px]'/>
                </div>
                {/* Down Button */}
                <div className='cursor-pointer max-sm:hidden'>
                  <BsArrowDownShort onClick={nextSlide} className='text-[32px]'/>
                </div>
              </div>
              <div style={{backgroundImage: `url(${slides[currentIndex].url})`}} className='w-[380px] h-[380px] border rounded-[32px] max-sm:w-[300px] max-sm:h-[300px] max-sm:bg-cover'> </div>
            </div>
          </div>
          <div className='sm:mt-[72px]'>
            <div className='flex items-center justify-center '>
              <h1 className='text-[24px] font-bold'>Few Reccomendation for You </h1>
              <p className='absolute right-0'>Disocover </p>
            </div>
            <div>
              <Slider/>
            </div>
          </div>
          <div className='sm:mt-[72px] flex items-center justify-between sm:pb-[175px]'>
            <div className=''>
              <img src={Sapiens} alt="" />
            </div>
            <div className='sm:w-[828px]'>
              <h1 className='font-bold sm:text-[42px] '>Why Choose Dreamland ?</h1>
              <p className='text-[#6A707D] font-medium sm:text-[22px] ' >Indonesia has a lot of natural resources that can be utilized and preserved, especially as a place for local and foreign tourists to visit. We can facilitate you by taking you to places that are hidden gems and giving you an experience that will not disappoint.</p>
            </div>
          </div>
          <div className='sm:mt-[72px]'>
              <div className='flex items-center justify-center'>
                <h1 className='sm:text-[24px] font-bold'>Reading Post</h1>
                <p className='absolute right-0'>Discover</p>
              </div>
              <div className='flex items-center gap-4'>
                <ReadingCard 
                images={NTT}
                name="Pulau Komodo" 
                desc="Komodo island, part of the Lesser Sunda chain of Indonesian islands, is the rugged habitat of the 3m-long Komodo dragon monitor lizard. Komodo National Park covers the entire region and is home to more than 4,000 dragons."
                location ="Nusa Tenggara Timur, Indonesia"
                />
                <ReadingCard 
                images={NTT}
                name="Pulau Komodo" 
                desc="Komodo island, part of the Lesser Sunda chain of Indonesian islands, is the rugged habitat of the 3m-long Komodo dragon monitor lizard. Komodo National Park covers the entire region and is home to more than 4,000 dragons."
                location ="Nusa Tenggara Timur, Indonesia"
                />
              </div>
          </div>
        </div>
    </div>
  )
}

export default Home