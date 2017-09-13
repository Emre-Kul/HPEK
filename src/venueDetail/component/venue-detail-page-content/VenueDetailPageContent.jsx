import React, {Component} from "react";
import PropTypes from "prop-types";

import VenuePhotoCard from "../venue-photo-card/VenuePhotoCard.jsx";
import VenueDetailPageTipMenu from "../venue-detail-page-tip-menu/VenueDetailPageTipMenu.jsx";

import "./venue-detail-page-content.scss";

export class VenueDetailPageContent extends Component {
  static propTypes = {
    venuePhotos: PropTypes.array,
    venueTips: PropTypes.array
  }

  render() {
    return (
      <div className="venue-detail-page-content">
        <div className="venue-detail-page-content-venue-container">
          {
            this.props.venuePhotos.map(venuePhoto => (
              <VenuePhotoCard key={venuePhoto.photoId}
                                   backgroundImage={venuePhoto.photoUrl}
                                   userInfo={venuePhoto.photoUser}/>
              ))
          }
        </div>
        <VenueDetailPageTipMenu venueTips={this.props.venueTips}/>
      </div>
    );
  }
}

export default VenueDetailPageContent;
