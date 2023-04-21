import { CourseCard } from "@/components/CourseCard";
import Link from "next/link";
import React from "react";

function index() {
  return (
    <section className="px-[5%] my-10">
      <div className="sec-title w-fit">Choose Your Year</div>

      <div className="flex  flex-wrap gap-8 w-full ">
        <CourseCard img="/course-bg2.jpg" />
        <CourseCard img="/course-bg3.jpg" />
        <CourseCard />
        <CourseCard />
        <CourseCard img="/course-bg2.jpg" />
        <CourseCard img="/course-bg3.jpg" />
        <CourseCard />
        <CourseCard />
        <CourseCard img="/course-bg2.jpg" />
        <CourseCard img="/course-bg3.jpg" />
        <CourseCard />
        <CourseCard />
        <CourseCard />

        <Link
          href="/add-course"
          className="flex flex-col w-[30%] justify-center items-center my-4 cursor-pointer max-h-[500px] p-4  shadow-xl hover:shadow-2xl border-2"
        >
          <div className="text-2xl font-bold text-tsecondary">
            Add New Course
          </div>
        </Link>
      </div>
    </section>
  );
}

export default index;
