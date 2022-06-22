import React, { useContext } from "react";
import Button from "./Button";
import ModalContext from "../context/Context";

const AdultPicker = ({
  title,
  desc,
  adults,
  increaseAdults,
  decreaseAdults,
}) => {
  return (
    <div className="ml-10">
      <div className="mb-5">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-gray-400">{desc}</p>
        <div className="flex mt-2">
          <Button
            className="w-6 h-6 border rounded-md text-gray-400"
            onClick={decreaseAdults}
          >
            -
          </Button>
          <p className="px-5">{adults}</p>
          <Button
            className="w-6 h-6 border rounded-md text-gray-400"
            onClick={increaseAdults}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

const ChildrenPicker = ({
  title,
  desc,
  children,
  increaseChildren,
  decreaseChildren,
}) => {
  return (
    <div className="ml-10">
      <div className="mb-5">
        <p className="text-sm">{title}</p>
        <p className="text-xs text-gray-400">{desc}</p>
        <div className="flex mt-2">
          <Button
            className="w-6 h-6 border rounded-md text-gray-400"
            onClick={decreaseChildren}
          >
            -
          </Button>
          <p className="px-5">{children}</p>
          <Button
            className="w-6 h-6 border rounded-md text-gray-400"
            onClick={increaseChildren}
          >
            +
          </Button>
        </div>
      </div>
    </div>
  );
};

const GuestSelector = () => {
  const {
    adults,
    children,
    increaseAdults,
    decreaseAdults,
    increaseChildren,
    decreaseChildren,
  } = useContext(ModalContext);
  return (
    <>
      <div className="md:col-start-2">
        <AdultPicker
          title="Adult"
          desc="Age 13 or above"
          adults={adults}
          increaseAdults={increaseAdults}
          decreaseAdults={decreaseAdults}
        />
        <ChildrenPicker
          title="Children"
          desc="Age 2 - 12"
          children={children}
          increaseChildren={increaseChildren}
          decreaseChildren={decreaseChildren}
        />
      </div>
    </>
  );
};

export default GuestSelector;
