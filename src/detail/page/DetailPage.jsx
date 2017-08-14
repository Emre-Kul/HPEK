import React from "react";
import Footer from "../../common/footer/Footer.jsx";
import DetailHeader from "../component/detail-header/DetailHeader.jsx";
import FsApiHandler from "../../api/FoursquareApiHandler.js";

//stylesheet
import "./detail-page.scss";

export class DetailPage extends React.Component{
  constructor(){
    super();
    this.state = {
      venueData : ""
    }
  }
  componentDidMount(){
    let id = this.props.match.params.id;
    let fsApiHandler = new FsApiHandler();
    fsApiHandler.getDetailOfVenue(id).then( (venue) => {
      this.setState({
        venueData : venue.venueName
      });
    });
  }
  render(){
    return(
      <div>
        <DetailHeader/>
        <div className="container">
          { (this.state.venueData.length > 0 ?
            this.state.venueData
            : "Loading" )}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default DetailPage;