import React from "react";

// Use the absolute path from the public folder
import spreadshopImage from '/Product Hero.webp';

const SpreadshopBanner = () => {
  return (
    <div className="min-h-screen bg-[#C29CEB] flex items-center justify-center px-10 py-12">
      <div className="flex flex-col md:flex-row items-center justify-evenly w-full max-w-9xl gap-10">
        {/* Left - Image Mockup */}
        <div className="relative order-1 md:order-1">
          <div>
            <img
              src={spreadshopImage} // Use the imported image here
              alt="Merch items"
              className="w-72 h-auto object-cover"
            />
          </div>
        </div>

        {/* Right - Text Content */}
        <div className="text-center md:text-left order-2 md:order-2 text-bold">
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-bold">
            <span className="block">QUALITY PRODUCTS</span>
            <span className="block">FOR YOUR MERCH</span>
          </h1>
          <div className="mt-8 bg-yellow-300 px-8 py-4 rounded-lg shadow-lg inline-block transform -rotate-6">
            <span className="text-black font-bold text-lg md:text-xl">
              Choose from over 250 products
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SpreadshopBanner;
