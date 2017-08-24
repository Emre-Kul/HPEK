export const searchReducer = (state = {
  recentSearchs : []
}, action) => {
  let newState = {
    recentSearchs : state.recentSearchs
  };
  switch (action.type) {
    case "ADD_SEARCH": {
      let isRecentSearchExist = false;
      state.recentSearchs.forEach((recentSearch) => {
        if (recentSearch.searchQuery === action.searchQuery && recentSearch.searchLocation === action.searchLocation) {
          isRecentSearchExist = true;
        }
      });
      if (!isRecentSearchExist) {
        newState.recentSearchs = state.recentSearchs.concat([
          {
            id: action.id,
            searchQuery: action.searchQuery,
            searchLocation: action.searchLocation
          }
        ]);
      }
      break;
    }
  }
  return newState;
}

export default searchReducer;