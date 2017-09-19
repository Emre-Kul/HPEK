const initialState = {
  recentSearchs: [],
  searchVenueData: {
    venuesLoading: false,
    venues: [],
    errorAccrued: false,
    error: ""
  }
};

export const searchReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "ADD_TO_SEARCH_LIST": {
      newState = {
        recentSearchs: [...state.recentSearchs],
        searchVenueData: {
          ...state.searchVenueData
        }
      };
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
    case "SEARCH_VENUE_STARTED": {
      newState = {
        recentSearchs: [...state.recentSearchs]
      };
      newState.searchVenueData = {
        ...state.searchVenueData,
        ...{
          venuesLoading: true,
          errorAccrued: false
        }
      };
      break;
    }
    case "SEARCH_VENUE_FULFILLED": {
      newState = {
        recentSearchs: [...state.recentSearchs]
      };
      newState.searchVenueData = {
        ...state.searchVenueData,
        ...action.payload,
        ...{
          errorAccrued: false,
          venuesLoading: false
        }
      };
      break;
    }
    case "SEARCH_VENUE_REJECTED": {
      newState = {
        recentSearchs: [...state.recentSearchs]
      };
      newState.searchVenueData = {
        ...state.searchVenueData,
        ...action.payload,
        ...{
          errorAccrued: true,
        }
      };
      break;
    }
    default:{
      newState = {
        recentSearchs: [...state.recentSearchs],
        searchVenueData: {
          ...state.searchVenueData
        }
      };
    }
      break;
  }
  return newState;
};

export default searchReducer;
