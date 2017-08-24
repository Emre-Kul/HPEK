import React from "react";

import Footer from "../../common/footer/Footer.jsx";
import DetailHeader from "../component/detail-header/DetailHeader.jsx";
import DetailContent from "../component/detail-content/DetailContent.jsx";
import {getDetailOfVenue,getPhotosOfVenue} from "../../api/fsApiHandler.js";

const VENUE_PHOTO_SIZE = "300x300";
const VENUE_TIPS_LIMIT = 10;
const VENUE_PHOTO_LIMIT = 10;

export class DetailPage extends React.Component{
  constructor(){
    super();
    this.state = {
      venueData : "Loading",
      venueDataLoaded : false,
      venuePhotos : [],
      venuePhotosLoaded : false
    }
    this.loadVenueData = this.loadVenueData.bind(this);
  }
  componentDidMount(){
    this.loadVenueData();
  }
  loadVenueData(){
    if(!this.state.venueDataLoaded) {
      let id = this.props.match.params.id;
      getDetailOfVenue(id,VENUE_TIPS_LIMIT)
        .then((venue) => {
          this.setState({
            venueData: venue,
            venueDataLoaded: true
          });
          return getPhotosOfVenue(venue.venueId,VENUE_PHOTO_SIZE,VENUE_PHOTO_LIMIT);
        })
        .then((photos) =>{
          this.setState({
            venuePhotos : photos,
            venuePhotosLoaded : true
          });
        })
        .catch(console.log);
    }
  }
  render(){
    return(
      <div>
        {(this.state.venueDataLoaded)
          ? <DetailHeader venueInfo={this.state.venueData.venueInfo}/>
          : null
        }
        {(this.state.venueDataLoaded && this.state.venuePhotosLoaded)
          ? <DetailContent venuePhotos={this.state.venuePhotos}
                           venueTips={this.state.venueData.venueTips}/>
          : null
        }

        <Footer/>
      </div>
    );
  }
}
export default DetailPage;