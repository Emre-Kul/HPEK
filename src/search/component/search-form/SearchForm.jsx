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
    let targetClassName = e.target.className.split(" ")[0];
    if(targetClassName === "search-form-input-query"){
      this.setState({
        query : e.target.value
      });
    }
    else if(targetClassName === "search-form-input-location"){
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
        <input className="search-form-input-query search-form-input-text"
            type="text"
            placeholder="I'm looking for"/>
        <input className="search-form-input-location search-form-input-text"
            type="text"
            id="search-form-location"
            placeholder="Place"/>
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