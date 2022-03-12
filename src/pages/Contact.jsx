import { Link } from "react-router-dom";

// Images
import MyPhoto from '../img/perfil.JPG';
import Maps from "../img/google-maps.png";
import Instagram from "../img/instagram.png";
import Facebook from "../img/facebook.png";

const contact = () => {

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

    <label>FOLLOW US ON OUR SOCIAL NETWORKS!</label>

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

    <div style={{ textAlign: "center"}}>
      
      <p style={{ 
        background: "transparent", 
        border: "none", 
        marginTop: "6rem"
            }}>' This app was created by Facu Lagomarsino '</p>

      <img src={MyPhoto} alt={`Baz taking a ${MyPhoto}`} style={{ width: "10rem", justifyContent: "center"}} />

    </div>      


      <Link to="/" style={{ 
          display: "flex", 
          justifyContent: "center", 
          color: "black",
          textDecoration: "none",
          padding: "1rem", 
          marginTop: "16rem" 
          }}>
          <p>' Click to go home and see our product catalog '</p> 
      </Link>
     
    </>
  );
};

export default contact;
