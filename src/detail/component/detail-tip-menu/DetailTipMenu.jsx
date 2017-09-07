import React, { Component }  from "react";
import PropTypes from "prop-types";

import "./detail-tip-menu.scss"

const VENUE_LOAD_TIP_SIZE = 5;
export class DetailTipMenu extends Component{

  static propTypes = {
    venueTips : PropTypes.array
  };

  constructor(){
    super();
    this.state = {
      venueTipLimit : VENUE_LOAD_TIP_SIZE
    }
    this.handleMoreTipClick = this.handleMoreTipClick.bind(this);
  }
  handleMoreTipClick(){
    if(this.state.venueTipLimit < this.props.venueTips.length) {
      this.setState({
        venueTipLimit: this.state.venueTipLimit + VENUE_LOAD_TIP_SIZE
      });
    }
  }
  render() {
    let venueTips = this.props.venueTips.slice(0,this.state.venueTipLimit);
    return (
      <div className="detail-tip-menu">
        <span className="detail-tip-menu-title">
          {"TIPS"}
        </span>
        {
        venueTips.map((venueTip) => {
          return (
            <div className="detail-tip-menu-user-container"
                 key={venueTip.id}>
              <div className="detail-tip-menu-user-picture-container">
                <a href={`${venueTip.user.photo.prefix}500x500${venueTip.user.photo.suffix}`}
                   target="_blank">
                  <img src={`${venueTip.user.photo.prefix}40x40${venueTip.user.photo.suffix}`}
                     alt="Tip User Picture"/>
                </a>
              </div>

              <div className="detail-tip-menu-user-name-container">
                <span className="detail-tip-menu-user-name">
                  {`${venueTip.user.firstName} ${venueTip.user.lastName}`}
                </span>
              </div>
              <span className="detail-tip-menu-user-comment">
                {venueTip.text}
              </span>
            </div>
          );
        })
        }
        <button className="detail-tip-menu-load-tips-button"
                onClick={this.handleMoreTipClick}>
          {"More Tips"}
        </button>
      </div>
    );
  }
}

export default DetailTipMenu;