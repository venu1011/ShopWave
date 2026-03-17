import { useParams } from "react-router-dom";
import {useState,useEffect} from "react";
import ProductCard from "../components/ProductCard";

export default function ProductCategory(){
    const {category} = useParams();
    const [items,setItems] = useState([]);

    useEffect(()=>{
        fetch(`https://fakestoreapi.com/products/category/${category}`)
        .then(res =>res.json())
        .then(data=>setItems(data))

    },[category])
    return(<div>
                <h1 className="text-2x font-bold mb-6">{category}</h1>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            {items.map(i=>(
                <ProductCard key={i.id} product={i}/>
            ))}
        </div>
    </div>

    )
}