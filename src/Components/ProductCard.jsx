import React from 'react';

const ProductCard = ({ product }) => {
  return (
    <div className="group bg-white shadow-md rounded-xl overflow-hidden transform transition hover:scale-105">
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
    </div>
  );
};

export default ProductCard;
