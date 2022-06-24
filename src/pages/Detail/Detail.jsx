import React from "react";
import { Link } from "react-router-dom";
import styles from "./Detail.module.css";
import { formatDate } from "../../utils/date";

function Detail(props) {
  const { url, title, date, explanation } = props.location.state.item;

  return (
    <>
      <div className={styles.titleDiv}>
        <Link style={{ zIndex: 9999 }} to="/list">
          <div className={styles.icon}>
            <span className={"material-icons"}>arrow_back</span>
          </div>
        </Link>
        <h2 className={styles.title}>Astronomy Picture of the Day</h2>
      </div>
      <div className={styles.container}>
        <div className={styles.item}>
          <div className={styles.imgContainer}>
            <img src={url} />
          </div>
          <div className={styles.text}>
            <b>{title}</b>
          </div>
          <div className={styles.text}>{formatDate(date)}</div>
          <div className={styles.textExplanation}>{explanation}</div>
        </div>
      </div>
    </>
  );
}

export default Detail;
