import React from "react";
import HeroBannerImg from "../../../../public/assets/background-banner.jpg"; // Import the image

const HeroBanner = () => {
  return (
    <div
      className="relative w-full h-screen md:h-96 lg:h-[50vh] flex flex-col items-center justify-center bg-cover bg-center"
      style={{
        backgroundImage: `url(${HeroBannerImg})`,
        backgroundAttachment: "fixed",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      {/* Content only visible on medium screens and larger */}
      <div className="relative px-6 py-12 flex flex-col items-center justify-center bg-white bg-opacity-40 backdrop-blur-md hidden md:flex">
        <h1
          className="text-3xl md:text-4xl lg:text-5xl font-extrabold text-center text-gray-800"
          style={{
            background: "#1E201E",
            WebkitBackgroundClip: "text",
            WebkitTextFillColor: "transparent",
          }}
        >
          Shop the Unexpected
        </h1>
        <div className="w-16 h-1 bg-green-600 rounded-full mt-6"></div>
        <p className="mt-6 text-lg md:text-xl lg:text-2xl font-light text-center text-gray-700 max-w-2xl">
          Discover everything you need, from unique treasures to everyday essentials, curated just for you.
        </p>
      </div>

      {/* Bottom icon, adjusted for visibility on mobile */}
      <div className="absolute bottom-32 md:bottom-10 flex flex-col items-center justify-center">
        <svg
          className="w-11 h-11 text-green-600 animate-bounce"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth="2"
            d="M19 9l-7 7-7-7"
          />
        </svg>
        <p className="text-sm text-gray-800 mt-2"></p>
      </div>
    </div>
  );
};

export default HeroBanner;
