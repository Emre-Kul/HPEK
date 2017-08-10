import React from "react";

export class SearchForm extends React.Component{
  constructor(){
    super();
  }
  render(){
    return (
      <form>
        <div className="input-container div-center">
          <div className="row">
            <div className="col-3">
              <input className="input-text"
                type="text"
                placeholder="I'm looking for"/>
            </div>
            <div className="col-3">
              <input className="input-text"
                type="text"
                placeholder="Istanbul"/>
            </div>
            <div className="col-3">
              <button id="search-button">{'Search'}</button>
            </div>
          </div>
        </div>
      </form>
    );
  }
}
export default SearchForm;