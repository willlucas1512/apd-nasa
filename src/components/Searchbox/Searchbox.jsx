import React from "react";
import styles from "./Searchbox.module.css";
import PropTypes from "prop-types";

function Searchbox(props) {
  return (
    <div className={styles.inputs}>
      <div className={styles.searchBox}>
        <div className={styles.icon}>
          <span className={"material-icons md-18"}>search</span>
        </div>
        <input
          name="nome"
          onChange={props.handleNameSearch}
          className={styles.searchInput}
          type="text"
          placeholder="Search by name or select a date"
        />
      </div>
      <input
        onChange={props.handleDateSearch}
        name="data"
        className={styles.dateSelector}
        type="date"
      />
    </div>
  );
}
export default Searchbox;
Searchbox.propTypes = {
  handleNameSearch: PropTypes.func,
  handleDateSearch: PropTypes.func,
};
