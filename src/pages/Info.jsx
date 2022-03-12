import { Link } from "react-router-dom";
import Video from '../img/bike.mp4';


const Info = () => {

  return (
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
          autoPlay muted loop></video>         
        <p style={{
          textAlign: "center",
          fontSize: "9rem",
          fontWeight: "bold",
          width: "100%",
          margin: "0px" 
        }}>HEY BIKE!</p>
      </div> 

      <div style={{ width: "100%", height: "100%", display: "flex", justifyContent: "center"}}>
        
        <label style={{ 
          width: "60rem",
          textAlign: "center",
          fontSize: "1.5rem",
          color: "black",
          padding: "1rem 1rem 4rem 1rem" 
           }}>¨ All the information provided by this site is in order to achieve awareness of humanity in the use of your bicycle as well as for health, as well as care for the environment. We offer products of excellent quality in all its aspects. We want to ensure that your motivation is to use your bicycle as a means of transportation, a tool for your favorite sport and that this is potentially transmitted to all the people who believe in this community. Thank you very much for your time! ¨
        </label>
    
        <Link to="/" style={{ 
              color: "black",
              textDecoration: "none",
              position: "absolute", 
              top: "60rem" 
              }}>
          <p>' Click to go home and see our product catalog '</p> 
        </Link>

      </div>

    </>
  );
};

export default Info;
