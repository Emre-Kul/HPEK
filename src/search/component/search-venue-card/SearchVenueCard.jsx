import React from "react";
import {Link} from "react-router-dom";
import "./search-venue-card.scss";
export class SearchVenueCard extends React.Component{
  constructor(){
    super();
  }

  render() {
    let venueData = this.props.venueData;
    let detailLink = `/detail/${this.props.venueData.venueId}`;
    let venueDivImageStyle = {
      "backgroundImage" : `url("${venueData.venuePhoto}")`
    }
    return (
      <div className="search-venue-card"
style={venueDivImageStyle}>
        <div className="search-venue-card-background"/>
        <div className="search-venue-card-name">
          <Link to={detailLink}>
            {venueData.venueName}
          </Link>
        </div>
        <div className="search-venue-card-herenow">
          <img src="/img/people-icon.png"/>
          <span>{venueData.venueHereNow}</span>
        </div>

        <div className="search-venue-card-tier">
          <img src="/img/tag-icon.png"/>
          <span>{venueData.venuePriceTier}</span>
        </div>
        <div className="search-venue-card-raiting">{venueData.venueRating}</div>
      </div>
    );
  }
}
export default SearchVenueCard;