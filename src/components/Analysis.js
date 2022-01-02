import React from "react";
import classes from "../styles/Analysis.module.css";
import Questions from "./Questions";

const Analysis = ({ answers, score, noq }) => {
  return (
    <div className={classes.analysis}>
      <h1>Question Analysis</h1>
      <h4>
        You answerd {score} out of {noq * 5} questions correctly
      </h4>
      <Questions answers={answers} />
    </div>
  );
};

export default Analysis;
