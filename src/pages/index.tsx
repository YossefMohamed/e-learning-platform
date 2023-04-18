import Image from "next/image";
import { CourseCard } from "../../components/CourseCard";

export default function Home() {
  return (
    <>
      <section>
        <div className="gap-8 items-center  px-4 mx-auto max-w-screen-xl xl:gap-16 grid grid-cols-2">
          <img className="w-[90%]" src="/kid-learn.png" alt="dashboard image" />
          <div className="mt-4 md:mt-0">
            <h2 className="mb-4 text-4xl tracking-tight font-extrabold text-gray-900 dark:text-white">
              Let's create more tools and ideas that brings us together.
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
          <CourseCard />
        </div>
      </section>
    </>
  );
}
