import axios from "axios";

import {FS_AXIOS_CONFIG} from "./fsApiConsts.js";
function searchVenues(query, place, limit) {
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
        const venues = responseData.groups[0].items;

        return (
        {
          searchId: response.data.meta.requestId,
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
