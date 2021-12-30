import React from "react";
import img from "../assets/images/signup.svg";
import classes from "../styles/Illustration.module.css";
const Illustration = () => {
  return (
    <div className={classes.illustration}>
      <img src={img} alt="Signup" />
    </div>
  );
};

export default Illustration;
