import React from "react";
import styles from "./ErrorFeedback.module.css";
import PropTypes from "prop-types";
import BackButton from "../BackButton/BackButton";

function ErrorFeedback({ message }) {
  return (
    <div className={styles.root}>
      <BackButton />
      <div className={styles.container}>
        <div className={styles.modal}>
          <div className={styles.icon}>
            <span style={{ fontSize: "inherit" }} className={"material-icons"}>
              cancel
            </span>
          </div>
          <p className={styles.message}>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default ErrorFeedback;
ErrorFeedback.propTypes = {
  message: PropTypes.string,
};
