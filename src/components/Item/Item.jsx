/* import ItemCount from "../../components/ItemCount/ItemCount"; */
import { Link } from "react-router-dom";
import './Item.css'

function item({ description, image, id }) {

    return(
     
        <>

        <div className="cardContainer">
            <div className="card"  style={{ width:"20rem", border: "none"}}>
                <img src={image} className="card-img" alt="Bike" />
                <div className="card-body">
                    <h5 className="card-title">{description}</h5>
                    <Link to={`/item/${id}`} style={{display: "inline-block", textDecoration: "none", color: "#d9ed8b"}}>DETAIL!</Link>
                </div> 
            </div> 
        </div>    
      
        </>
    )
} 

export default item;