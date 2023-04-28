import Link from "next/link";
import React from "react";
import { BsBook, BsPen, BsPlayBtn, BsStopwatch } from "react-icons/bs";

const Lesson = ({ name, id }: { name: string; id: number }) => {
  return (
    <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
      <div className="section-title">{name}</div>
      <div className="icons flex  gap-4">
        <Link
          href="/years/lesson/1"
          className="play  btn-secondary flex items-center gap-1 font-normal"
        >
          Watch
          <span className="font-bold ">
            <BsPlayBtn />
          </span>
        </Link>
        <Link
          href="/years/lesson/1"
          className="play  btn-secondary flex items-center gap-1 font-normal"
        >
          Exam
          <span className="font-bold ">
            <BsStopwatch />
          </span>
        </Link>
        <Link
          href="/years/lesson/1"
          className="play  btn-secondary flex items-center gap-1 font-normal"
        >
          Home work
          <span className="font-bold ">
            <BsBook />
          </span>
        </Link>

        <Link
          href="/years/lesson/add"
          className="play  btn-secondary flex items-center gap-1 font-normal"
        >
          Edit
          <span className="font-bold ">
            <BsPen />
          </span>
        </Link>
      </div>
    </div>
  );
};

export default Lesson;
