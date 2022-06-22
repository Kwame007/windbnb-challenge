import React, { useState, useEffect } from "react";
import Listing from "./Listing";

const Listings = () => {
  const [staysData, setStaysData] = useState([]);

  useEffect(() => {
    // get data from json server
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:3003/stays");

        // check if res ok
        if (!response.ok) {
          throw new Error("Could not fetch data");
        }

        const data = await response.json();
        setStaysData(data);
        console.log(data);
      } catch (error) {
        console.log(error.message);
      }
    };

    return () => {
      fetchData();
    };
  }, []);
  return (
    <section className="my-10 px-3 md:mt-40 ">
      <h1 className="text-lg font-bold font-monserat leading-6 text-gray-900 md:text-2xl">
        Stays in Finland
      </h1>
      <div className="grid grid-cols-1 gap-5 mt-5 md:grid-cols-4 md:w-fit md:gap-10 ">
        {staysData?.map((data, index) => (
          <Listing {...data} key={index} />
        ))}
      </div>
    </section>
  );
};

export default Listings;
