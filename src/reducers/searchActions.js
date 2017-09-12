function actionAddToSearchList(id, searchQuery, searchLocation) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    id,
    searchQuery,
    searchLocation
  };
}

export {
  actionAddToSearchList
};
