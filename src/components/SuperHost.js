import React from "react";
import { IoIosStar } from "react-icons/io";

const SuperHost = ({ rating, type }) => {
  return (
    <>
      <aside className="flex gap-2 mt-3 justify-center items-center md:mt-5">
        <span className=" flex-none w-4/12 border border-neutral-800 py-2 rounded-2xl ">
          <p className="w-20 h-3 font-monserat text-xs leading-3 uppercase mx-auto text-gray-700 ">
            Super Host
          </p>
        </span>
        <p className="flex-3 w-6/12 font-monserat text-xs leading-5 text-gray-400 text-left">
          {type}
        </p>
        <span className="flex justify-end items-center w-2/12">
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

export default SuperHost;
