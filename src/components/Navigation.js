import React, { useContext } from "react";
import Button from "./Button";
import Logo from "./Logo";
import { IoIosSearch } from "react-icons/io";
import ModalContext from "../context/Context";

const Navigation = () => {
  const {
    showModal,
    showGuestSelector,
    showLocationSelector,
    hideGuestSelector,
    hideLocationSelector,
  } = useContext(ModalContext);

  // show modal on location btn click
  const locationSelectorBtn = () => {
    showModal();
    showLocationSelector();

    // hide guest selector if location selector is shown
    hideGuestSelector();
  };

  // show modal on guest btn click
  const guestSelectorBtn = () => {
    showModal();
    showGuestSelector();

    // hide location selector if guest selector is shown
    hideLocationSelector();
  };

  return (
    <React.Fragment>
      <nav className="md:grid md:grid-cols-2 md:justify-center md:items-center md:h-full">
        <Logo />
        <aside
          className="grid grid-cols-4 mx-6 mt-9 bg-white-400 rounded-2xl h-auto drop-shadow-default md:mt-0 md:ml-auto md:w-1/2 md:h-full "
          style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="col-span-3 flex">
            <div className="w-full">
              <Button
                className="border-r py-4 px-2 w-full text-gray-400 text-sm rounded-l-2x md:border-r md:w-full"
                onClick={locationSelectorBtn}
              >
                Helsinki,Finland
              </Button>
            </div>
            <div className="w-full">
              <Button
                className="border-r py-4 px-2 w-full text-gray-400 text-sm md:border-r md:w-full "
                onClick={guestSelectorBtn}
              >
                Add guests
              </Button>
            </div>
          </div>
          <div className="  ">
            <Button
              className="
              flex justify-center items-center  w-full h-full rounded-r-2xl"
            >
              <IoIosSearch className=" text-red-500" />
            </Button>
          </div>
        </aside>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
