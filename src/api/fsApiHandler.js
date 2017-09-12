import axios from "axios";

import {FS_AXIOS_CONFIG} from "./fsApiConsts.js";
function searchVenues(query, place, photoSize, searchHeaderPhotoSize, limit) {
  const url = "venues/explore";

  Object.assign(FS_AXIOS_CONFIG.params, {
    query,
    near: place,
    venuePhotos: 1,
    limit
  });
  return axios.get(url, FS_AXIOS_CONFIG)
      .then((response) => {
        const responseData = response.data.response;
        const venues = [];
        const firstVenuePhoto = responseData.groups[0].items[0].venue.featuredPhotos.items[0];
        const searchHeaderPhoto = `${firstVenuePhoto.prefix}${searchHeaderPhotoSize}${firstVenuePhoto.suffix}`;

        responseData.groups[0].items.forEach((item) => {
          try {
            const venuePhotoPrefix = item.venue.featuredPhotos.items[0].prefix;
            const venuePhotoSuffix = item.venue.featuredPhotos.items[0].suffix;

            venues.push(
              {
                venueId: item.venue.id,
                venueName: item.venue.name,
                venueHereNow: item.venue.hereNow.count,
                venuePriceTier: ((typeof item.venue.price === "undefined") ? -1 : item.venue.price.tier),
                venueRating: item.venue.rating,
                venuePhoto: `${venuePhotoPrefix}${photoSize}${venuePhotoSuffix}`
              });
          } catch (e) {
            throw new Error({
              status: "Error At Venue",
              statusText: item.venue.name
            });
          }
        });
        return (
        {
          searchId: response.data.meta.requestId,
          searchHeaderPhoto,
          venues
        }
        );
      })
      .catch((err) => {
        throw new Error({
          status: err.response.status,
          statusText: err.response.statusText
        });
      });
}

function getDetailOfVenue(venueId) {
  const url = `venues/${venueId}`;

  return axios.get(url, FS_AXIOS_CONFIG).then((response) => {
    const {venue} = response.data.response;
    const venueHeaderPhoto = `${venue.bestPhoto.prefix}${venue.bestPhoto.width}x${venue.bestPhoto.height}${venue.bestPhoto.suffix}`;
    const venueCategorieIcon = `${venue.categories[0].icon.prefix}88${venue.categories[0].icon.suffix}`;

    return ({
      venueId: venue.id,
      venueInfo: {
        venueName: venue.name,
        venueLocation: venue.location,
        venueHeaderPhoto,
        venuePhone: venue.contact.formattedPhone,
        venueAddress: venue.location.address,
        venueRating: venue.rating,
        venueBeenHere: venue.beenHere.count,
        venuePriceTier: (typeof venue.price === "undefined") ? -1 : venue.price.tier,
        venueCategorieIcon
      },
      venueTips: venue.tips.groups[0].items
    });
  })
  .catch((err) => {
    throw new Error({
      status: err.response.status,
      statusText: err.response.statusText
    });
  });
}

function getPhotosOfVenue(venueId, photoSize, limit) {
  const url = `venues/${venueId}/photos`;

  Object.assign(FS_AXIOS_CONFIG.params, {
    limit
  });
  return axios.get(url, FS_AXIOS_CONFIG).then((response) => {
    const {items} = response.data.response.photos;
    const photos = [];

    items.forEach((item) => {
      photos.push({
        photoId: item.id,
        photoUrl: `${item.prefix}${photoSize}${item.suffix}`,
        photoUser: item.user
      });
    });
    return (photos);
  })
  .catch((err) => {
    throw new Error({
      status: err.response.status,
      statusText: err.response.statusText
    });
  });
}

export {
  searchVenues,
  getDetailOfVenue,
  getPhotosOfVenue
};
