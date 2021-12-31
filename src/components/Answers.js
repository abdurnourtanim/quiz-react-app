import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = () => {
  return (
    <div className={classes.answers}>
      <Checkbox className={classes.answer} text="Text answer 1 " />
    </div>
  );
};

export default Answers;
