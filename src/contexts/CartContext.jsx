import { useState, useContext, createContext } from 'react'

export const CartContext = createContext([]);

export const useCartContext = () => { 
   return useContext(CartContext); 
}

const CartContextProvider = ({ children }) => {
    
    const [cartList, setCartList] = useState([]);

    const addToCart = (product, qty) => {

        const index = cartList.findIndex(i => i.product.id === product.id);

            if (index > -1) {
            const oldQy = cartList[index].qty
            cartList.splice(index, 1);
            setCartList([...cartList, { product, qty: qty + oldQy}]);

            }else {
                setCartList([...cartList, {product, qty}])
            }
        };

    const deleteFromCart = (product) => {

        setCartList( cartList.filter((prod) => prod.product.id !== product));

        };  

        const iconCart = () => {

            return cartList.reduce( (acum, valor)=> acum + valor.qty, 0); 
        
        };

        const priceTotal =()=>{
            
            return cartList.reduce((acum, product)=>(acum + (product.qty * product.product.price)), 0);
        };

        function deleteList(){
            setCartList([]);
        };

    return(
        <CartContext.Provider

        value={{
            cartList,
            addToCart,
            deleteFromCart,
            iconCart,
            priceTotal,
            deleteList
        }}
        >
             { children }
         </CartContext.Provider >
     );
};


export default CartContextProvider;

