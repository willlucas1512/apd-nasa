import React, { useEffect, useState, useRef } from "react";
import ListItem from "../../components/ListItem";
import Loading from "../../components/Loading";
import Searchbox from "../../components/Searchbox";
import ErrorFeedback from "../../components/ErrorFeedback";
import { handleNameSearch } from "../../utils/search";
import { isBefore } from "../../utils/date";
import styles from "./List.module.css";

function List() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchResult, setSearchResult] = useState([]);
  const [showSeeMore, setShowSeeMore] = useState(false);

  const dataRef = useRef([]);
  const requestSize = useRef(12);

  /**
   * Chama a pesquisa por nome
   *
   * @param pEvent evento do onChange
   */
  const handleChangeName = (pEvent) => {
    const xValue = pEvent.target.value.replace(/\s/g, "").toLowerCase();
    if (Object.keys(xValue).length === 0) {
      setSearchResult([]);
      return;
    }
    setSearchResult(handleNameSearch(xValue, data));
  };

  /**
   * Pesquisa por data, chamando a API
   *
   * @param pEvent evento do onChange
   *
   */
  const handleDateSearch = (pEvent) => {
    const xValue = pEvent.target.value;
    const xStart = new Date("1995-06-16");
    const xSearchDate = new Date(xValue);
    const xToday = new Date();
    const xIsStartDay = xStart.toDateString() === xSearchDate.toDateString();
    if (!isBefore(xStart, xSearchDate) && !xIsStartDay) {
      setError(
        "The Astronomy Picture of the Day started in June 16, 1995. Choose a later date."
      );
    } else if (!isBefore(xSearchDate, xToday)) {
      setError(
        "You cannot choose a date in the future. Choose an earlier date."
      );
    } else {
      getData({ date: xValue });
    }

    setShowSeeMore(xValue.length > 0 ? false : true);
  };

  /**
   * Fetch da API
   *
   * @param {Object} pParams Objeto com possíveis atributos: date (YYYY-MM-DD), append (bool)
   */
  const getData = async (pParams = {}) => {
    try {
      const xHasDate = pParams?.date;
      const xParams = xHasDate
        ? `&date=${pParams?.date}`
        : `&count=${requestSize.current}`;
      const rResponse = await fetch(process.env.REACT_APP_API_URL + xParams);
      let xJsonData = await rResponse.json();
      const xData = xHasDate ? [xJsonData] : xJsonData;
      pParams?.append ? setData([...data, ...xData]) : setData(xData);
      setError(null);
    } catch (rErr) {
      setError(rErr.message);
      setData([]);
    } finally {
      setLoading(false);
    }
  };

  /**
   * Fetch da API para paginação
   */
  const handleSeeMore = () => {
    getData({ append: true });
  };

  useEffect(() => {
    // Altera a lista exibida na tela para o resultado da pesquisa
    if (searchResult.length > 0) {
      setData(searchResult);
      setShowSeeMore(false);
    } else {
      setShowSeeMore(true);
      setData(dataRef.current);
    }
  }, [searchResult]);

  useEffect(() => {
    // Armazena os dados originais para exibir após a limpeza da pesquisa
    if (data.length === requestSize.current) {
      dataRef.current = data;
    }
  }, [data]);

  useEffect(() => {
    // Fetch da API na montagem
    getData();
  }, []);

  if (error) {
    return <ErrorFeedback message={error} />;
  } else {
    return (
      <>
        <div className={styles.titleDiv}>
          <h2 className={styles.title}>Astronomy Picture of the Day</h2>
        </div>
        {loading ? (
          <Loading />
        ) : (
          <>
            <div className={styles.container}>
              <Searchbox
                handleDateSearch={handleDateSearch}
                handleNameSearch={handleChangeName}
              />
              <div className={styles.list}>
                {data.map((pItem, pIndex) => {
                  return <ListItem key={pIndex} item={pItem} />;
                })}
                {showSeeMore && (
                  <div className={styles.buttonDiv}>
                    <button onClick={handleSeeMore} className={styles.button}>
                      See more
                    </button>
                  </div>
                )}
              </div>
            </div>
          </>
        )}
      </>
    );
  }
}

export default List;
