export const searchReducer = (state = {
  recentSearchs: [],
  searchVenueData: []
}, action) => {
  let newState = {
    recentSearchs: state.recentSearchs,
    searchVenueData: state.searchVenueData
  }
  switch (action.type) {
    case 'ADD_TO_SEARCH_LIST': {
      let isRecentSearchExist = false
      state.recentSearchs.forEach((recentSearch) => {
        if (recentSearch.searchQuery === action.searchQuery && recentSearch.searchLocation === action.searchLocation) {
          isRecentSearchExist = true
        }
      })
      if (!isRecentSearchExist) {
        newState.recentSearchs = state.recentSearchs.concat([
          {
            id: action.id,
            searchQuery: action.searchQuery,
            searchLocation: action.searchLocation
          }
        ])
      }
    }
  }
  return newState
}

export default searchReducer