import React from "react";
import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
import RecentSearchPanel from "../recent-search-panel/RecentSearchPanel.jsx";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

import "./search-content.scss";

export class SearchContent extends React.Component{
  render() {
    return (
      <div className="search-content">
        <div className="search-content-card-container">
          {
            (this.props.venuesData.length === 0) ?
              <img className="search-content-loading-icon"
                 src={imgLoadingIcon}
                 alt="Loading bar icon"/> :
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