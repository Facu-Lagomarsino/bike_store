import { useCartContext } from "../../contexts/CartContext"; 
import { Link } from "react-router-dom";

import ItemCount from "../ItemCount/ItemCount";
import "./ItemDetail.css";



const ItemDetail = ({ product }) => {
    const { addToCart } = useCartContext();   

    const onAdd = (qty) => {
        addToCart(product, qty);
       
    }

    const { description, image, price, stock } = product;


    return (

        <>
        
            <div className="cards">
                <p>{description}</p>
                <img src={image} alt="Bike"/>
                <ItemCount stock={stock} onAdd={onAdd}/>
                <strong>$ {price}</strong>
                
                <Link to="/" style={{ 
                    display: "flex", 
                    justifyContent: "center",
                    alignItems: "center", 
                    color: "black",
                    height: "2rem",
                    widows: "100%",
                    textDecoration: "none",
                    padding: "1rem" 
                }}>

                    <span style={{
                        background: "transparent",
                        border: "none",
                        margin: "0"
                    }}>' Click to go home and see our product catalog '</span> 
                </Link>

            </div>
        </>

    )
}

export default ItemDetail;


