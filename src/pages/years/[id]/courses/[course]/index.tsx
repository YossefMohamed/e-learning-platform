import Modal from "@/components/Modal";
import Link from "next/link";
import React from "react";
import {
  BsBook,
  BsBookmarkFill,
  BsPen,
  BsPlayBtn,
  BsQuestion,
  BsStopwatch,
} from "react-icons/bs";
import request from "@/endpoints/request";
import { useQuery } from "react-query";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import { toast } from "react-hot-toast";

function Year() {
  const { isAuthenticated, user } = useSelector(
    (state: Rootstate) => state.userState
  );

  const router = useRouter();

  const yearsResponse = useQuery("years", async () => {
    const res = await request({
      url: `/api/years/`,
      method: "get",
    }).then((res) => {
      return res.data;
    });

    return res;
  });

  React.useEffect(() => {
    if (
      user.course !== router.query.course &&
      user.year !== router.query.year &&
      !user.isAdmin
    ) {
      toast.error("You are not a participant in this course");
      router.push(`/years`);
    }
    if (!isAuthenticated) router.push("/login");
  }, [user, isAuthenticated, router.query]);

  const [modal, setModal] = React.useState(false);

  const closeModal = () => {
    setModal(false);
  };
  const openModal = () => {
    setModal(true);
  };
  return (
    <div className="p-10 relative min-h-screen">
      {modal && (
        <div className="absolute top-0">
          <Modal closeModal={closeModal} />
        </div>
      )}
      <nav className="flex" aria-label="Breadcrumb">
        <ol className="inline-flex items-center space-x-1 md:space-x-3">
          <li>
            <div className="flex items-center">
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
              >
                Year 10
              </a>
            </div>
          </li>
          <li aria-current="page">
            <div className="flex items-center">
              <svg
                className="w-6 h-6 text-gray-400"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                  clipRule="evenodd"
                />
              </svg>
              <span className="text-gray-400 ml-1 md:ml-2 text-sm font-medium">
                Maths
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="sec-title w-fit">Course Details</div>

      <div className="table  w-full">
        <div className="t-head w-full text-2xl border p-6 text-tsecondary font-bold flex justify-between">
          <span> Unit 1 : Shapes And Angles</span>
          <div className="group flex gap-4">
            <Link href="/years/lesson/add" className="btn-primary text-sm">
              Add lesson
            </Link>

            <Link
              href="/years/lesson/add"
              className="btn-primary text-sm  flex items-center gap-1"
            >
              Edit <BsPen />
            </Link>
          </div>
        </div>
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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

        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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

        <div className="t-head w-full text-2xl border p-6 text-tsecondary font-bold flex justify-between">
          <span> Unit 1 : Shapes And Angles</span>
          <div className="group flex gap-4">
            <Link href="/years/lesson/add" className="btn-primary text-sm">
              Add lesson
            </Link>

            <Link
              href="/years/lesson/add"
              className="btn-primary text-sm  flex items-center gap-1"
            >
              Edit <BsPen />
            </Link>
          </div>
        </div>
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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

        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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
        <div className="t-data w-full text-md border p-6 text-tsecondary justify-between items-center font-bold bg-gray-50 flex">
          <div className="section-title">integration by parts</div>
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

        <div className="t-head w-full text-2xl border p-6 text-tsecondary font-bold flex justify-between">
          <span>Add new unit</span>
          <span className="btn-primary text-sm" onClick={openModal}>
            Add Unit
          </span>
        </div>
      </div>
    </div>
  );
}

export default Year;
