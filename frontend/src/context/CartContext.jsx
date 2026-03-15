import { createContext,useState} from "react";
export const CartContext = createContext();

export default function CartProvider({children}){
    const [cartItems, setCartItems] = useState([]);


    function addToCart(product){
        const exist = cartItems.find((i)=>i.id===product.id);
        if(exist){
            setCartItems(cartItems.map((i)=>i.id===product.id ? {...i,quantity:i.quantity+1}:i))
        }else{
            setCartItems([...cartItems,{...product,quantity:1}])
        }

    }
    function increment(product){
        setCartItems(cartItems.map((i)=>i.id===product.id ? {...i,quantity:i.quantity+1}:i))
    }
    function decrement(product){
        const exist = cartItems.find((i)=>i.id===product.id);
        if(exist){
            setCartItems(cartItems.map((i)=>i.id==product.id ? {...i,quantity:i.quantity-1} : i))
        }
    }
    function removeFromCart(id){
        setCartItems(cartItems.filter(items=>items.id!=id));

    }
    return(
        <CartContext.Provider value={{addToCart,removeFromCart,cartItems,increment,decrement}}>
        {children}</CartContext.Provider>
    )
}