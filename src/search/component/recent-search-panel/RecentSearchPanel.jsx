import React, { Component }  from "react";

import RecentSearchList from "../recent-search-list/RecentSearchList.jsx";

import "./recent-search-panel.scss";

export class RecentSearchPanel extends Component{
  render() {
    return (
      <div className="recent-search-panel">
        <div className="recent-search-panel-title-container">
          {"RECENT SEARCHES"}
        </div>
        <div className="recent-search-panel-list-container">
          <RecentSearchList/>
        </div>
      </div>
    );
  }
}
export default RecentSearchPanel;