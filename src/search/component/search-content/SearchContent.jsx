import React from "react";
import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
import SearchRecentSearchs from "../search-recent-searchs/SearchRecentSearchs.jsx";
import imgLoadingIcon from "./loading-bar-icon.svg";

import "./search-content.scss";

export class SearchContent extends React.Component{
  render() {
    return (
      <div className="search-content-container">
        <div className="search-content-card-container">
          { (this.props.warning.length > 0) ?
              <p>{this.props.warning}</p> :
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
        <SearchRecentSearchs recentSearchsStore={this.props.recentSearchsStore}/>
      </div>
    );
  }
}
export default SearchContent;