import { useState } from 'react';
import "./Button.css";


const Button = ({ add }) => {
    
    return <button className="btns" style={{ color: "black" }}  onClick={add}>Go to Cart!</button>
}

const ButtonChange = ({ handleChange }) => {

    return <button className="btns" onClick={handleChange}>Add Cart</button>
}

const GoToCart = () => {
    const [ buttonType, setButtonType ] = useState("button")

    const handleChange = () => {
        setButtonType("input")
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
