function actionSetVenueDetails(venueDetailData) {
  return {
    type: "SET_VENUE_DETAILS",
    payload: venueDetailData
  };
}
function actionSetVenuePhotos(venuePhotosData) {
  return {
    type: "SET_VENUE_PHOTOS",
    payload: venuePhotosData
  };
}

export {
  actionSetVenueDetails,
  actionSetVenuePhotos
};
