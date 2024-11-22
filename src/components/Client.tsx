import React from 'react'
import { part1, part2, part3, part4, part5, part6 } from '@/assets/partner'
import Link from 'next/link'
import Image from 'next/image'
function Client() {
  return (
    <>
      <div className='container' >
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16' >
            <h4 className='font-semibold text-lg text-primary mb-2'>Technology & Support</h4>
            <h2 className='font-bold text-white text-3xl mb-4'>Partner teknologi</h2>
            <p className='font-medium text-md text-secondary'>
              Kami bekerja sama dengan berbagai mitra teknologi terkemuka untuk memastikan solusi terbaik dan inovatif dalam setiap proyek
            </p>
          </div>
        </div>
        <div className='w-full px-4'>
          <div className=' flex flex-wrap items-center justify-center'>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100] opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part1} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100]  opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part2} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100]  opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part3} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100]  opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part4} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100]  opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part5} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
            <Link href='#' className='max-w-[110px] mx-4 py-4 grayscale-[100]  opacity-70 transition-all duration-500 hover:grayscale-0 hover:opacity-100 lg:mx-6 xl:mx-8 block'>
              <div className='w-full h-full relative'>
                <Image src={part6} className='w-full h-full object-contain' alt='client1' />
              </div>
            </Link>
          </div>
        </div>
      </div>
    </>
  )
}

export default Client
