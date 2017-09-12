import React, {Component} from "react";
import PropTypes from "prop-types";

import SearchPageVenueCard from "../search-page-venue-card/SearchPageVenueCard.jsx";
import RecentSearchPanel from "../recent-search-panel/RecentSearchPanel.jsx";
import SearchPageContentMessage from "../search-page-content-message/SearchPageContentMessage.jsx";

import "./search-page-content.scss";

export class SearchPageContent extends Component {
  static propTypes = {
    venuesData: PropTypes.array,
    warning: PropTypes.object
  }

  render() {
    const dataLoading = this.props.venuesData.length === 0;
    const errorAccured = this.props.warning.status > 0;

    return (
      <div className="search-page-content">
        <div className="search-page-content-card-container">
          {(dataLoading || errorAccured) ? <SearchPageContentMessage error={this.props.warning}/> :
              this.props.venuesData.map(venueData => (
                <SearchPageVenueCard key={venueData.venueId}
                                       venueData={venueData}/>
                ))}
        </div>
        <RecentSearchPanel/>
      </div>
    );
  }
}

export default SearchPageContent;
