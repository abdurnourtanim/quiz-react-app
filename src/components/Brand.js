import React from "react";
import { Link } from "react-router-dom";
import img from "../assets/images/logo-bg.png";
import classes from "../styles/Nav.module.css";
const Brand = () => {
  return (
    <ul>
      <li>
        <Link to="/" className={classes.brand}>
          <img src={img} alt="Learn with Sumit Logo" />
          <h3>Learn with Sumit</h3>
        </Link>
      </li>
    </ul>
  );
};

export default Brand;
