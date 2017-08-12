import React from "react";
import Footer from "../../common/footer/footer.jsx";
import FsApiHandler from "../../api/foursquare-api-handler.js";

//stylesheet
require("./detail-page.scss");

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
        <div className="header header-big ">
          <img className="logo"
            src="/img/index-logo.png"/>
          <div id="result-contact-container"
            className="color-effect-blue-red"/>
        </div>
        <div className="container">
          { (this.state.venueData.length > 0 ? this.state.venueData : "Loading" )}
        </div>
        <Footer/>
      </div>
    );
  }
}
export default DetailPage;