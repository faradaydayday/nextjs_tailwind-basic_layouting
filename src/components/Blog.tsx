import React from 'react'
import { blg1, blg2, blg3 } from '@/assets/images'
import Link from 'next/link'
import Image from 'next/image'
function Blog() {
  return (
    <>
      <div className='container'>
        <div className='w-full px-4'>
          <div className=' max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2' >Blog</h4>
            <h2 className=' font-bold text-dark text-3xl mb-4 '>Blog terkini</h2>
            <p></p>
          </div>
        </div>
        <div className='flex flex-wrap'>
          {/* card1 */}
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <Image src={blg1} alt='tips belajar frontend' className='shadow-md ' sizes='100vw' />
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                  Tips Belajar Frontend
                </h3>
                <p className='font-medium text-base mb-4 text-secondary'>
                  Pelajari cara menguasai dasar-dasar frontend development dengan mudah, mulai dari HTML hingga framework modern.
                </p>
                <Link href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* card 3 */}
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <Image src={blg3} alt='tips belajar frontend' className='shadow-md ' sizes='100vw' />
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                  Menggunakan Framework
                </h3>
                <p className='font-medium text-base mb-4 text-secondary'>
                  Panduan menggunakan framework populer seperti React dan Vue untuk membangun aplikasi frontend yang dinamis.
                </p>
                <Link href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
          {/* card2 */}
          <div className='w-full px-4 lg:w-1/2 xl:w-1/3'>
            <div className='bg-white rounded-xl shadow-lg overflow-hidden mb-10'>
              <Image src={blg2} alt='tips belajar frontend' className='shadow-md ' sizes='100vw' />
              <div className='py-8 px-6'>
                <h3 className='block mb-3 font-semibold text-xl text-dark hover:text-primary truncate'>
                  Optimalisasi Performance
                </h3>
                <p className='font-medium text-base mb-4 text-secondary'>
                  Tingkatkan performa aplikasi frontend Anda dengan teknik optimasi seperti lazy loading dan minifikasi.
                </p>
                <Link href='#' className='font-medium text-sm text-white bg-primary py-2 px-4 rounded-md hover:opacity-80'>
                  Selengkapnya
                </Link>
              </div>
            </div>
          </div>
        </div>

      </div>
    </>
  )
}

export default Blog
