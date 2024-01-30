import React from 'react'

import Image from 'next/image'

const WelcomeBanner = () => {
  return (
    <div className=' flex gap-5 items-center bg-white  rounded-xl p-5 mt-5'>
        <Image src='/logo.png' alt='algo' width={100} height={100} />
        <div>
            <h2 className='font-bold text-[29px]' >Welcome to <span className='text-indigo-800'>Biocelab Group</span> Cursos científicos</h2>
            <h2 className='text-gray-500'>Explore, learn and build All Reall Lif Projects</h2>
        </div>
    </div>
  )
}

export default WelcomeBanner