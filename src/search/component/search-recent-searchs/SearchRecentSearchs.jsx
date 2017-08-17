import React from "react";
import "./search-recent-searchs.scss";
import {Link} from "react-router-dom";

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
              <div className="search-recent-search-content"
                   key={recentSearch.id}>
                <Link className="search-recent-search-link"
                      to={`/search/${recentSearch.searchQuery}/${recentSearch.searchLocation}`}>
                  {`${recentSearch.searchQuery} in ${recentSearch.searchLocation}`}
                </Link>
              </div>
            );
          })
        }
      </div>
    );
  }
}
export default SearchRecentSearchs;