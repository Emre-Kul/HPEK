function actionSetVenueDetails(venueDetailData) {
  return {
    type: "SET_VENUE_DETAIL",
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
