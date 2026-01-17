import React from 'react'
import dancing from '@/images/illustration-hero.svg'
import musicIcon from '@/images/icon-music.svg'
import Image from 'next/image'

function OrderSummary() {
  return (
    <div className='flex flex-col bg-white w-[450px] h-[697px] rounded-[20px] items-center '>
        <Image
        src={dancing}
        width={450}
        height={220}
        alt="Picture of the author"
        className='rounded-t-[20px]'
        />
        <div className='flex flex-col mt-12 mb-[43px] mx-12 items-center '>
            <h1 className='text-[#1F2E55] font-black text-[28px] leading-[1.35]'>Order Summary</h1>
            <h1 className='text-black text-center mt-4'>You can now listen to millions of songs, audiobooks, and podcasts on any device anywhere you like!</h1>
            <div className='flex w-full justify-between mt-4 bg-[#F7F9FF] rounded-[11px] items-center px-[24px] py-[23px]'>
              <div className='flex'>
                  <Image
                  src={musicIcon}
                  width={48}
                  height={48}
                  alt="Picture of the author"
                  className='rounded-t-[20px]'
                  />
                  <div className='flex flex-col ml-4'>
                      <h1 className='text-black font-black text-[16px] leading-[1.65]'>Annual Plan</h1>
                      <h1 className='text-black'>$59.99/year</h1>
              </div>
            </div>
                <h1 className='text-[#382AE1] font-bold text-[16px] leading-[1.65] hover:text-[#766CF1] cursor-pointer '>Change</h1>
            </div>
            <div className='flex bg-[#382AE1] w-full rounded-[11px] justify-center items-center mt-8 py-3 shadow-2xl hover:bg-[#766CF1] transition-colors duration-200 cursor-pointer'>
              <h1 className='text-white leading-[1.65] font-black text-[16px] '>Proceed to Payment</h1>
            </div>
            <h1 className='text-[#717FA6] font-black mt-8 hover:text-[#1F2E55] cursor-pointer '>Cancel Order</h1>
        </div>
            
        
    </div>
  )
}

export default OrderSummary