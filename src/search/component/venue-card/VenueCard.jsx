import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgTriangle from "../../../../asset/img/triangle-icon.svg";

import "./venue-card.scss";

export class VenueCard extends Component {

  static propTypes = {
    venueData: PropTypes.object
  }

  render() {
    const {venueData} = this.props;
    const detailLink = `/detail/${this.props.venueData.venueId}`;
    const venueDivImageStyle = {
      backgroundImage: `url("${venueData.venuePhoto}")`
    };

    return (
      <div className="venue-card"
           style={venueDivImageStyle}>
        <div className="venue-card-content">
          <div className="venue-card-name-container">
            <Link className="venue-card-link"
                  to={detailLink}>
              <span>
                {venueData.venueName}
              </span>
            </Link>
          </div>
          <div className="venue-card-herenow-container">
            <span className="venue-card-herenow">
              <img src={imgPeopleIcon}/>
              <span className="venue-card-text">
                {venueData.venueHereNow}
              </span>
            </span>
          </div>

          <div className="venue-card-tier-container">
            <PriceTierBar venueId={venueData.venueId}
                          priceTier={venueData.venuePriceTier}/>
          </div>

          <div className="venue-card-raiting-container"
               style={{
                 backgroundImage: `url('${imgTriangle}')`
               }}>
            <span className="venue-card-raiting">
              {venueData.venueRating}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default VenueCard;
