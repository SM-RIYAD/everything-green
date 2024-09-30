import React from "react";

const NewsletterSection = () => {
  return (
    <div className="bg-white border p-6 rounded-xl shadow-2xl my-20 text-center mt-10 py-10 lg:w-[700px] w-full mx-auto lg:h-[250px]">
      <h2 className="text-[#1b9876] text-2xl font-bold">
        join the greenWeb newsletter
      </h2>
      <div className="flex lg:flex-row flex-col items-center justify-center mt-4 space-x-2">
        <input
          type="email"
          placeholder="your email address"
          className="p-3 rounded-full w-2/3 bg-gray-100 text-gray-600 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-green-500"
        />
        <button className="flex items-center lg:mt-0 mt-3 justify-center font-bold rounded-full  border-2 border-white shadow-class hover:border-0 h-[43px] hover:bg-[#1b9876] w-40 text-white bg-black space-x-2">
          subscribe
        </button>
      </div>
      <p className="text-gray-500 mt-4">
        The greenWeb team will send you occasional updates on web accessibility
        and sustainability. There will be no spam, only high-quality
        information.
      </p>
    </div>
  );
};

export default NewsletterSection;
