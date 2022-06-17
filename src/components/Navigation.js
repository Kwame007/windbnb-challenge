import React from "react";
import Button from "./Button";
import Input from "./Input";
import Logo from "./Logo";
import { FaSearch } from "react-icons/fa";

const Navigation = () => {
  return (
    <React.Fragment>
      <nav className="md:grid md:grid-cols-2 md:justify-center md:items-center md:h-full">
        <Logo />
        <aside
          className="grid grid-cols-4 mx-6 mt-9 bg-white-400 rounded-2xl h-auto md:mt-0 md:ml-auto md:w-auto md:h-full "
          style={{ boxShadow: "0px 1px 6px rgba(0, 0, 0, 0.1)" }}
        >
          <div className="col-span-3 flex">
            <div className="w-30">
              <Input
                className="border-0 py-4 px-2 w-full rounded-2xl placeholder:text-gray-500 placeholder:text-sm focus:outline-none"
                placeholder="Helsinki,Finland"
              />
            </div>
            <div className="">
              <Input
                className="border-0 border-x py-4 px-2 w-full placeholder:text-slate-300 placeholder:text-sm focus:outline-none"
                placeholder="Add guests"
              />
            </div>
          </div>
          <div className="  ">
            <Button
              className="
              flex justify-center items-center  w-full h-full rounded-r-2xl"
            >
              <FaSearch className=" text-red-500" />
            </Button>
          </div>
        </aside>
      </nav>
    </React.Fragment>
  );
};

export default Navigation;
