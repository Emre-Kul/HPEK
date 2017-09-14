import React, {Component} from "react";
import PropTypes from "prop-types";

import VenuePhotoCard from "../venue-photo-card/VenuePhotoCard.jsx";
import VenueDetailPageTipMenu from "../venue-detail-page-tip-menu/VenueDetailPageTipMenu.jsx";

import "./venue-detail-page-content.scss";

const VENUE_PHOTO_SIZE = "480x480";
const VENUE_PHOTOS_LIMIT = 10;

class VenueDetailPageContent extends Component {
  static propTypes = {
    venuePhotos: PropTypes.array,
    venueTips: PropTypes.array
  }

  render() {
    const {venueTips, venuePhotos} = this.props;
    const limitedVenuePhotos = venuePhotos.slice(0, VENUE_PHOTOS_LIMIT);

    return (
      <div className="venue-detail-page-content">
        <div className="venue-detail-page-content-venue-container">
          {
            limitedVenuePhotos.map(venuePhoto => (
              <VenuePhotoCard key={venuePhoto.id}
                                   backgroundImage={`${venuePhoto.prefix}${VENUE_PHOTO_SIZE}${venuePhoto.suffix}`}
                                   userInfo={venuePhoto.user}/>
              ))
          }
        </div>
        <VenueDetailPageTipMenu venueTips={venueTips}/>
      </div>
    );
  }
}

export default VenueDetailPageContent;
