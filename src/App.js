import { BrowserRouter, Routes, Route } from "react-router-dom";
    // Pages
import Home from "./pages/Home"    
import Info from "./pages/Info"    
import Community from "./pages/Community"    
import Contact from "./pages/Contact" 
 
    // Style
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
    // Components
import CartContextProvider from './contexts/CartContext';
import Cart from "./components/Cart/Cart"; 
import Navbar from "./components/NavBar/NavBar";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import Footer from "./components/Footer/Footer";

 

function App() {

    return (

        <>

        <BrowserRouter>
            <CartContextProvider> 

                <Navbar/>
                <Routes>
                    <Route path="/" element={ <Home /> } />
                    <Route path="/category/:idCategory" element={ <Home /> } />
                    <Route path='/cart' element={ <Cart />} />  
                    <Route path="/item/:id" element={ <ItemDetailContainer /> }/ >
                    <Route path="/info" element={ <Info /> } />
                    <Route path="/community" element={ <Community /> } />
                    <Route path="/contact" element={ <Contact /> } />
                </Routes>
                <Footer />

            </CartContextProvider>
        </BrowserRouter>
        
        </>

    );
}


export default App;