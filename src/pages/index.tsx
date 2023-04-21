import Image from "next/image";
import { CourseCard } from "../components/CourseCard";
import {
  BsArrow90DegRight,
  BsArrowBarRight,
  BsClock,
  BsPerson,
} from "react-icons/bs";
import { FaArrowRight, FaElementor } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="my-10">
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 grid grid-cols-2">
          <img className="w-[90%]" src="/kid-learn.png" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold ">
              Let's create more{" "}
              <span className="text-ttertiary text-4xl font-bold uppercase">
                tools
              </span>{" "}
              and ideas that brings us together.
            </h2>
            <p className="mb-6  text-tmuted">
              Flowbite helps you connect with friends and communities of people
              who share your interests. Connecting with your friends and family
              as well as discovering new ones is easy with features like Groups.
            </p>
            <a href="#" className="inline-flex items-center btn-primary">
              Get started
              <svg
                className="ml-2 -mr-1 w-5 h-5"
                fill="currentColor"
                viewBox="0 0 20 20"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                  clipRule="evenodd"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
      <section className="flex justify-center items-center flex-col mb-16 ">
        <h1 className="text-tsecondary sec-title">Start learning</h1>

        <div className="flex justify-center w-full gap-4">
          <select
            id="countries"
            className=" border-2 border-primary text-gray-900 text-sm rounded focus:ring-secondary focus:border-secondary block w-[15%] p-2.5 "
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <select
            id="countries"
            className=" border-2 border-primary text-gray-900 text-sm rounded focus:ring-secondary focus:border-secondary block w-[15%] p-2.5"
          >
            <option selected>Choose a country</option>
            <option value="US">United States</option>
            <option value="CA">Canada</option>
            <option value="FR">France</option>
            <option value="DE">Germany</option>
          </select>

          <a href="" className="btn-primary">
            Start
          </a>
        </div>
      </section>
      <section className="text-center flex justify-center flex-col items-center px-[10%] my-10">
        <div className="sec-title">The results speak for themselves</div>
        <div className="cards flex  w-full justify-around py-10">
          <div className="card w-[15%] flex flex-col gap-4">
            <div className="font-bold text-6xl">78%</div>
            <div className="text-sm">
              of our 2022 students achieved an ATAR above 90
            </div>
          </div>
          <div className="card w-[15%] flex flex-col gap-4">
            <div className="font-bold text-6xl">63%</div>
            <div className="text-sm">
              of our 2022 students achieved an ATAR above 90
            </div>
          </div>
          <div className="card w-[15%] flex flex-col gap-4">
            <div className="font-bold text-6xl">99.95</div>
            <div className="text-sm">
              of our 2022 students achieved an ATAR above 90
            </div>
          </div>
          <div className="card w-[15%] flex flex-col gap-4">
            <div className="font-bold text-6xl">5</div>
            <div className="text-sm">
              of our 2022 students achieved an ATAR above 90
            </div>
          </div>
        </div>
        <a href="#" className="inline-flex items-center btn-primary my-10">
          Get started
          <svg
            className="ml-2 -mr-1 w-5 h-5"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </section>
      <section className="text-center flex justify-center flex-col items-center px-[5%] my-10">
        <div className="sec-title">Choose your year</div>

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
            className="flex flex-col w-[30%] my-4 cursor-pointer justify-center items-center max-h-[500px] p-4  shadow-xl hover:shadow-2xl border-2"
          >
            <div className="text-2xl font-bold text-tsecondary">
              Add New Course
            </div>
          </Link>
        </div>
      </section>
    </>
  );
}
