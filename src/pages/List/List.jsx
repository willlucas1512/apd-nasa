import React, { useEffect, useState, useRef } from "react";
import styles from "./List.module.css";
import earth from "./earth.gif";
import { formatDate } from "../../utils/date";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([]);

  const dataRef = useRef([]);
  const requestSize = useRef(10);

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
              <div className={styles.icon}>
                <span className={"material-icons md-18"}>search</span>
              </div>
              <input
                name="nome"
                onChange={handleNameSearch}
                className={styles.searchInput}
                type="text"
                placeholder="Procure por nome ou selecione uma data"
              />
            </div>
            <input
              onChange={handleDateSearch}
              name="data"
              className={styles.dateSelector}
              type="date"
            />
          </div>
          <div className={styles.list}>
            {data.map((pItem, pIndex) => {
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
