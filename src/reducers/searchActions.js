function addToSearchList(searchData) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload: searchData
  };
}
function searchVenueStarted() {
  return {
    type: "SEARCH_VENUE_STARTED",
  };
}
function searchVenueFulfilled(searchVenueData) {
  return {
    type: "SEARCH_VENUE_FULFILLED",
    payload: {
      ...searchVenueData
    }
  };
}
function searchVenueRejected(rejectionReason) {
  return {
    type: "SEARCH_VENUE_REJECTED",
    payload: {
      error: rejectionReason
    }
  };
}

export {
  addToSearchList,
  searchVenueStarted,
  searchVenueFulfilled,
  searchVenueRejected
};
