export const FsApiHandler = function(){

  const clientId = "V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK";
  const clientSecret = "L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF";
  const apiVersion = "20180101";
  this.auth = `client_id=${clientId}&client_secret=${clientSecret}&v=${apiVersion}`;

  this.makeRequest = function(method,url){
    console.log(`Requesting : ${url}`);
    return new Promise((resolve,reject) =>{
      let request = new XMLHttpRequest();
      request.open(method,url);
      request.onload = () =>{

        if (request.status >= 200 && request.status < 300) {
          resolve(request.response);
        } else {
          reject({
            status: request.status,
            statusText: request.statusText
          });
        }
      }
      request.onerror = () => {
        reject(request.status);
      }
      request.send();
    });
  }

  this.searchVenues = function(query,place,photoSize,limit){
    let url = `https://api.foursquare.com/v2/venues/explore?query=${query}&near=${place}&limit=${limit}&venuePhotos=1&${this.auth}`;
    return new Promise( (resolve,reject) => {
      this.makeRequest("get",url)
        .then( (response) => {
          let jsonResponse = JSON.parse(response);
          let venues = [];
          jsonResponse.response.groups[0].items.forEach( (item) => {
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
              console.log(`${e} Error At : ${item.venue.name}`);
            }
          });
          resolve(venues);
        })
        .catch(reject);
    });
  }

  this.getDetailOfVenue = function(venueId){
     const url = `https://api.foursquare.com/v2/venues/${venueId}?${this.auth}`;
     return new Promise((resolve,reject) => {
       this.makeRequest("get",url).then( (response)=>{
         let venue = JSON.parse(response).response.venue;
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
             venuePriceTier: (typeof venue.price.tier === "undefined") ?
               -1 :
               venue.price.tier,
             venueCategorieIcon: venueCategorieIcon
           },
           venueTips : venue.tips
         });
       }).catch(reject);
     });
  }

};

export default FsApiHandler;