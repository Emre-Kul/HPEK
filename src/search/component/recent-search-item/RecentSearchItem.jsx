import React from "react";
import "./recent-search-item.scss";
import {Link} from "react-router-dom";

export class RecentSearchItem extends React.Component{
  render() {
    return (
      <li className="recent-search-item">
        <Link className="recent-search-item-link"
          to={`/search/${this.props.recentSearchQuery}/${this.props.recentSearchLocation}`}>
        { `${this.props.recentSearchQuery} in ${this.props.recentSearchLocation}`}
        </Link>
      </li>
    );
  }
}

export default RecentSearchItem;