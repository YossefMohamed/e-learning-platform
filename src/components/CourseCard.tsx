import Image from "next/image";
import Link from "next/link";
import React from "react";
import { BsClock, BsPerson } from "react-icons/bs";

export const CourseCard = ({ img = "/course-bg.jpg" }: { img?: string }) => {
  return (
    <div className="flex flex-col w-[30%] my-4 cursor-pointer max-h-[500px] p-4  shadow-xl hover:shadow-2xl border-2">
      <div className="flex max-h-[60%] flex-1 relative bg-red-300 min-h-[250px]">
        <Image src={img} alt="image course" fill className="h-full w-full" />
      </div>
      <div className="flex flex-col p-2 gap-6 flex-1 ">
        <div className="main-title text-xl  font-bold flex-1 flex items-center text-center justify-center">
          Year 5 : Math course
        </div>

        <Link href="/years/1" className="flex justify-between mt-auto">
          <div className="btn-primary w-full">Enroll</div>
        </Link>
      </div>
    </div>
  );
};
