import React from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';



export default function Navbar() {
    const {cartItems} = useContext(CartContext)
    return(
    <nav className="w-full bg-gray-800 text-white p-4 flex justify-between items-center">
    <div className="font-bold text-lg">ShopWave</div>
    <div className="space-x-4">
      <Link to="/" className="hover:underline">Home</Link>
      <Link to="/products" className="hover:underline ">Products</Link>
      <Link to="/cart" className="hover:underline">Cart ({cartItems.length})</Link>
      <Link to="/profile" className="hover:underline">Profile</Link>
    </div>
  </nav>
    )
}
