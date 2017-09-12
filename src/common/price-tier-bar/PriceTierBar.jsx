import React, {Component} from "react";
import PropTypes from "prop-types";

import imgTagIcon from "../../../asset/img/tag-icon.svg";

import "./price-tier-bar.scss";

export class PriceTierBar extends Component {

  static propTypes = {
    priceTier: PropTypes.number,
    venueId: PropTypes.string
  }
  createPriceTierBars = (venueId, priceTier) => {
    const priceTierBars = [];
    const priceTierBarColors = ["#c9c5ff", "#a59fee", "#8b81ff", "#685dea"];

    for (let i = 0; i < priceTier; i++) {
      priceTierBars.push(<div key={`${this.props.venueId}-priceTierBar-${i}`}
                              className="price-tier-bar-child"
                              style={{
                                backgroundColor: priceTierBarColors[i]
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
          {this.createPriceTierBars(this.props.venueId, this.props.priceTier)}
        </div>

      </div>
    );
  }
}

export default PriceTierBar;
