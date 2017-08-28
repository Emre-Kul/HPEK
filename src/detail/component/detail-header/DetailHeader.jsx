import React, { Component }  from "react";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgDetailLogo from "../../../../asset/img/detail-logo.png";
import imgLocationIcon from "../../../../asset/img/location-icon.svg";
import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgPhoneIcon from "../../../../asset/img/phone-icon.svg";
import imgRectangleIcon from "../../../../asset/img/rectangle-icon.svg";

import "./detail-header.scss";

export class DetailHeader extends Component{
  static propTypes = {
    venueInfo : PropTypes.object
  };
  render(){
    const venueInfo = this.props.venueInfo;
    let detailHeaderPhotoStyle = {
      "backgroundImage" : `url("${venueInfo.venueHeaderPhoto}")`
    }
    return(
      <div className="detail-header"
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
              <span className="detail-header-text">
                {venueInfo.venueAddress}
              </span>
            </div>

            <div>
              <img src={imgPhoneIcon}
                   alt="Phone Icon"/>
              <span className="detail-header-text">
                {venueInfo.venuePhone}
              </span>
            </div>

            <div>
              <img src={imgPeopleIcon}
                   alt="People Icon"/>
              <span className="detail-header-text">
                {venueInfo.venueBeenHere}
              </span>

              <PriceTierBar venueId={venueInfo.venueId}
                        priceTier={venueInfo.venuePriceTier}/>
            </div>

            <div className="detail-header-rating-container"
                 style={{
                   "backgroundImage" : `url('${imgRectangleIcon}')`
                 }}>
              <span className="detail-header-rating-value">
                {venueInfo.venueRating}
              </span>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default DetailHeader;