import React from "react";
import PropTypes from "prop-types";

import "./detail-image-card.scss"

export class DetailImageCard extends React.Component{
  static propTypes = {
    backgroundImage : PropTypes.string
  }
  render() {
    let backgroundStyle = {
      "backgroundImage" : `url(${this.props.backgroundImage})`
    }
    return (
      <div className="detail-image-card"
           style={backgroundStyle}/>
    );
  }
}

export default DetailImageCard;