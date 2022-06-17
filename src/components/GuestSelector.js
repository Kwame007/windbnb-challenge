import React from "react";
import Button from "./Button";

const GuestPicker = (props) => {
  return (
    <div className="ml-10">
      <div className="mb-5">
        <p className="text-sm">{props.title}</p>
        <p className="text-xs text-gray-400">{props.desc}</p>
        <div className="flex mt-2">
          <Button className="w-6 h-6 border rounded-md text-gray-400">-</Button>
          <p className="px-5">0</p>
          <Button className="w-6 h-6 border rounded-md text-gray-400">+</Button>
        </div>
      </div>
    </div>
  );
};

const GuestSelector = () => {
  return (
    <>
      <div>
        <GuestPicker title="Adult" desc="Age 13 or above" />
        <GuestPicker title="Children" desc="Age 2 - 12" />
      </div>
    </>
  );
};

export default GuestSelector;
