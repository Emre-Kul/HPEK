import React from "react";
import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
import RecentSearchPanel from "../recent-search-panel/RecentSearchPanel.jsx";

import "./search-content.scss";

import imgLoadingIcon from "../../../../asset/img/loading-bar-icon.svg";

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
        <RecentSearchPanel />
      </div>
    );
  }
}
export default SearchContent;