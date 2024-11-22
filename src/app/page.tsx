"use client"
import React, { useEffect, useState } from 'react'
import Hero from '@/components/Hero'
import About from '@/components/About'
import Portofolio from '@/components/Portofolio'
import Client from '@/components/Client'
import Blog from '@/components/Blog'
import Link from 'next/link'
import Contact from '@/components/Contact'
import Footer from '@/components/Footer'
import Logo from '@/assets/svgs/webtech-logo.svg'
import Image from 'next/image'
function page() {
  const [menu, setMenu] = useState(false)
  const [header, setHeader] = useState(false)

  const toggleMenu = () => {
    setMenu(!menu)
  }
  const scrollHeader = () => {
    if (window.scrollY >= 50) {
      setHeader(true)
    } else {
      setHeader(false)
    
    }
  }
  useEffect(() => {
    window.addEventListener('scroll', scrollHeader)
    return () => {
      window.addEventListener('scroll', scrollHeader)
    }
  }, [])
  return (
    <>
      <header className={`${header ? 'fixed bg-white bg-opacity-80 buram' : 'absolute bg-transparent'} top-0 left-0 w-full  flex items-center z-10  `}>

        <div className='container'>
          <div className='flex items-center justify-between h-20 relative'>
            <div className='px-4'>
              <Link href='#' >
                <Image className='block p-4 h-auto w-20' src={Logo} alt='logowebtec'/>              
              </Link>
            </div>
            <div className=' flex items-center justify-center p-4'>
              <button className='block absolute right-4 lg:hidden' onClick={toggleMenu}>
                <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? 'rotate-45 translate-y-1' : '-translate-y-0.5'} `}></span>
                <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm my-0.5 ${menu ? 'opacity-0' : 'opacity-100'}`} ></span>
                <span className={`bg-dark block transition-all duration-300 ease-in-out h-0.5 w-6 rounded-sm ${menu ? '-rotate-45 -translate-y-1' : 'translate-y-0.5'}`}></span>
              </button>
              <nav className={`${!menu ? 'hidden' : 'block'} absolute py-4 bg-white shadow-lg rounded-lg  max-w-[250px] w-full right-4 top-full lg:top-0 lg:block lg:static lg:bg-transparent lg:max-w-full lg:rounded-none lg:shadow-none`}>
                <ul className='block lg:flex'>
                  <li className='group'>
                    <Link href="#" className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary' >Home</Link>
                  </li>
                  <li className='group'>
                    <Link href="#about" className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary' >About</Link>
                  </li>
                  <li className='group'>
                    <Link href="#portofolio" className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary' >Portofolio</Link>
                  </li>
                  <li className='group'>
                    <Link href="#contact" className=' text-base text-dark py-2 mx-8 flex group-hover:text-primary' >Contact</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </header>
      {/* hero section */}
      <section className='pt-48 pb-32' id='home' >
        <Hero />
      </section>
      {/* end hero section */}
      {/* about section */}
      <section className='pt-48 pb-32' id='about'>
        <About />
      </section>
      {/* end about section */}
      {/* portofolio section */}
      <section className='pt-48 pb-32 bg-slate-100' id='portofolio'>
        <Portofolio />
      </section>
      {/* end portofolio section */}
      {/* portofolio section */}
      <section className='pt-48 pb-32 bg-slate-800' id='client'>
        <Client />
      </section>
      {/* end portofolio section */}
      {/* portofolio section */}
      <section className='pt-48 pb-32 '>
        <Blog />
      </section>
      {/* end portofolio section */}
      {/* kontak section */}
      <section className='pt-48 pb-32 ' id='contact'>
        <Contact />
      </section>
      {/* end kontak section */}
      {/* kontak Footer */}
      <section className='pt-48 pb-32 bg-dark' >
        <Footer />
      </section>
      {/* end kontak Footer */}
    </>
  )
}

export default page