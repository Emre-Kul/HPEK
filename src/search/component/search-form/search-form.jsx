import React from "react";

//stylesheet
require("./search-form.scss");

export class SearchForm extends React.Component{
  constructor(){
    super();
    this.clickSearchButton = this.clickSearchButton.bind(this);
  }
  clickSearchButton(e){
    e.preventDefault();
    console.log("Search Button Clicked")
  }
  render(){
    return (
      <form className="search-form-container div-center">
        <div className="row">
          <div className="col-3">
            <input className="search-input-text"
              type="text"
              placeholder="I'm looking for"/>
          </div>
          <div className="col-3">
            <input className="search-input-text"
              type="text"
              placeholder="Istanbul"/>
          </div>
          <div className="col-3">
            <button id="search-button" onClick={this.clickSearchButton}>{'Search'}</button>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchForm;