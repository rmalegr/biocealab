import GlobalApi from "@/app/_utils/GlobalApi";
import React, { useEffect, useState } from "react";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Skeleton } from "@/components/ui/skeleton";
import CourseItem from "./CourseItem";

const CourseList = () => {
  const [courseList, setCourseList] = useState([]);
  useEffect(() => {
    getAllCourses();
  }, []);
  //Fethc Course Lisst
  const getAllCourses = () => {
    GlobalApi.getAllCourseList().then((res) => {
      console.log(res);
      setCourseList(res?.courses);
    });
  };

  return (
    <div className="p-5 bg-white rounded-lg mt-3">
      {/* title filter */}
      <div className="flex items-center justify-between">
        <h2 className="text-[20px] font-bold text-primary">All Courses</h2>
        <Select>
          <SelectTrigger className="w-[180px]">
            <SelectValue placeholder="Filter" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="light">Light</SelectItem>
            <SelectItem value="dark">Dark</SelectItem>
            <SelectItem value="system">System</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {/* Display Course List */}

      <div className="grid grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
        {courseList?.length > 0
          ? courseList.map((item, index) => (
              <div key={index}>
                <CourseItem course={item} />
              </div>
            ))
          : [1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <Skeleton
                key={index}
                className="w-full h-[240px] rounded-xl m-2 bg-slate-200 animate-pulse "
              />
            ))}
      </div>
    </div>
  );
};

export default CourseList;
