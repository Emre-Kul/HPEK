export const searchPageReducer = (state = [],action) => {
  switch (action.type){
    case "ADD_SEARCH":
      return state.concat([
        {
          id : action.id,
          lastSearch : action.lastSearch
        }
      ]);
    break;
  }
}
export default searchPageReducer;