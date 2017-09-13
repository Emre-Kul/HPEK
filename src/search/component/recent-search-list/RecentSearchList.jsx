import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import RecentSearchItem from "../recent-search-item/RecentSearchItem.jsx";

import "./recent-search-list.scss";

export class RecentSearchList extends Component {
  static propTypes = {
    recentSearchs: PropTypes.array
  }

  render() {
    const {recentSearchs} = this.props;

    return (
      <ul className="recent-search-list">
        {
          recentSearchs.map(recentSearch => (
            <RecentSearchItem key={recentSearch.id}
                              recentSearchQuery={recentSearch.searchQuery}
                              recentSearchLocation={recentSearch.searchLocation}/>
            ))
        }
      </ul>
    );
  }
}

export default connect((rootStoreState) => {
  return {
    recentSearchs: rootStoreState.recentSearchs
  };
})(RecentSearchList);
