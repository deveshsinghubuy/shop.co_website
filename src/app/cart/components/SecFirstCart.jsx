/* eslint-disable react/jsx-key */
"use client"
import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { useState } from 'react'
import { FaArrowRight } from 'react-icons/fa'

const SecFirstCart = () => {

    const [promo, setPromo] = useState("")
    const [dataCart, setDataCart] = useState( [
        {id: 1, img: "/products/product1.png", name: "Gradient Graphic T-shirt", price: "$ 99.00", qty: 1, size: "M", color: "Black"},
        {id: 2, img: "/products/product2.png", name: "Gradient Graphic T-shirt", price: "$ 99.00", qty: 1, size: "M", color: "Black"},
        {id: 3, img: "/products/product3.png", name: "Gradient Graphic T-shirt", price: "$ 99.00", qty: 1, size: "M", color: "Black"},
    ])

     const remove = (id) => {
        setDataCart(prev => prev.filter(item => item.id !== id));
    }
    const increase = (id) => {
        setDataCart(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, qty: Math.min(item.qty + 1, 5) }
                : item
            )
        );
    };

    const decrease = (id) => {
        setDataCart(prev =>
            prev.map(item =>
            item.id === id
                ? { ...item, qty: Math.max(item.qty - 1, 1) }
                : item
            )
        );
        const product = dataCart.find(item => item.id === Number(id))
        const qty = product.qty
        if(qty<2){
            alert("Are you sure you want to remove this item?")
            remove(id)
        }

    };

   

  return (
   <div className='flex justify-center'>
        <div className=" max-w-[2050px] w-full flex justify-center">
            <div className='w-full px-4 xl:px-0 xl:w-[90%] flex flex-col gap-4 pt-5 pb-40'>
                {/* breadcrumb bar */}
                <div className='flex items-center gap-4 text-[12px] md:text-[16px] '>
                    <Link href="/"><span className='flex gap-2 items-center text-neutral-500 hover:text-black cursor-pointer'><p>Home</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span></Link>
                    <span className='flex gap-2 items-center text-neutral-500 hover:text-black cursor-pointer'><p>Causal</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span>
                </div>

                <div className=''>
                    <h2 className='text-[32px] lg:text-[40px] font-bold font-integral'>Your cart</h2>
                    <div className='flex flex-col lg:flex-row lg:gap-6 2xl:gap-10 mt-5 lg:mt-10'>
                        {/* items */}
                        <div className='w-full h-fit flex flex-col gap-4 lg:gap-10 border border-netural-300 p-3 lg:p-4 2xl:p-10 rounded-2xl'>
                            {dataCart.map((item) => (
                                <div key={item.id} className='flex gap-4 border-b border-netural-300 pb-4 lg:pb-10 last:border-0'>
                                    <div className='rounded-md overflow-hidden'><Image src={item.img} alt="image" width={144} height={144}></Image></div>
                                    <div className='flex flex-col justify-between'>
                                        <div className='flex flex-col'>
                                            <h3 className='text-[14px] md:text-[18px] lg:text-[20px]'>{item.name}</h3>
                                            <p className='text-[12px] md:text-[14px] lg:text-[16px]'>Size: <span className='text-neutral-500'>{item.size}</span></p>
                                            <p className='text-[12px] md:text-[14px] lg:text-[16px]'>Color: <span className='text-neutral-500'>{item.color}</span></p>     
                                        </div>
                                        <p className='text-[18px] md:text-[20px] lg:text-[24px] font-bold'>{item.price}</p>
                                    </div>
                                    <div className='ml-auto flex flex-col justify-between'>
                                        <Image onClick={()=>remove(item.id)} className='ml-auto cursor-pointer' src={"/icons/VectorDelete.svg"} alt="image" width={20} height={20}></Image>
                                        <div className=' flex items-center gap-4 2xl:gap-6 md:justify-between bg-[#F0F0F0] rounded-full p-3 xl:px-6 xl:py-4'>
                                            <button onClick={()=>decrease(item.id)} className='w-3 md:w-5 font-bold select-none'><Image src="/icons/minus.svg" alt='image' width={20} height={20}></Image></button>
                
                                            <span className='font-medium w-6 text-center'>{item.qty}</span>
                                                
                                            <button onClick={()=>increase(item.id)} className=' w-3 md:w-5 font-bold select-none'><Image src="/icons/plus.svg" alt='image' width={20} height={20}></Image></button>
                                        </div>
                                    </div>
                                </div>
                            ))}
                            {dataCart.length === 0 && (
                            <div className='text-center text-[24px] font-bold'>
                                <h2>No Such Cart item</h2>
                            </div>    
                        )}
                        </div>
                        {/* price */}
                        {dataCart.length > 0 && (<div className='w-full lg:w-[50%] flex flex-col gap-4 2xl:gap-10 h-fit border border-netural-300 p-4 2xl:p-10 rounded-2xl'>
                            <h3 className='text-[24px] font-bold'>Order Summary</h3>
                            <div className='flex flex-col gap-1 text-black/70 lg:gap-3 2xl:text-[20px]'>
                                <p className='flex justify-between items-center'><span>Subtotal</span><span className='font-semibold text-black'>$565</span></p>
                                <p className='flex justify-between items-center'><span>Discount (-20%)</span><span className='font-semibold text-red-600'>-$113</span></p>
                                <p className='flex justify-between items-center'><span>Delivery Fee</span><span className='font-semibold text-black'>$15</span></p>
                                <p className='flex justify-between items-center border-t pt-4'><span>Total</span><span className='font-semibold text-black'>$467</span></p>
                            </div>
                            <div className='flex gap-4 text-[14px] 2xl:text-[16px]'>
                                <div className='bg-[#F0F0F0]  rounded-full w-full flex gap-2 py-2 px-3  2xl:p-4'>
                                    <Image src={"/icons/VectorPriceTag.svg"} alt="image" width={20} height={20}></Image>
                                    <input className='bg-[#F0F0F0] outline-none w-full' value={promo} onChange={(e) => setPromo(e.target.value)} type='text' placeholder='Add promo code'></input>
                                </div>
                                <div onClick={()=>setPromo("")} className='w-auto text-white rounded-full text-center bg-black px-10 lg:px-7 2xl:px-10 content-center'>
                                    <a href='#'>Apply</a>
                                </div>
                            </div>
                            <div className='bg-black py-4 rounded-full cursor-pointer flex gap-4 justify-center'>
                                <a className='text-white'>Go to Checkout</a>
                                <FaArrowRight fill='#ffffff' size={20}/>
                            </div>
                        </div>)}
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecFirstCart
