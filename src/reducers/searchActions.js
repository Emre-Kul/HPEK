function actionAddToSearchList(searchData) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload: searchData
  };
}

export {
  actionAddToSearchList
};
