import React from "react";
import "./detail-content.scss";

export class DetailContent extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div className="detail-content-container">
        {this.props.venueName}
      </div>
    );
  }
}
export default DetailContent;