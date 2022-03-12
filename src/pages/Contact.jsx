import { Link } from "react-router-dom";

const contact = () => {

  return (
    <>
  
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

export default contact;
