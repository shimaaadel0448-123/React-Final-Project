import React from 'react';
import { FaHeart, FaShoppingCart } from 'react-icons/fa';

const ProductCard = ({ product }) => {
  const addToCart = (e) => {
    e.stopPropagation();    

    // الحصول على السلة الحالية من localStorage
    const currentCart = JSON.parse(localStorage.getItem('cart')) || [];

    // التحقق إذا كان العنصر موجودًا بالفعل في السلة
    const existingItemInCart = currentCart.find(item => item.id === product.id);
    if (!existingItemInCart) {
      const updatedCart = [...currentCart, product];
      localStorage.setItem('cart', JSON.stringify(updatedCart));
    }
  };

  const addToFavourites = (e) => {
    e.stopPropagation(); 

    // الحصول على المفضلة الحالية من localStorage
    const currentFavs = JSON.parse(localStorage.getItem('favourites')) || [];

    // التحقق إذا كان العنصر موجودًا بالفعل في المفضلة
    const existingItemInFavs = currentFavs.find(item => item.id === product.id);
    if (!existingItemInFavs) {
      const updatedFavs = [...currentFavs, product];
      localStorage.setItem('favourites', JSON.stringify(updatedFavs));
    }
  };

  return (
    <div className="group bg-white shadow-md rounded-xl overflow-hidden transform transition hover:scale-105 cursor-pointer">
      <img
        src={product.image}
        alt={product.title}
        className="h-48 w-full object-contain p-4"
      />
      <div className="p-4">
        <h3 className="font-semibold text-md mb-2 line-clamp-2 group-hover:text-orange-500">
          {product.title}
        </h3>
        <p className="text-indigo-600 font-bold">${product.price}</p>
      </div>
      <div className="flex justify-between px-4 pb-4">
        <button
          onClick={addToFavourites}
          className="text-pink-500 hover:text-pink-700 text-xl"
          title="Add to Favourites"
        >
          <FaHeart />
        </button>
        <button
          onClick={addToCart}
          className="text-yellow-500 hover:text-yellow-700 text-xl"
          title="Add to Cart"
        >
          <FaShoppingCart />
        </button>
      </div>
    </div>
  );
};

export default ProductCard;
