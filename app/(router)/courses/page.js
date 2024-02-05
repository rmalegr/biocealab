"use client"
import React from 'react'
import WelcomeBanner from './_components/WecomeBanner'
import CourseList from './_components/CourseList'

const Courses = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-4 p-5'>
      {/* left container */}
      <div className='col-span-3 '>
        {/* banner */}
        <WelcomeBanner />

        {/* Courses List Section */}
        <CourseList />
        

      </div>
      {/* rigth container */}
      <div className=''>
        Right Section
      </div>
    </div>
  )
}

export default Courses