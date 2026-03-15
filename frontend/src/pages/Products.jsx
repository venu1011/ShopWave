import React from 'react';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';
const Products = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);

    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false);
            setProducts(data)})
    },[])
  return(
    <div >
    <h1 className='text-2xl font-bold mb-6'>All Products</h1>
     {loading && <div >Loading...</div>}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {products.map(p=>{
            return <ProductCard key={p.id} product={p} />;
        })}
     </div>

    </div>



  )
};

export default Products;
