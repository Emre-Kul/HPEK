import React from "react";
import PropTypes from "prop-types";

import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
import RecentSearchPanel from "../recent-search-panel/RecentSearchPanel.jsx";
import SearchContentMessage from "../search-content-message/SearchContentMessage.jsx";

import "./search-content.scss";

export class SearchContent extends React.Component{
  static propTypes = {
    venuesData : PropTypes.array,
    warning : PropTypes.string
  };

  render() {
    let dataLoading = this.props.venuesData.length === 0;
    let errorAccured = this.props.warning.length > 0;
    return (
      <div className="search-content">
        <div className="search-content-card-container">
          {
            ( dataLoading || errorAccured) ?
              <SearchContentMessage error={this.props.warning}/>:
            this.props.venuesData.map((venueData) => {
            return (
              <SearchVenueCard key={venueData.venueId}
                               venueData={venueData}/>
            );
          })
        }
        </div>
        <RecentSearchPanel/>
      </div>
    );
  }
}

export default SearchContent;