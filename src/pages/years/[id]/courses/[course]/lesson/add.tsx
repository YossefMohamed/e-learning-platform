import React, { useState, useMemo } from "react";
import { BsFile, BsPen, BsPlay, BsPlayBtn } from "react-icons/bs";
import { FaFile } from "react-icons/fa";

import "react-quill/dist/quill.snow.css";
import dynamic from "next/dynamic";

const modules = {
  toolbar: [
    //[{ 'font': [] }],
    [{ header: [1, 2, false] }],
    ["bold", "italic", "underline", "strike", "blockquote"],
    [
      { list: "ordered" },
      { list: "bullet" },
      { indent: "-1" },
      { indent: "+1" },
    ],
    ["link", "image"],
    [{ align: [] }, { color: [] }, { background: [] }], // dropdown with defaults from theme
    ["clean"],
  ],
};

const formats = [
  //'font',
  "header",
  "bold",
  "italic",
  "underline",
  "strike",
  "blockquote",
  "list",
  "bullet",
  "indent",
  "link",
  "image",
  "align",
  "color",
  "background",
];

function Add() {
  const ReactQuill = useMemo(
    () => dynamic(() => import("react-quill"), { ssr: false }),
    []
  );

  const [value, setValue] = React.useState("");
  console.log(value);

  return (
    <div className="p-10 min-h-screen max-h-fit">
      <div className="sec-title w-fit flex items-center gap-4">
        Lecture Video <BsPlayBtn />
      </div>
      <input
        className="block w-full text-sm text-gray-900 border  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
        id="file_input"
        type="file"
      />
      <div className="sec-title w-fit flex items-center gap-4">
        Lecture File <FaFile />
      </div>
      <input
        className="block w-full text-sm text-gray-900 border  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
        id="file_input"
        type="file"
      />

      <div className="sec-title w-fit flex items-center gap-4">
        Lecture Assignment <BsPen />
      </div>
      <input
        className="block w-full text-sm text-gray-900 border  rounded-lg cursor-pointer bg-gray-50 dark:text-gray-400 focus:outline-none "
        id="file_input"
        type="file"
      />
      <div className="sec-title w-fit">Lecture Description</div>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
      <div className="sec-title w-fit">Extra resources</div>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />

      <div className="sec-title w-fit">Quiz</div>
      <ReactQuill
        modules={modules}
        formats={formats}
        value={value}
        onChange={setValue}
      />
      <div className="btn-primary mt-16">Submit</div>
    </div>
  );
}

export default Add;
