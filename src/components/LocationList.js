import React from "react";
import { IoMdPin } from "react-icons/io";

const LocationList = ({ locations, getQuery }) => {
  // get selected location from location list on click
  const getLocQuery = (event) => {
    getQuery(event.target.innerText);
  };
  return (
    <ul className="ml-10">
      {locations?.map((list, index) => (
        <div className="flex hover:underline" key={index}>
          <IoMdPin className="mr-1 inline" />
          <li
            className=" font-muly mb-4 text tracking-wider text-sm text-gray-400 md:hover:cursor-pointer"
            onClick={getLocQuery}
          >
            {list}
          </li>
        </div>
      ))}
    </ul>
  );
};

export default LocationList;
