import React from "react";
import { IoIosSearch, IoMdClose } from "react-icons/io";
import Button from "./Button";
import GuestSelector from "./GuestSelector";
import Input from "./Input";
import LocationList from "./LocationList";

const locations = [
  "Helsinki, Finland",
  "Turku, Finland",
  "Oulu, Finland",
  "Vaasa, Finland",
];

const BackDrop = () => {
  return <div className="fixed inset-0 z-40 bg-black opacity-30" />;
};

const Modal = () => {
  return (
    <>
      <div className="p-3 bg-white fixed inset-0 max-h-fit z-50">
        <div className="grid grid-cols-2 md:hidden">
          <small className="block text-xs">Edit your search</small>
          <Button className="text-xl w-fit ml-40">
            <IoMdClose />
          </Button>
        </div>
        <aside
          className=" mx-auto mt-9 bg-white-400 rounded-2xl h-auto md:mt-10 md:ml-auto md:w-9/12  "
          style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="grid grid-cols-1  md:grid md:grid-cols-3">
            <div className="border-b md:border-r md:border-b-0 ">
              <p className="px-2  pt-2 text-xs uppercase tracking-wider">
                Location
              </p>
              <Input
                className="border-0 py-4 px-2 w-full rounded-t-2xl placeholder:text-gray-500 placeholder:text-sm focus:outline-none"
                placeholder="Helsinki,Finland"
              />
            </div>
            <div className=" md:border-r">
              <p className="px-2  pt-2 text-xs uppercase tracking-wider">
                Guests
              </p>
              <Input
                className="border-0 py-4 px-2 w-full rounded-b-2xl   placeholder:text-gray-500 placeholder:text-sm focus:outline-none"
                placeholder="Add guest"
              />
            </div>
            <Button className=" hidden w-32 h-12  justify-center items-center bg-red-400 text-white text-sm rounded-2xl mx-auto md:my-auto md:flex ">
              <IoIosSearch className="mr-2 text-sm" /> Search
            </Button>
          </div>
        </aside>
        <div className="grid grid-cols-1 mt-5 md:grid-cols-3 md:mx-auto md:mt-10 md:w-9/12">
          <LocationList locations={locations} />
          {/* <GuestSelector /> */}
        </div>

        <Button className=" w-32 h-12 flex justify-center items-center bg-red-400 text-white text-sm rounded-2xl mx-auto mt-10 md:hidden">
          <IoIosSearch className="mr-2 text-sm" /> Search
        </Button>
      </div>
      <BackDrop />
    </>
  );
};

export default Modal;
