import React from "react";
import "./search-recent-searchs.scss";

export class SearchRecentSearchs extends React.Component{
  render() {
    return (
      <div className="search-recent-search-container">
        <div className="search-recent-search-title">
          {"RECENT SEARCHES"}
        </div>
        {
          this.props.recentSearchsStore.map((recentSearch) => {
            return (
              <div key={recentSearch.id}>
                {`${recentSearch.searchQuery} in ${recentSearch.searchLocation}`}
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default SearchRecentSearchs;