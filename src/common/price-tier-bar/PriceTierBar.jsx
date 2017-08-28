import React, { Component }  from "react";
import PropTypes from "prop-types";

import imgTagIcon from "../../../asset/img/tag-icon.svg";

import "./price-tier-bar.scss";

//#c9c5ff,#a59fee,#8b81ff,#685dea

export class PriceTierBar extends Component{

  static propTypes = {
    priceTier : PropTypes.number
  };
  render() {
    return (
      <div className="price-tier-bar">
        <img src={imgTagIcon}
             className="price-tier-bar-icon"/>
        <div className="price-tier-bar-container">

          <div className="price-tier-bar-child"
               style={ {"backgroundColor" : "#c9c5ff"} }/>

          <div className="price-tier-bar-child"
               style={ {"backgroundColor" : "#a59fee"} }/>

          <div className="price-tier-bar-child"
               style={ {"backgroundColor" : "#8b81ff"} }/>

          <div className="price-tier-bar-child"
               style={ {"backgroundColor" : "#685dea"} }/>

        </div>

      </div>
    );
  }
}

export default PriceTierBar;