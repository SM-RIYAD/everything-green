import { useEffect, useState } from "react";
import Banner from "../Banner/Banner";

import "./Home.css";
import Example from "../Example/Example";
import { ChevronDown, ChevronUp } from "lucide-react";
import NewsletterSection from "../NewsletterSection/NewsletterSection";
import CertificateSection from "../CertificateSection/CertificateSection";
import Footer from "../Footer/Footer";
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

        <button className="flex items-center justify-center font-bold rounded-full mt-10 border-2 border-white shadow-class hover:border-0 h-[43px] hover:bg-[#1b9876] w-40 text-white bg-black space-x-2">
          <ChevronUp strokeWidth={2.75} />
          <span>test now</span>
        </button>
      </div>
      <p className=" mb-20 text-center heading-text">
        learn more about <br /> web sustainability?
      </p>
      <NewsletterSection></NewsletterSection>
      <CertificateSection></CertificateSection>
      <Footer></Footer>
    </div>
  );
};

export default Home;
