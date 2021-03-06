import React, {Component} from "react";
import PropTypes from "prop-types";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-page-content-message.scss";

class SearchPageContentMessage extends Component {

  static propTypes = {
    error: PropTypes.string
  }

  render() {
    const {error} = this.props;

    return (
      <div className="search-page-content-message">
        {(error.length === 0) ?
          <img className="search-page-content-loading-icon"
               src={imgLoadingIcon}
               alt="Loading bar icon"/> :
          <p className="search-page-content-message-error">
            {`Error : ${error}`}
          </p>
        }
      </div>
    );
  }
}

export default SearchPageContentMessage;
