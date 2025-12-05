/* eslint-disable react/no-unescaped-entities */
"use client"
import React from 'react'
import { FaArrowLeft, FaArrowRight, FaStar,FaCheckCircle  } from "react-icons/fa";
import {Swiper, SwiperSlide} from 'swiper/react'
import { Navigation,  Autoplay } from "swiper/modules";
import { useRef } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const SecFive = () => {

  const prevRef = useRef(null);
  const nextRef = useRef(null);

  const data =[
    {id:1, title:"Sarah M.", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:2, title:"Alex K.", para:"“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"},
    {id:3, title:"James L.", para:"“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"},
    {id:4, title:"Sarah M.", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:5, title:"Sarah M.", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:6, title:"Sarah M.", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
  ]  
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center pt-10 pb-40 2xl:pb-48'>
            
            <div className='px-4 lg:px-12 2xl:px-32 w-full'>  
              {/* heading */}
              <div className='flex items-center justify-between'>
                 <h2 className='text-[24px] lg:text-[48px] font-bold font-integral'>OUR HAPPY CUSTOMERS</h2>
                 <div className='flex gap-5'>
                  <FaArrowLeft size={25} ref={prevRef} className="cursor-pointer" />
                  <FaArrowRight size={25} ref={nextRef} className="cursor-pointer" />  
                 </div>
              </div>
              {/* swiper */}
              <div className='mt-10 lg:mt-16'>
                <Swiper
                breakpoints={{
                    320:{
                      slidesPerView:1,
                      spaceBetween:10
                    },
                    720:{
                      slidesPerView:2,
                      spaceBetween:20
                    },
                    1024:{
                      slidesPerView:3,
                      spaceBetween:40
                    }
                }}  
                  loop={true}
                  autoplay={{
                    delay: 2500,
                    disableOnInteraction: false,
                  }}
                  onBeforeInit={(swiper) => {
                    swiper.params.navigation.prevEl = prevRef.current;
                    swiper.params.navigation.nextEl = nextRef.current;
                  }}
                  modules={[Navigation, Autoplay]}
                >
                  {data.map((item) => (
                    <SwiperSlide key={item.id}>
                      <div className='flex flex-col gap-3 p-4 lg:p-8 max-h-[400px] rounded-2xl border border-netural-300'>
                          <div className='flex gap-2'>
                                <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                            </div>
                            <div className='flex gap-2 items-center'>
                              <h5 className='text-[16px] lg:text-[20px] font-bold'>{item.title}</h5>
                              <FaCheckCircle className='w-4 lg:w-5' size={20} color='#01AB31' />
                            </div>
                            <p className='text-[14px] lg:text-[16px]'>{item.para}</p>
                      </div>
                    </SwiperSlide>
                  ))}
                </Swiper>
              </div>
              
            </div>
        </div>
    </div>
  )
}

export default SecFive
