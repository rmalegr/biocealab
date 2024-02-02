
import GlobalApi from '@/app/_utils/GlobalApi'
import React, { useEffect } from 'react'

const CourseList = () => {
    useEffect(() => {
        getAllCourses();
    },[])
    //Fethc Course Lisst
    const getAllCourses =() => {
         GlobalApi.getAllCourseList().then(res => {
            console.log(res)
        })
     }


  return (
    <div>Listado de Cursos</div>

  )
}

export default CourseList