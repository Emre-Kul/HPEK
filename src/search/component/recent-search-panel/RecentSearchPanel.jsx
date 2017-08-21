import React from "react";
import "./recent-search-panel.scss";
import RecentSearchList from "../recent-search-list/RecentSearchList.jsx";

export class RecentSearchPanel extends React.Component{
  render() {
    return (
      <div className="recent-search-panel-container">
        <div className="recent-search-panel-title">
          {"RECENT SEARCHES"}
        </div>
        <div className="recent-search-panel-list-container">
          <RecentSearchList />
        </div>
      </div>
    );
  }
}
export default RecentSearchPanel;