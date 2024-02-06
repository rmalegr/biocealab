import React from "react";
import Image from "next/image";

const CourseItem = ({ course }) => {
  return (
    <div className="border rounded-xl hover:shadow-md hover:shadow-blue-700 cursor-pointer
    ">
      <Image
        src={course?.banner?.url}
        width={500}
        height={300}
        alt={course?.title}
        className="rounded-t-xl border-t-black"
      />
      <div className="flex flex-col gap-1 p-2">
        <h2 className="font-medium">{course.name}</h2>
        <h2 className="text-[12px] text-gray-400">{course.author}</h2>
        {course?.chapter?.length == 0 ? (
          <div className="flex gap-2">
            <Image src="/youtube.png" width={20} height={20} alt="youtube" />
            <h2 className="text-[14px] text-gray-400">Watch On Youtube</h2>
          </div>
        ) : (
          <div className="flex gap-2">
            <Image src="/capitulo.png" width={20} height={20} alt="capitulo" />
            <h2 className="text-[14px] text-gray-400">Lecciones</h2>
          </div>
        )}

        <h2 className="text-[15px]">{course?.free ? "Free" : "Paid"}</h2>
      </div>
    </div>
  );
};

export default CourseItem;
