import React from "react";

import "./detail-image-card.scss"

export class DetailImageCard extends React.Component{
  constructor(){
    super();
  }

  render() {
    let backgroundStyle = {
      "backgroundImage" : `url(${this.props.backgroundImage})`
    }
    return (
      <div className="detail-image-card-container"
          style={backgroundStyle}>
      </div>
    );
  }
}
export default DetailImageCard;