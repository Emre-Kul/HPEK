import React from "react";
import SearchForm from "../search-form/SearchForm.jsx";
//stylesheet
import "./search-header.scss";

export class SearchHeader extends React.Component{
  constructor(){
    super();
  }

  render() {
    return (
      <div className="search-header-container">
        <SearchForm />
      </div>
    );
  }
}
export default SearchHeader;