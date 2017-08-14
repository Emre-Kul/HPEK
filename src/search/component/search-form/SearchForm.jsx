import React from "react";
import {Link} from "react-router-dom";

//stylesheet
import "./search-form.scss";

export class SearchForm extends React.Component{
  constructor(){
    super();
    this.state = {
      linkTo : "/search/",
      query : "",
      location : ""
    }
    this.watchSearchForm = this.watchSearchForm.bind(this);
  }

  watchSearchForm(e){
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
    return (
      <form className="search-form-container div-center" onInput={this.watchSearchForm}>
        <div className="row">
          <input className="search-input-text"
            type="text"
            id="search-form-query"
            name="q"
            placeholder="I'm looking for"/>
          <input className="search-input-text"
            type="text"
            id="search-form-location"
            name="l"
            placeholder="Place"/>
          <Link to={`${this.state.linkTo}${this.state.query}/${this.state.location}`}>
            <button id="search-button">
              {'Search'}
            </button>
          </Link>
        </div>
      </form>
    );
  }

}
export default SearchForm;