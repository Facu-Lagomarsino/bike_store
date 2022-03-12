
import "./CartWidget.css";

// Images
import Cart from "../../img/cart1.png";

const cartWidget = () => {
 

  return (
    <div className="cart">
      <img src={Cart} alt="carrito" />
      <div className="notification">
        
      </div>
    </div>
  );
};

export default cartWidget;
