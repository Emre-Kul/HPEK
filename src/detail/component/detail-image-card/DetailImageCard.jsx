import React, { Component }  from "react";
import PropTypes from "prop-types";

import "./detail-image-card.scss"

export class DetailImageCard extends Component{

  static propTypes = {
    backgroundImage : PropTypes.string,
    userInfo : PropTypes.object
  }

  constructor (){
    super();
    this.state = {
      showUserInfo : false
    }

    this.handleShowUserInfo = this.handleShowUserInfo.bind(this);
    this.handleHideUserInfo = this.handleHideUserInfo.bind(this);

  }

  handleShowUserInfo(){
    if(!this.state.showUserInfo){
      this.setState({
        showUserInfo : true
      });
    }
  }
  handleHideUserInfo(){
    if(this.state.showUserInfo){
      this.setState({
        showUserInfo : false
      });
    }
  }

  render() {
    let backgroundStyle = {
      "backgroundImage" : `url(${this.props.backgroundImage})`
    }
    return (
      <div className="detail-image-card"
           style={backgroundStyle}
           onMouseEnter={this.handleShowUserInfo}
           onMouseLeave={this.handleHideUserInfo}>

        {
          (this.state.showUserInfo) ?
            <div className="detail-image-card-user-container">
              <div className="detail-image-card-user-background"/>
              <div className="detail-image-card-user-info-container">
                {this.props.userInfo.firstName} {this.props.userInfo.lastName}
              </div>
            </div>:
            null
        }

      </div>

    );
  }
}

export default DetailImageCard;