import { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { getFirestore, doc, getDoc} from 'firebase/firestore';
import Spinner from 'react-bootstrap/Spinner';

import ItemDetail from "../ItemDetail/ItemDetail";
import "./ItemDetailContainer.css";

function ItemDetailContainer() {
    const [product, setProduct] = useState([]);
    const [loading, setLoading] = useState([]);
    const { id } = useParams();

    useEffect(() => {
        
      async function getById() {

        try {
          const db = getFirestore();
          const product = doc(db,"items", id);
          const response = await getDoc(product);
          setProduct({ id: response.id, ...response.data() });
          setLoading(false);

        }catch (error){

        }
      }
      getById();  

    }, [id])


  return (
    <>

      <div style={{ height: "84vh", width: "100%"}}>

          
        {
          loading

          ?

          <Spinner animation="border" 
          style={{
            display: "flex", 
            justifyContent: "center", 
            margin: "5rem", 
            position: "fixed",
            top: "20rem", 
            right: "50%",
            width: "5rem", 
            height: "5rem" }} />

          :

          <>

            <div className="container">
              <Link to={`/item/${id}`} style={{ display: "block", paddingBottom: "1rem", color: "black", textDecoration: "none" }}>
                <ItemDetail product={ product } />
              </Link>
            </div>

          </>
          
        }

      </div>

    </>
  );
}

export default ItemDetailContainer;
