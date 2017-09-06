const FS_CLIENT_ID = "2YKSC0BQ5GFTP0FH4ESR1ZUFQJMM135XJ5SFI3WZZOT1H2OK";
const FS_CLIENT_SECRET = "V4M5SUGP5ENHW5UCOMRPIUVZ4LTOWOEFRHFFUS0J3ENU1VMU";
const FS_API_VERSION = "20180101";
const FS_API_KEY = `client_id=${FS_CLIENT_ID}&client_secret=${FS_CLIENT_SECRET}&v=${FS_API_VERSION}`;

const makeRequest = function(method,url){
  return new Promise((resolve,reject) =>{
    let request = new XMLHttpRequest();
    request.open(method,url);
    request.onload = () =>{

      if (request.status >= 200 && request.status < 300) {
        resolve(JSON.parse(request.response));
      } else {
        reject({
          status: request.status,
          statusText: request.statusText
        });
      }
    }
    request.onerror = () => {
      reject({
        status: request.status,
        statusText: request.statusText
      });
    }
    request.send();
  });
}

const searchVenues = function(query,place,photoSize,limit){
  let url = `https://api.foursquare.com/v2/venues/explore?query=${query}&near=${place}&limit=${limit}&venuePhotos=1&${FS_API_KEY}`;
  return new Promise( (resolve,reject) => {
    makeRequest("get",url)
      .then( (response) => {
        let venues = [];
        response.response.groups[0].items.forEach( (item) => {
          try {
            let venuePhotoPrefix = item.venue.featuredPhotos.items[0].prefix;
            let venuePhotoSuffix = item.venue.featuredPhotos.items[0].suffix;
            venues.push(
              {
                venueId: item.venue.id,
                venueName: item.venue.name,
                venueHereNow: item.venue.hereNow.count,
                venuePriceTier:
                  ( (typeof item.venue.price === "undefined") ?
                    -1 :
                    item.venue.price.tier),
                venueRating: item.venue.rating,
                venuePhoto : `${venuePhotoPrefix}${photoSize}${venuePhotoSuffix}`
              });
          }
          catch(e){
            reject({
              status: "Error At Venue",
              statusText: item.venue.name
            });
          }
        });
        resolve(
            {
              searchId : response.meta.requestId,
              venues : venues
            }
          );
      })
      .catch(reject);
  });
}

const getDetailOfVenue = function(venueId,venueTipsLimit){
   const url = `https://api.foursquare.com/v2/venues/${venueId}?${FS_API_KEY}`;
   return new Promise((resolve,reject) => {
     makeRequest("get",url).then( (response)=>{
       let venue = response.response.venue;
       let venueHeaderPhoto = `${venue.bestPhoto.prefix}${venue.bestPhoto.width}x${venue.bestPhoto.height}${venue.bestPhoto.suffix}`;
       let venueCategorieIcon = `${venue.categories[0].icon.prefix}88${venue.categories[0].icon.suffix}`
       resolve({
         venueId : venue.id,
         venueInfo : {
           venueName: venue.name,
           venueLocation: venue.location,
           venueHeaderPhoto: venueHeaderPhoto,
           venuePhone: venue.contact.formattedPhone,
           venueAddress: venue.location.address,
           venueRating: venue.rating,
           venueBeenHere: venue.beenHere.count,
           venuePriceTier: (typeof venue.price === "undefined") ?
             -1 :
             venue.price.tier,
           venueCategorieIcon: venueCategorieIcon
         },
         venueTips : venue.tips.groups[0].items.slice(0,venueTipsLimit)
       });
     }).catch(reject);
   });
}

const getPhotosOfVenue = function(venueId,photoSize,limit){
  return new Promise( (resolve,reject) => {
    let url = `https://api.foursquare.com/v2/venues/${venueId}/photos?${FS_API_KEY}&limit=${limit}`;
    makeRequest("get",url).then( (response)=> {
      let items = response.response.photos.items;
      let photos = [];
      items.forEach((item) => {
        photos.push({
          photoId : item.id,
          photoUrl : `${item.prefix}${photoSize}${item.suffix}`,
          photoUser : item.user
        });
      });
      resolve(photos);
    }).catch(reject);
  });
}

export{
  searchVenues,
  getDetailOfVenue,
  getPhotosOfVenue
}