import React from 'react'
import { gbr1, gbr2, gbr3, gbr4 } from '@/assets/project'
import Image from 'next/image'

function Portofolio() {
  return (
    <>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto mb-16 text-center'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Portofolio</h4>
            <h2 className='font-bold text-dark text-3xl mb-4'>History Project</h2>
            <p className='font-medium text-md text-secondary'>
              Berikut adalah beberapa proyek yang telah saya kerjakan dalam pengembangan aplikasi dan web.
            </p>
          </div>
          <div className='w-full px-4 flex flex-wrap justify-center xl:w-10/12 xl:mx-auto'>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md p-2 shadow-md overflow-hidden'>
                <Image className='shadow-md' src={gbr1} alt='Game Store App' sizes='100vw' />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Game Store App</h3>
              <p className='font-medium text-base text-secondary'>
                Aplikasi ini memungkinkan pengguna untuk menjelajahi dan membeli berbagai game digital dengan mudah.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md p-2 shadow-md overflow-hidden'>
                <Image className='shadow-md' src={gbr2} alt='Game Store App' sizes='100vw' />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Game Store App</h3>
              <p className='font-medium text-base text-secondary'>
                Proyek ini dirancang dengan fokus pada UI/UX yang responsif untuk pengalaman pengguna yang optimal.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md p-2 shadow-md overflow-hidden'>
                <Image className='shadow-md' src={gbr3} alt='Sukuna Jujutsu Web' sizes='100vw' />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Sukuna Jujutsu Web</h3>
              <p className='font-medium text-base text-secondary'>
                Sebuah website interaktif yang menampilkan karakter dan cerita dari dunia Jujutsu Kaisen.
              </p>
            </div>
            <div className='mb-12 p-4 md:w-1/2'>
              <div className='rounded-md p-2 shadow-md overflow-hidden'>
                <Image className='shadow-md' src={gbr4} alt='Valorant Agent' sizes='100vw' />
              </div>
              <h3 className='font-semibold text-xl text-dark mt-5 mb-3'>Valorant Agent</h3>
              <p className='font-medium text-base text-secondary'>
                Platform untuk mengeksplorasi karakter dalam game Valorant, lengkap dengan deskripsi dan kemampuan mereka.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}

export default Portofolio
