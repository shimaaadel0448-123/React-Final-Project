import React, { useState } from 'react';

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
      <div className="bg-black px-6 py-4 sm:px-12 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">CustomClothes</h1>

        <div className="hidden sm:flex gap-4">
          <button className="bg-black px-4 py-2 hover:bg-gray-300 hover:text-black text-white border border-white rounded-lg transition">
            Login
          </button>
          <button className="bg-white px-4 py-2 hover:bg-gray-300 text-black border border-white rounded-lg transition">
            Register
          </button>
        </div>

        <div className="sm:hidden">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-white text-3xl focus:outline-none"
            aria-label="Toggle menu"
          >
            {menuOpen ? '✖' : '☰'}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="sm:hidden bg-black mt-[72px] px-6 py-4 shadow-md rounded-b-xl">
          <div className="flex flex-col items-center gap-4">
            <button className="bg-black px-6 py-2 hover:bg-gray-300 hover:text-black text-white border border-white rounded-lg w-40 transition">
              Login
            </button>
            <button className="bg-white px-6 py-2 hover:bg-gray-300 text-black border border-white rounded-lg w-40 transition">
              Register
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
