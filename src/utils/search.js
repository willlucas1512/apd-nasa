/**
 * Executa a pesquisa por nome
 *
 * @param {String} pValue Query da pesquisa
 * @param {Array} pData Array de objetos a realizar a pesquisa
 */

export const handleNameSearch = (pValue, pData) => {
  const xDataToCompare = pData.map(({ title }) =>
    title.replace(/\s/g, "").toLowerCase()
  );
  const xResult = xDataToCompare.filter((pElement) =>
    pElement.includes(pValue)
  );

  let xSearchResult = [];
  if (xResult.length > 0) {
    xResult.forEach((pItem) =>
      xSearchResult.push(pData[xDataToCompare.indexOf(pItem)])
    );
  }

  return xSearchResult;
};
