import "./Main.css";
import ItemListContainer from "../ItemListContainer/ItemListContainer"

// Images/Video
import Banner from '../../img/bicicletas.jpeg';
import Down from '../../img/downarrow.png';
import Video from '../../img/bike.mp4';

const main = ({ cart, setCart }) => {


    const handleClick = () => {
        window.scrollTo({ top: "800", behavior: "smooth" });
        }

    const handleCatalog = () => {
        window.scrollTo({ top: "1700", behavior: "smooth" });
        }
        
    return (
        <>

        <div className="welcomeBanner"> 
            <h1 className="welcome">Welcome to the store chosen by the community that encourages the use of the bicycle as a means of transport and helps to improve society and the planet.</h1>
        </div>
            <div className="down"> 
                <p onClick={handleCatalog}>' Click to see the product catalog '</p>         
                <img src={Down} onClick={handleClick} alt="Down"/>  
            </div>

        <div>
            <img className="banner" src={Banner} alt="Bicicletas"/> 
        </div>
     
        <div className="video">
            <h1>Give your style!</h1>
            <video src={Video} type="video/mp4" autoPlay muted loop></video>         
            <p>HEY BIKE!</p>
        </div>  
        <ItemListContainer greeting="Catalog!" cart={cart} setCart={setCart} />
    
    
        </>
    )
}

export default main;
