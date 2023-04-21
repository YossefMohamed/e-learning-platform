import React from "react";
import { BsPersonBadge } from "react-icons/bs";
import { FaVideo } from "react-icons/fa";

function Profile() {
  return (
    <div className="container mx-auto my-5 p-5 flex gap-4  min-h-screen">
      <div className="left w-1/3 border-4 p-4 rounded-2xl">
        <img
          src="/kid-learn.png"
          width={150}
          height={150}
          className="m-auto rounded-full"
        />
        <div className="sec-title border-0">Yossef Mohamed</div>
        <div className="flex flex-col gap-2">
          <div className="btn-primary w-full text-left flex items-center gap-4">
            <BsPersonBadge />
            Profile
          </div>
          <div className="btn-primary w-full text-left flex items-center gap-4">
            <FaVideo />
            Watched Videos
          </div>
        </div>
      </div>
      <div className="right flex-1 border-4 p-4 rounded-2xl">
        <div className="sec-title">User Information</div>
        <div className="info flex flex-col gap-4">
          <div className="flex flex-col ">
            <span className="text-md">Name :</span>
            <input
              type="text"
              className="text-input font-bold"
              value="Yossef Mohamed"
              disabled
            ></input>
          </div>

          <div className="flex flex-col ">
            <span className="text-md">Year :</span>
            <input
              type="text"
              className="text-input font-bold"
              value="Year 11"
              disabled
            ></input>
          </div>

          <div className="flex flex-col ">
            <span className="text-md">Phone Number :</span>
            <input
              type="text"
              className="text-input font-bold"
              value="01154784154"
              disabled
            ></input>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Profile;
