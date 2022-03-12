import { useState } from "react";
import { Link } from "react-router-dom";
import "./NavBar.css";
import Category from "../Category/Category";
import Language from "../Stateless/Language/Language";
import CartWidget from "../CartWidget/CartWidget";
import MenuHam from "../MenuHam/MenuHam";
import { useCartContext } from "../../contexts/CartContext";

// Images
import MyLogo from "../../img/lt.png";
import HamMenu from "../../img/hammenu.png";
import Close from "../../img/close.png"

const NavBar = ({ notification }) => { 
    const [open, setOpen] = useState(false)
    const { cartList, iconCart } = useCartContext();

    const toggleMenu = () => {
        setOpen(!open)
    }
   
    return (
        <>

        <header className="myHeader"> 
        
            <Link to="/" className="title"> 
                <h1>Bike-Store.</h1>
            </Link>

            <Link to="/" style={{ display: "block", paddingBottom: "1rem" }}> 
                <img src={MyLogo} className="App-logo" alt="Logo" />
            </Link>
        
            <Category />

            <Language />

            {cartList.length < 1 ? (
          " "
        ) : (
          <p style={{  
                fontSize: "13px",
                color: "#b0dd0b",
                padding: "0px 10px",
                position: "fixed",
                top: "1.8rem",
                right: "3.9rem"
          }} >             
            {iconCart()} </p>
        )}
            <Link to="/cart"><CartWidget notification={notification} /></Link>
      

            <button type="button" onClick={toggleMenu} className="navbar menu">
                <img src={open ? Close : HamMenu} alt="Menu"/>
            </button>  

            {open && <MenuHam />}

        </header>      
        
        </>
    );
}

export default NavBar;