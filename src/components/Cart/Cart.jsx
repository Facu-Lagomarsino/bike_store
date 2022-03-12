import { useCartContext } from "../../contexts/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";
import { 
    getFirestore, 
    collection, 
    addDoc
} from "firebase/firestore";

import Video from '../../img/bike.mp4';
import "./Cart.css";


const Cart = () => {

    const [id, setId] = useState("")
    const [dataForm, setDataForm] = useState({
        email: "",
        phone: "",
        name: ""
    })
    const { cartList, deleteList, priceTotal, deleteFromCart } = useCartContext()

    const buys = async (e) => {
        e.preventDefault()  
  
        let orden = {}          

        orden.buyer =  dataForm; 
        orden.total = priceTotal();

        orden.items = cartList.map(cartItem => {
            const id = cartItem.product.id;
            const names = cartItem.product.description;
            const prices = cartItem.product.price * cartItem.qty;
            const qtys = cartItem.qty;
            
            return {
                id, 
                names, 
                prices, 
                qtys
            }   
        });

        const db = getFirestore();
        const ordersCollection = collection (db, "orders")
        await addDoc( ordersCollection, orden)
        .then(resp => setId(resp.id)) 

        
        .catch(err => console.log(err))
        .finally(() => { 
                setDataForm({
                    email: "",
                    phone: "",
                    name: ""
                })
                deleteList()
            })    
   
    
 }

    const handleChange = (event) => {      
        setDataForm({ 
            ...dataForm,
            [event.target.name]: event.target.value
        })
    }


    return <div>
            {id !== "" && `The order id is : ${id} ` }
            <br />
            {cartList.length !== 0 ?<>
                {cartList.map(produ => <div className="cardDetail">
                   <ul>
                        <li>{produ.product.description}  </li>
                        <li>prices: {produ.product.price}</li>
                        <li>qtys: {produ.qty}</li>
                            <img style={{width:"80px", height:"auto"}}src={produ.product.image} alt="Bike" /> 
                            <div className="cancel">
                                <button onClick={() => deleteFromCart(produ.product.id)} style={{   
                                            display: "block",
                                            background: "transparent",
                                            border: "2px solid #d9ed8b",
                                            borderRadius: "8px",
                                            color: "#cbf442",
                                            marginTop: "0.5rem",
                                            width: "2rem",
                                            height: "1.8rem"
                                        }} >x</button>
                            </div>       
                        </ul>

                    </div> ) }
                <br/>
                
                <div className="form" >

                    <form 
                        onSubmit={buys} >

                        <h1>Login!</h1>
                        <br />
                        <input 
                            type="text" 
                            name="name" 
                            placeholder="name" 
                            onChange={handleChange}
                            value={dataForm.name}
                            />
                        <br />
                        <input 
                            type="number" 
                            name="phone"
                            placeholder="tel" 
                            onChange={handleChange}
                            value={dataForm.phone}
                            />
                        <br/>
                        <input 
                            type="email" 
                            name="email"
                            placeholder="email" 
                            onChange={handleChange}
                            value={dataForm.email}        
                            />
                        <br/>
                        <button style={{   
                            display: "block",
                            background: "transparent",
                            border: "2px solid #d9ed8b",
                            borderRadius: "8px",
                            color: "#111",
                            marginTop: "0.5rem",
                            width: "8rem",
                            height: "1.8rem"
                        }} >Generate order!</button>
                        {`Total: ${priceTotal()}`}
                    </form>
                    <button onClick={deleteList} style={{   
                        display: "block",
                                    background: "transparent",
                                    border: "2px solid #d9ed8b",
                                    borderRadius: "8px",
                                    color: "#111",
                                    marginTop: "0.5rem",
                                    width: "8rem",
                                    height: "1.8rem"
                                }} >Empty cart!</button>
                </div>  

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

                    <p style={{
                        background: "transparent",
                        border: "none"
                    }}>' Click to go home and see our product catalog '</p> 
                </Link>
     

            </> 

            :

            <> 

                <div>
                    <video src={Video} 
                    style={{ 
                            marginTop: "0",
                            width: "100%",
                            height: "40vh",
                            opacity: "0.9",
                            objectFit: "cover"
                                }} 
                    type="video/mp4" 
                    autoPlay muted loop>
                    </video>         
                    <p style={{
                    textAlign: "center",
                    fontSize: "9rem",
                    fontWeight: "bold",
                    width: "100%",
                    margin: "0px" 
                    }}>HEY BIKE!</p>
                </div> 

                <label>There is no product go buy now!</label>
               
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

            </> 
        
    }
               
        </div>;
    };
    
    export default Cart;
    