import React, { useContext } from "react";

// Import for Style
import classes from "./Cart.module.css";

// Imports for external components
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cart = useContext(CartContext);

  const hasItems = cart.items.length > 0;

  // Method for Adding Items to Cart with + button
  const cartItemAddHandler = (CartItem) => {
    cart.addItem({ ...CartItem, amount: 1 });
  };

  // Method for Removing Items to Cart with - button
  const cartItemRemoveHanlder = (id) => {
    cart.removeItem(id);
  };

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cart.items.map((CartItem) => (
        <div>
          <div className={classes["cart-item"]}>
            <li>{CartItem.name}</li>
            <li className={classes["cart-item-price"]}>${CartItem.price}</li>
            <li className={classes["cart-item-amount"]}>{CartItem.amount}</li>
            <div className={classes["editing-buttons"]}>
              <button
                onClick={cartItemAddHandler.bind(null, CartItem)}
                className={classes["increase-button"]}
              >
                +
              </button>
              <button
                onClick={cartItemRemoveHanlder.bind(null, CartItem.id)}
                className={classes["decrease-button"]}
              >
                -
              </button>
            </div>
          </div>
          <hr className={classes["cart-item-underline"]} />
        </div>
      ))}
    </ul>
  );

  return (
    <Modal onCloseCart={props.onCloseCart}>
      <div className={classes.headers}>
        <span>Meal</span>
        <span>Price</span>
        <span>Quantity</span>
        <span>Edit</span>
      </div>
      {CartItems}
      <div className={classes.total}>
        <span>Total:</span>
        <span className={classes.totalPrice}>
          ${cart.totalPrice.toFixed(2)}
        </span>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button-alt"]}>
          Close
        </button>

        {hasItems && <button className={classes.button}>Order</button>}
      </div>
    </Modal>
  );
};

export default Cart;
