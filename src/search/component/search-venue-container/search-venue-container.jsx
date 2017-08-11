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
        <p>{venueData.venueId}</p>
        <p>{venueData.venueName}</p>
        <p>{venueData.venueRating}</p>
      </div>
    );
  }
}
export default SearchVenueContainer;