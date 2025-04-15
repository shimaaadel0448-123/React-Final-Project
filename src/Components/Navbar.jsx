import React, { useState, useEffect, useRef } from 'react';
import { FaHeart, FaShoppingCart, FaUserCircle, FaBoxOpen } from 'react-icons/fa';
import { Link } from 'react-router-dom';

const useOutsideClick = (ref, handler) => {
  useEffect(() => {
    const listener = (event) => {
      if (!ref.current || ref.current.contains(event.target)) return;
      handler();
    };
    document.addEventListener('mousedown', listener);
    return () => document.removeEventListener('mousedown', listener);
  }, [ref, handler]);
};

const Navbar = ({ setActiveModal }) => {
  const [cartItems, setCartItems] = useState([]);
  const [favItems, setFavItems] = useState([]);
  const [showCartDropdown, setShowCartDropdown] = useState(false);
  const [showFavDropdown, setShowFavDropdown] = useState(false);
  const [user, setUser] = useState(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const cartRef = useRef();
  const favRef = useRef();

  useOutsideClick(cartRef, () => setShowCartDropdown(false));
  useOutsideClick(favRef, () => setShowFavDropdown(false));

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    const storedFav = JSON.parse(localStorage.getItem('favourites')) || [];
    const storedUser = JSON.parse(localStorage.getItem('loggedInUser')) || null;
    setCartItems(storedCart);
    setFavItems(storedFav);
    setUser(storedUser);
    setIsLoggedIn(storedUser !== null);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      const updatedCart = JSON.parse(localStorage.getItem('cart')) || [];
      const updatedFav = JSON.parse(localStorage.getItem('favourites')) || [];
      setCartItems(updatedCart);
      setFavItems(updatedFav);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const handleAddToFavourites = (product) => {
    const updatedFav = [...favItems, product];
    setFavItems(updatedFav);
    localStorage.setItem('favourites', JSON.stringify(updatedFav));
  };

  const handleAddToCartFromFav = (product) => {
    const updatedCart = [...cartItems, product];
    setCartItems(updatedCart);
    localStorage.setItem('cart', JSON.stringify(updatedCart));

    const updatedFav = favItems.filter(fav => fav.id !== product.id);
    setFavItems(updatedFav);
    localStorage.setItem('favourites', JSON.stringify(updatedFav));
  };

  const EmptyDropdown = ({ message }) => (
    <div className="flex flex-col items-center justify-center p-4 text-center text-gray-500">
      <FaBoxOpen className="text-4xl mb-2 text-gray-400" />
      <p>{message}</p>
      <Link
        to="/"
        className="mt-3 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition"
      >
        Shop Now
      </Link>
    </div>
  );

  return (
    <div className="bg-black px-6 py-4 sm:px-12 flex justify-between items-center fixed top-0 left-0 w-full z-50 shadow-md">
      <h1 className="text-white text-3xl sm:text-4xl font-bold">CustomClothes</h1>

      <div className="flex items-center space-x-6">
        {isLoggedIn ? (
          <>
            <div className="text-white flex items-center space-x-2">
              <FaUserCircle className="text-2xl" />
              <span className="font-medium">{user?.name || 'User'}</span>
              <button
                onClick={() => {
                  setIsLoggedIn(false);
                  localStorage.removeItem('loggedInUser');
                }}
                className="ml-2 bg-red-600 hover:bg-red-700 text-white text-sm px-3 py-1 rounded-lg"
              >
                Sign Out
              </button>
            </div>

            {/* Favourites */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowFavDropdown(!showFavDropdown);
                  setShowCartDropdown(false);
                }}
                className="text-white relative"
              >
                <FaHeart className="text-2xl hover:text-pink-400 transition" />
                {favItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-pink-500 text-xs text-white rounded-full px-1">
                    {favItems.length}
                  </span>
                )}
              </button>
              {showFavDropdown && (
  <div ref={favRef} className="absolute right-0 mt-2 bg-white text-black rounded-2xl shadow-2xl w-96 max-h-[500px] overflow-y-auto z-50">
    <div className="p-4 font-semibold text-pink-600 border-b-2 text-xl">Favourites</div>
    {favItems.length > 0 ? (
      <>
        {favItems.map((item, i) => (
          <div key={i} className="flex items-center gap-4 p-4 border-b-2 hover:bg-gray-50 transition duration-300">
            <img src={item.image} alt={item.title} className="w-20 h-20 object-contain rounded-lg border bg-white shadow-sm" />
            <div className="flex-1">
              <h4 className="text-lg font-semibold text-gray-800 line-clamp-2">{item.title}</h4>
              <span className="text-sm text-gray-600">${item.price}</span>
            </div>
            <button
              onClick={() => {
                const updatedFav = favItems.filter((_, index) => index !== i);
                setFavItems(updatedFav);
                localStorage.setItem('favourites', JSON.stringify(updatedFav));
              }}
              className="text-red-600 hover:text-red-800 text-xl font-bold px-3 py-1 rounded-full transition-all duration-300"
            >
              ×
            </button>
            <button
              onClick={() => handleAddToCartFromFav(item)}
              className="bg-blue-600 hover:bg-blue-700 text-white text-sm px-5 py-3 rounded-full transition-all duration-300 ml-4"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </>
    ) : (
      <EmptyDropdown message="Your favourites list is empty." />
    )}
  </div>
)}

            </div>

            {/* Cart */}
            <div className="relative">
              <button
                onClick={() => {
                  setShowCartDropdown(!showCartDropdown);
                  setShowFavDropdown(false);
                }}
                className="text-white relative"
              >
                <FaShoppingCart className="text-2xl hover:text-yellow-400 transition" />
                {cartItems.length > 0 && (
                  <span className="absolute -top-2 -right-2 bg-yellow-500 text-xs text-white rounded-full px-1">
                    {cartItems.length}
                  </span>
                )}
              </button>
              {showCartDropdown && (
                <div ref={cartRef} className="absolute right-0 mt-2 bg-white text-black rounded-xl shadow-2xl w-80 max-h-96 overflow-y-auto z-50">
                  <div className="p-3 font-semibold text-yellow-600 border-b">Cart Items</div>
                  {cartItems.length > 0 ? (
                    <>
                      {cartItems.map((item, i) => (
                        <div key={i} className="flex items-start gap-3 p-3 border-b hover:bg-gray-100 transition duration-300">
                          <img src={item.image} alt={item.title} className="w-16 h-16 object-contain rounded-lg border bg-white" />
                          <div className="flex-1">
                            <h4 className="text-sm font-semibold line-clamp-2">{item.title}</h4>
                            <span className="text-xs text-gray-500">${item.price}</span>
                          </div>
                          <button
                            onClick={() => {
                              const updatedCart = cartItems.filter((_, index) => index !== i);
                              setCartItems(updatedCart);
                              localStorage.setItem('cart', JSON.stringify(updatedCart));
                            }}
                            className="text-red-500 hover:text-red-700 text-lg font-bold px-2"
                          >
                            ×
                          </button>
                        </div>
                      ))}
                      <Link
                        to="/checkout"
                        className="-3 inline-block bg-blue-600 hover:bg-blue-700 text-white text-sm px-4 py-2 rounded-full transition my-4 ml-26"
                      >
                        🛒 Checkout
                      </Link>
                    </>
                  ) : (
                    <EmptyDropdown message="Your cart is empty." />
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="hidden sm:flex gap-4">
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
          </div>
        )}
      </div>
    </div>
  );
};

export default Navbar;
