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
        <div className="search-venue-card-name-container">
          <Link className="search-venue-card-link"
                to={detailLink}>
            <span>
              {venueData.venueName}
            </span>
          </Link>
        </div>
        <div className="search-venue-card-herenow-container">
          <span className="search-venue-card-herenow">
          <img src={imgPeopleIcon}/>
            <span className="search-venue-card-text">
              {venueData.venueHereNow}
            </span>
          </span>
        </div>

        <div className="search-venue-card-tier-container">
          <span className="search-venue-card-tier">
          <img src={imgTagIcon}/>
            <span className="search-venue-card-tier-bar">

            </span>
          </span>
        </div>
        <div className="search-venue-card-raiting-container"
        style={{
          "backgroundImage" : `url('${imgTriangle}')`
        }}>
          <span className="search-venue-card-raiting">
            {venueData.venueRating}
          </span>
        </div>
      </div>
    );
  }
}
export default SearchVenueCard;