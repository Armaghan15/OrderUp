import React from "react";

// Imports for external Components
import YelloButton from "../UI/YellowButton/YellowButton";

// Import for Style
import classes from "./Header.module.css";

const Header = () => {
  return (
    <div className={classes.Header}>
      <div className={classes.TextContainer}>
        <h1>
          Delicious Food, <br />
          <span>Delivered To You</span>
        </h1>
        <p>
          Choose your favorite meal from our broad selection of available meals
          and enjoy a delicious lunch or dinner at home
        </p>
        <YelloButton toLink="meals" className="button" content="View Menu" />
      </div>

      <div className={classes.ImageContainer}>
        <img src={process.env.PUBLIC_URL + "/images/burger.svg"} alt="" />
      </div>
    </div>
  );
};

export default Header;
