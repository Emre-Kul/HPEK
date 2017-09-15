function addToSearchList(searchData) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload: searchData
  };
}
function searchVenue(searchVenueData) {
  return {
    type: "SEARCH_VENUE",
    payload: searchVenueData
  };
}

export {
  addToSearchList,
  searchVenue
};
