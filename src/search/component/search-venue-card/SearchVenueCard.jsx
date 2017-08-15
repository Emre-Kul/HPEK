import React from "react";
import {Link} from "react-router-dom";
import "./search-venue-card.scss";

import imgPeopleIcon from "./people-icon.svg";
import imgTagIcon from "./tag-icon.svg";
import imgTriangle from "./triangle-icon.svg";

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
      <div className="search-venue-card-container"
style={venueDivImageStyle}>
        <div className="search-venue-card-background"/>
        <div className="search-venue-card-name">
          <Link to={detailLink}>
            {venueData.venueName}
          </Link>
        </div>
        <div className="search-venue-card-herenow">
          <img src={imgPeopleIcon}/>
          <span>{venueData.venueHereNow}</span>
        </div>

        <div className="search-venue-card-tier">
          <img src={imgTagIcon}/>
          <span>{venueData.venuePriceTier}</span>
        </div>
        <div className="search-venue-card-raiting"
        style={{
          "backgroundImage" : `url('${imgTriangle}')`
        }}>{venueData.venueRating}</div>
      </div>
    );
  }
}
export default SearchVenueCard;