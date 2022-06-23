import React from "react";
import styles from "./Background.module.css";

function Background() {
  return (
    <>
      <div className={styles.stars}></div>
      <div className={styles.twinkling}></div>
      <div className={styles.clouds}></div>
    </>
  );
}

export default Background;
