import axios from "axios";

import {FS_AXIOS_CONFIG} from "./fsApiConsts.js";
function searchVenues(query, place, photoSize, searchHeaderPhotoSize, limit) {
  const url = "venues/explore";

  FS_AXIOS_CONFIG.params = {
    ...FS_AXIOS_CONFIG.params,
    ...{
      query,
      near: place,
      venuePhotos: 1,
      limit
    }
  };
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
            throw new Error(`Error At Venue${item.venue.name}`);
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
        throw new Error(err.response.statusText);
      });
}

function getDetailOfVenue(venueId) {
  const url = `venues/${venueId}`;

  return axios.get(url, FS_AXIOS_CONFIG).then(response => response.data.response.venue)
    .catch((err) => {
      throw new Error(err.response.statusText);
    });
}

function getPhotosOfVenue(venueId, photoSize, limit) {
  const url = `venues/${venueId}/photos`;

  FS_AXIOS_CONFIG.params = {
    ...FS_AXIOS_CONFIG.params,
    ...{
      limit
    }
  };
  return axios.get(url, FS_AXIOS_CONFIG).then(response => response.data.response.photos.items)
    .catch((err) => {
      throw new Error(err.response.statusText);
    });
}

export {
  searchVenues,
  getDetailOfVenue,
  getPhotosOfVenue
};
