import React, {Component} from "react";
import {Link} from "react-router-dom";
import PropTypes from "prop-types";

import PriceTierBar from "../../../common/price-tier-bar/PriceTierBar.jsx";

import imgPeopleIcon from "../../../../asset/img/people-icon.svg";
import imgTriangle from "../../../../asset/img/triangle-icon.svg";

import "./venue-summary-card.scss";

export class VenueSummaryCard extends Component {

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
      <div className="venue-summary-card"
           style={venueDivImageStyle}>
        <div className="venue-summary-card-content">
          <div className="venue-summary-card-name-container">
            <Link className="venue-summary-card-link"
                  to={detailLink}>
              <span>
                {venueData.venueName}
              </span>
            </Link>
          </div>
          <div className="venue-summary-card-herenow-container">
            <span className="venue-summary-card-herenow">
              <img src={imgPeopleIcon}/>
              <span className="venue-summary-card-text">
                {venueData.venueHereNow}
              </span>
            </span>
          </div>

          <div className="venue-summary-card-tier-container">
            <PriceTierBar venueId={venueData.venueId}
                          priceTier={venueData.venuePriceTier}/>
          </div>

          <div className="venue-summary-card-raiting-container"
               style={{
                 backgroundImage: `url('${imgTriangle}')`
               }}>
            <span className="venue-summary-card-raiting">
              {venueData.venueRating}
            </span>
          </div>
        </div>
      </div>
    );
  }
}

export default VenueSummaryCard;
