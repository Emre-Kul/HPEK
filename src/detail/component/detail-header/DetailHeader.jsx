import React from "react";
import "./detail-header.scss";

export class DetailHeader extends React.Component{
  constructor(){
    super();
  }
  render(){
    let detailHeaderPhoto = {
      "backgroundImage" : `url("${this.props.headerPhoto}")`
    }
    return(
        <div className="detail-header-container"
        style={detailHeaderPhoto}>
          <div className="detail-header-background" />
          <img className="detail-header-logo"
               src="/img/index-logo.png"/>
          <div className="detail-header-contact-container"/>
        </div>
    );
  }
}
export default DetailHeader;