import React from "react";
import "./recent-search-list.scss";
import RecentSearchItem from "../recent-search-item/RecentSearchItem.jsx";

import {connect} from "react-redux";

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