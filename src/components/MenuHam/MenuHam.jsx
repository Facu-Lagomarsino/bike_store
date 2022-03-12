import { useState } from "react";
import { Link } from "react-router-dom";
import "./MenuHam.css"



const MenuHam = () => {
    const [positionUnderline, setPositionUnderline] = useState(0);

    const changeUnderlinePosition = (position) => {
        setPositionUnderline(position);
      };

    return (
        <>

        <div id="menuNav" className="menuNav">   
            <Link to="/" onMouseOver={() => changeUnderlinePosition(0)} style={{ display: "inline-block", paddingBottom: "1rem" }}>Home</Link>
            <Link to="/info" onMouseOver={() => changeUnderlinePosition(25)} style={{ display: "inline-block", paddingBottom: "1rem" }}>Info</Link>
            <Link to="/community" onMouseOver={() => changeUnderlinePosition(50)} style={{ display: "inline-block", paddingBottom: "1rem" }}>Community</Link>
            <Link to="/contact" onMouseOver={() => changeUnderlinePosition(75)} style={{ display: "inline-block", paddingBottom: "1rem" }}>Contact</Link>
            <span className="slide" Style={`left:${positionUnderline}%`}></span> 
        </div>

        </>  
    )
}

export default MenuHam;