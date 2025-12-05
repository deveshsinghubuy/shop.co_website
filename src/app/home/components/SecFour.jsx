import React from 'react'
import Image from 'next/image'
const SecFour = () => {
  return (
    <div className='flex justify-center'>
        <div className='max-w-[2050px] w-full flex justify-center p-4 lg:p-16 xl:p-20'>
            
            <div className='rounded-lg lg:rounded-[40px] bg-[#F0F0F0] p-5 lg:p-16 xl:p-24 flex flex-col items-center gap-7 lg:gap-20'>
                <h2 className='text-[28px] lg:text-[48px] font-bold font-integral text-center'>BROWSE BY dress STYLE</h2>

                <div className='flex flex-col gap-10'>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <Image src="/images/Frame61.png" alt="image" width={507} height={298}></Image>
                        <Image src="/images/Frame62.png" alt="image" width={784} height={298}></Image>
                    </div>
                    <div className='flex flex-col md:flex-row gap-10'>
                        <Image src="/images/Frame63.png" alt="image" width={784} height={298}></Image>
                        <Image src="/images/Frame64.png" alt="image" width={507} height={298}></Image>
                    </div>
                </div>

            </div>
            
        </div>
    </div>
  )
}

export default SecFour
