import React from "react";
import "./search-recent-searchs.scss";

export class SearchRecentSearchs extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="search-recent-search-container">
        <div className="search-recent-search-title">
          {'RECENT SEARCHES'}
        </div>
      </div>
    );
  }
}
export default SearchRecentSearchs;