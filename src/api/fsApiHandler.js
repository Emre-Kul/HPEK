import axios from 'axios'

import { FS_AXIOS_CONFIG } from './fsApiConsts.js'

const searchVenues = function (query, place, photoSize, searchHeaderPhotoSize, limit) {
  const url = 'venues/explore'
  return new Promise((resolve, reject) => {
    Object.assign(FS_AXIOS_CONFIG.params, {
      query: query,
      near: place,
      venuePhotos: 1,
      limit: limit
    })
    axios(url, FS_AXIOS_CONFIG)
      .then((response) => {
        let responseData = response.data.response
        let venues = []
        let firstVenuePhoto = responseData.groups[0].items[0].venue.featuredPhotos.items[0]
        let searchHeaderPhoto = `${firstVenuePhoto.prefix}${searchHeaderPhotoSize}${firstVenuePhoto.suffix}`
        responseData.groups[0].items.forEach((item) => {
          try {
            let venuePhotoPrefix = item.venue.featuredPhotos.items[0].prefix
            let venuePhotoSuffix = item.venue.featuredPhotos.items[0].suffix
            venues.push(
              {
                venueId: item.venue.id,
                venueName: item.venue.name,
                venueHereNow: item.venue.hereNow.count,
                venuePriceTier:
                  ( (typeof item.venue.price === 'undefined')
                    ? -1
                    : item.venue.price.tier),
                venueRating: item.venue.rating,
                venuePhoto: `${venuePhotoPrefix}${photoSize}${venuePhotoSuffix}`
              })
          }
          catch (e) {
            reject({
              status: 'Error At Venue',
              statusText: item.venue.name
            })
          }
        })
        resolve(
          {
            searchId: response.data.meta.requestId,
            searchHeaderPhoto: searchHeaderPhoto,
            venues: venues
          }
        )
      }).catch((err) => {
      reject({
        status: err.response.status,
        statusText: err.response.statusText
      })
    })
  })
}

const getDetailOfVenue = function (venueId) {
  const url = `venues/${venueId}`
  return new Promise((resolve, reject) => {
    axios.get(url, FS_AXIOS_CONFIG).then((response) => {
      let venue = response.data.response.venue
      let venueHeaderPhoto = `${venue.bestPhoto.prefix}${venue.bestPhoto.width}x${venue.bestPhoto.height}${venue.bestPhoto.suffix}`
      let venueCategorieIcon = `${venue.categories[0].icon.prefix}88${venue.categories[0].icon.suffix}`
      resolve({
        venueId: venue.id,
        venueInfo: {
          venueName: venue.name,
          venueLocation: venue.location,
          venueHeaderPhoto: venueHeaderPhoto,
          venuePhone: venue.contact.formattedPhone,
          venueAddress: venue.location.address,
          venueRating: venue.rating,
          venueBeenHere: venue.beenHere.count,
          venuePriceTier: (typeof venue.price === 'undefined')
            ? -1
            : venue.price.tier,
          venueCategorieIcon: venueCategorieIcon
        },
        venueTips: venue.tips.groups[0].items
      })
    }).catch((err) => {
      reject({
        status: err.response.status,
        statusText: err.response.statusText
      })
    })
  })
}

const getPhotosOfVenue = function (venueId, photoSize, limit) {
  const url = `venues/${venueId}/photos`
  return new Promise((resolve, reject) => {
    Object.assign(FS_AXIOS_CONFIG.params, {
      limit: limit
    })
    axios.get(url, FS_AXIOS_CONFIG).then((response) => {
      let items = response.data.response.photos.items
      let photos = []
      items.forEach((item) => {
        photos.push({
          photoId: item.id,
          photoUrl: `${item.prefix}${photoSize}${item.suffix}`,
          photoUser: item.user
        })
      })
      resolve(photos)
    }).catch((err) => {
      reject({
        status: err.response.status,
        statusText: err.response.statusText
      })
    })
  })
}

export {
  searchVenues,
  getDetailOfVenue,
  getPhotosOfVenue
}