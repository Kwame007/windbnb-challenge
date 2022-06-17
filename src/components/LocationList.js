import React from "react";
import { IoMdPin } from "react-icons/io";

const LocationList = (props) => {
  return (
    <ul className="ml-10">
      {props?.locations?.map((list) => (
        <div className="flex">
          <IoMdPin className="mr-1 inline" />
          <li className="mb-4 text tracking-wider text-sm text-gray-400 md:hover:cursor-pointer">
            {list}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default LocationList;
