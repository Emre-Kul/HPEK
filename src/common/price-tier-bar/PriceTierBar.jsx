import React, { Component }  from "react";
import PropTypes from "prop-types";

import imgTagIcon from "../../../asset/img/tag-icon.svg";

import "./price-tier-bar.scss";


export class PriceTierBar extends Component{

  static propTypes = {
    priceTier : PropTypes.number
  };
  render() {
    console.log(this.props.priceTier);
    return (
      <div className="price-tier-bar">
        <img src={imgTagIcon}
             className="price-tier-bar-icon"/>
        <div className="price-tier-bar-container">
        </div>

      </div>
    );
  }
}

export default PriceTierBar;