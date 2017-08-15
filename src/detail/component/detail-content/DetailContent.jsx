import React from "react";
import "./detail-content.scss";

export class DetailContent extends React.Component{
  constructor(){
    super();
  }
  render(){
    console.log(this.props.venueTips);
    return(
      <div className="detail-content-container">
        <div className="detail-content-image-container">{this.props.venueId}</div>
        <div className="detail-content-tips-container"/>
      </div>
    );
  }
}
export default DetailContent;