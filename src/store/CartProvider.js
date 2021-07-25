// This file has the CartProvider Component, the sole purpose of this Component is to manage the CartContext data and provide that context to all components and want the access to it

import React, { useReducer } from "react";

// External File Imports
import CartContext from "./cart-context";

const defaultCartState = {
  items: [],
  totalPrice: 0,
};

const cartReducer = (state, action) => {
  // switch (action.type) {
  //   case "ADD":
  // const existingCartItemIndex = state.items.findIndex(
  //   (item) => item.id === action.item.id
  // );

  // const existingCartItem = state.items[existingCartItemIndex];

  // let updatedItems;

  // if (existingCartItem) {
  //   const updatedItem = {
  //     ...existingCartItem,
  //     amount: existingCartItem.amount + action.item.amount,
  //   };

  //   updatedItems = [...state.items];
  //   updatedItems[existingCartItemIndex] = updatedItem;
  // } else {
  //   updatedItems = state.items.concat(action.item);
  // }

  // const updatedTotalPrice =
  //   state.totalPrice + action.item.amount * action.item.price;

  // return {
  //   items: updatedItems,
  //   totalPrice: updatedTotalPrice,
  // };

  //   case "REMOVE":
  // const existingCartItemIndex = state.items.findIndex(
  //   (item) => item.id === action.id
  // );

  // const existingCartItem = state.items[existingCartItemIndex];

  // if (existingCartItem.amount === 1) {
  //   updatedItems = state.items.filter((item) => item.id !== action.id);
  // } else {
  //   updatedItem = {
  //     ...existingCartItem,
  //     amount: existingCartItem.amount - 1,
  //   };
  //   updatedItems = [...state.items];
  //   updatedItems[existingCartItemIndex] = updatedItem;
  // }

  // return {
  //   items: updatedItem,
  //   totalPrice: updatedTotalPrice,
  // };

  //   default:
  //     return defaultCartState;
  // }

  if (action.type === "ADD") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.item.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    let updatedItems;

    if (existingCartItem) {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount + action.item.amount,
      };

      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    } else {
      updatedItems = state.items.concat(action.item);
    }

    const updatedTotalPrice =
      state.totalPrice + action.item.amount * action.item.price;

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }

  if (action.type === "REMOVE") {
    const existingCartItemIndex = state.items.findIndex(
      (item) => item.id === action.id
    );

    const existingCartItem = state.items[existingCartItemIndex];

    const updatedTotalPrice = state.totalPrice - existingCartItem.price;

    let updatedItems;

    if (existingCartItem.amount === 1) {
      updatedItems = state.items.filter((item) => item.id !== action.id);
    } else {
      const updatedItem = {
        ...existingCartItem,
        amount: existingCartItem.amount - 1,
      };
      updatedItems = [...state.items];
      updatedItems[existingCartItemIndex] = updatedItem;
    }

    return {
      items: updatedItems,
      totalPrice: updatedTotalPrice,
    };
  }
};

const CartProvider = (props) => {
  // State for the Cart
  const [cartState, dispatchCart] = useReducer(cartReducer, defaultCartState);

  // Method for adding an item to the cart
  const addItemToCartHandler = (item) => {
    dispatchCart({ type: "ADD", item: item });
  };

  // Method for removing an item from the cart
  const removeItemFromCartHandler = (id) => {
    dispatchCart({ type: "REMOVE", id: id });
  };

  // Adding a CartContext helper context
  const cartContext = {
    items: cartState.items,
    totalPrice: cartState.totalPrice,
    addItem: addItemToCartHandler,
    removeItem: removeItemFromCartHandler,
  };

  return (
    <CartContext.Provider value={cartContext}>
      {props.children}
    </CartContext.Provider>
  );
};

export default CartProvider;
