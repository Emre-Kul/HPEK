import React from "react";
import "./detail-header.scss";

import imgDetailLogo from "./detail-logo.png";
import imgLocationIcon from "./location-icon.svg";
import imgPeopleIcon from "./people-icon.svg";
import imgPhoneIcon from "./phone-icon.svg";
import imgRectangleIcon from "./rectangle-icon.svg";
import imgTagIcon from "./tag-icon.svg";

export class DetailHeader extends React.Component{

  render(){
    const venueInfo = this.props.venueInfo;
    let detailHeaderPhotoStyle = {
      "backgroundImage" : `url("${venueInfo.venueHeaderPhoto}")`
    }
    return(
      <div className="detail-header-container"
style={detailHeaderPhotoStyle}>
        <div className="detail-header-background"/>
        <img className="detail-header-logo"
               src={imgDetailLogo}/>
        <div className="detail-header-venue-name">
          {venueInfo.venueName}
        </div>
        <div className="detail-header-contact-container">
          <div className="detail-header-contact-info-container">

            <div>
              <img src={imgLocationIcon}
                   alt="Location Icon"/>
              <span>{venueInfo.venueAddress}</span>
            </div>

            <div>
              <img src={imgPhoneIcon}
                   alt="Phone Icon"/>
              <span>{venueInfo.venuePhone}</span>
            </div>

            <div>
              <img src={imgPeopleIcon}
                   alt="People Icon"/>
              <span>{venueInfo.venueBeenHere}</span>
              <img src={imgTagIcon}
                   alt="Tag Icon"/>
              <span>{venueInfo.venuePriceTier}</span>
            </div>

            <div className="detail-header-rating-container"
                   style={{
                     "backgroundImage" : `url('${imgRectangleIcon}')`
                   }}>
              {venueInfo.venueRating}
            </div>

          </div>
        </div>
      </div>
    );
  }
}
export default DetailHeader;