import React from 'react'
import { FaTiktok } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import Link from 'next/link';
function About() {
  return (
    <>
      <div className='container'>
        <div className='flex flex-wrap'>
          <div className='w-full px-4 mb-10 lg:w-1/2'>
            <h4 className=' font-bold uppercase text-primary text-lg mb-3' >Tentang kami</h4>
            <h2 className='font-bold text-dark text-3xl mb-5 max-w-md lg:text-4xl' >Ayo Belajar Backend dengan laravel </h2>
            <p className='font-medium text-base text-secondary max-w-xl lg:text-lg'>
              Belajar backend dengan Laravel membuka peluang karir yang menjanjikan di dunia teknologi. Keterampilan dalam mengelola database, API, dan server menjadi kunci sukses dalam pengembangan aplikasi web modern yang handal
            </p>
          </div>
          <div className='w-full px-4 lg:w-1/2'>
            <h3 className='font-semibold text-dark text-2xl mb-4 lg:mt-10'> lest Join Us</h3>
            <p className='font-medium text-base text-slate-400 max-w-xl lg:text-lg'>
              Jangan takut untuk memulai perjalanan sebagai developer backend, setiap expert pernah menjadi pemula. Langkah pertama mungkin terasa berat, tapi dengan konsistensi dan semangat belajar, kamu pasti bisa menguasai Laravel!
            </p>
            <div className=' flex items-center mt-5'>
              <Link href='#' className='w-9 h-9 mr-3 p-1 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary' >
                <FaTiktok />
              </Link>
              <Link href='#' className='w-9  h-9 p-1  mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary' >
                <FaLinkedin />
              </Link>
              <Link href='#' className='w-9  h-9 p-1 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary' >
                <FaFacebook />
              </Link>
              <Link href='#' className='w-9 h-9 p-1 mr-3 rounded-full flex justify-center items-center border border-slate-300 hover:border-primary hover:text-primary' >
                <FaWhatsapp />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default About
