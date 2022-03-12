import { useState, useEffect } from "react";
import { collection, getDocs, getFirestore, query, where } from 'firebase/firestore'; 

import Spinner from 'react-bootstrap/Spinner';
import ItemList from "../ItemList/ItemList";
import "./ItemListContainer.css";

// Images
import Maps from "../../img/google-maps.png";
import Instagram from "../../img/instagram.png";
import Facebook from "../../img/facebook.png";
import { useParams } from "react-router-dom";

const ItemListContainer = ({ greeting, cart, setCart }) => {
  const [ products, setProducts ] = useState([]);
  const {idCategory} = useParams(); 
  const [ loading, setLoading ] = useState(true);

  useEffect(() => {

    async function getAll() {

      try {
        const db = getFirestore();
        const queyCollection = collection(db, "items");

        const queryFilter = idCategory
                      ? query(queyCollection, where("category", "==", idCategory))
                      : queyCollection
         
        const response = await getDocs(queryFilter);
        setProducts(response.docs.map(prod => ( { id: prod.id, ...prod.data() } )))
        setLoading(false);

      }catch (error) {
        console.log("e", error);

      }
    }
       
    getAll();

  }, [idCategory])   

   

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
      <div className="socialNetworks">
        {socialNet.map((icon) => (
          <img
            key={icon.id}
            src={icon.image}
            alt={icon.name}
            style={{ display: "inline-block", padding: "1rem" }}
          />
        ))}
      </div>
      <div> 
   
      {loading ? (
          <>
            
          <Spinner animation="border" style={{ justifyContent: "center", margin: "5rem", position: "absolute", width: "5rem", height: "5rem" }} />

          </>
        ) : (
          <div id="catalog" className="catalogs">
            <h1>{greeting}</h1>
            <ItemList products={products} cart={cart} setCart={setCart} />
          </div>
        )}
      </div>
    </>
  );
};

export default ItemListContainer;
