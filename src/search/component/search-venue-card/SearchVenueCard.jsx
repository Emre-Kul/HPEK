import React from "react";
import {Link} from "react-router-dom";

//stylesheet
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
        <div className="search-venue-card-info-container">
          <div className="search-venue-card-name">
            <Link to={detailLink}>
              {venueData.venueName}
            </Link>
          </div>
          <div className="search-venue-card-herenow">{venueData.venueHereNow}</div>
          <div className="search-venue-card-tier">{venueData.venuePriceTier}</div>
          <div className="search-venue-card-rating">{venueData.venueRating}</div>
        </div>
      </div>
    );
  }
}
export default SearchVenueCard;