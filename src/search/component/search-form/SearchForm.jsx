import React from "react";
import {Link} from "react-router-dom";
import "./search-form.scss";

export class SearchForm extends React.Component{
  constructor(){
    super();
    this.state = {
      query : "",
      location : ""
    }
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this);
    this.handleSearchLocationInput = this.handleSearchLocationInput.bind(this);
  }
  handleSearchQueryInput(e){
    this.setState({
      query : e.target.value
    });
  }
  handleSearchLocationInput(e){
    this.setState({
      location : e.target.value
    });
  }
  render(){
    const searchLink = `/search/${this.state.query}/${this.state.location}`;
    return (
      <form className="search-form-container">
        <input className="search-form-input-query search-form-input-text"
            type="text"
            placeholder="I'm looking for"
            onInput={this.handleSearchQueryInput}/>
        <input className="search-form-input-location search-form-input-text"
            type="text"
            id="search-form-location"
            placeholder="Place"
            onInput={this.handleSearchLocationInput}/>
        <Link to={searchLink}>
          <button className="search-form-button">
            {'Search'}
          </button>
        </Link>
      </form>
    );
  }

}
export default SearchForm;