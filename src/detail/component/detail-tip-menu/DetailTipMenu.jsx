import React from "react";

import "./detail-tip-menu.scss"

export class DetailTipMenu extends React.Component{
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
                  <img src={`${venueTip.user.photo.prefix}40x40${venueTip.user.photo.suffix}`}
                    alt="Tip User Picture"/>
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