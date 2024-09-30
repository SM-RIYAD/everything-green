import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

import "./Home.css";
import Example from "../Example/Example";
const Home = () => {
  return (
    <div className="font-class   ">
      <Banner></Banner>
      <div className="w-full flex items-center justify-center py-20">
        <p className="text-center text-gray-500  w-1/3 text-2xl/loose font-light">
          {" "}
          The CO2 footprint of the Internet's data centers alone may already be
          comparable to that of global air travel. The good news is that a
          growing number of major Internet corporations are becoming more
          environmentally conscientious, opting for more renewable energy
          sources for their data centers and operations.
        </p>
      </div>

      <Example></Example>

      <div className="w-full flex flex-col items-center justify-center py-20">
        <p className="text-center text-gray-500  w-1/3 text-2xl/loose font-light">
          {" "}
          These websites avoid bloated frameworks by using compressed graphics,
          efficient file formats, and lightweight fonts. Check out our
          information on developing sustainable websites and establishing a page
          weight budget if you want to learn more.
        </p>

        <button className="btn mt-10 btn-primary text-white border-0 bg-black">
          {" "}
          test now
        </button>
      </div>
    </div>
  );
};

export default Home;
