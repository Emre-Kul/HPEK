import React, {Component} from "react";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgDetailLogo from "../../../../asset/img/detail-logo.png";
import imgLocationIcon from "../../../../asset/img/location-icon.svg";
import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgPhoneIcon from "../../../../asset/img/phone-icon.svg";
import imgRectangleIcon from "../../../../asset/img/rectangle-icon.svg";

import "./venue-detail-page-header.scss";

class VenueDetailPageHeader extends Component {
  static propTypes = {
    venueInfo: PropTypes.object
  }

  render() {
    const {venueInfo} = this.props;
    const detailHeaderPhotoStyle = {
      backgroundImage: `url("${venueInfo.bestPhoto.prefix}${venueInfo.bestPhoto.width}x${venueInfo.bestPhoto.height}${venueInfo.bestPhoto.suffix}")`
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
                   src={`${venueInfo.categories[0].icon.prefix}88${venueInfo.categories[0].icon.suffix}`}/>
            </div>
          </div>

          <div className="venue-detail-page-header-venue-name">
            {venueInfo.name}
          </div>

          <div className="venue-detail-page-header-contact-container">
            <div className="venue-detail-page-header-contact-info-container">

              <div>
                <img src={imgLocationIcon}
                     alt="Location Icon"/>
                <span className="venue-detail-page-header-text">
                  {(venueInfo.location.address || "-----")}
                </span>
              </div>

              <div>
                <img src={imgPhoneIcon}
                     alt="Phone Icon"/>
                <span className="venue-detail-page-header-text">
                  {(venueInfo.contact.formattedPhone || "-----")}
                </span>
              </div>

              <div>
                <img src={imgPeopleIcon}
                     alt="People Icon"/>
                <span className="venue-detail-page-header-text">
                  {(venueInfo.hereNow.count || 0)}
                </span>

                <PriceTierBar venueId={venueInfo.id}
                              priceTier={(typeof venueInfo.price === "undefined") ? 0 : venueInfo.price.tier}/>
              </div>

              <div className="venue-detail-page-header-rating-container"
                   style={{
                     backgroundImage: `url('${imgRectangleIcon}')`
                   }}>
                <span className="venue-detail-page-header-rating-value">
                  {(venueInfo.rating || "-")}
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
