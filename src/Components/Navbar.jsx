import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const Navbar = ({ setActiveModal }) => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const loggedIn = localStorage.getItem('isLoggedIn') === 'true';
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser'));
    setIsLoggedIn(loggedIn);
    setUser(storedUser);
  }, []);

  const handleLogout = () => {
    localStorage.removeItem('isLoggedIn');
    localStorage.removeItem('loggedInUser');
    setIsLoggedIn(false);
    setUser(null);
    navigate('/');
  };

  return (
    <>
      <div className="bg-black px-6 py-4 sm:px-12 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
        <h1 className="text-white text-3xl sm:text-4xl font-bold">CustomClothes</h1>

        <div className="hidden sm:flex gap-4 items-center">
          {isLoggedIn && user ? (
            <>
              <span className="text-white font-medium">Hi, {user.name}</span>
              <button
                onClick={handleLogout}
                className="bg-white border-2 rounded-2xl hover:bg-gray-300 text-black px-4 py-2"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <button
                onClick={() => setActiveModal('login')}
                className="bg-black border-2 rounded-2xl hover:bg-gray-700 text-white px-4 py-2"
              >
                Sign In
              </button>
              <button
                onClick={() => setActiveModal('register')}
                className="bg-white border-2 rounded-2xl hover:bg-gray-300 text-black px-4 py-2"
              >
                Sign Up
              </button>
            </>
          )}
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
            {isLoggedIn && user ? (
              <>
                <span className="text-white font-medium">{user.name}</span>
                <button
                  onClick={() => {
                    handleLogout();
                    setMenuOpen(false);
                  }}
                  className="bg-white px-6 py-2 hover:bg-gray-300 text-black border border-white rounded-lg w-40 transition"
                >
                  Logout
                </button>
              </>
            ) : (
              <>
                <button
                  onClick={() => {
                    setActiveModal('login');
                    setMenuOpen(false);
                  }}
                  className="bg-black px-6 py-2 hover:bg-gray-300 hover:text-black text-white border border-white rounded-lg w-40 transition"
                >
                  Login
                </button>
                <button
                  onClick={() => {
                    setActiveModal('register');
                    setMenuOpen(false);
                  }}
                  className="bg-white px-6 py-2 hover:bg-gray-300 text-black border border-white rounded-lg w-40 transition"
                >
                  Register
                </button>
              </>
            )}
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
