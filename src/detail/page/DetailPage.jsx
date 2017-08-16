import React from "react";
import Footer from "../../common/footer/Footer.jsx";
import DetailHeader from "../component/detail-header/DetailHeader.jsx";
import DetailContent from "../component/detail-content/DetailContent.jsx";
import FsApiHandler from "../../api/FoursquareApiHandler.js";
import "./detail-page.scss";

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
  loadVenueData(){
    if(!this.state.venueDataLoaded) {
      let id = this.props.match.params.id;
      let fsApiHandler = new FsApiHandler();
      fsApiHandler.getDetailOfVenue(id)
        .then((venue) => {
          this.setState({
            venueData: venue,
            venueDataLoaded: true
          });
          return fsApiHandler.getPhotosOfVenue(venue.venueId,300,300,10);
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
    this.loadVenueData();

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