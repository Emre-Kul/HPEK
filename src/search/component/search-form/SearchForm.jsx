import React from "react";
import {Link} from "react-router-dom";

//stylesheet
import "./search-form.scss";

export class SearchForm extends React.Component{
  constructor(){
    super();
    this.state = {
      query : "",
      location : ""
    }
    this.handleWatchSearchForm = this.handleWatchSearchForm.bind(this);
  }

  handleWatchSearchForm(e){
    e.preventDefault();
    if(e.target.id === "search-form-query"){
      this.setState({
        query : e.target.value
      });
    }
    else if(e.target.id === "search-form-location"){
      this.setState({
        location : e.target.value
      });
    }
  }

  render(){
    let searchLink = `/search/${this.state.query}/${this.state.location}`;
    return (
      <form className="search-form-container"
onInput={this.handleWatchSearchForm}>
        <input className="search-form-input-text"
            type="text"
            id="search-form-query"
            placeholder="I'm looking for"/>
        <input className="search-form-input-text"
            type="text"
            id="search-form-location"
            placeholder="Place"/>
        <Link to={searchLink}>
          <button id="search-form-button">
            {'Search'}
          </button>
        </Link>
      </form>
    );
  }

}
export default SearchForm;