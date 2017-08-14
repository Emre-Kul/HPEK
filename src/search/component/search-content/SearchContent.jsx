import React from "react";
import SearchVenueCard from "../search-venue-card/SearchVenueCard.jsx";
//stylesheet
import "./search-content.scss";

export class SearchContent extends React.Component{
  constructor(){
    super();
  }

  render() {
    if(this.props.warning.length > 0){
      return (<p>{'Warning...'}</p>);
    }
    if(this.props.venuesData.length === 0){
      return (
        <p>{'Loading...'}</p>
      );
    }
    return (
      <div className="search-content-container">
        {
          this.props.venuesData.map((venueData) => {
            return (
              <SearchVenueCard key={venueData.venueId}
                venueData={venueData}/>
            );
          })
        }
      </div>
    );
  }
}
export default SearchContent;