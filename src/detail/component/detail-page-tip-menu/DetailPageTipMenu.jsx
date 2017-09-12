import React, {Component} from "react";
import PropTypes from "prop-types";

import "./detail-page-tip-menu.scss";

const VENUE_LOAD_TIP_SIZE = 5;

export class DetailPageTipMenu extends Component {

  static propTypes = {
    venueTips: PropTypes.array
  }

  constructor() {
    super();
    this.state = {
      venueTipLimit: VENUE_LOAD_TIP_SIZE
    };
  }

  handleMoreTipClick = () => {
    if (this.state.venueTipLimit < this.props.venueTips.length) {
      this.setState({
        venueTipLimit: this.state.venueTipLimit + VENUE_LOAD_TIP_SIZE
      });
    }
  }

  render() {
    const venueTips = this.props.venueTips.slice(0, this.state.venueTipLimit);

    return (
      <div className="detail-page-tip-menu">
        <span className="detail-page-tip-menu-title">
          {"TIPS"}
        </span>
        {
          venueTips.map(venueTip => (
            <div className="detail-page-tip-menu-user-container"
                 key={venueTip.id}>
              <div className="detail-page-tip-menu-user-picture-container">
                <a href={`${venueTip.user.photo.prefix}500x500${venueTip.user.photo.suffix}`}
                   target="_blank">
                  <img src={`${venueTip.user.photo.prefix}40x40${venueTip.user.photo.suffix}`}
                       alt="Tip User Picture"/>
                </a>
              </div>

              <div className="detail-page-tip-menu-user-name-container">
                <span className="detail-page-tip-menu-user-name">
                  {(typeof venueTip.user.firstName !== "undefined" && venueTip.user.firstName)}
                  {" "}
                  {(typeof venueTip.user.lastName !== "undefined" && venueTip.user.lastName)}
                </span>
              </div>
              <span className="detail-page-tip-menu-user-comment">
                {venueTip.text}
              </span>
            </div>
            ))
        }
        <button className="detail-page-tip-menu-load-tips-button"
                onClick={this.handleMoreTipClick}>
          {"More Tips"}
        </button>
      </div>
    );
  }
}

export default DetailPageTipMenu;
