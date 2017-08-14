import React from "react";
import {Link} from "react-router-dom";

//stylesheet
import "./search-venue-container.scss";

export class SearchVenueContainer extends React.Component{
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
      <div className="col-3 search-venue-div" style={venueDivImageStyle}>
        <div className="venue-bg-div" ></div>
        <div className="venue-info-div">
          <div className="venue-name">
            <Link to={detailLink}>
              {venueData.venueName}
            </Link>
          </div>
          <div className="venue-herenow">{venueData.venueHereNow}</div>
          <div className="venue-price-tier">{venueData.venuePriceTier}</div>
          <div className="venue-rating">{venueData.venueRating}</div>
        </div>
      </div>
    );
  }
}
export default SearchVenueContainer;