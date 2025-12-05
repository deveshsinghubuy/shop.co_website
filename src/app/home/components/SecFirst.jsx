import React from 'react'
import Image from 'next/image'
const SecFirst = ({ onButtonClick }) => {
  return (
    
    <div className='flex justify-center pt-10 bg-[#F2F0F1]'>
        <div className='max-w-[2050px] w-full flex justify-center'>
            <div className='w-full lg:px-8 2xl:lg:px-0 2xl:w-[90%]'>
                {/* hero sec */}
                <div className=' lg:flex xl:gap-36'>
                    {/* content */}
                    <div className='w-full flex-1'>
                        
                        <div className='px-2 md:px-5 lg:p-0 flex flex-col items-center md:items-start gap-4 md:gap-6 xl:gap-10'>
                            <h2 className='text-[36px] md:text-[54px] 2xl:text-[64px] font-bold font-integral leading-10 md:leading-[55px] xl:leading-[72px]'>FIND CLOTHES THAT MATCHES YOUR STYLE</h2>
                            <p className='text-[16px] w-full md:w-4/5 xl:w-full font-normal'>Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.</p>
                            <a href='#section2' className='text-center w-full md:w-fit rounded-full px-16 py-3 lg:py-5 bg-[#000000] text-[#FFFFFF]'>Shop Now</a>
                        </div>

                        <div className='px-5 mt-5 md:mt-10 flex flex-wrap gap-y-3 justify-between'>
                            <div className='text-center xl:text-start px-1 lg:p-0'>
                                <h4 className='text-[24px] md:text-[34px] lg:text-[24px] xl:text-[30px] 2xl:text-[48px] font-bold'>200+</h4>
                                <p className='text-[12px] md:text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal'>International Brands</p>
                            </div>
                            <div className='text-center xl:text-start px-1 lg:p-0'>
                                <h4 className='text-[24px] md:text-[34px] lg:text-[24px] xl:text-[30px] 2xl:text-[48px] font-bold'>2,000+</h4>
                                <p className='text-[12px] md:text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal'>High-Quality Products</p>
                            </div>
                            <div className='text-center xl:text-start mx-auto md:mx-0 px-3 lg:p-0'>
                                <h4 className='text-[24px] md:text-[34px] lg:text-[24px] xl:text-[30px] 2xl:text-[48px] font-bold'>30,000+</h4>
                                <p className='text-[12px] md:text-[18px] lg:text-[14px] xl:text-[16px] 2xl:text-[18px] font-normal'>Happy Customers</p>
                            </div>
                        </div>
                    </div>
                    {/* hero images */}
                    <div className='flex-1 relative'>
                        <Image className='absolute top-40 lg:top-64' src="/images/Vector.png" alt="image" width={50} height={30}></Image>
                        <Image onClick={onButtonClick} className='absolute top-10 lg:top-20 right-0' src="/images/Vector2.png" alt="image" width={80} height={80}></Image>
                        <Image src="/images/heroImage.png" alt="image" width={660} height={660}></Image>
                    </div>
                </div>

                {/* brands bar */}
                <div className='flex flex-wrap gap-10 lg:gap-14 justify-center xl:justify-between items-center bg-black py-10 xl:py-16 px-3 lg:px-20 xl:px-32'>
                    <Image className='w-28 lg:w-44' src="/images/brand1.png" alt="image" width={180} height={50}></Image>
                    <Image className='w-16 lg:w-28' src="/images/brand2.png" alt="image" width={110} height={50}></Image>
                    <Image className='w-28 lg:w-44' src="/images/brand3.png" alt="image" width={180} height={50}></Image>
                    <Image className='w-28 lg:w-44' src="/images/brand4.png" alt="image" width={180} height={50}></Image>
                    <Image className='w-28 lg:w-44' src="/images/brand5.png" alt="image" width={180} height={50}></Image>
                </div>
            </div>
            
        </div>
    </div>
  )
}

export default SecFirst
