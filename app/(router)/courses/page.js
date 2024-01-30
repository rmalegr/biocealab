import React from 'react'
import WelcomeBanner from './_components/WecomeBanner'

const Courses = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-3'>
      {/* left container */}
      <div className='col-span-2  '>
        {/* banner */}
        <WelcomeBanner />
        

      </div>
      {/* rigth container */}
      <div className=''>
        Right Section
      </div>
    </div>
  )
}

export default Courses