import React, {Component} from "react";
import PropTypes from "prop-types";

import "./venue-photo-card.scss";

class VenuePhotoCard extends Component {

  static propTypes = {
    backgroundImage: PropTypes.string,
    userInfo: PropTypes.object
  }

  render() {
    const {userInfo} = this.props;

    const backgroundStyle = {
      backgroundImage: `url(${this.props.backgroundImage})`
    };

    return (
      <div className="venue-photo-card"
           style={backgroundStyle}>
        <div className="venue-photo-card-user-info-container">
          <div className="venue-photo-card-user-info-content-container">
            <div className="venue-photo-card-user-info-image-container">
              <img className="venue-photo-card-user-info-image"
                   src={`${userInfo.photo.prefix}60x60${userInfo.photo.suffix}`}
                   alt="Detail Page Venue Card"/>
            </div>
            {userInfo.firstName} {userInfo.lastName}
          </div>
        </div>
      </div>
    );
  }
}

export default VenuePhotoCard;
