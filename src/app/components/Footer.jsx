"use client"
import React from 'react'
import Image from 'next/image'
import { useState } from 'react'
const Footer = () => {
   const [open, setOpen] = useState(false) 
   const [email,setEmail] = useState('') 
   const [mess, setmess] = useState('')
   const isValidEmail = (email) => {
    return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
    };

   const handelemail =()=>{
        if(!email){
            setOpen(true)
            setmess('Please enter your email')
              
        }else if(!isValidEmail(email)){
            setOpen(true)
            setmess('Please enter a valid email')
        }else{
            try{
                fetch('/api/subscribe',{
                    method:"POST",
                    headers:{
                        "Content-Type":"application/json"
                    },
                    body: JSON.stringify({email})
                });

            setOpen(true)
            setmess('Subscribed!')
            setEmail('')
            }catch(error){
                setmess('Error saving email')
            }
        }

        setTimeout(()=>setOpen(false),2000)  
   } 
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center'>
            <div className='flex flex-col items-center w-full relative'>
                {/* absoulte div */}
                <div className='absolute -top-32 lg:-top-28 bg-black py-6 lg:px-10 2xl:py-10 2xl:px-16 w-[90%] lg:w-[86%] flex flex-col gap-y-4 lg:flex-row justify-between items-center rounded-2xl'>
                    
                    <h2 className='font-integral text-[28px] lg:text-[38px] 2xl:text-[48px] font-bold text-white w-[90%] lg:w-[55%]'>STAY UPTO DATE ABOUT OUR LATEST OFFERS</h2>
                    {/* //mail */}
                    <div className='w-[90%] lg:w-[35%] 2xl:w-[30%]'>
                        <div className='relative bg-white rounded-full py-2 lg:py-4 px-6 flex gap-3 items-center'>
                            <Image src="/images/Vector4.png" alt="image" width={20} height={20}></Image>
                            <input  className='outline-none w-full bg-white text-[14px] lg:text-[16px]' value={email} onChange={(e)=>setEmail(e.target.value)} type="email" placeholder='Enter your email address' name='email' />
                            {/* error or success message */}
                            <p className={`${open ? 'block' : 'hidden'} absolute top-36 left-40 animate-opcy bg-red-700 text-white rounded-lg px-4 py-2`}>{mess}</p>
                        </div>
                        <button onClick={handelemail} className='w-full text-[14px] lg:text-[16px] text-[#000000] bg-white py-2 lg:py-4 px-6 rounded-full mt-3'>Subscribe to Newsletter</button>
                    </div>
                </div>
                 {/* footer bar    */}
                <div className='w-full bg-[#F0F0F0] px-4 pt-40 pb-10 md:px-10 xl:px-32 lg:pt-36 xl:pt-28 2xl:pt-36'>
                    <div className='flex flex-col lg:flex-row gap-5 lg:gap-10'>
                         {/* logo contentn */}
                         <div className='flex flex-col lg:w-[30%] gap-4 lg:gap-7'>
                            
                            <h3 className='text-[33px] font-bold font-integral'>SHOP.CO</h3>
                            <p className='lg:w-72 2xl:w-96 lg:pr-8 2xl:pr-14 text-[14px] lg:text-[16px]'>We have clothes that suits your style and which you’re proud to wear. From women to men.</p>
                            <div className='flex items-center gap-4'>
                                <a href="#"><Image className='cursor-pointer' src="/images/twitter.png" alt="image" width={30} height={30}></Image></a>
                                <a href="#"><Image className='cursor-pointer' src="/images/facebook.png" alt="image" width={30} height={30}></Image></a>
                                <a href="#"><Image className='cursor-pointer' src="/images/insta.png" alt="image" width={30} height={30}></Image></a>
                                <a href="#"><Image className='cursor-pointer' src="/images/git.png" alt="image" width={30} height={30}></Image></a>
                            </div>

                        </div>
                        {/* footer content */}
                        <div className='grid grid-cols-2 lg:grid-cols-4 w-full gap-5 xl:gap-10 pb-10 border-b border-netural-300'>
                            
                            <div className='flex flex-col gap-4 lg:gap-7 pt-4'>
                                <h3 className='text-[18px] font-medium'>COMPANY</h3>
                                <div className='flex flex-col text-[16px] font-normal gap-2 lg:gap-4'>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>About</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Features</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Works</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Career</a>                         
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 lg:gap-7 pt-4'>
                                <h3 className='text-[18px] font-medium'>HELP</h3>
                                <div className='flex flex-col text-[16px] font-normal gap-2 lg:gap-4'>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Customer Support </a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Delivery Details</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Terms & Conditions</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Privacy Policy</a>                         
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 lg:gap-7 pt-4'>
                                <h3 className='text-[18px] font-medium'>FAQ</h3>
                                <div className='flex flex-col text-[16px] font-normal gap-2 lg:gap-4'>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Account </a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Manage Deliveries</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Orders</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Payments</a>                         
                                </div>
                            </div>

                            <div className='flex flex-col gap-4 lg:gap-7 pt-4'>
                                <h3 className='text-[18px] font-medium'>RESOURCES</h3>
                                <div className='flex flex-col text-[16px] font-normal gap-2 lg:gap-4'>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Free eBooks</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Development Tutorial</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>How to - Blog</a>
                                    <a href='#' className='w-fit cursor-pointer text-[#5c5b5b] text-[14px] lg:text-[16px] hover:text-[#000000]'>Youtube Playlist</a>                                                         </div>
                                </div>
                            </div>
                        </div>
                    

                        <div className='md:flex justify-between items-center py-4'>
                            <p className='text-center lg:text-start'>© 2000-2021, All rights reserved</p>    
                            <div className='mt-4 lg:m-0 flex items-center'>
                                <Image src={"/images/visa.png"} alt="image" width={80} height={50}></Image>
                                <Image src={"/images/credit.png"} alt="image" width={80} height={50}></Image>
                                <Image src={"/images/paypal.png"} alt="image" width={80} height={50}></Image>
                                <Image src={"/images/applePay.png"} alt="image" width={80} height={50}></Image>
                                <Image src={"/images/googlePay.png"} alt="image" width={80} height={50}></Image>
                            </div>
                        </div> 
                </div>       
            </div>
        </div>
    </div>
  )
}

export default Footer
