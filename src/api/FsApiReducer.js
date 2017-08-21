const SEARCH_VENUE = "SEARCH_VENUE";
const GET_DETAIL_OF_VENUE = "GET_DETAIL_OF_VENUE";
const GET_PHOTOS_OF_VENUE = "GET_PHOTOS_OF_VENUE";


export const FsApiReducer = (state = {}, action) => {

  switch(action.type) {

    case SEARCH_VENUE:
      return state;
    break;

    case GET_DETAIL_OF_VENUE:
      return state;
    break;

    case GET_PHOTOS_OF_VENUE:
      return state;
    break;

    default:
      return state;
    break;

  }

}

const actionSearchVenue = function(searchQuery,searchLocation){}
const actionGetDetailOfVenue = function(venueId){}
const actionGetPhotosOfVenue = function(venueId){}

export default FsApiReducer;