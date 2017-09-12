import React, {Component} from "react";
import PropTypes from "prop-types";

import "./detail-page-venue-card.scss";

export class DetailPageVenueCard extends Component {

  static propTypes = {
    backgroundImage: PropTypes.string,
    userInfo: PropTypes.object
  }

  render() {
    const backgroundStyle = {
      backgroundImage: `url(${this.props.backgroundImage})`
    };

    return (
      <div className="detail-page-venue-card"
           style={backgroundStyle}>
        <div className="detail-page-venue-card-user-info-container">
          <div className="detail-page-venue-card-user-info-content-container">
            <div className="detail-page-venue-card-user-info-image-container">
              <img className="detail-page-venue-card-user-info-image"
                   src={`${this.props.userInfo.photo.prefix}60x60${this.props.userInfo.photo.suffix}`}
                   alt="Detail Page Venue Card"/>
            </div>
            {this.props.userInfo.firstName} {this.props.userInfo.lastName}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailPageVenueCard;
