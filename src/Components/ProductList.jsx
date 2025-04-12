import React, { useEffect, useState } from 'react';
import ProductCard from './ProductCard';
import { useNavigate } from 'react-router-dom';
const ProductList = () => {
  const [products, setProducts] = useState([]);
  const [filter, setFilter] = useState('all');
  const navigate = useNavigate(); 
  const fetchProducts = async (category) => {
    let url = 'https://fakestoreapi.com/products';

    if (category === 'men') {
      url = "https://fakestoreapi.com/products/category/men's clothing";
    } else if (category === 'women') {
      url = "https://fakestoreapi.com/products/category/women's clothing";
    } else if (category === 'accessories') {
      url = "https://fakestoreapi.com/products/category/jewelery";
    }

    const res = await fetch(url);
    const data = await res.json();
    setProducts(data);
  };
  const viewDetails = (id) => {
    if (filter === 'accessories') {
      navigate(`/ViewAccDetails/${id}`);
    } else {
      navigate(`/ViewWomenDetails/${id}`);
    }
  };
  
  useEffect(() => {
    fetchProducts(filter);
  }, [filter]);

  return (
    <div className="min-h-screen bg-[#e6dace] p-6">
      <h2 className="text-3xl font-bold text-center mb-6">Our Products</h2>
      <div className="flex justify-center mb-8 space-x-4">
        {['all', 'men', 'women', 'accessories'].map((cat) => (
          <button
            key={cat}
            className={`px-4 py-2 rounded-lg font-semibold ${
              filter === cat
                ? 'bg-indigo-600 text-white'
                : 'bg-white border border-indigo-600 text-indigo-600'
            }`}
            onClick={() => setFilter(cat)}
          >
            {cat.charAt(0).toUpperCase() + cat.slice(1)}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
  {products.map((product) => (
    <div key={product.id} onClick={() => viewDetails(product.id)}>
      <ProductCard product={product} />
    </div>
  ))}
</div>
    </div>
  );
};

export default ProductList;
