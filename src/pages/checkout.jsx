// src/pages/CheckoutPage.jsx
import React, { useEffect, useState } from 'react';
import Navbar from '../Components/Navbar'; 
import Footer from '../Components/Footer'; 

const CheckoutPage = () => {
  const [cartItems, setCartItems] = useState([]);

  useEffect(() => {
    const storedCart = JSON.parse(localStorage.getItem('cart')) || [];
    setCartItems(storedCart);
  }, []);

  const total = cartItems.reduce((sum, item) => sum + item.price, 0);

  const handlePlaceOrder = () => {
    alert('Order placed successfully!');
    localStorage.removeItem('cart');
    setCartItems([]);
  };

  return (
    <>
      <Navbar setActiveModal={() => {}} /> 
      
      <div className="min-h-screen bg-gray-100 pt-24 pb-10 px-4 sm:px-10">
        <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">
          {/* Cart Items */}
          <div className="md:col-span-2 bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Your Order</h2>
            {cartItems.length === 0 ? (
              <p className="text-gray-500">Your cart is empty.</p>
            ) : (
              <div className="space-y-4">
                {cartItems.map((item, i) => (
                  <div
                    key={i}
                    className="flex items-center justify-between border-b pb-4"
                  >
                    <div className="flex items-center space-x-4">
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-20 h-20 rounded-lg object-cover"
                      />
                      <div>
                        <h3 className="font-semibold">{item.title}</h3>
                        <p className="text-sm text-gray-600">${item.price}</p>
                      </div>
                    </div>
                    <button
                      onClick={() => {
                        const updated = cartItems.filter((_, index) => index !== i);
                        setCartItems(updated);
                        localStorage.setItem('cart', JSON.stringify(updated));
                      }}
                      className="text-red-500 hover:text-red-700 text-sm"
                    >
                      Remove
                    </button>
                  </div>
                ))}
              </div>
            )}
          </div>

          {/* Summary + Form */}
          <div className="bg-white p-6 rounded-2xl shadow-lg">
            <h2 className="text-2xl font-bold mb-4">Checkout</h2>
            <form className="space-y-4">
              <input type="text" placeholder="Full Name" className="w-full border rounded-xl p-3" required />
              <input type="email" placeholder="Email Address" className="w-full border rounded-xl p-3" required />
              <input type="text" placeholder="Shipping Address" className="w-full border rounded-xl p-3" required />
              <input type="text" placeholder="City" className="w-full border rounded-xl p-3" required />
              <input type="text" placeholder="Postal Code" className="w-full border rounded-xl p-3" required />
              <input type="text" placeholder="Phone Number" className="w-full border rounded-xl p-3" required />
            </form>

            {/* Order Summary */}
            <div className="mt-6 border-t pt-4 space-y-2">
              <div className="flex justify-between">
                <span className="font-medium">Subtotal:</span>
                <span>${total.toFixed(2)}</span>
              </div>
              <div className="flex justify-between">
                <span className="font-medium">Shipping:</span>
                <span>$5.00</span>
              </div>
              <div className="flex justify-between text-lg font-bold">
                <span>Total:</span>
                <span>${(total + 5).toFixed(2)}</span>
              </div>
            </div>

            <button
              onClick={handlePlaceOrder}
              disabled={cartItems.length === 0}
              className="mt-6 w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 rounded-xl transition"
            >
              Place Order
            </button>
          </div>
        </div>
      </div>

    </>
  );
};

export default CheckoutPage;
