function actionAddToSearchList(id, searchQuery, searchLocation) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload : {
      id,
      searchQuery,
      searchLocation
    }
  };
}

export {
  actionAddToSearchList
};
