const initialState = {
  venueDetail: {
    venueDetailData: {},
    venueDetailDataLoaded: false,
    venueDetailErrorAccrued: false,
    venueDetailError: ""
  },
  venueDetailPhotos: {
    venueDetailPhotosData: [],
    venueDetailPhotosLoaded: false,
    venueDetailPhotosErrorAccrued: false,
    venueDetailPhotosError: ""
  }
};

export const venueDetailReducer = (state = initialState, action) => {
  let newState;
  switch (action.type) {
    case "FETCH_VENUE_DETAIL_STARTED": {
      newState = {...state};
      newState.venueDetail = {
        ...newState.venueDetail,
        ...{
          venueDetailDataLoaded: false,
          venueDetailErrorAccrued: false
        }
      };
      break;
    }
    case "FETCH_VENUE_DETAIL_FULFILLED": {
      newState = {...state};
      newState.venueDetail.venueDetailData = {
        ...newState.venueDetail.venueDetailData,
        ...action.payload.venueDetailData
      };
      newState.venueDetail = {...newState.venueDetail,...{
        venueDetailDataLoaded : true,
        venueDetailErrorAccrued : false
      }}
      break;
    }
    case "FETCH_VENUE_DETAIL_REJECTED": {
      newState = {...state};
      newState.venueDetail = {
        ...newState.venueDetail,
        ...action.payload.venueDetail,
        ...{
          venueDetailErrorAccrued: true
        }
      };
      break;
    }

    case "FETCH_VENUE_PHOTOS_STARTED": {
      newState = {...state};
      newState.venueDetailPhotos = {
        ...newState.venueDetailPhotos,
        ...{
          venueDetailPhotosData: [],
          venueDetailPhotosLoaded: false,
          venueDetailPhotosErrorAccrued: false
        }
      };
      break;
    }
    case "FETCH_VENUE_PHOTOS_FULFILLED": {
      newState = {...state};
      newState.venueDetailPhotos.venueDetailPhotosData = [
        ...action.payload.venueDetailPhotos
      ];
      newState.venueDetailPhotos.venueDetailPhotosLoaded = true;
      break;
    }
    case "FETCH_VENUE_PHOTOS_REJECTED": {
      newState = {...state};
      newState.venueDetailPhotos = {
        ...newState.venueDetailPhotos,
        ...action.payload,
        ...{
          venueDetailPhotosErrorAccrued: true
        }
      };
      break;
    }
    default:{
      newState = {...state};
    }
      break;
  }
  return newState;
};

export default venueDetailReducer;
