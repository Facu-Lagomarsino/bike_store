/* import React, { useState } from "react";
 */import { Link } from "react-router-dom";

const info = () => {
/*   const [cart, setCart] = useState(0); */

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

export default info;
