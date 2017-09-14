import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgTriangle from "../../../../asset/img/triangle-icon.svg";

import "./venue-summary-card.scss";

const VENUE_PHOTO_SIZE = "480x480";

export class VenueSummaryCard extends Component {

  static propTypes = {
    venue: PropTypes.object
  }

  render() {
    const {venue} = this.props;
    const detailLink = `/detail/${venue.id}`;
    const venueDivImageStyle = {
      backgroundImage: `url("${venue.featuredPhotos.items[0].prefix}${VENUE_PHOTO_SIZE}${venue.featuredPhotos.items[0].suffix}")`
    };

    return (
      <div className="venue-summary-card"
           style={venueDivImageStyle}>
        <div className="venue-summary-card-content">
          <div className="venue-summary-card-name-container">
            <Link className="venue-summary-card-link"
                  to={detailLink}>
              <span>
                {(venue.name || "-")}
              </span>
            </Link>
          </div>
          <div className="venue-summary-card-herenow-container">
            <span className="venue-summary-card-herenow">
              <img src={imgPeopleIcon}/>
              <span className="venue-summary-card-text">
                {(venue.hereNow.count || 0)}
              </span>
            </span>
          </div>

          <div className="venue-summary-card-tier-container">
            <PriceTierBar venueId={venue.id}
                          priceTier={(venue.price.tier || -1)}/>
          </div>

          <div className="venue-summary-card-raiting-container"
               style={{
                 backgroundImage: `url('${imgTriangle}')`
               }}>
            <span className="venue-summary-card-raiting">
              {(venue.rating || "-")}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default VenueSummaryCard;
