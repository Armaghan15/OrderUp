import React from "react";

// Import for Styles
import classes from "./Meals.module.css";

// Imports for external Components
import Meal from "../Meal/Meal";

const DUMMY_MEALS = [
  {
    id: "m1",
    name: "Sushi",
    description: "Finest fish and veggies",
    price: 22.99,
  },
  {
    id: "m2",
    name: "Schnitzel",
    description: "A Bavarian specialty!",
    price: 16.5,
  },
  {
    id: "m3",
    name: "Barbecue Burger",
    description: "American, raw, meaty",
    price: 12.99,
  },
  {
    id: "m4",
    name: "Green Bowl",
    description: "Healthy...and green...",
    price: 18.99,
  },
];

const Meals = () => {
  return (
    <div id="meals" className={classes.meals}>
      {DUMMY_MEALS.map((meal) => (
        <Meal
          id={meal.id}
          key={meal.id}
          name={meal.name}
          description={meal.description}
          price={meal.price}
        />
      ))}
    </div>
  );
};

export default Meals;
