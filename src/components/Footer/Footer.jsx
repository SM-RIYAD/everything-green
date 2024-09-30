import React from "react";

const Footer = () => {
  return (
    <div>
      <header className="w-full px-2 py-4 ">
        <div className="mx-auto flex justify-between items-center">
          <div className=" md:block border-b border-[#1b9876] flex-grow mx-4 mb-2" />

          <nav className=" md:flex lg:flex flex lg:flex-row flex-col-reverse   lg:space-x-8 text-[#1b9876]">
            <a
              href="#sustainable-websites"
              className="hover:text-gray-500  lg:text-base text-sm py-2"
            >
              Sustainable Websites
            </a>
            <a
              href="#blog"
              className="hover:text-gray-500 py-2 lg:text-base text-sm"
            >
              Blog
            </a>
            <a
              href="#contact"
              className="hover:text-gray-500 py-2 lg:text-base text-sm"
            >
              Contact Us
            </a>
          </nav>
          <div className=" md:block border-b border-green-400 flex-grow mx-4 mb-2" />
        </div>
      </header>

      <footer className="w-full lg:text-base text-sm px-4 py-8 bg-white">
        <div className="container mx-auto flex flex-col md:flex-row justify-between items-start md:items-center px-5">
          <div className="flex flex-col items-start mb-10  md:mb-0">
            <h4 className=" text-[#1b9876]                    lg:mb-2">
              Contact:
            </h4>
            <div className="flex items-center space-x-2">
              <span role="img" aria-label="email">
                📧
              </span>
              <a
                href="mailto:contact@everythinggreen.org"
                className="text-gray-700"
              >
                contact@everythinggreen.org
              </a>
            </div>
          </div>

          <div className="flex items-center mb-10 md:mb-0 space-x-4">
            <a href="/privacy-policy" className="text-gray-700 hover:underline">
              Privacy Policy
            </a>

            <a
              href="https://www.linkedin.com/company/example"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-700 hover:text-blue-600"
            >
              <i
                className="fa fa-linkedin-square"
                style={{ fontSize: "20px", color: "blue" }}
              ></i>
            </a>
          </div>

          <div className="flex flex-col items-start">
            <h4 className="text-[#1b9876] mb-2">Address:</h4>
            <address className="not-italic text-gray-700">
              China Hong Kong City Block 3, Room 1203,
              <br />
              12th Floor, 33 Canton Rd, Tsim Sha Tsui, Hong Kong
            </address>
          </div>
        </div>
      </footer>
      <footer className="text-center my-2">made by @riyad</footer>
    </div>
  );
};

export default Footer;
