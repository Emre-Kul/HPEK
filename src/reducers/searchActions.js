function addToSearchList(searchData) {
  return {
    type: "ADD_TO_SEARCH_LIST",
    payload: searchData
  };
}
function searchVenueStarted() {
  return {
    type: "SEARCH_VENUE_STARTED",
    payload: {
      venuesLoading: true,
      errorAccrued: false
    }
  };
}
function searchVenueFulfilled(searchVenueData){
  return {
    type: "SEARCH_VENUE_FULFILLED",
    payload: {...searchVenueData,...{
      errorAccrued: false,
      venuesLoading: false
    }}
  };
}
function searchVenueRejected(rejectionReason){
  return {
    type: "SEARCH_VENUE_REJECTED",
    payload: {
      errorAccrued : true,
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
