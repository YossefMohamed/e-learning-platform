import Image from "next/image";
import { CourseCard } from "../../components/CourseCard";
import {
  BsArrow90DegRight,
  BsArrowBarRight,
  BsClock,
  BsPerson,
} from "react-icons/bs";
import { FaArrowRight } from "react-icons/fa";

export default function Home() {
  return (
    <>
      <section>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 grid grid-cols-2">
          <img className="w-[90%]" src="/kid-learn.png" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-3xl tracking-tight font-extrabold text-gray-900 dark:text-white">
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
      <section className="flex justify-center items-center flex-col mb-16">
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
      <section className="text-center flex justify-center flex-col items-center px-[10%] my-10">
        <div className="sec-title">Choose your year</div>
        <div className="flex gap-6 mb-8 font-bold text-tmuted">
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 5
          </a>
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 6
          </a>
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 7
          </a>
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 8
          </a>
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 9
          </a>
          <a href="" className="border-b-4 text-primary">
            Year 10
          </a>
          <a href="" className="hover:border-b-4 hover:text-primary">
            Year 11
          </a>
        </div>
        <div className="flex  flex-wrap gap-10 w-full ">
          <CourseCard />
          <CourseCard />
          <CourseCard />
          <div className="flex flex-col w-[300px] items-center justify-center shadow-xl hover:shadow-2xl hover:opacity-95 rounded-xl bg-gray-200">
            <a className=" text-2xl text-tsecondary font-bold flex items-center justify-center gap-2">
              <span>Explore More</span>
              <span>
                <FaArrowRight />
              </span>
            </a>
          </div>
        </div>
      </section>
      <section className="bg-primary  overflow-hidden h-[350px] w-1/2 mx-auto relative my-20 rounded-xl flex flex-col">
        <div className="w-full h-full absolute z-10 top-0 right-0 bg-[url('/pattern.png')] opacity-10"></div>
        <div className="flex flex-col font-bold justify-center opacity-100 text-tinverse items-center w-full h-full z-50 text-2xl ">
          <div className="uppercase">Follow our news letter</div>
          <div className="flex w-1/2">
            <div className="relative mb-6 flex-1">
              <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <svg
                  aria-hidden="true"
                  className="w-5 h-5 text-gray-500 dark:text-gray-400"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                  <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                </svg>
              </div>
              <input
                type="text"
                id="input-group-1"
                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 p-2.5  dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@flowbite.com"
              />
            </div>
            <div className="btn-primary text-lg h-fit">Submit</div>
          </div>
        </div>
      </section>
    </>
  );
}
