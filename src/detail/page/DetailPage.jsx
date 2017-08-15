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
      venueDataLoaded : false
    }
    this.loadVenueData = this.loadVenueData.bind(this);
  }
  loadVenueData(){
    if(!this.state.venueDataLoaded) {
      let id = this.props.match.params.id;
      let fsApiHandler = new FsApiHandler();
      fsApiHandler.getDetailOfVenue(id).then((venue) => {
        this.setState({
          venueData: venue,
          venueDataLoaded: true
        });
      }).catch(console.log);
    }
  }
  render(){
    this.loadVenueData();
    return(
      <div>
        {(this.state.venueDataLoaded)
          ? <DetailHeader venueData={this.state.venueData}/>
          : null
        }
        {(this.state.venueDataLoaded)
          ? <DetailContent venueName = {this.state.venueData.venueName} />
          : null
        }

        <Footer/>
      </div>
    );
  }
}
export default DetailPage;