"use client"
import React from 'react'
import { useState } from "react";
import Image from 'next/image'
import {  FaAngleDown , FaStar, FaCheckCircle} from 'react-icons/fa';

const SecSecPrd = () => {
    const [active, setActive] = useState(1);
    const [isOpen, setIsOpen] = useState(false);
    
    const data =[
    {id:1, title:"Samantha D.", posted:"Posted on August 14, 2023", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:2, title:"Alex M.",  posted:"Posted on August 15, 2023", para:"“Finding clothes that align with my personal style used to be a challenge until I discovered Shop.co. The range of options they offer is truly remarkable, catering to a variety of tastes and occasions.”"},
    {id:3, title:"Ethan R.", posted:"Posted on August 16, 2023", para:"“As someone who's always on the lookout for unique fashion pieces, I'm thrilled to have stumbled upon Shop.co. The selection of clothes is not only diverse but also on-point with the latest trends.”"},
    {id:4, title:"Olivia P.", posted:"Posted on August 17, 2023", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:5, title:"Liam K.", posted:"Posted on August 18, 2023", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
    {id:6, title:"Ava H.", posted:"Posted on August 19, 2023", para:"“I'm blown away by the quality and style of the clothes I received from Shop.co. From casual wear to elegant dresses, every piece I've bought has exceeded my expectations.”"},
  ]  

    const questions = [
    {   
        id:1,
        question:"What material is the One Life Graphic T-shirt made of?",
        answer:"The t-shirt is made from premium quality cotton fabric that is soft, breathable, and comfortable for all-day wear."
    },
    { 
        id:2,
        question:"Does the graphic print fade after washing?",
        answer:"No. The high-quality graphic print is fade-resistant and maintains its fresh look even after multiple washes when cared for properly."
    },
    { 
        id:3,
        question:"What type of fit does this t-shirt have?",
        answer:"It features a modern regular fit that offers a perfect balance between style and comfort."
    },
    { 
        id:4,
        question:"Is this t-shirt suitable for summer?",
        answer:"Yes, the lightweight and breathable fabric makes it ideal for warm weather and everyday use."
    },
    { 
        id:5,
        question:"How should I care for this t-shirt?",
        answer:"Wash in cold water, Use mild detergent, Do not bleach, Dry in shade, Iron on low heat"
    },
    { 
        id:6,
        question:"Is it suitable for casual and daily wear?",
        answer:"Absolutely. It’s perfect for casual outings, travel, college wear, and everyday street-style looks."
    },
    { 
        id:7,
        question:"Who is this t-shirt best suited for?",
        answer:"It is ideal for individuals who value comfort, modern style, and confident self-expression."
    },
     { 
        id:8,
        question:"How should I care for this t-shirt?",
        answer:"Wash in cold water, Use mild detergent, Do not bleach, Dry in shade, Iron on low heat"
    },
    { 
        id:9,
        question:"Is it suitable for casual and daily wear?",
        answer:"Absolutely. It’s perfect for casual outings, travel, college wear, and everyday street-style looks."
    },
    { 
        id:10,
        question:"Who is this t-shirt best suited for?",
        answer:"It is ideal for individuals who value comfort, modern style, and confident self-expression."
    },
    
  ] 
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2059px] w-full flex justify-center py-10'>
            <div className='w-full flex flex-col gap-10 items-center px-3 md:px-6 xl:px-10 2xl:px-36'>
                {/* head tabs */}
                <div className="w-full relative flex justify-between text-center text-[14px] md:text-[20px] font-medium items-center gap-2 md:gap-8 border-b border-gray-200">

                    <h3 onClick={() => setActive(0)} className={`w-full cursor-pointer pb-2 transition-colors ${active === 0 ? "text-black" : "text-gray-500"}`}>
                        Product Details
                    </h3>

                    <h3 onClick={() => setActive(1)} className={`w-full cursor-pointer pb-2 transition-colors ${active === 1 ? "text-black" : "text-gray-500"}`}>
                        Rating & Reviews
                    </h3>

                    <h3 onClick={() => setActive(2)} className={`w-full cursor-pointer pb-2 transition-colors ${active === 2 ? "text-black" : "text-gray-500"}`}>
                        FAQs
                    </h3>
                    {/* slide bar */}
                    <span
                        className="absolute bottom-0 h-[3px] bg-black transition-all duration-300"
                        style={{
                        width:"34%",
                        left: active === 0 ? "0px" : active === 1 ? "33%" : "68%"
                        }}
                    ></span>
                </div>

                {active === 1 && (<div className='w-full flex flex-col gap-10 items-center'>
                    
                    <div className='w-full flex items-center justify-between'>
                        <div className='flex items-center gap-2'>
                            <h4 className='text-[16px] md:text-[24px]'>All Reviews</h4>
                            <span className='text-[14px] md:text-[16px]'>(451)</span>
                        </div>
                        <div className='flex gap-4 items-center'>
                            <button className='bg-[#F0F0F0] rounded-full p-2 md:p-3'><Image className='w-4 md:w-6' src="/icons/VectorMenu.svg" alt="image" width={24} height={24}/></button>
                            <button className='hidden  bg-[#F0F0F0] rounded-full px-5 py-3 md:flex items-center gap-2'>
                                <p>Latest</p>
                                <FaAngleDown  size={20}/>
                            </button>
                            <button className='bg-[#F0F0F0] text-[12px] md:text-[16px] rounded-full p-2 md:px-5 md:py-3'>Write a Review</button>
                        </div>
                    </div>

                    <div className=''>
                        
                        <div className=' grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                            {data.map((item) => (
                            <div key={item.id} className='flex flex-col gap-3 p-4 lg:p-8 max-h-[400px] rounded-2xl border border-netural-300'>
                                <div className='flex justify-between items-center'>
                                    <div className='flex gap-2'>
                                        <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                        <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                        <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                        <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                        <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                    </div>
                                    <Image src="/icons/threeDots.svg" alt="image" width={24} height={24}></Image>
                                </div>
                                <div className='flex gap-2 items-center'>
                                <h5 className='text-[16px] lg:text-[20px] font-bold'>{item.title}</h5>
                                <FaCheckCircle className='w-4 lg:w-5' size={20} color='#01AB31' />
                                </div>
                                <p className='text-[14px] lg:text-[16px]'>{item.para}</p>
                                <p className='text-[18px]'>Posted on August 14, 2023</p>
                            </div>  
                            ))}
                        </div>
                        {/* hide reviews */}
                        <div className={`overflow-hidden transition-all duration-500 ease-in-out ${isOpen ? 'pt-7 md:pt-14 max-h-[2000px] opacity-100 translate-y-0' : 'max-h-0 opacity-0 -translate-y-2'}`}>
                            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-10'>
                                {data.map((item) => (
                                <div key={item.id} className='flex flex-col gap-3 p-4 lg:p-8 max-h-[400px] rounded-2xl border border-netural-300'>
                                    <div className='flex justify-between items-center'>
                                        <div className='flex gap-2'>
                                            <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                            <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                            <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                            <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                            <FaStar className='w-4 lg:w-5' size={20} color='#ffb100' />
                                        </div>
                                        <Image src="/icons/threeDots.svg" alt="image" width={24} height={24}></Image>
                                    </div>
                                    <div className='flex gap-2 items-center'>
                                    <h5 className='text-[16px] lg:text-[20px] font-bold'>{item.title}</h5>
                                    <FaCheckCircle className='w-4 lg:w-5' size={20} color='#01AB31' />
                                    </div>
                                    <p className='text-[14px] lg:text-[16px]'>{item.para}</p>
                                    <p className='text-[18px]'>Posted on August 14, 2023</p>
                                </div>  
                                ))}
                            </div>
                        </div>
                    </div>        
                    <button onClick={()=>setIsOpen(!isOpen)} className='text-[14px] md:text-[18px] font-medium   py-3 px-4 md:px-10 md:py-5 rounded-full border border-neutral-200'>{isOpen ? 'Load Less Reviews' : 'Load More Reviews'}</button>
                </div>)}

                {active === 0 && (<div className='w-full'>
                    <div className='flex flex-col gap-4 md:gap-5 xl:gap-7'>
                        <h2 className='text-[14px] md:text-[16px] xl:text-[20px] font-semibold border-b-2 border-neutral-300 pb-2 '>Features & Benifits</h2>
                        <ul className='space-y-2 text-[14px] md:text-[20px]'>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Premium cotton fabric ensures breathability and long-lasting comfort</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Soft-touch material keeps you relaxed from morning to night</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Modern graphic print adds a bold, trend-forward statement</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Lightweight and durable for everyday wear</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Perfect for casual outings, travel, and urban lifestyle</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Fade-resistant print maintains fresh look after multiple washes</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Tailored fit that complements all body types</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Designed for confident individuals who believe in living life to the fullest</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Eco-conscious manufacturing with sustainable fabric sourcing</li>
                            <li className="relative pl-6 before:content-['•'] before:absolute before:left-0 before:-top-2 before:text-black before:text-[24px]">Ideal for pairing with jeans, joggers, or layered streetwear looks</li>
                        </ul>
                    </div>
                </div>)}

                {active=== 2 &&(
                <div className='w-full flex flex-col gap-4 md:gap-5 xl:gap-7'>
                    <h2 className='text-[#1b0e31] text-[14px] md:text-[16px] xl:text-[22px] font-semibold border-b-2 border-neutral-300 pb-2 '>Customer Questions & Answers</h2>
                    <ul className='flex flex-col gap-6'>
                        {questions.map((qes)=>(
                        <li key={qes.id} className='flex flex-col gap-2 text-[14px] md:text-[18px] border-b border-neutral-200 pb-4 last:border-0'>
                            <span>
                                <strong>Question : </strong>
                                <strong>{qes.question}</strong>
                            </span>
                            <span className='leading-5'><strong>Answer : </strong>{qes.answer}</span>
                        </li>
                        ))}
                    </ul>
                </div>
                )}
            </div>
        </div>
    </div>
  )
}

export default SecSecPrd
