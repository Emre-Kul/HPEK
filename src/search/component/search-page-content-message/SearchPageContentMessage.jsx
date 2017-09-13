import React, {Component} from "react";
import PropTypes from "prop-types";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-page-content-message.scss";

export class SearchPageContentMessage extends Component {

  static propTypes = {
    error: PropTypes.string
  }

  render() {
    return (
      <div className="search-page-content-message">
        {(this.props.error.length === 0) ?
          <img className="search-page-content-loading-icon"
               src={imgLoadingIcon}
               alt="Loading bar icon"/> :
          <p className="search-page-content-message-error">
            {`Error : ${this.props.error}`}
          </p>
        }
      </div>
    );
  }
}

export default SearchPageContentMessage;
