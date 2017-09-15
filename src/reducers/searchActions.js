function actionAddToSearchList(searchData) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload: searchData
  };
}
function actionSearchVenue(searchVenueData){
  return {
    type: "SEARCH_VENUE",
    payload: searchVenueData
  }
}

export {
  actionAddToSearchList,
  actionSearchVenue
};
