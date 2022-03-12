import "./Footer.css";

// Images
import MyLogo from '../../img/lt.png';
import Maps from '../../img/google-maps.png';
import Instagram from '../../img/instagram.png';
import Facebook from '../../img/facebook.png';

const footer = () => {
    return (
        <>

        <footer className="myFooter">
            <h1>MOVE BY BICYCLE!</h1>
            <img className="logo" src={MyLogo} alt="Logo"/>
            <div className="networks">
                <a href="https://www.google.com/"><img src={Maps} alt="Ubicación" /></a>
                <a href="https://www.instagram.com/facu.lagomarsino/"><img src={Instagram} alt="Instagram" /></a>
                <a href="https://www.facebook.com/"><img src={Facebook} alt="Facebook" /></a>
            </div>
        </footer>

        </>
    )
}

export default footer;
