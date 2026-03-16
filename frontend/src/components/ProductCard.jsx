import { Link } from "react-router-dom"
import { useContext } from 'react';
import { CartContext } from '../context/CartContext';
export default function ProductCard({ product }){
  const {addToCart} = useContext(CartContext);

  return (



    <div className="border rounded-lg p-4 hover:shadow-lg transition">
      <Link to={`/products/${product.id}`}>

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
      </Link>
      <button className="bg-black text-white w-full mt-4 py-2 rounded" onClick={()=>addToCart(product)}>
        Add to Cart
      </button>

    </div>


  )

}