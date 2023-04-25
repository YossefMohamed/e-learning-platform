import Link from "next/link";
import React from "react";
import { BsBook, BsDownload, BsPlayBtn, BsStopwatch } from "react-icons/bs";
import ReactPlayer from "react-player";
import LessonLayout from "../../../../../../../../layouts/LessonLayout";
import { useSelector } from "react-redux";
import { Rootstate } from "@/redux/store";
import useCheckPart from "@/custom-hooks/useCheckPart";

function Lesson() {
  const [video, setVideo] = React.useState(false);

  React.useEffect(() => {
    useCheckPart();
    setVideo(true);
  }, []);
  return (
    <LessonLayout>
      <>
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
                    magnam, quia, aspernatur modi, expedita minima assumenda
                    alias repudiandae ex! Beatae architecto inventore aliquam
                    quisquam omnis velit voluptate hic ratione? Lorem ipsum
                    dolor, sit amet consectetur adipisicing elit. Incidunt,
                    nulla nemo? Consequatur commodi
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
      </>
    </LessonLayout>
  );
}

export default Lesson;
