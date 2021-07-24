import React, { useContext } from "react";

// Import for Style
import classes from "./Navbar.module.css";

// Imports for external Components
import CartContext from "../../store/cart-context";

const Navbar = (props) => {
  // Extracting the totalAmount from the CartContext object
  const cart = useContext(CartContext);

  // Calculating the total number of items in the cart
  const numberOfCartItems = cart.items.reduce((currentNumber, item) => {
    return currentNumber + item.amount;
  }, 0);

  return (
    <div className={classes.navbar}>
      <h1>OrderUp</h1>
      <a onClick={props.onOpenCart} className={classes.button}>
        <i class="fas fa-shopping-cart"></i>
        {"  "}Your Cart{" "}
        <p className={classes.CartAmount}>{numberOfCartItems}</p>
      </a>
    </div>
  );
};

export default Navbar;
