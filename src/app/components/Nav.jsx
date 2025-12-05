/* eslint-disable react-hooks/set-state-in-effect */
"use client"
import React, { useEffect, useState } from 'react'
import { FaSearch, FaAngleDown} from "react-icons/fa";
import Image from 'next/image';
import Link from 'next/link';

const Nav = ({ open, setOpen }) => {

  const [menuOn, setMenuOn] = useState(false)
  const [signIn, setSignIn] = useState(null)

 
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex flex-col items-center justify-center z-50'>
           {/* topSIgnUpbar */}
           {open && (<div className='w-full bg-black flex justify-center'>
                <div className='bg-black w-[90%] text-center px-2 lg:px-0 py-3 flex justify-center lg:justify-between'>
                    <span className='hidden lg:inline'></span>
                    <h5 className='text-[12px] lg:text-[14px] font-normal text-white'>Sign up and get 20% off to your first order. <span className='underline cursor-pointer hover:text-[#ffca4d]'>Sign Up Now</span></h5>
                    <Image onClick={()=>setOpen(!open)} className='hidden lg:block cursor-pointer' src="/images/Vector3.svg" alt='image' width={20} height={20}></Image>
                </div>
            </div>)}
             {/* navigaion bar */}
            <div className='relative flex items-center w-full 2xl:w-[90%] justify-between px-3 md:px-4 lg:px-8 2xl:px-0 xl:justify-between  py-3 lg:py-4 2xl:py-5'>
                
                <div className='flex items-center gap-2 md:gap-5'>
                    <Image onClick={()=>setMenuOn(!menuOn)} className='w-7 block lg:hidden' src="/images/menu.svg" alt="cart" width={30} height={30}></Image>
                    <Link href='/'><h1 className='font-integral text-[24px] lg:text-[32px] 2xl:text-[38px] font-bold mb-1 lg:m-0'>SHOP.CO</h1></Link>
                </div>

                <ul className={`${menuOn ? 'block' : 'hidden'} w-40 lg:w-auto border-t lg:border-0 rounded-b-lg lg:rounded-none absolute top-14 left-0 bg-white p-4 lg:static lg:flex items-center gap-7 lg:gap-12 xl:gap-7 text-[14px] lg:text-[18px] xl:text-[16px] 2xl:text-[18px] font-normal mt-2`}>
                    <a href='#shop' className='flex items-center gap-2'>
                        <li className='pb-2 border-b border-neutral-300  lg:p-0 w-full  lg:border-0'>Shop</li>
                        <FaAngleDown size={20} className="text-[#00000094] font-normal hidden lg:block"/>
                    </a>
                    <a href='#sale'><li className='py-2 border-b border-neutral-300  lg:p-0  lg:border-0'>On Sale</li></a>
                    <a href='/category'><li className='py-2 border-b border-neutral-300  lg:p-0  lg:border-0'>New Category</li></a>
                    <a href='/productdetail/1'><li className='py-2 border-b border-neutral-300  lg:p-0  lg:border-0'>Products</li></a>
                </ul>
                {/* search bar */}
                <div className='xl:w-[40%] hidden xl:flex itams-center gap-3 border border-netural-300 bg-[#F0F0F0] rounded-full lg:py-2 2xl:py-3 px-6'>
                    <FaSearch size={25} className="text-[#00000066]" />
                    <input className='bg-[#F0F0F0] w-full outline-none text-[16px] 2xl:text-[18px]' type="text" placeholder='Search for products...' />
                </div>
                {/* icons */}
                <div className='relative flex items-center gap-4'>
                    <FaSearch size={30} className="w-5 lg:w-7 block xl:hidden text-[#000000] xl:text-[#00000066]" />
                    <Link href='/cart'><Image className='w-6 lg:w-8' src="/images/cart.svg" alt="cart" width={30} height={30}></Image></Link>
                    <div className='relative group after:content-[""] after:w-14 after:h-6 after:top-8 after:-left-2 after:absolute after:bg-transparent '>
                        <Image className='w-6 lg:w-8 cursor-pointer' src="/images/account.svg" alt="cart" width={30} height={30}></Image>
                        <ul className='w-40 border absolute -left-20 mt-2 bg-white p-4 rounded-lg flex flex-col gap-2 opacity-0 pointer-events-none group-hover:pointer-events-auto group-hover:opacity-100 translate-y-0 group-hover:translate-y-2 transition-all duration-300'>
                            <li onClick={()=>setSignIn(true)} className={`${signIn ? 'hidden' : 'block'} flex justify-between items-center cursor-pointer p-2 bg-white hover:bg-neutral-100`}>
                                <h5>Sign-in</h5>
                                <Image src="/icons/signIn.png" alt='image' width={15} height={10}></Image>
                            </li>
                            <li onClick={()=>setSignIn(false)} className={`${signIn ? 'block' : 'hidden'} flex justify-between items-center cursor-pointer p-2 bg-white hover:bg-neutral-100`}>
                                <h5>Logout</h5>
                                <Image src="/icons/logout.png" alt='image' width={15} height={10}></Image>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
            {/* SignIn / LogOut pop */}
            <div className={`${signIn === true ? 'animate-opcy2' : 'hidden'} absolute w-[20%]  bg-white rounded-lg border h-[30%] top-28 left-50  flex flex-col gap-5 justify-center items-center`}>
                <h2 className='text-[24px] px-5  text-center font-bold'>SignIn Successfully Complete </h2>
                <Image src="/icons/check.png" alt='image' width={30} height={30}></Image>
            </div>
            <div className={`${signIn === false ? 'animate-opcy2' : 'hidden'} absolute w-[20%]  bg-white rounded-lg border h-[30%] top-28 left-50  flex flex-col gap-5 justify-center items-center`}>
                <h2 className='text-[24px] px-5 text-center font-bold'>Logout Successfully Complete </h2>
                <Image src="/icons/check.png" alt='image' width={30} height={30}></Image>
            </div>
        </div>
    </div>
  )
}
export default Nav
