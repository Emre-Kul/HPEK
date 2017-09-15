function setVenueDetails(venueDetailData) {
  return {
    type: "SET_VENUE_DETAIL",
    payload: venueDetailData
  };
}
function setVenuePhotos(venuePhotosData) {
  return {
    type: "SET_VENUE_PHOTOS",
    payload: venuePhotosData
  };
}

export {
  setVenueDetails,
  setVenuePhotos
};
