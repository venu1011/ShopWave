import { Link } from "react-router-dom"
import ProductCard from "../components/ProductCard"
import { useEffect,useState } from "react"
export default function Home(){
    const [products,setProducts] = useState([]);
    useEffect(()=>{
        fetch("https://fakestoreapi.com/products")
        .then(res=>res.json())
        .then(data=>setProducts(data))
    },[])
    const featuredProducts = products.slice(0,6);

    const category = [
      "electronics",
      "jewelery",
      "men's colthing",
      "women's colthing"
    ]
  return (

    

    <div>

      {/* Hero Section */}
      <section className="bg-gray-100 py-16">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-10">

          <div>
            <h1 className="text-4xl font-bold mb-4">
              Discover Amazing Products
            </h1>

            <p className="text-gray-600 mb-6">
              Shop the best deals on electronics, fashion and more.
            </p>

            <Link to="/products">
            <button  className="bg-black text-white px-6 py-3 rounded">
              Shop Now
            </button></Link>
          </div>

          <img
            src="https://images.unsplash.com/photo-1607083206968-13611e3d76db"
            className="rounded-lg"
          />

        </div>

      </section>
      {/* Categories Section */}

      <section className="py-12">

        <h2 className="text-2xl font-bold mb-6">
            Categories
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {category.map(cat=>(
          <><Link key={cat} to={`/category/${cat}`} ><div className="bg-gray-100 p-6 text-center rounded">
            {cat}
          </div>
          </Link></>

            
        ))}




        </div>

    </section>
    {/* Featured Products Section */}
    <section className="py-12">

    <><h2 className="text-2xl font-bold mb-6">
        Featured Products
      </h2><div className="grid grid-cols-2 md:grid-cols-4 gap-6">

          {/* temporary products */}
          {featuredProducts.map(p => (
            <ProductCard key={p.id} product={p} />
          ))}

        </div></>

    </section>

    </div>
  )
}