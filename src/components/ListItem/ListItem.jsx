import React from "react";
import { Link } from "react-router-dom";
import { formatDate } from "../../utils/date";
import styles from "./ListItem.module.css";
import PropTypes from "prop-types";

function ListItem(props) {
  const { url, title, date } = props.item;
  const xFormattedDate = formatDate(date);
  return (
    <Link to={{ pathname: "/detail", state: { item: props.item } }}>
      <div className={styles.item}>
        <img
          alt={`Nasa's astronomy of the day from ${xFormattedDate}`}
          src={url}
        />
        <div className={styles.text}>
          <b>{title}</b>
        </div>
        <div className={styles.text}>{xFormattedDate}</div>
      </div>
    </Link>
  );
}

export default ListItem;
ListItem.propTypes = {
  item: PropTypes.shape({
    url: PropTypes.string,
    title: PropTypes.string,
    date: PropTypes.string,
  }),
};
