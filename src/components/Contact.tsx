import React from 'react'

function Contact() {
  return (
    <>
      <div className='container'>
        <div className='w-full px-4'>
          <div className='max-w-xl mx-auto text-center mb-16'>
            <h4 className='font-semibold text-lg text-primary mb-2'>Contact</h4>
            <h2 className='font-bold text-dark text-3xl mb-4'>Hubungi Saya</h2>
            <p className='font-medium text-md text-secondary'>
              Jika Anda memiliki pertanyaan atau ingin berdiskusi lebih lanjut, jangan ragu untuk menghubungi saya. Saya siap membantu!
            </p>

          </div>
        </div>
        <div className='w-full lg:w-2/3 lg:mx-auto '>
          <form>
            <div className='w-full px-4 mb-8'>
              <label className='text-base font-bold text-primary'>Nama</label>
              <input type="text" className='w-full bg-slate-300 text-dark p-3 rounded-md  focus:outline-none' />
            </div>
            <div className='w-full px-4 mb-8'>
              <label className='text-base font-bold text-primary'>E-mail</label>
              <input type="text" className='w-full bg-slate-300 text-dark p-3 rounded-md  focus:outline-none' />
            </div>
            <div className='w-full px-4 mb-8'>
              <label className='text-base font-bold text-primary'>Nama</label>
              <textarea className=' h-32 w-full bg-slate-300 text-dark p-3 rounded-md  focus:outline-none' />
            </div>
            <button className='text-base font-bold text-white bg-primary px-8 py-4 rounded-full w-full hover:opacity-80 hover:shadow-lg transition duration-500'>
              kirim
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default Contact
