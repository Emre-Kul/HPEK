import React from "react";
import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
import SearchRecentSearchs from "../search-recent-searchs/SearchRecentSearchs.jsx";
import "./search-content.scss";

export class SearchContent extends React.Component{
  render() {
    if(this.props.warning.length > 0){
      return (<p>{"Warning..."}</p>);
    }
    if(this.props.venuesData.length === 0){
      return (
        <p>{"Loading..."}</p>
      );
    }
    return (
      <div className="search-content-container">
        <div className="search-content-card-container">
          {
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