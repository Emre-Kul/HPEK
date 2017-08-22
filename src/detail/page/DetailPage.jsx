import React from "react";
import Footer from "../../common/footer/Footer.jsx";
import DetailHeader from "../component/detail-header/DetailHeader.jsx";
import DetailContent from "../component/detail-content/DetailContent.jsx";
import {getDetailOfVenue,getPhotosOfVenue} from "../../api/FsApiHandler.js";
import "./detail-page.scss";

const venuePhotoSize = "300x300";
const venueTipsLimit = 10;
const venuePhotoLimit = 10;

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
      getDetailOfVenue(id,venueTipsLimit)
        .then((venue) => {
          this.setState({
            venueData: venue,
            venueDataLoaded: true
          });
          return getPhotosOfVenue(venue.venueId,venuePhotoSize,venuePhotoLimit);
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