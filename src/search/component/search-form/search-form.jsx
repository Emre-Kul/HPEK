import React from "react";

//stylesheet
require("./search-form.scss");

export class SearchForm extends React.Component{
  constructor(){
    super();
  }

  render(){
    return (
      <form className="search-form-container div-center">
        <div className="row">
          <input className="search-input-text"
            type="text"
            id="search-form-query"
            placeholder="I'm looking for"/>
          <input className="search-input-text"
            type="text"
            id="search-form-location"
            placeholder="Place"/>
          <button id="search-button"
            onClick={this.props.handleSearchButtonClick}>{'Search'}</button>
        </div>
      </form>
    );
  }
}
export default SearchForm;