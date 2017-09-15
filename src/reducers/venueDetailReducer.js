const initialState = {
  venueDetailData: {},
  venueDetailDataLoaded: false,
  venueDetailPhotos: [],
  venueDetailPhotosLoaded: false
};

export const venueDetailReducer = (state = initialState, action) => {
  const newState = {
    ...state
  };

  switch (action.type) {
    case "SET_VENUE_DETAIL": {
      newState.venueDetailData = {
        ...newState.venueDetailData,
        ...action.payload.venueDetailData
      };
      newState.venueDetailDataLoaded = action.payload.venueDetailDataLoaded;
      break;
    }
    case "SET_VENUE_PHOTOS": {
      newState.venueDetailPhotos = action.payload.venueDetailPhotos;
      newState.venueDetailPhotosLoaded = action.payload.venueDetailPhotosLoaded;
      break;
    }
    default:
      break;
  }
  return newState;
};

export default venueDetailReducer;
