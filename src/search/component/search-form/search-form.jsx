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
              placeholder="I'm looking for"/>
            <input className="search-input-text"
              type="text"
              placeholder="Place"/>
            <button id="search-button" onClick={this.props.searchButtonClick}>Search</button>
        </div>
      </form>
    );
  }
}
export default SearchForm;