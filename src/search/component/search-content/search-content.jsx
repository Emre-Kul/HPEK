import React from "react";
import SearchVenueContainer from "../search-venue-container/search-venue-container.jsx";
//stylesheet
require("./search-content.scss");

export class SearchContent extends React.Component{
  constructor(){
    super();
  }

  render() {
    if(this.props.warning.length > 0){
      return (<p>Warning...</p>);
    }
    if(this.props.venuesData.length == 0){
      return (
        <p>Loading...</p>
      );
    }
    return (
      <div className="row">
        {
          this.props.venuesData.map((venueData) => {
            return (
              <SearchVenueContainer
                className="col-3"
                key={venueData.venueId}
                venueData={venueData}/>
            );
          })
        }
      </div>
    );
  }
}
export default SearchContent;