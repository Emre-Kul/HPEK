import React from "react";

export class SearchForm extends React.Component{
  constructor(){
    super();
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
              <button id="search-button">{'Search'}</button>
            </div>
          </div>
      </form>
    );
  }
}
export default SearchForm;