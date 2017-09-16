function fetchVenueDetailStarted() {
  return {
    type: "FETCH_VENUE_DETAIL_STARTED"
  };
}
function fetchVenueDetailFulfilled(venueDetailData) {
  return {
    type: "FETCH_VENUE_DETAIL_FULFILLED",
    payload: venueDetailData
  };
}
function fetchVenueDetailRejected(rejectionReason) {
  return {
    type: "FETCH_VENUE_DETAIL_REJECTED",
    payload: rejectionReason
  };
}

function fetchVenuePhotosStarted() {
  return {
    type: "FETCH_VENUE_PHOTOS_STARTED"
  };
}

function fetchVenuePhotosFulfilled(venuePhotosData) {
  return {
    type: "FETCH_VENUE_PHOTOS_FULFILLED",
    payload: venuePhotosData
  };
}

function fetchVenuePhotosRejected(rejectionReason) {
  return {
    type: "FETCH_VENUE_PHOTOS_REJECTED",
    payload: rejectionReason
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
