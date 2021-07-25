import React, { useState } from "react";

// Import for Style
import classes from "./MealForm.module.css";

// Imports for external Components
import YellowButton from "../UI/YellowButton/YellowButton";
import Input from "../UI/Input/Input";

const MealForm = (props) => {
  const [amountIsValid, setAmountIsValid] = useState(true);
  const [enteredAmount, setEnteredAmount] = useState("1");

  const inputChangeHandler = (event) => {
    setEnteredAmount(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();

    const enteredAmountNumber = +enteredAmount;

    if (
      enteredAmount.trim().length === 0 ||
      enteredAmountNumber < 1 ||
      enteredAmountNumber > 5
    ) {
      setAmountIsValid(false);
      return;
    }

    props.onAddToCart(enteredAmountNumber);
  };

  return (
    <div className={classes.MealForm}>
      <div className={classes.amount}>
        <form onSubmit={formSubmitHandler}>
          <Input
            label="Amount"
            input={{
              id: "amount_" + props.id,
              type: "number",
              min: "1",
              max: "10",
              step: "1",
              defaultValue: "1",
              value: enteredAmount,
              onChange: inputChangeHandler,
            }}
          />
          <YellowButton className="submitButton" content="+ Add" />
        </form>
      </div>
    </div>
  );
};

export default MealForm;

// The Goal here is to grab the entered amount and forward it to the Meal component
