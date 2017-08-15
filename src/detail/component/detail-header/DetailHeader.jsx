import React from "react";
import "./detail-header.scss";

export class DetailHeader extends React.Component{
  constructor(){
    super();
  }
  render(){
    let detailHeaderPhotoStyle = {
      "backgroundImage" : `url("${this.props.venueData.venueHeaderPhoto}")`
    }
    return(
        <div className="detail-header-container" style={detailHeaderPhotoStyle}>
          <div className="detail-header-background"/>
          <img className="detail-header-logo"
               src="/img/detail-logo.png"/>
          <div className="detail-header-contact-container">
            Name : {this.props.venueData.venueName}<br/>
            Phone : {this.props.venueData.venuePhone}<br/>
            Adress : {this.props.venueData.venueAddress}<br/>
            Rating : {this.props.venueData.venueRating}<br/>
            BeenHere : {this.props.venueData.venueBeenHere}<br/>
            PriceTier : {this.props.venueData.venuePriceTier}<br />
            CategoriIcon : <img src={this.props.venueData.venueCategorieIcon} /><br />
          </div>
        </div>
    );
  }
}
export default DetailHeader;