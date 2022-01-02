import React from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange }) => {
  return (
    <div className={classes.answers}>
      {options.map(({ title, checked }, index) => (
        <Checkbox
          className={classes.answer}
          key={index}
          text={title}
          checked={checked}
          value={index}
          onChange={(e) => handleChange(e, index)}
        />
      ))}
    </div>
  );
};

export default Answers;
