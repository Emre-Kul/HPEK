import React, { Component }  from "react";
import PropTypes from "prop-types";

import "./detail-image-card.scss"

export class DetailImageCard extends Component{

  static propTypes = {
    backgroundImage : PropTypes.string,
    userInfo : PropTypes.object
  }
  
  render() {
    let backgroundStyle = {
      "backgroundImage" : `url(${this.props.backgroundImage})`
    }
    return (
      <div className="detail-image-card"
           style={backgroundStyle}>
        <div className="detail-image-card-user-info-container">
          <div className="detail-image-card-user-info-content-container">
            <div className="detail-image-card-user-info-image-container">
              <img className="detail-image-card-user-info-image"
                   src={`${this.props.userInfo.photo.prefix}60x60${this.props.userInfo.photo.suffix}`}/>
            </div>
            {this.props.userInfo.firstName} {this.props.userInfo.lastName}
          </div>
        </div>
      </div>
    );
  }
}

export default DetailImageCard;