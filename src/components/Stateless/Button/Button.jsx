import { useState } from 'react';
import { Link } from "react-router-dom";
import "./Button.css";


const Button = () => {
    
    return <button style={{ color: "black" }}>Join!</button>
}

const ButtonChange = ({ handleChange }) => {

    return   <Link to="/" onClick={handleChange} style={{   
                    display: "block",
                    background: "transparent",
                    border: "2px solid #d9ed8b",
                    borderRadius: "8px",
                    color: "#111",
                    marginTop: "0.5rem",
                    width: "8rem",
                    height: "1.8rem",
                    textAlign: "center"
                }}>Go to Home!</Link>
         
}

const GoToCart = () => {
    const [ buttonType, setButtonType ] = useState("button")

    const handleChange = () => {
        setButtonType("button")
    }

    return (

    
        <>

        { 

            buttonType === "button" ?
            <ButtonChange handleChange={handleChange} />

            : 

            <Button />
        
        }


        </>

    );
}

export default GoToCart;
