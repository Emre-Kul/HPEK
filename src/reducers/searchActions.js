const actionAddToSearchList = function (id, searchQuery, searchLocation) {
  return {
    type: 'ADD_SEARCH',
    id: id,
    searchQuery: searchQuery,
    searchLocation: searchLocation
  }
}

export {
  actionAddToSearchList
}
