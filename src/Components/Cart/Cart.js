import React, { useContext } from "react";

// Import for Style
import classes from "./Cart.module.css";

// Imports for external components
import Modal from "../UI/Modal/Modal";
import CartContext from "../../store/cart-context";

const Cart = (props) => {
  const cart = useContext(CartContext);

  // const CART_ITEMS = [
  // {
  //   id: "c1",
  //   name: "Sushi",
  //   amount: 2,
  //   price: 22.99,
  // },

  // {
  //   id: "c2",
  //   name: "Green Bowl",
  //   amount: 1,
  //   price: 18.99,
  // },

  // {
  //   id: "c3",
  //   name: "Barbecue Burger",
  //   amount: 1,
  //   price: 12.99,
  // },
  // ];

  const CartItems = (
    <ul className={classes["cart-items"]}>
      {cart.items.map((CartItem) => (
        <div>
          <div className={classes["cart-item"]}>
            <li>{CartItem.name}</li>
            <li className={classes["cart-item-price"]}>${CartItem.price}</li>
            <li className={classes["cart-item-amount"]}>{CartItem.amount}</li>
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
      </div>
      {CartItems}
      <div className={classes.total}>
        <span>Total:</span>
        <span className={classes.totalPrice}>${cart.totalPrice}</span>
      </div>

      <div className={classes.actions}>
        <button onClick={props.onCloseCart} className={classes["button-alt"]}>
          Close
        </button>
        <button className={classes.button}>Order</button>
      </div>
    </Modal>
  );
};

export default Cart;
