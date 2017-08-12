

//FoursquareApiHandler

export const FsApiHandler = function(){

  this.auth = "client_id=V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK" +
    "&client_secret=L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF" +
    "&v=20180101";

  this.makeRequest = function(method,url){
    console.log("Requesting : " + url);
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

  this.searchVenues = function(query,place,limit){
    let url = "https://api.foursquare.com/v2/venues/explore?"+
      "query="+query+
      "&near="+place+
      "&limit="+limit+
      "&" + this.auth;
    /*
    return this.makeRequest("get",url);
    I cant return this directly i should process response
    */
    return new Promise( (resolve,reject) => {
      this.makeRequest("get",url)
        .then( (response) => {
          let jsonResponse = JSON.parse(response);
          let venues = [];
          jsonResponse.response.groups[0].items.forEach( (item) => {
            try {
              venues.push(
                {
                  venueId: item.venue.id,
                  venueName: item.venue.name,
                  venueHereNow: item.venue.hereNow.count,
                  venuePriceTier: item.venue.price.tier,
                  venueRating: item.venue.rating
                });
            }
            catch(e){
              console.log("Error At : " + item.venue.name)
            }
          });
          resolve(venues);
        })
        .catch(reject);
    });
  }

  this.getDetailOfVenue = function(venueId){
     let url = "https://api.foursquare.com/v2/venues/"+
       venueId +
       "?" +
       this.auth;
     return new Promise((resolve,reject) => {
       this.makeRequest("get",url).then( (response)=>{
         let venue = JSON.parse(response).response.venue;
         resolve({
           venueId : venue.id,
           venueName : venue.name,
           venueLocation : venue.location
         });
       }).catch(reject);
     });
  }
};

export default FsApiHandler;