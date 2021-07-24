import React, { useContext } from "react";

// Imports for Styles
import classes from "./Meal.module.css";

// Imports for external Components
import MealForm from "./MealForm";
import CartContext from "../../store/cart-context";

const Meal = (props) => {
  // Formating the Price so that always displays to 2 decimal places
  const price = `${props.price.toFixed(2)}`;

  const cart = useContext(CartContext);

  const addToCartHandler = (amount) => {
    const item = {
      id: props.id,
      name: props.name,
      amount: amount,
      price: props.price,
    };

    cart.addItem(item);
  };

  return (
    <div className={classes.meal}>
      <div className={classes.MealDetails}>
        <h2>{props.name}</h2>
        <p className={classes.description}>{props.description}</p>
        <p className={classes.price}>${price}</p>
      </div>
      <MealForm onAddToCart={addToCartHandler} id={props.id} />
    </div>
  );
};

export default Meal;
