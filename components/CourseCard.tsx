import React from "react";
import { BsClock, BsPerson } from "react-icons/bs";

export const CourseCard = () => {
  return (
    <div className="flex flex-col w-[300px] shadow-xl hover:shadow-2xl rounded-xl">
      <div>
        <img src="/course-bg.jpg" alt="" className="rounded-3xl" />
      </div>
      <div className="flex flex-col p-2 gap-6 ">
        <div className="flex justify-between price text-sm  font-bold w-full ">
          <span className="bg-primary text-tinverse px-2 py-1 rounded-xl text-xs">
            Year 10
          </span>
          <span>305 EGP</span>
        </div>

        <div className="main-title text-xl  font-bold">
          The Containous integration
        </div>
        <div className="flex flex-row justify-between items-center">
          <div className="time flex items-center gap-1">
            <BsClock />
            <span className="text-sm">48 hours</span>
          </div>
          <div className="student flex items-center gap-1 text-sm">
            <BsPerson />
            <span className="text-sm">458 Students</span>
          </div>
        </div>
        <div className="flex justify-between">
          <div className="btn-primary">Enroll</div>
          <div className="btn-secondary shadow-none">Free trial</div>
        </div>
      </div>
    </div>
  );
};
