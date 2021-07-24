import React from "react";

// Import for Style
import classes from "./YellowButton.module.css";

const YellowButton = (props) => {
  return (
    <button
      type={props.buttonType}
      className={`${classes.YellowButton} ${props.className}`}
      href={props.toLink}
    >
      {props.content}
    </button>
  );
};

export default YellowButton;
