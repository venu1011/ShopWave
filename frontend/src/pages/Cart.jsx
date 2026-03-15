import React from 'react';
import { CartContext } from '../context/CartContext';
import { useContext } from 'react';

const Cart = () => {
    const {cartItems,removeFromCart,increment,decrement} = useContext(CartContext);
        const totalPrice = cartItems.reduce((total, item) => total + item.price * item.quantity, 0);
    return(
        <div className="container mx-auto p-4">
            <h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
            {cartItems.length === 0 ? (
                <p>Your cart is empty.</p>
            ) : (
                <div>
                    {cartItems.map(product => (
                        <div key={product.id} className="border p-4 mb-4">
                            <img
                                src={product.image}
                                alt={product.title}
                                className="h-40 mx-auto object-contain"
                            />
                            <h3 className="font-semibold mt-4 line-clamp-1">
                                {product.title}
                            </h3>
                            <p className="text-lg font-bold mt-2">
                                ${product.price}
                            </p>
                            <div className="flex items-center justify-between mt-2">
                                <button
                                    onClick={() => decrement(product)}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                                >
                                    -
                                </button>
                                <span>{product.quantity}</span>
                                <button
                                    onClick={() => increment(product)}
                                    className="bg-gray-300 text-gray-700 py-2 px-4 rounded hover:bg-gray-400"
                                >
                                    +
                                </button>
                            </div>
                            <button
                                onClick={() => removeFromCart(product.id)}
                                className="bg-red-500 text-white py-2 px-4 rounded hover:bg-red-600"
                            >
                                Remove
                            </button>
                            <p className="text-xl font-bold mt-2">
                                Total: ${product.price * product.quantity}
                            </p>

                        </div>

                    ))}
                </div>

            )}
        </div>
    )
  
};

export default Cart;
