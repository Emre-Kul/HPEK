import React, {Component} from "react";
import PropTypes from "prop-types";
import {connect} from "react-redux";

import VenueSummaryCard from "../venue-summary-card/VenueSummaryCard.jsx";
import RecentSearchPanel from "../recent-search-panel/RecentSearchPanel.jsx";
import SearchPageContentMessage from "../search-page-content-message/SearchPageContentMessage.jsx";

import "./search-page-content.scss";

class SearchPageContent extends Component {
  static propTypes = {
    venuesData: PropTypes.object,
    warning: PropTypes.string
  }

  render() {
    const {venuesData, warning} = this.props;

    const dataLoading = venuesData.venuesLoading;
    const errorAccured = warning.status > 0;

    return (
      <div className="search-page-content">
        <div className="search-page-content-card-container">
          {(dataLoading || errorAccured) ?
            <SearchPageContentMessage error={warning}/> :
              venuesData.venues.map(venueData => (
                <VenueSummaryCard key={venueData.venue.id}
                                  venue={venueData.venue}/>
                ))}
        </div>
        <RecentSearchPanel/>
      </div>
    );
  }
}

export default connect((rootStoreState) => {
  return {
    venuesData: rootStoreState.searchVenueData
  };
})(SearchPageContent);

