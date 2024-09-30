import { useState } from "react";

const Banner = () => {
  const [isOpen, setIsOpen] = useState(false); // State to manage mobile menu

  const toggleMenu = () => {
    setIsOpen(!isOpen); // Toggle mobile menu state
  };

  return (
    <>
      {/* Header Section */}
      <header className="w-full px-2  py-4 absolute">
        <div className=" mx-auto flex justify-between items-center">
          {/* Logo */}
          <img
            src="/images/greenWeb_logo.png"
            alt="Everything Green Logo"
            className="w-52"
          />
          {/* Horizontal Line for Desktop */}
          <div className="hidden md:block border-b border-white w-[600px] mb-2 mx-3" />
          {/* Navigation Links */}
          <nav className={`hidden md:flex space-x-8 text-white`}>
            <a href="#sustainable-websites" className="hover:underline">
              Sustainable Websites
            </a>
            <a href="#blog" className="hover:underline">
              Blog
            </a>
            <a href="#contact" className="hover:underline">
              Contact Us
            </a>
            <a href="#login" className="hover:underline">
              Login
            </a>
          </nav>
          <div className="hidden md:block border-b w-40 border-white  mb-2 mx-3" />
          {/* Mobile Menu Button */}
          <button className="md:hidden text-white" onClick={toggleMenu}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              className="w-6 h-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16m-7 6h7"
              />
            </svg>
          </button>
        </div>
      </header>

      {/* Mobile Navigation Links */}
      {isOpen && (
        <nav className="md:hidden bg-gray-800 text-white p-4 absolute top-16 left-0 right-0">
          <a
            href="#sustainable-websites"
            className="block hover:underline mb-2"
          >
            Sustainable Websites
          </a>
          <a href="#blog" className="block hover:underline mb-2">
            Blog
          </a>
          <a href="#contact" className="block hover:underline mb-2">
            Contact Us
          </a>
          <a href="#login" className="block hover:underline">
            Login
          </a>
        </nav>
      )}

      {/* Banner Section */}
      <section className="bg-gradient-to-r from-firstTheme via-secondTheme to-thirdTheme py-20 p-20  min-h-screen flex flex-col md:flex-row justify-center  items-center">
        {/* Left Section - Text and Button */}
        <div className="text-center md:text-left text-white me-5  ">
          <h1 className="text-5xl font-bold mb-12">
            Unlock Insights for a Greener Future!
          </h1>
          <p className="mb-12 text-xl">
            Download our comprehensive whitepaper now and embark on a journey
            towards a more sustainable future.
          </p>
          <button className="btn btn-primary bg-white text-green-600 rounded-full px-6 py-3">
            Download Now!
          </button>
        </div>
        {/* Right Section - Image */}
        <div className="mt-8 md:mt-0">
          <img
            src="/images/LandingPage.png"
            alt="White Paper Display"
            className=""
          />
        </div>
      </section>
    </>
  );
};

export default Banner;
