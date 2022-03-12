import React, { useState } from "react";
import Button from "../Stateless/Button/Button";
import { Link } from "react-router-dom";
import "./ItemCount.css";

function ItemCount({ stock, onAdd }) {
    const [count, setCount] = useState(1);
    const [show, setShow] = useState(true)

    const more = () => {
        if (count < stock) {
            setCount(count + 1)
            console.log(count)
        }
    }

    const less = () => {
        if (count > 1) {
            setCount(count - 1)
            console.log(count)
        }
    }

    const add = () => {
       onAdd(count)
       setShow(false)
       console.log(`cantidad agregada ${count}`)
    }
      
    return (

        <>

            <div>
                <div className="count">
                    <button className="btns" onClick={more}>+</button>
                    <h2>{count}</h2>
                    <button className="btns" onClick={less}>-</button>
                </div>
                <div className="add">
                {show?
                    <button onClick={add} >Add Cart</button>

                    :
                    
                    (<Link to="/cart"><button className="add">Check cart</button></Link> )} 
                
               </div>
                <p>Stock ={stock}</p>  
            </div>
           
        </>

    );
}

export default ItemCount;