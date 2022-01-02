import React, { Fragment } from "react";
import classes from "../styles/Answers.module.css";
import Checkbox from "./Checkbox";

const Answers = ({ options = [], handleChange, input }) => {
  return (
    <div className={classes.answers}>
      {options.map(({ title, checked, correct }, index) => (
        <Fragment key={index}>
          {input ? (
            <Checkbox
              className={classes.answer}
              text={title}
              checked={checked}
              value={index}
              onChange={(e) => handleChange(e, index)}
            />
          ) : (
            <Checkbox
              disabled
              className={`${classes.answer} ${
                correct ? classes.correct : checked ? classes.wrong : null
              }`}
              text={title}
              defaultChecked={checked}
            />
          )}
        </Fragment>
      ))}
    </div>
  );
};

export default Answers;
