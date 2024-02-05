import { BadgeIcon, BookOpen, GraduationCap } from 'lucide-react'

import Image from 'next/image'
import React from 'react'

const SideNav = () => {
    const menu = [
        {
            id:1,
            name:'All courses',
            icon:BookOpen,
        
        },
        {
            id:2,
            name:'Membership',
            icon:BadgeIcon
        },
        {
            id:3,
            name:'be Instructor',
            icon:GraduationCap
        }

    ]
  return (
    <div className='p-5 bg-white shadow-sm border h-screen'>
        <Image src='/logo.png' alt='logo' width={80} height={80} />
        <hr className='mt-7'></hr>
        {/* Menu List */}
        <div className='mt-8'>
            {menu.map((item)=>(
                <div  className='group flex gap-3 mt-1 p-3 text-[18px] 
                items-center text-gray-500 cursor-pointer hover:bg-primary hover:text-white rounded-md transition-all 
                ease-in-out duration-200' key={item.id}>
                    <item.icon className='group-hover:animate-spin'/>
                    <h2>{item.name}</h2>
                </div>
                ))}
        </div>
    </div> 
  )
}

export default SideNav