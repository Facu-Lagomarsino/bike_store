/* import React, { useState } from "react"; */
import { Link } from "react-router-dom";
import { useCartContext } from "../contexts/CartContext";
import { useState } from "react";
import Button from "../components/Stateless/Button/Button"; 
import { 
  getFirestore, 
  collection, 
  addDoc
} from "firebase/firestore";

// Images
import Maps from "../img/google-maps.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";


const Community = () => {
  const [show, setShow] = useState(true)
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

  const addUser = () => {
    setShow(false)
 }

 const socialNet = [
  {
    id: 1,
    image: Maps,
    name: "maps",
  },
  {
    id: 2,
    image: Instagram,
    name: "instagram",
  },
  {
    id: 3,
    image: Facebook,
    name: "facebook",
  },
];

  return (
    <>

    <label>JOIN OUR COMMUNITY!</label>

    <div className="socialNetworks">
        {socialNet.map((icon) => (
          <img
            /* key={icon.id} */
            src={icon.image}
            alt={icon.name}
            style={{ display: "inline-block", padding: "1rem" }}
          />
        ))}
    </div>

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
        
            {show?
                <button onClick={addUser} style={{   
                  display: "block",
                  background: "transparent",
                  border: "2px solid #d9ed8b",
                  borderRadius: "8px",
                  color: "#111",
                  marginTop: "0.5rem",
                  width: "8rem",
                  height: "1.8rem"
              }} >
                Join!</button>

                :
                
                (<Link to="/cart"><Button className="add">Check cart</Button></Link> 
                
                )} 
      </form>

    </div>  
    
    <Link to="/" style={{ 
          display: "flex", 
          justifyContent: "center", 
          color: "black",
          textDecoration: "none",
          padding: "1rem" }}>
          <p>' Click to go home and see our product catalog '</p> 
    </Link>
    
    </>
  );
};

export default Community;
