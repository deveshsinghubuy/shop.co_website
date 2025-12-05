"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
import { FaStar } from "react-icons/fa";

const SecThirdPrd = () => {

  const products =[
    {id:1, image:"/products/product9.png", title:"T-SHIRT WITH TAPE DETAILS", rating:"4.5/5", price:"$120", oldPrice:"$120", discount:"-20%"},
    {id:2, image:"/products/product10.png", title:"T-SHIRT WITH TAPE DETAILS", rating:"4.5/5", price:"$120", oldPrice:"$120", discount:"-20%"},
    {id:3, image:"/products/product11.png", title:"T-SHIRT WITH TAPE DETAILS", rating:"4.5/5", price:"$120", oldPrice:"$120", discount:"-20%"},
    {id:4, image:"/products/product12.png", title:"T-SHIRT WITH TAPE DETAILS", rating:"4.5/5", price:"$120", oldPrice:"$120", discount:"-20%"},
  ]

  return (
    <div id="section2" className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center py-10 border-b border-netural-300 pb-40 2xl:pb-48'>
            
            <div className='flex flex-col items-center gap-7 md:gap-12 xl:gap-14 '>
                <h2 className='text-[24px] md:text-[30px] xl:text-[48px] font-bold font-integral'>You might also like</h2>
                <div className='px-10 pb-8 md:p-0 flex overflow-x-scroll custom-w-size w-full sm:max-w-full md:overflow-visible md:px-10  md:grid grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-5 xl:gap-10'>
                    {products.map((pr)=>(
                        <div key={pr.id} className='flex flex-col gap-3'>
                            <div className='w-[200px] md:w-full max-h-[200px] md:max-h-[330px] lg:max-h-[220px] xl:max-h-[310px] 2xl:max-h-[365px] overflow-hidden rounded-3xl'><Image className='cursor-pointer transition-all hover:scale-110 duration-500 ease-in-out' src={pr.image} alt="image" width={360} height={298}></Image></div>
                            <p className='text-[18px] xl:text-[20px] font-bold mt-3'>{pr.title}</p>
                            <div className='flex gap-2'>
                                <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                                <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                                <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                                <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                                <FaStar className='w-4 xl:w-5' size={20} color='#ffb100'/>
                                <span className='text-[14px] xl:text-[16px]'>{pr.rating}</span>
                            </div>
                            <div className='flex gap-3'>
                                <p className='text-[20px] xl:text-[28px] font-bold'>{pr.price}</p>
                                <del className={`${pr.id == 1 || pr.id == 3 || pr.id == 6 || pr.id == 8 ? 'hidden' : ''} text-[18px] xl:text-[26px] text-neutral-500 font-bold`}>{pr.oldPrice}</del>
                                <p className={`${pr.id == 1 || pr.id == 3 || pr.id == 6 || pr.id == 8 ? 'hidden' : ''} text-[14px] content-center rounded-full py-1 px-4 md:px-6 xl:py-2 w-fit bg-[#fd74743f] text-[#FF3333]`}>{pr.discount}</p>
                            </div>
                        </div>
                    ))} 
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecThirdPrd
