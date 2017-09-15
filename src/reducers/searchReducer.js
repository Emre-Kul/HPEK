const initialState = {
  recentSearchs: [],
  searchVenueData: {
    venuesLoading: true,
    venues: [],
    errorAccrued: false,
    error: ""
  }
};

export const searchReducer = (state = initialState, action) => {
  const newState = {
    recentSearchs: state.recentSearchs,
    searchVenueData: {
      ...state.searchVenueData
    }
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
        newState.recentSearchs = state.recentSearchs.concat([action.payload]);
      }
      break;
    }
    case "SEARCH_VENUE": {
      newState.searchVenueData = {
        ...newState.searchVenueData,
        ...action.payload
      };
      break;
    }
    default:
      break;
  }
  return newState;
};

export default searchReducer;
