import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date";
import ErrorFeedback from "../../components/ErrorFeedback";
import styles from "./Detail.module.css";
import PropTypes from "prop-types";
import BackButton from "../../components/BackButton/BackButton";

function Detail(props) {
  if (props.location?.state) {
    const { url, title, date, explanation } = props.location.state.item;
    const xFormattedDate = formatDate(date);
    return (
      <>
        <div className={styles.titleDiv}>
          <BackButton />
          <h2 className={styles.title}>Astronomy Picture of the Day</h2>
        </div>
        <div className={styles.container}>
          <div className={styles.item}>
            <div className={styles.imgContainer}>
              <a href={url}>
                <img
                  alt={`Nasa's astronomy of the day from ${xFormattedDate}`}
                  className={styles.img}
                  src={url}
                />
              </a>
              <span className={styles.label}>Click to open image</span>
            </div>
            <div className={styles.texts}>
              <div className={styles.text}>
                <b>{title}</b>
              </div>
              <div className={styles.date}>{xFormattedDate}</div>
              <div className={styles.textExplanation}>{explanation}</div>
            </div>
          </div>
        </div>
      </>
    );
  } else {
    return (
      <ErrorFeedback
        message={
          "It is not possible to access this route directly. Please navigate through interface."
        }
      />
    );
  }
}

export default Detail;
Detail.propTypes = {
  location: PropTypes.object,
};
