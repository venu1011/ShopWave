import { Link } from "react-router-dom"
export default function ProductCard({ product }){

  return (
    <Link to={`/products/${product.id}`}>


    <div className="border rounded-lg p-4 hover:shadow-lg transition">

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

      <button className="bg-black text-white w-full mt-4 py-2 rounded">
        Add to Cart
      </button>

    </div>
      </Link>

  )

}