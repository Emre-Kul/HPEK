export const searchReducer = (state = {
  recentSearchs: [],
  searchVenueData: []
}, action) => {
  const newState = {
    recentSearchs: state.recentSearchs,
    searchVenueData: state.searchVenueData
  };

  switch (action.type) {
    case "ADD_TO_SEARCH_LIST": {
      let isRecentSearchExist = false;

      state.recentSearchs.forEach((recentSearch) => {
        if (recentSearch.searchQuery === action.payload.searchQuery &&
            recentSearch.searchLocation === action.payload.searchLocation) {
          isRecentSearchExist = true;
        }
      });
      if (!isRecentSearchExist) {
        newState.recentSearchs = state.recentSearchs.concat([
          {
            id: action.payload.id,
            searchQuery: action.payload.searchQuery,
            searchLocation: action.payload.searchLocation
          }
        ]);
      }
      break;
    }
    default:
      break;
  }
  return newState;
};

export default searchReducer;
