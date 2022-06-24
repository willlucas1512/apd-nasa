import React, { useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom";
import styles from "./List.module.css";
import earth from "./earth.gif";
import { formatDate } from "../../utils/date";

function List() {
  const [data, setData] = useState({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const dataRef = useRef([]);
  const requestSize = useRef(12);

  const handleNameSearch = (pEvent) => {
    const xValue = pEvent.target.value.replace(/\s/g, "").toLowerCase();
    if (Object.keys(xValue).length === 0) {
      setSearchResult([]);
      return;
    }
    const xDataToCompare = data.map(({ title }) =>
      title.replace(/\s/g, "").toLowerCase()
    );
    const xResult = xDataToCompare.filter((pElement) =>
      pElement.includes(xValue)
    );

    let xSearchResult = [];

    if (xResult.length > 0) {
      xResult.forEach((pItem) =>
        xSearchResult.push(data[xDataToCompare.indexOf(pItem)])
      );
    }

    setSearchResult(xSearchResult);
  };

  const handleDateSearch = (pEvent) => {
    const xValue = pEvent.target.value;
    getData({ date: xValue });
  };

  const getData = async (pParams) => {
    try {
      const xHasDate = pParams?.date;
      const xParams = xHasDate
        ? `&date=${pParams?.date}`
        : `&count=${requestSize.current}`;
      const rResponse = await fetch(process.env.REACT_APP_API_URL + xParams);
      if (!rResponse.ok) {
        throw new Error(
          `This is an HTTP error: The status is ${rResponse.status}`
        );
      }
      let xJsonData = await rResponse.json();
      const xData = xHasDate ? [xJsonData] : xJsonData;
      setData(xData);
      setError(null);
    } catch (rErr) {
      setError(rErr.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    if (searchResult.length > 0) {
      setData(searchResult);
    } else {
      setData(dataRef.current);
    }
  }, [searchResult]);

  useEffect(() => {
    if (data.length === requestSize.current) {
      dataRef.current = data;
    }
  }, [data]);

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
      ) : (
        <div className={styles.container}>
          <div className={styles.inputs}>
            <div className={styles.searchBox}>
              <input
                className={styles.searchInput}
                type="text"
                placeholder="Search by name or select a date"
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
                <Link
                  style={{ height: "100%" }}
                  key={pIndex}
                  to={{ pathname: "/detail", state: { item: pItem } }}
                >
                  <div className={styles.item}>
                    <img src={pItem.url} />
                    <div className={styles.text}>
                      <b>{pItem.title}</b>
                    </div>
                    <div className={styles.text}>{formatDate(pItem.date)}</div>
                  </div>
                </Link>
              );
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default List;
