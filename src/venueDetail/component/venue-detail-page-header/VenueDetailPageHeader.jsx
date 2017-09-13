import React, {Component} from "react";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgDetailLogo from "../../../../asset/img/detail-logo.png";
import imgLocationIcon from "../../../../asset/img/location-icon.svg";
import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgPhoneIcon from "../../../../asset/img/phone-icon.svg";
import imgRectangleIcon from "../../../../asset/img/rectangle-icon.svg";

import "./venue-detail-page-header.scss";

export class VenueDetailPageHeader extends Component {
  static propTypes = {
    venueInfo: PropTypes.object
  }

  render() {
    const {venueInfo} = this.props;

    const detailHeaderPhotoStyle = {
      backgroundImage: `url("${venueInfo.venueHeaderPhoto}")`
    };

    return (
      <div className="venue-detail-page-header"
           style={detailHeaderPhotoStyle}>
        <div className="venue-detail-page-header-content">

          <div className="venue-detail-page-header-logos-container">
            <img alt="Detail Page Header Logo"
                 className="venue-detail-page-header-logo"
                 src={imgDetailLogo}/>
            <div className="venue-detail-page-header-category-logo-container">
              <img alt="Detail Page Header Logo"
                   className="venue-detail-page-header-category-logo"
                   src={venueInfo.venueCategorieIcon}/>
            </div>
          </div>

          <div className="venue-detail-page-header-venue-name">
            {venueInfo.venueName}
          </div>

          <div className="venue-detail-page-header-contact-container">
            <div className="venue-detail-page-header-contact-info-container">

              <div>
                <img src={imgLocationIcon}
                     alt="Location Icon"/>
                <span className="venue-detail-page-header-text">
                  {venueInfo.venueAddress}
                </span>
              </div>

              <div>
                <img src={imgPhoneIcon}
                     alt="Phone Icon"/>
                <span className="venue-detail-page-header-text">
                  {venueInfo.venuePhone}
                </span>
              </div>

              <div>
                <img src={imgPeopleIcon}
                     alt="People Icon"/>
                <span className="venue-detail-page-header-text">
                  {venueInfo.venueBeenHere}
                </span>

                <PriceTierBar venueId={venueInfo.venueId}
                              priceTier={venueInfo.venuePriceTier}/>
              </div>

              <div className="venue-detail-page-header-rating-container"
                   style={{
                     backgroundImage: `url('${imgRectangleIcon}')`
                   }}>
                <span className="venue-detail-page-header-rating-value">
                  {venueInfo.venueRating}
                </span>
              </div>
            </div>

          </div>
        </div>
      </div>
    );
  }
}

export default VenueDetailPageHeader;
