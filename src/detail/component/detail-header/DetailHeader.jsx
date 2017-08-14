import React from "react";

//stylesheet
import "./detail-header.scss";

export class DetailHeader extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <div className="detail-header-container">
          <img className="detail-header-logo"
               src="/img/index-logo.png"/>
          <div className="detail-header-contact-container"/>
        </div>
      </div>
    );
  }
}
export default DetailHeader;