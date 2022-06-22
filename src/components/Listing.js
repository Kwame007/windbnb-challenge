import React from "react";
import NotSuperHost from "./NotSuperHost";
import SuperHost from "./SuperHost";

const Listing = ({ photo, title, superHost, type, rating }) => {
  return (
    <div className="grid grid-cols-1 justify-center md:mt-10 md:cursor-pointer ">
      <img
        src={photo}
        alt=""
        className="rounded-3xl w-full h-60 md:w-96 md:h-64"
      />
      {superHost && <SuperHost rating={rating} type={type} />}
      {!superHost && <NotSuperHost rating={rating} type={type} />}
      <div className="w-full mt-3 ">
        <p className="font-monserat leading-5 text-base text-semibold">
          {title}
        </p>
      </div>
    </div>
  );
};

export default Listing;
