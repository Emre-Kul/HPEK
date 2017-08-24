import React from "react";
import {connect} from "react-redux";

import RecentSearchItem from "../recent-search-item/RecentSearchItem.jsx";

import "./recent-search-list.scss";

export class RecentSearchList extends React.Component{
  render() {
    return (
      <ul className="recent-search-list">
        {
          this.props.recentSearchs.map((recentSearch) => {
            return (
              <RecentSearchItem key={recentSearch.id}
                                recentSearchQuery={recentSearch.searchQuery}
                                recentSearchLocation={recentSearch.searchLocation}/>
            )
          })
        }
      </ul>
    );
  }
}

RecentSearchList = connect((store)=>{
  return{
    recentSearchs : store
  }
})(RecentSearchList);

export default RecentSearchList;