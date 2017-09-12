const actionAddToSearchList = function (id, searchQuery, searchLocation) {
  return {
    type: 'ADD_TO_SEARCH_LIST',
    id: id,
    searchQuery: searchQuery,
    searchLocation: searchLocation
  }
}
export {
  actionAddToSearchList
}
