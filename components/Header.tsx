import React from "react";
import { FaElementor } from "react-icons/fa";

export const Header = () => {
  return (
    <div className="nav-container flex justify-between py-3 shadow items-center  px-10">
      <div className="logo text-5xl text-ttertiary bg-light">
        <FaElementor />
      </div>

      <div className="items flex  gap-10 items-center  ">
        <div>Home</div>
        <div>Courses</div>
        <div>Favorites</div>

        <div className="btn-primary"> Enroll now</div>
      </div>
    </div>
  );
};
