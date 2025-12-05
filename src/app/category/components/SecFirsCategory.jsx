/* eslint-disable jsx-a11y/alt-text */
"use client"
import React from 'react'
import Image from 'next/image'
import PriceRange from '@/app/components/PriceRange'
import { FaStar } from "react-icons/fa";
import { useState, useEffect } from 'react'
import Link from 'next/link';
import products  from '../ProductsData/products.json' // data come product json
const SecFirsCategory = () => {

    const [open, setOpen] = useState("");
    const [isOnPrice, setIsOnPrice] = useState(true);
    const [isOnColor, setIsOnColor] = useState(true);
    const [isOnSize, setIsOnSize] = useState(true);
    const [isOnStyle, setIsOnStyle] = useState(true);

    // mobile filter
    const [showMobileFilter, setShowMobileFilter] = useState(false);
    useEffect(() => {
        document.body.classList.toggle("no-scroll", showMobileFilter);
    }, [showMobileFilter]);


    const toggle = (item) => {
      setOpen(open === item ? "" : item);
    };

    const [activ, setActiv] = useState(2);
    const [color, setColor]= useState(4);
    
    // product pages 
    const ITEMS_PER_PAGE = 9;
    const totalPages = Math.ceil(products.length / ITEMS_PER_PAGE);

    const [currentPage, setCurrentPage] = useState(1);

    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    const endIndex = startIndex + ITEMS_PER_PAGE;

    const currentProducts = products.slice(startIndex, endIndex);

    const goToNext = () => {
        if (currentPage < totalPages) setCurrentPage((prev) => prev + 1);
    };

    const goToPrev = () => {
        if (currentPage > 1) setCurrentPage((prev) => prev - 1);
    };

    useEffect(() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    }, [currentPage]);

    // handel pagination
    const renderPagination = () => {
        const pages = [];

        if (totalPages <= 5) {
            for (let i = 1; i <= totalPages; i++) pages.push(i);
        } else {
            pages.push(1);

            if (currentPage > 4) pages.push("...");

            for (
            let i = Math.max(2, currentPage - 1);
            i <= Math.min(totalPages - 1, currentPage + 1);
            i++
            ) {
            pages.push(i);
            }

            if (currentPage < totalPages - 3) pages.push("...");

            pages.push(totalPages);
        }
        //  for mobile
        
        const mobilePages = [
            currentPage,
            currentPage + 1 <= totalPages ? currentPage + 1 : currentPage - 1
        ].filter(Boolean);

        return (
            <>
            <div className="flex gap-2 md:hidden">
                {mobilePages.map(page => (
                <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded-md text-sm ${
                    currentPage === page ? "bg-black text-white" : ""
                    }`}
                >
                    {page}
                </button>
                ))}
            </div>

            <div className="hidden md:flex gap-2">
                {pages.map((page, index) =>
                page === "..." ? (
                    <span key={`dots-${index}`} className="px-2 text-xl">...</span>
                ) : (
                    <button
                    key={page}
                    onClick={() => setCurrentPage(page)}
                    className={`px-4 py-2 border rounded-md text-xl ${
                        currentPage === page ? "bg-black text-white" : ""
                    }`}
                    >
                    {page}
                    </button>
                )
                )}
            </div>
            </>
        );
    };


  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex flex-col items-center pb-40'>
            <div className='w-[90%] py-5'>

                {/* breadcrumb bar */}
                <div className='flex items-center gap-4 text-[12px] md:text-[16px] '>
                    <Link href="/"><span className='flex gap-2 items-center text-neutral-500 hover:text-black cursor-pointer'><p>Home</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span></Link>

                    <span className='flex gap-2 items-center text-neutral-500 hover:text-black cursor-pointer'><p>Causal</p><Image className="w-1.5 md:w-2" src="/icons/VectorArrowR.png" alt="image" width={8} height={8}></Image></span>
                </div>

                {/*section */}
                <div className='flex flex-col-reverse lg:flex-row gap-10  mt-5'>
                    {showMobileFilter && (
                        <div 
                            onClick={() => setShowMobileFilter(false)}
                            className="fixed inset-0 bg-black/40 z-40 lg:hidden"
                        />
                    )}

                    {/* filters */}
                    <div className={`fixed lg:static bottom-0 left-0 w-full md:w-[50%] xl:w-[40%] 2xl:w-[25%] bg-white z-50 transition-transform duration-300 ${showMobileFilter ? "translate-y-0" : "translate-y-full"} lg:translate-y-0 rounded-t-3xl lg:rounded-2xl px-5 border border-neutral-300 h-[85vh] lg:h-fit`}
>
                        {/* filter */}
                        <div>
                            <div className='flex justify-between py-5 border-b border-neutral-300'>
                                <h3 className='text-[24px]'>Filters</h3>
                                <Image className='cursor-pointer hidden lg:block' src="/icons/VectorMenu.svg" alt='image' width={20} height={20}></Image>
                                <button  className="lg:hidden text-[18px] font-semibold" onClick={() => setShowMobileFilter(false)}>
                                    ✕
                                </button>
                            </div>

                            <div className='flex flex-col gap-2 text-[18px] text-[#00000099]/60 py-5 border-b border-neutral-300'>
                                {/* /t-shirt */}
                                <div>
                                    <p onClick={() => toggle("tshirts")} className="flex items-center justify-between cursor-pointer">
                                        <span>T-shirts</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${open === "tshirts" ? "rotate-90" : "rotate-0"}`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={` px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${open === "tshirts" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                        <li>Round Neck</li>
                                        <li>V Neck</li>
                                        <li>Oversized</li>
                                        <li>Graphic</li>
                                    </ul>
                                </div>

                                {/* shorts */}
                                <div>
                                    <p onClick={() => toggle("shorts")} className="flex items-center justify-between cursor-pointer">
                                    <span>Shorts</span>
                                    <Image
                                        className={`w-1.5 md:w-2 transition-transform duration-300 ${
                                        open === "shorts" ? "rotate-90" : "rotate-0"
                                        }`}
                                        src="/icons/VectorArrowR.png"
                                        alt="image"
                                        width={8}
                                        height={8}
                                    />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                                    open === "shorts" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                    }`}>
                                    <li>Cargo</li>
                                    <li>Denim</li>
                                    <li>Sport</li>
                                    </ul>
                                </div>

                                {/* Shirts */}
                                <div>
                                    <p onClick={() => toggle("shirts")} className="flex items-center justify-between cursor-pointer">
                                        <span>Shirts</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${ open === "shirts" ? "rotate-90" : "rotate-0" }`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${ open === "shirts" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0" }`}>
                                        <li>Formal</li>
                                        <li>Casual</li>
                                        <li>Checked</li>
                                    </ul>
                                </div>

                                {/* Hoodie */}
                                <div>
                                    <p onClick={() => toggle("hoodie")} className="flex items-center justify-between cursor-pointer">
                                        <span>Hoodie</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${ open === "hoodie" ? "rotate-90" : "rotate-0"}`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${
                                        open === "hoodie" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"
                                        }`}>
                                        <li>Zipper</li>
                                        <li>Pullover</li>
                                        <li>Winter Wear</li>
                                    </ul>
                                </div>

                                {/* Jeans */}
                                <div>
                                    <p onClick={() => toggle("jeans")} className="flex items-center justify-between cursor-pointer">
                                        <span>Jeans</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${ open === "jeans" ? "rotate-90" : "rotate-0"}`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${open === "jeans" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                        <li>Skinny</li>
                                        <li>Slim</li>
                                        <li>Regular</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        {/* priceing.? */}
                        <div className="py-5 border-b border-neutral-300">
                            <p onClick={()=>setIsOnPrice(!isOnPrice)} className='cursor-pointer flex justify-between text-[18px] font-bold items-center'>
                                <span>Price</span>
                                <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${isOnPrice ? "rotate-90" : "rotate-0"}`}
                                    src="/icons/VectorArrowR.png"
                                    alt="image"
                                    width={8}
                                    height={8}
                                /></p>
                            <div className={`flex justify-center transition-all duration-300 ${isOnPrice  ? "max-h-40 opacity-100 pb-10 mt-4 " : "max-h-0 opacity-0"}`}>
                             <PriceRange/>
                            </div>
                        </div>
                        {/* color */}
                        <div className='py-5 border-b border-neutral-300'>
                            <p onClick={()=>setIsOnColor(!isOnColor)} className='cursor-pointer flex justify-between text-[18px] font-bold items-center'>
                                <span>Color</span>
                                <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${isOnColor ? "rotate-90" : "rotate-0"}`}
                                    src="/icons/VectorArrowR.png"
                                    alt="image"
                                    width={8}
                                    height={8}
                                /></p>
                            <div className={`flex justify-center transition-all duration-300 ${isOnColor? "max-h-40 opacity-100 mt-4 " : "max-h-0 opacity-0"}`}>
                             <div className='grid grid-cols-5 gap-3 place-items-center'>
                                <div onClick={()=>setColor(0)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#00C12B] rounded-full'><Image className={`${color===0 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(1)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#F50606] rounded-full'><Image className={`${color===1 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(2)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#F5DD06] rounded-full'><Image className={`${color===2 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(3)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#F57906] rounded-full'><Image className={`${color===3 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(4)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#06CAF5] rounded-full'><Image className={`${color===4 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(5)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#063AF5] rounded-full'><Image className={`${color===5 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(6)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#7D06F5] rounded-full'><Image className={`${color===6 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(7)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#F506A4] rounded-full'><Image className={`${color===7 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(8)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#3b2e2e] rounded-full'><Image className={`${color===8 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                                <div onClick={()=>setColor(9)} className='cursor-pointer content-center w-12 h-12 border border-neutral-200 bg-[#000000] rounded-full'><Image className={`${color===9 ? "block" : "hidden"} mx-auto w-3 h-3 xl:w-5 xl:h-5`} src="/images/VectorCorrect.svg" alt='image' width={18} height={18}></Image></div>
                            </div>
                            </div>
                            
                        </div>
                        {/* sizes */}
                        <div className=' py-5 border-b border-neutral-300'>
                            <p onClick={()=>setIsOnSize(!isOnSize)} className='cursor-pointer flex justify-between text-[18px] font-bold items-center'>
                                <span>Sizes</span>
                                <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${isOnSize ? "rotate-90" : "rotate-0"}`}
                                    src="/icons/VectorArrowR.png"
                                    alt="image"
                                    width={8}
                                    height={8}
                                /></p>
                            <div className={`transition-all duration-300 ${isOnSize? "max-h-96 opacity-100 mt-4 " : "max-h-0 opacity-0"} flex flex-wrap gap-2 text-[16px] lg:text-[14px]`}>
                                {["XX-Small","X-Small","Small","Medium","Large","X-Large","XX-Large","3X-Large", "4X-Large"].map((item,index)=>(
                                    <p onClick={()=>setActiv(index)} className={`${activ === index ? "bg-black text-white" : "bg-[#F0F0F0] text-[#00000094]"} cursor-pointer px-5 py-3 bg-[#F0F0F0] rounded-full`} key={index}>{item}</p>
                                ))}
                            </div>
                        </div>
                        {/* drees style */}
                        <div className='py-5 border-b border-neutral-300'>
                            <p onClick={()=>setIsOnStyle(!isOnStyle)} className='cursor-pointer flex justify-between text-[18px] font-bold items-center'>
                                <span>Dress Style</span>
                                <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${isOnStyle ? "rotate-90" : "rotate-0"}`}
                                    src="/icons/VectorArrowR.png"
                                    alt="image"
                                    width={8}
                                    height={8}
                                /></p>
                            <div className={`flex flex-col gap-2 text-[18px] text-[#00000099]/60 transition-all duration-300 ${isOnStyle ? "max-h-80 opacity-100 mt-4 " : "max-h-0 opacity-0"}`}>
                                {/* Casual */}
                                <div>
                                    <p onClick={() => toggle("casual")} className="flex items-center justify-between cursor-pointer">
                                        <span>Casual</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${open === "casual" ? "rotate-90" : "rotate-0"}`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={` px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${open === "casual" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                        <li>Round Neck</li>
                                        <li>V Neck</li>
                                        <li>Oversized</li>
                                        <li>Graphic</li>
                                    </ul>
                                </div>

                                {/* formal.. */}
                                <div>
                                    <p onClick={() => toggle("formal")} className="flex items-center justify-between cursor-pointer">
                                    <span>Formal</span>
                                    <Image
                                        className={`w-1.5 md:w-2 transition-transform duration-300 ${
                                        open === "formal" ? "rotate-90" : "rotate-0"
                                        }`}
                                        src="/icons/VectorArrowR.png"
                                        alt="image"
                                        width={8}
                                        height={8}
                                    />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${open === "formal" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                    <li>Cargo</li>
                                    <li>Denim</li>
                                    <li>Sport</li>
                                    </ul>
                                </div>

                                {/* Party */}
                                <div>
                                    <p onClick={() => toggle("party")} className="flex items-center justify-between cursor-pointer">
                                        <span>Party</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${ open === "party" ? "rotate-90" : "rotate-0" }`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${ open === "party" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0" }`}>
                                        <li>Formal</li>
                                        <li>Casual</li>
                                        <li>Checked</li>
                                    </ul>
                                </div>

                                {/* Gym*/}
                                <div>
                                    <p onClick={() => toggle("gym")} className="flex items-center justify-between cursor-pointer">
                                        <span>Gym</span>
                                        <Image className={`w-1.5 md:w-2 transition-transform duration-300 ${ open === "gym" ? "rotate-90" : "rotate-0"}`}
                                            src="/icons/VectorArrowR.png"
                                            alt="image"
                                            width={8}
                                            height={8}
                                        />
                                    </p>

                                    <ul className={`px-3 text-black flex flex-col gap-2 overflow-hidden transition-all duration-300 ${ open === "gym" ? "max-h-40 opacity-100 mt-2" : "max-h-0 opacity-0"}`}>
                                        <li>Zipper</li>
                                        <li>Pullover</li>
                                        <li>Winter Wear</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                        <div className='py-5 flex justify-center'>
                            <a href='#' className='w-full py-4 bg-black text-white text-center text-[18px] font-bold rounded-full'>Apply Filter</a>                            
                        </div>        
                    </div>

                    {/* produts. */}
                    <div className='flex flex-col gap-7 w-full'>

                        <div className='flex items-center gap-3 lg:justify-between'>
                    
                            <h4 className='flex gap-2 text-[24px] md:text-[32px] font-bold'>Casual</h4> 
                                  
                            <div className='text-[14px] md:text-[16px] flex gap-3 items-center'>
                                <p >Showing 1-10 of 100 Products</p>    
                                <p className='hidden lg:inline'>Sort by: <span className='font-bold'>Most Popular</span></p>
                            </div>  
                            <Image onClick={() => setShowMobileFilter(true)} className='ml-auto lg:hidden' src="/icons/VectorMenu.svg" alt='iamge' width={20} height={20}></Image>

                        </div> 

                        <div className='border-b border-neutral-200 pb-10'>
                             <div className='grid grid-cols-2 xl:grid-cols-3 gap-4 md:gap-14'>
                                {currentProducts.map((pr)=>(
                                    <div key={pr.id} className='flex flex-col gap-1 md:gap-3'>
                                        <div className='w-full overflow-hidden rounded-md md:rounded-3xl'><Image className='w-full object-cover cursor-pointer transition-all hover:scale-110 duration-500 ease-in-out' src={pr.image} alt="image" width={360} height={298}></Image></div>
                                        <p className='text-[12px] md:text-[18px] xl:text-[20px] font-bold mt-3'>{pr.title}</p>
                                        <div className='flex items-center gap-2'>
                                            <FaStar className='w-3 md:w-4 xl:w-5' size={20} color='#ffb100'/>
                                            <FaStar className='w-3 md:w-4 xl:w-5' size={20} color='#ffb100'/>
                                            <FaStar className='w-3 md:w-4 xl:w-5' size={20} color='#ffb100'/>
                                            <FaStar className='w-3 md:w-4 xl:w-5' size={20} color='#ffb100'/>
                                            <FaStar className='w-3 md:w-4 xl:w-5' size={20} color='#ffb100'/>
                                            <span className='text-[12px] md:text-[14px] xl:text-[16px]'>{pr.rating}</span>
                                        </div>
                                        <div className='flex flex-wrap gap-3'>
                                            <p className='text-[16px] md:text-[20px] xl:text-[28px] font-bold'>{pr.price}</p>
                                            <del className={`${pr.id == 1 || pr.id == 3 || pr.id == 6 || pr.id == 8 ? 'hidden' : ''} text-[16px] md:text-[18px] xl:text-[26px] text-neutral-500 font-bold`}>{pr.oldPrice}</del>
                                            <p className={`${pr.id == 1 || pr.id == 3 || pr.id == 6 || pr.id == 8 ? 'hidden' : ''}  text-[12px] md:text-[14px] content-center rounded-full py-1 px-4 md:px-6 xl:py-2 w-fit bg-[#fd74743f] text-[#FF3333]`}>{pr.discount}</p>
                                        </div>
                                    </div>
                                ))} 
                            </div>   
                        </div>  

                        <div className="flex justify-between gap-3 mt-10">
                            <button
                                onClick={goToPrev}
                                disabled={currentPage === 1}
                                className="px-4 py-2 flex gap-2 items-center border rounded-md disabled:opacity-40"
                            >   
                                <span className="">←</span>
                                <span className='hidden md:inline'>Previous</span>

                            </button>

                            <div className='flex gap-5'>
                                {renderPagination()}                            
                            </div>        

                            <button
                                onClick={goToNext}
                                disabled={currentPage === totalPages}
                                className="p-2 px-4 py-2 flex gap-2 items-center border rounded-md disabled:opacity-40"
                            >
                                <span className='hidden md:inline'>Next</span>
                                <span className="">→</span>
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default SecFirsCategory
