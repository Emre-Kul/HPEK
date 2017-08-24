export const searchReducer = (state, action) => {
  let newState = {
    recentSearchs : []
  };
  switch (action.type) {
    case "ADD_SEARCH":
      let isActionExist = false;
      state.recentSearchs.forEach( (recentSearch) => {
        if(recentSearch.searchQuery === action.searchQuery && recentSearch.searchLocation === action.searchLocation){
          isActionExist = true;
        }
      });
      if(!isActionExist) {
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
  return newState;
}

export default searchReducer;