import React, { Component }  from "react";
import PropTypes from "prop-types";

import "./detail-tip-menu.scss"

export class DetailTipMenu extends Component{
  static propTypes = {
    venueTip : PropTypes.object
  };
  render() {
    return (
      <div className="detail-tip-menu">
        <span className="detail-tip-menu-title">
          {"TIPS"}
        </span>
        {
          this.props.venueTips.map((venueTip) => {
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
                <span className="detail-tip-menu-user-name">
                  {`${venueTip.user.firstName} ${venueTip.user.lastName}`}
                </span>
                <span className="detail-tip-menu-user-comment">
                  {venueTip.text}
                </span>
              </div>
            );
          })
        }
      </div>
    );
  }
}

export default DetailTipMenu;