// This file has the context for the cart, e.g, cart items, the total amount, and the methods used to add and remove item from the cart
import React, { createContext } from "react";

const CartContext = createContext({
  items: [],
  totalPrice: 0,
  addItem: (item) => {},
  removeItem: (id) => {},
});

export default CartContext;
