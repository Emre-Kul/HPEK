const ADD_SEARCH = "ADD_SEARCH";

const searchPageReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_SEARCH:
      let isActionExist = false;
      state.forEach( (stateObj) => {
        if(stateObj.searchQuery === action.searchQuery && stateObj.searchLocation === action.searchLocation){
          isActionExist = true;
        }
      });
      if(isActionExist) {
        return state;
      }
      else {
        return state.concat([
          {
            id: action.id,
            searchQuery: action.searchQuery,
            searchLocation: action.searchLocation
          }
        ]);
      }
    break;
    default:
      return state;
    break;
  }
}
const actionAddSearch = function(id,searchQuery,searchLocation){
  return {
    type : ADD_SEARCH,
    id : id,
    searchQuery : searchQuery,
    searchLocation : searchLocation
  }
};

module.exports = {
  actionAddSearch,
  searchPageReducer
}