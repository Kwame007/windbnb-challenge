import React from "react";
import { IoIosStar } from "react-icons/io";

const NotSuperHost = ({ type, rating }) => {
  return (
    <>
      <aside className="flex gap-2 mt-3 justify-center items-center md:mt-5">
        <p className="flex-3 w-8/12 font-monserat text-sm leading-5 text-gray-400 text-left">
          {type}
        </p>
        <span className="flex justify-end items-center w-4/12">
          <IoIosStar className="pr-px text-sm text-red-500" />
          <p className="font-monserat text-xs text-gray-700 inline ">
            {" "}
            {rating}
          </p>
        </span>
      </aside>
    </>
  );
};

export default NotSuperHost;
