import { useCartContext } from "../../contexts/CartContext";  

import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";



const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext();   

    const onAdd = (qty) => {
        addToCart(product, qty);
       
    }

    const { description, image, price, stock } = product;


    return (

      
        <div className="cards">

            <p>{description}</p>
            <img src={image} alt="Bike"/>
            <ItemCount stock={stock} onAdd={onAdd}/>
            <strong>$ {price}</strong>
            
        </div>

    

    )
}

export default ItemDetail;


