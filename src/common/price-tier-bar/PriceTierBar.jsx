import React, {Component} from "react";
import PropTypes from "prop-types";

import imgTagIcon from "../../../asset/img/tag-icon.svg";

import "./price-tier-bar.scss";

const PRICE_TIER_BAR_COLORS = ["#c9c5ff", "#a59fee", "#8b81ff", "#685dea"];

export class PriceTierBar extends Component {

  static propTypes = {
    priceTier: PropTypes.number,
    venueId: PropTypes.string
  }
  renderPriceTierBars = (venueId, priceTier) => {
    const priceTierBars = [];

    for (let index = 0; index < priceTier; index++) {
      priceTierBars.push(<div key={`${this.props.venueId}-priceTierBar-${index}`}
                              className="price-tier-bar-child"
                              style={{
                                backgroundColor: PRICE_TIER_BAR_COLORS[index]
                              }}/>);
    }
    return priceTierBars;
  }

  render() {
    return (
      <div className="price-tier-bar">
        <img src={imgTagIcon}
             className="price-tier-bar-icon"/>
        <div className="price-tier-bar-container">
          {this.renderPriceTierBars(this.props.venueId, this.props.priceTier)}
        </div>

      </div>
    );
  }
}

export default PriceTierBar;
