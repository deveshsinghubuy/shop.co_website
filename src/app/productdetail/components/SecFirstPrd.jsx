/* eslint-disable react/jsx-key */
/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Image from 'next/image'
import { FaStar } from "react-icons/fa";
import { useState, useEffect  } from 'react'
import Link from 'next/link';


const SecFirstPrd = () => {
    const [index, setIndex] = useState(0);
    const [slideWidth, setSlideWidth] = useState(300);

    useEffect(() => {
    const updateWidth = () => {
      if (window.innerWidth < 340) {
        setSlideWidth(300);
      }else if (window.innerWidth < 428 ){
        setSlideWidth(400);
      }
      else if (window.innerWidth < 668 ){
        setSlideWidth(400);
      }else if (window.innerWidth < 1124 ){
        setSlideWidth(350);
      }else if (window.innerWidth < 1580 ){
        setSlideWidth(440);
      }
      else {
        setSlideWidth(510);
      }
    };

    updateWidth(); // run on mount
    window.addEventListener("resize", updateWidth);

    return () => window.removeEventListener("resize", updateWidth);
  }, []);

    const images = [
    "/products/heroPr.png",
    "/products/imagePr1.png",
    "/products/imagePr2.png",
    ];

    const [color, setSelectColor] = useState(0);
    const [activ, setActiv] = useState(2);

    const [qty, setQty] = useState(1);

    const increase = () => {
        if (qty < 5) setQty(qty + 1);
    };

    const decrease = () => {
        if (qty > 1) setQty(qty - 1);
    };

  return (
     <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex-col items-center'>
            <div className='flex items-center gap-4 text-[12px] md:text-[16px] py-4 px-3 md:px-6 xl:px-8 2xl:px-32'>
                <Link href="/"><span className='flex gap-2 items-center'><p>Home</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span></Link>
                <span className='flex gap-2 items-center'><p>Shop</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span>
                <span className='flex gap-2 items-center'><p>Men</p><Image  className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span>
                <span className='flex gap-2 items-center'><p>T-shirts</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span>
            </div>
            
            <div className='flex flex-col lg:flex-row justify-center py-3 md:py-8 xl:py-10 px-3 md:px-6 xl:px-8 2xl:px-32'>
                {/* images */}
                <div className='flex-1 flex flex-col-reverse md:flex-row gap-5 md:gap-10 lg:gap-5 xl:gap-10'>
                    <div className='flex w-[30%] lg:md:w-[20%] 2xl:max-w-40  justify-center md:justify-start md:flex-col gap-3 md:gap-5'>
                        {images.map((img, i) => (
                        <Image key={i}
                               src={img} alt=""
                               width={152}
                               height={167}
                               className={`w-full p-1 rounded-lg transition-all ${index === i ? "ring-1 ring-[#3d3c39]" : ""} cursor-pointer`}
                               onClick={() => setIndex(i)}
                        />))}
                    </div>

                    <div className=' w-full h-fit lg:w-[70%] lg:h-96  xl:w-[450px] xl:h-[500px] 2xl:w-[510px] 2xl:h-[580px] rounded-lg bg-[#f0eeed] overflow-hidden'>
                        <div className="flex transition-transform duration-700 ease-[cubic-bezier(.4,0,.2,1)]"
                        style={{ transform: `translateX(-${index * slideWidth}px)`}}
                        >
                            {images.map((img, i) => (
                                <div key={i} className="min-w-[100%] h-80 custom-w-size2  md:min-w-[510px] md:h-[580px]  lg:min-w-[100%] lg:h-96 xl:h-[500px]  2xl:md:min-w-[510px] 2xl:h-[580px] relative">
                                    <Image src={img} fill alt="" className="object-cover" />
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
                {/* content */}
                <div className='flex-1 mt-5 lg:mt-0'>
                    <div className='flex flex-col gap-2 md:gap-4 border-b border-neutral-300 pb-4'>
                        <h2 className='text-[18px] md:text-[28px] 2xl:text-[48px] font-integral font-bold'>One Life Graphic T-shirt</h2>
                        <div className='flex gap-2'>
                            <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                            <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                            <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                            <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                            <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                            <span className='text-[14px] xl:text-[16px]'>4.5/5</span>
                        </div>
                        <div className='flex gap-3'>
                            <p className='text-[18px] xl:text-[28px] font-bold'>$260</p>
                            <del className={`text-[18px] xl:text-[26px] text-neutral-500 font-bold`}>$300</del>
                            <p className={`text-[12px] md:text-[14px] content-center rounded-full py-1 px-4 md:px-6 xl:py-2 w-fit bg-[#fd74743f] text-[#FF3333]`}>-40%</p>
                        </div>
                        <p className='text-[14px] xl:text-[16px] pr-7'>This graphic t-shirt which is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.</p>
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 border-b border-neutral-300 py-2 xl:py-4'>
                        <p className='text-[14px] xl:text-[16px]'>Select Colors</p>
                        <div className='flex items-center gap-3'>
                            <div onClick={()=>setSelectColor(0)} className='bg-[#4F4631] w-8 h-8 xl:w-12 xl:h-12 rounded-full flex items-center cursor-pointer justify-center'><Image className={`${color===0 ? "block" : "hidden"} w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>    
                            <div onClick={()=>setSelectColor(1)} className='bg-[#314F4A] w-8 h-8 xl:w-12 xl:h-12 rounded-full flex items-center cursor-pointer justify-center'><Image className={`${color===1 ? "block" : "hidden"} w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>    
                            <div onClick={()=>setSelectColor(2)} className='bg-[#31344F] w-8 h-8 xl:w-12 xl:h-12 rounded-full flex items-center cursor-pointer justify-center'><Image className={`${color===2 ? "block" : "hidden"} w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>    
                        </div>        
                    </div>
                    <div className='flex flex-col gap-2 md:gap-4 border-b border-neutral-300 py-2 xl:py-4'>
                        <p className='text-[14px] xl:text-[16px]'>Select Size</p>
                        <div className='flex flex-wrap items-center gap-3'>
                            {["Small", "Medium","Large", "X-Large" ].map((size, i) => (
                                <div onClick={()=>setActiv(i)} key={i} className={`${activ===i ? "bg-black text-white" : "bg-[#F0F0F0] text-[#00000094]"} bg-[#F0F0F0] focus:bg-black focus:text-white rounded-full py-3 px-5 xl:px-9 xl:py-5 cursor-pointer`}>
                                    <h5 className='text-[12px] md:text-[14px] xl:text-[16px]'>{size}</h5>
                                </div>    
                            ))}
                         </div>       
                    </div>
                    <div className='flex flex-wrap md:flex-nowrap items-center gap-5 py-4'>
                        <div className=' md:w-[40%] text-[16px] xl:text-[20px] flex items-center gap-6 md:justify-between bg-[#F0F0F0] rounded-full p-3 md:px-6 md:py-4'>
                            <button onClick={decrease} className='w-3 md:w-5 font-bold select-none'><Image src="/icons/minus.svg" alt='image' width={20} height={20}></Image></button>

                            <span className='font-medium w-6 text-center'>{qty}</span>

                            <button onClick={increase} className=' w-3 md:w-5 font-bold select-none'><Image src="/icons/plus.svg" alt='image' width={20} height={20}></Image></button>
                        </div>

                        <button className='w-full bg-black text-white px-12 py-4 rounded-full text-center font-medium'>
                            Add to Cart
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecFirstPrd
