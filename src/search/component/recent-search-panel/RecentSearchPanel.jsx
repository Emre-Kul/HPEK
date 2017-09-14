import React, {Component} from "react";

import RecentSearchList from "../recent-search-list/RecentSearchList.jsx";

import "./recent-search-panel.scss";

class RecentSearchPanel extends Component {
  render() {
    return (
      <div className="recent-search-panel">
        <div className="recent-search-panel-title-container">
          {"RECENT SEARCHES"}
        </div>
        <RecentSearchList/>
      </div>
    );
  }
}

export default RecentSearchPanel;
