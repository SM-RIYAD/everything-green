import React from "react";
import "./Example.css";
const Example = () => {
  return (
    <div className="max-w-6xl mx-auto  flex flex-col justify-center items-center  ">
      <p className=" mb-20 text-center heading-text">
        sustainable <br /> example websites{" "}
      </p>

      <div className="grid  gap-5 items-center justify-center w-2/3  lg:grid-cols-2 grid-cols-1">
        <div className=" m-5">
          <img
            className="w-80 h-48 shadow-lg "
            src="/images/alphabet.png"
            alt=""
            srcset=""
          />

          <p className="text-xl mt-10 text-firstTheme font-bold text-center">
            Google
          </p>
          <p className="  text-firstTheme text-center">0.26gm/per visit</p>
        </div>
        <div className="m-5">
          <img
            className="w-80 h-48 shadow-lg"
            src="/images/facebook.png"
            alt=""
            srcset=""
          />
          <p className="text-xl mt-10 text-firstTheme font-bold text-center">
            Facebook
          </p>
          <p className="  text-firstTheme text-center">0.26gm/per visit</p>
        </div>
        <div className="m-5">
          <img
            className="w-80 h-48 shadow-lg"
            src="/images/google.png"
            alt=""
            srcset=""
          />
          <p className="text-xl mt-10 text-firstTheme font-bold text-center">
            Alphabet
          </p>
          <p className="  text-firstTheme text-center">0.26gm/per visit</p>
        </div>
        <div className="m-5">
          <img
            className="w-80 h-48 shadow-lg"
            src="/images/red-inc.png"
            alt=""
            srcset=""
          />
          <p className="text-xl mt-10 text-firstTheme font-bold text-center">
            Red-Inc
          </p>
          <p className="  text-firstTheme text-center">0.26gm/per visit</p>
        </div>
      </div>
    </div>
  );
};

export default Example;
