import React from "react";

import "./detail-tip-menu.scss"

export class DetailTipMenu extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="detail-tip-menu-container">
        <div className="detail-tip-menu-title">
          {'TIPS'}
        </div>
        {
          this.props.venueTips.slice(0,10).map((venueTip) => {
            return (
              <div className="detail-tip-menu-user-container"
                   key={venueTip.id}>
                <div className="detail-tip-menu-user-picture">
                    <img src={`${venueTip.user.photo.prefix}40x40${venueTip.user.photo.suffix}`} />
                </div>
                <div className="detail-tip-menu-user-name">
                  {`${venueTip.user.firstName} ${venueTip.user.lastName}`}
                </div>
                <div className="detail-tip-menu-user-comment">
                  {venueTip.text}
                </div>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default DetailTipMenu;