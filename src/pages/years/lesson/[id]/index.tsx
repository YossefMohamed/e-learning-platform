import Link from "next/link";
import React from "react";
import { BsBook, BsDownload, BsPlayBtn, BsStopwatch } from "react-icons/bs";
import ReactPlayer from "react-player";

function Lesson() {
  const [video, setVideo] = React.useState(false);

  React.useEffect(() => {
    setVideo(true);
  }, []);
  return (
    <div className="p-10">
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
          <li>
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
              <a
                href="#"
                className="text-gray-700 hover:text-gray-900 ml-1 md:ml-2 text-sm font-medium"
              >
                Math
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
                Integration by parts
              </span>
            </div>
          </li>
        </ol>
      </nav>
      <div className="options my-10 ml-1 font-bold  flex border-b-4">
        <div className="Video  cursor-pointer p-3 px-6 hover:text-light hover:bg-primary text-light bg-primary">
          Video
        </div>
        <Link
          href="/years/lesson/1/questions"
          className="Video  cursor-pointer p-3 px-6 hover:text-light hover:bg-primary"
        >
          Questions
        </Link>

        <div className="Video  cursor-pointer p-3 px-6 hover:text-light hover:bg-primary">
          Quiz
        </div>
        <div className="Video  cursor-pointer p-3 px-6 hover:text-light hover:bg-primary">
          Teachers
        </div>
      </div>
      {video ? (
        <div className="flex gap-6">
          <ReactPlayer
            url="https://www.youtube.com/watch?v=UePhewf2OOE"
            controls
            width={"70%"}
            height={"650px"}
          />
          <div className="flex-1 border p-4 flex flex-col">
            <div className="icons flex flex-col  flex-1 justify-center gap-4 max-h-[650px] ">
              <div className="group flex-1 flex flex-col gap-4  overflow-y-auto ">
                <div className=" m-0 text-xl font-bold  border-b-4 py-2">
                  Integration by parts rule with examples
                </div>
                <div className="description py-4 max-h-[100%] overflow-y-auto">
                  Lorem ipsum dolor sit amet consectetur, adipisicing elit.
                  Dignissimos animi nostrum a ad tenetur unde quia deserunt
                  voluptatibus iure blanditiis quam, fugit impedit excepturi
                  omnis voluptate perferendis culpa iste nesciunt! Lorem ipsum
                  magnam, quia, aspernatur modi, expedita minima assumenda alias
                  repudiandae ex! Beatae architecto inventore aliquam quisquam
                  omnis velit voluptate hic ratione? Lorem ipsum dolor, sit amet
                  consectetur adipisicing elit. Incidunt, nulla nemo?
                  Consequatur commodi
                </div>
              </div>

              <div className="play  btn-primary flex items-center gap-1 font-normal  w-full justify-between">
                Lecture File
                <span className="font-bold ">
                  <BsDownload />
                </span>
              </div>
              <div className="play  btn-primary flex items-center gap-1 font-normal  w-full justify-between">
                Home work
                <span className="font-bold ">
                  <BsBook />
                </span>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </div>
  );
}

export default Lesson;
