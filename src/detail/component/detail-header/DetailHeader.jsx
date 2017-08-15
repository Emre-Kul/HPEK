import React from "react";
import "./detail-header.scss";

export class DetailHeader extends React.Component{
  constructor(){
    super();
  }
  render(){
    const venueInfo = this.props.venueInfo;
    let detailHeaderPhotoStyle = {
      "backgroundImage" : `url("${venueInfo.venueHeaderPhoto}")`
    }
    return(
        <div className="detail-header-container" style={detailHeaderPhotoStyle}>
          <div className="detail-header-background"/>
          <img className="detail-header-logo"
               src="/img/detail-logo.png"/>
          <div className="detail-header-venue-name">
            {venueInfo.venueName}
          </div>
          <div className="detail-header-contact-container">
            <div className="detail-header-contact-info-container">

              <div>
                <img src="/img/location-icon.svg" />
                <span>{venueInfo.venueAddress}</span>
              </div>

              <div>
                <img src="/img/phone-icon.svg" />
                <span>{venueInfo.venuePhone}</span>
              </div>

              <div>
                <img src="/img/people-icon.svg" />
                <span>{venueInfo.venueBeenHere}</span>
                <img src="/img/tag-icon.svg" />
                <span>{venueInfo.venuePriceTier}</span>
              </div>

              <div className="detail-header-rating-container">
                {venueInfo.venueRating}
              </div>

            </div>
          </div>
        </div>
    );
  }
}
export default DetailHeader;