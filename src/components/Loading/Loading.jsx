import React from "react";
import earth from "./earth.gif";
import styles from "./Loading.module.css";

function Loading() {
  return (
    <div className={styles.centralized}>
      <img
        alt={"Spinning earth"}
        className={styles.earth}
        height={"200px"}
        width={"200px"}
        src={earth}
      />
      <div className={styles.loading}>
        <span className={styles.letter}>L</span>
        <span className={styles.letter}>O</span>
        <span className={styles.letter}>A</span>
        <span className={styles.letter}>D</span>
        <span className={styles.letter}>I</span>
        <span className={styles.letter}>N</span>
        <span className={styles.letter}>G</span>
        <span className={styles.letter}>.</span>
        <span className={styles.letter}>.</span>
        <span className={styles.letter}>.</span>
      </div>
    </div>
  );
}

export default Loading;
