import React, { Component }  from "react";
import PropTypes from "prop-types";

import imgTagIcon from "../../../asset/img/tag-icon.svg";

import "./price-tier-bar.scss";

//#c9c5ff,#a59fee,#8b81ff,#685dea

export class PriceTierBar extends Component{

  static propTypes = {
    priceTier : PropTypes.number,
    venueId : PropTypes.string
  };
  render() {
    let priceTierBarColors = ["#c9c5ff","#a59fee","#8b81ff","#685dea"];
    let priceTierBars = [];
    let priceTier = (this.props.priceTier > 4) ? 4 : this.props.priceTier;

    for(let i = 0;i < priceTier;i++){
      priceTierBars.push(<div key={`${this.props.venueId}-priceTierBar-${i}`}
                              className="price-tier-bar-child"
                              style={ {"backgroundColor" : priceTierBarColors[i]} }
                              />);
    }

    return (
      <div className="price-tier-bar">
        <img src={imgTagIcon}
             className="price-tier-bar-icon"/>
        <div className="price-tier-bar-container">
          {priceTierBars}
        </div>

      </div>
    );
  }
}

export default PriceTierBar;