const initialState = {
  venueDetail : {
    venueDetailData: {},
    venueDetailDataLoaded: false,
    venueDetailErrorAccrued: false,
    venueDetailError: ""
  },
  venueDetailPhotos : {
    venueDetailPhotosData: [],
    venueDetailPhotosLoaded: false,
    venueDetailPhotosErrorAccrued: false,
    venueDetailPhotosError: ""
  }
};

export const venueDetailReducer = (state = initialState, action) => {
  const newState = {
    ...state
  };

  switch (action.type) {
    case "FETCH_VENUE_DETAIL_FULFILLED": {
      newState.venueDetail.venueDetailData = {
        ...newState.venueDetail.venueDetailData,
        ...action.payload.venueDetailData
      };
      newState.venueDetail.venueDetailDataLoaded = true;
      break;
    }
    case "FETCH_VENUE_PHOTOS_FULFILLED": {
      newState.venueDetailPhotos.venueDetailPhotosData = action.payload.venueDetailPhotos;
      newState.venueDetailPhotos.venueDetailPhotosLoaded = true;
      break;
    }
    default:
      break;
  }
  return newState;
};

export default venueDetailReducer;
