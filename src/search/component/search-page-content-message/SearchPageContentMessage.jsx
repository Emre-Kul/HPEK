import React, {Component} from "react";
import PropTypes from "prop-types";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-page-content-message.scss";

export class SearchPageContentMessage extends Component {

  static propTypes = {
    error: PropTypes.object
  }

  render() {
    return (
      <div className="search-page-content-message">
        {(typeof this.props.error.status === "undefined") ?
          <img className="search-page-content-loading-icon"
               src={imgLoadingIcon}
               alt="Loading bar icon"/> :
          <p className="search-page-content-message-error">
            {`Error Code : ${this.props.error.status}`} <br/>
            {`Error Message : ${this.props.error.statusText}`}
          </p>
        }
      </div>
    );
  }
}

export default SearchPageContentMessage;
