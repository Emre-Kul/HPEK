

//FoursquareApiHandler

export const FsApiHandler = function(){

  this.auth = "client_id=V131V0IPODZOAI4DH0TXB0W1VF4R1QCAHASGHJI35D3KJLWK" +
    "&client_secret=L5RZFRA1K2KPH33H12BFD3MECOJKEBIJSLP14KXYRYW3A5AF" +
    "&v=20180101";

  this.makeRequest = function(method,url){
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
      "&venuePhotos=1"+
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
            venues.push(
              {
                venueId : item.venue.id,
                venueName : item.venue.name,
                venueStats : item.venue.stats,
                venueRating : item.venue.rating
              });
          });
          resolve(venues);
        })
        .catch(reject);
    });
  }

};

export default FsApiHandler;