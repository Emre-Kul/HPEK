export const venueDetailReducer = (state = {
  venueDetailData: {},
  venueDetailDataLoaded: false,
  venueDetailPhotos: [],
  venueDetailPhotosLoaded: false
}, action) => {
  const newState = {...newState,...state};

  switch (action.type) {
    case "SET_VENUE_DETAIL": {
      newState.venueDetailData = {...newState.venueDetailData,...payload.venueDetailData};
      newState.venueDetailDataLoaded = payload.venueDetailDataLoaded;
      break;
    }
    case "SET_VENUE_PHOTOS": {
      newState.venueDetailPhotos = payload.venueDetailPhotos;
      newState.venueDetailPhotosLoaded = payload.venueDetailPhotosLoaded;
      break;
    }
    default:
      break;
  }
  return newState;
};

export default venueDetailReducer;
