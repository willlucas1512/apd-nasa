import React from "react";
import { Link } from "react-router-dom";
import styles from "./BackButton.module.css";

function BackButton() {
  return (
    <Link to="/">
      <div className={styles.icon}>
        <span className={"material-icons"}>arrow_back</span>
      </div>
    </Link>
  );
}

export default BackButton;
