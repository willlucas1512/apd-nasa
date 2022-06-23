import React, { useEffect, useState } from "react";
import styles from "./List.module.css";
import earth from "./earth.gif";
import { formatDate } from "../../utils/date";

function List() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getData = async () => {
      try {
        const response = await fetch(process.env.REACT_APP_API_URL);
        if (!response.ok) {
          throw new Error(
            `This is an HTTP error: The status is ${response.status}`
          );
        }
        let actualData = await response.json();
        setData(actualData);
        setError(null);
      } catch (err) {
        setError(err.message);
        setData({});
      } finally {
        setLoading(false);
      }
    };
    getData();
  }, []);

  return (
    <>
      <div className={styles.titleDiv}>
        <h2 className={styles.title}>Astronomy Picture of the Day</h2>
      </div>
      {loading ? (
        <div className={styles.centralized}>
          <img
            className={styles.earth}
            height={"200px"}
            width={"200px"}
            src={earth}
          />
          <div className={styles.loading}>
            <span className={styles.letter}>C</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>R</span>
            <span className={styles.letter}>E</span>
            <span className={styles.letter}>G</span>
            <span className={styles.letter}>A</span>
            <span className={styles.letter}>N</span>
            <span className={styles.letter}>D</span>
            <span className={styles.letter}>O</span>
            <span className={styles.letter}>.</span>
            <span className={styles.letter}>.</span>
            <span className={styles.letter}>.</span>
          </div>
        </div>
      ) : (
        <div className={styles.container}>
          <div className={styles.inputs}>
            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Procure por nome ou selecione uma data"
              />
            </div>
            <input className={styles.dateSelector} type="date" />
            <button className={styles.searchBtn}>
              <span className="material-icons md-18">search</span>
            </button>
          </div>
          <div className={styles.list}>
            {Object.values(data).map((pItem, pIndex) => {
              return (
                <div key={pIndex} className={styles.item}>
                  <img src={pItem.url} />
                  <p className={styles.textTitle}>
                    <b>{pItem.title}</b>
                  </p>
                  <p className={styles.text}>{formatDate(pItem.date)}</p>
                </div>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default List;
