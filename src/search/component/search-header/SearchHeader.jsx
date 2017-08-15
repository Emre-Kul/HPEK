import React from "react";
import SearchForm from "../search-form/SearchForm.jsx";
import "./search-header.scss";

export class SearchHeader extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="search-header-container">
        <div className="search-header-logo-form-container">
          <img className="search-header-logo" src="/img/index-logo.png" />
          <div className="search-header-form">
            <SearchForm/>
          </div>
        </div>
      </div>
    );
  }
}
export default SearchHeader;