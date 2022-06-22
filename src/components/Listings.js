import React, { useContext, useEffect } from "react";
import Listing from "./Listing";
import ModalContext from "../context/Context";

const Listings = () => {
  const { stays, filteredStays } = useContext(ModalContext);

  return (
    <section className="my-10 px-3 md:mt-40 ">
      <h1 className="text-lg font-bold font-monserat leading-6 text-gray-900 md:text-2xl">
        Stays in Finland
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-4 md:w-fit md:gap-10 ">
        {/* render stays array if filter array===0 */}
        {filteredStays.length === 0 &&
          stays?.map((data, index) => <Listing {...data} key={index} />)}

        {/* render filtered array if not ===0 */}
        {filteredStays.length !== 0 &&
          filteredStays?.map((data, index) => (
            <Listing {...data} key={index} />
          ))}
      </div>
    </section>
  );
};

export default Listings;
