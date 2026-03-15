import { useParams,Link } from "react-router-dom"
import { useState, useEffect,useContext } from "react"
import { CartContext } from "../context/CartContext"

export default function ProductDetails(){

  const { id } = useParams()

  const [product,setProduct] = useState(null)
  const {addToCart} = useContext(CartContext)
  useEffect(()=>{

    fetch(`https://fakestoreapi.com/products/${id}`)
      .then(res=>res.json())
      .then(data=>setProduct(data))

  },[id])
  function handleadd(){
    addToCart(product)
    alert("Product added to cart!")
  }
  if(!product) return <p>Loading...</p>

  return (

    <div className="grid md:grid-cols-2 gap-10 border rounded-lg p-6 hover:shadow-lg transition md:h-full items-center ">

      <img
        src={product.image}
        className="h-80 object-contain"
      />

      <div>

        <h1 className="text-2xl font-bold">
          {product.title}
        </h1>

        <p className="text-xl mt-4 font-semibold">
          ${product.price}
        </p>

        <p className="mt-4 text-gray-600">
          {product.description}
        </p>

        <button onClick={handleadd} className="bg-black text-white px-6 py-3 mt-6 rounded">
          Add to Cart
        </button>

      </div>

    </div>
  )
}