import React from 'react';
import { useContext,useState } from 'react';
import { CartContext } from '../context/CartContext';
import { useNavigate } from 'react-router-dom';

const Checkout = () => {
  const {cartItems} = useContext(CartContext);
  const [cart,setCart] = useState(cartItems);
  const total = cartItems.reduce((sum,a)=>sum + a.price*a.quantity,0);
  const nav=useNavigate()
  function placeOrder(){
    setCart([]);
    alert("Order placed successfully!");
    nav("/")


  }
  return(
    <div>
      <h1 className='text-2xl font-bold mb-6'>Checkout</h1>
      <h2 className='text-lg font-semibold mb-4'>Order Summary</h2>

      {cartItems.map(item=>(
        <div key={item.id} className='border p-4 mb-4'>
          <h3 className='font-semibold'>{item.title}</h3>
          <p>Price: ${item.price}</p>
          <p>Quantity: {item.quantity}</p>
        </div>
      ))}
      <h2 className='text-xl font-bold mt-6'>Total: ${total.toFixed(2)}</h2>
      <button onClick={()=>placeOrder()} className='bg-green-500 text-white py-3 px-6 mt-4 rounded hover:bg-green-600'>
        Place Order
      </button>
    </div>

  )
};

export default Checkout;
