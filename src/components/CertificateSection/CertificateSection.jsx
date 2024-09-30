import React from "react";

const CertificateSection = () => {
  return (
    <div>
      <div className=" mx-auto lg:w-[900px] rounded-xl  mb-20 text-white  mt-24 rounded-t-lg shadow-md text-center">
        <div className="bg-[#1b9876] h-[80px] flex justify-center items-center rounded-t-xl ">
          <h2 className="text-white text-2xl font-bold">
            claim and download your greenWeb certificate
          </h2>
        </div>

        <div className="bg-white p-6 mt-4">
          <img
            src="/images/logo_2.svg"
            alt="GreenWeb Certificate"
            className="w-52 mx-auto"
          />
          <p className="text-gray-800 text-xl mt-5">
            The green <span className="text-[#1b9876]">Web</span> team designed
            this website's carbon calculator to inspire and enlighten people
            about the importance of creating websites with low carbon emissions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default CertificateSection;
