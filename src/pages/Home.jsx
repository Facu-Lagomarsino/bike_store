import React, { useState } from "react";
import Main from "../components/Main/Main";

const Home = () => {
  const [cart, setCart] = useState(0);

  return (
    <>

     
      <Main cart={cart} setCart={setCart} />
      
    </>
  );
};

export default Home;
