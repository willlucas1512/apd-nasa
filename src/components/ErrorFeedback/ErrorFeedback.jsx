import React from "react";
import styles from "./ErrorFeedback.module.css";
import PropTypes from "prop-types";

function ErrorFeedback({ message }) {
  return (
    <div className={styles.container}>
      <p className={styles.message}>{message}</p>
    </div>
  );
}

export default ErrorFeedback;
ErrorFeedback.propTypes = {
  message: PropTypes.string,
};
