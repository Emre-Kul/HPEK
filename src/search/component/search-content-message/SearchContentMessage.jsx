import React, { Component }  from "react";
import PropTypes from "prop-types";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-content-message.scss";

export class SearchContentMessage extends Component{

  static propTypes = {
    error : PropTypes.object
  };

  render() {
    return (
      <div className="search-content-message">
        {(typeof this.props.error.status !== "undefined") ?
          <p className="search-content-message-error">
            {`Error Code : ${this.props.error.status}`} <br/>
            {`Error Message : ${this.props.error.statusText}`}
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