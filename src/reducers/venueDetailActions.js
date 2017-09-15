function fetchVenueDetailStarted(venueDetailData) {
  return {
    type: "FETCH_VENUE_DETAIL_STARTED",
    payload: venueDetailData
  };
}
function fetchVenueDetailFulfilled(venueDetailData) {
  return {
    type: "FETCH_VENUE_DETAIL_FULFILLED",
    payload: venueDetailData
  };
}
function fetchVenueDetailRejected(venueDetailData) {
  return {
    type: "FETCH_VENUE_DETAIL_REJECTED",
    payload: venueDetailData
  };
}

function fetchVenuePhotosStarted(venuePhotosData) {
  return {
    type: "FETCH_VENUE_PHOTOS_STARTED",
    payload: venuePhotosData
  };
}

function fetchVenuePhotosFulfilled(venuePhotosData) {
  return {
    type: "FETCH_VENUE_PHOTOS_FULFILLED",
    payload: venuePhotosData
  };
}

function fetchVenuePhotosRejected(venuePhotosData) {
  return {
    type: "FETCH_VENUE_PHOTOS_REJECTED",
    payload: venuePhotosData
  };
}
export {
  fetchVenueDetailStarted,
  fetchVenueDetailFulfilled,
  fetchVenueDetailRejected,
  fetchVenuePhotosStarted,
  fetchVenuePhotosFulfilled,
  fetchVenuePhotosRejected
};
