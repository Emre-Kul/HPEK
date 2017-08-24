import React from "react";
import PropTypes from "prop-types";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-content-message.scss";

export class SearchContentMessage extends React.Component{

  static propTypes = {
    error : PropTypes.string
  };

  render() {
    return (
      <div className="search-content-message">
        {(this.props.error.length > 0) ?
          <p className="search-content-message-error">
            {this.props.error}
          </p>:
          <img className="search-content-loading-icon"
               src={imgLoadingIcon}
               alt="Loading bar icon"/>
        }
      </div>
    );
  }
}

export default SearchContentMessage;