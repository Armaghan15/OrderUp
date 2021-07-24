import React, { useState } from "react";

// Imports for Components
import Navbar from "./Components/Navbar/Navbar";
import Header from "./Components/Header/Header";
import Meals from "./Components/Meals/Meals";
import Cart from "./Components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsOpen, setCartIsOpen] = useState(false);

  const openCartHandler = () => {
    setCartIsOpen(true);
  };

  const closeCartHanlder = () => {
    setCartIsOpen(false);
  };

  return (
    <CartProvider>
      <Navbar onOpenCart={openCartHandler} />
      {cartIsOpen && <Cart onCloseCart={closeCartHanlder} />}
      <Header />
      <Meals />
    </CartProvider>
  );
};

export default App;
