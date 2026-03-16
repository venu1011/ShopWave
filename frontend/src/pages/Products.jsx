import React from 'react';
import ProductCard from '../components/ProductCard';
import { useState, useEffect } from 'react';

const Products = () => {
    const [products,setProducts] = useState([]);
    const [loading,setLoading] = useState(true);
    const [search,setSearch] = useState('');
    const [sorted,setSorted] = useState('default');
    useEffect(()=>{
        fetch('https://fakestoreapi.com/products')
        .then(res=>res.json())
        .then(data=>{
            console.log(data)
            setLoading(false);
            setProducts(data)})
    },[])

    const filteredProducts = products.filter(p=>p.title.toLowerCase().includes(search.toLocaleLowerCase()))
        let sortedProducts = [...filteredProducts]
    if(sorted == "price-low"){
        sortedProducts.sort((a,b)=>a.price-b.price)
    }
    if(sorted=="price-high"){
      sortedProducts.sort((a,b)=>b.price-a.price)
    }
    console.log(filteredProducts)
  return(
    <div >
      <input value={search} onChange={(e)=>setSearch(e.target.value)} placeholder="Search products..." className='bg-gray-200 border border-gray-300 rounded-md py-2 px-4 focus:outline-none focus:ring-2 focus:ring-blue-500' />
      <select value={sorted} onChange={(e)=>setSorted(e.target.value)}>
        <option value="default">Default</option>
        <option value="price-low">Price: Low to High</option>
        <option value="price-high">Price: High to Low</option>
      </select>
    <h1 className='text-2xl font-bold mb-6'>All Products</h1>
     {loading && <div >Loading...</div>}
     <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {sortedProducts.length===0 ? <div>No products found.</div> : sortedProducts.map(p=>{
            return <ProductCard key={p.id} product={p} />;
        })}
     </div>

    </div>



  )
};

export default Products;
