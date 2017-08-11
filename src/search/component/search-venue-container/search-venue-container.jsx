import React from "react";

//stylesheet
require("./search-venue-container.scss");

export class SearchVenueContainer extends React.Component{
  constructor(){
    super();
  }

  render() {
    let venueData = this.props.venueData;
    return (
      <div className="col-3 search-venue-div">
        <div className="venue-info-div">
          <div className="venue-name">{venueData.venueName}</div>
          <div className="venue-herenow">{venueData.venueHereNow}</div>
          <div className="venue-price-tier">{venueData.venuePriceTier}</div>
          <div className="venue-rating">{venueData.venueRating}</div>
        </div>
      </div>
    );
  }
}
export default SearchVenueContainer;