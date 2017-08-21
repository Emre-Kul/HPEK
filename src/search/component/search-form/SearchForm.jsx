import React from "react";
import {Redirect} from "react-router-dom";
import "./search-form.scss";

export class SearchForm extends React.Component{
  constructor(){
    super();
    this.state = {
      query : "",
      location : "",
      redirect : false
    }
    this.handleSearchQueryInput = this.handleSearchQueryInput.bind(this);
    this.handleSearchLocationInput = this.handleSearchLocationInput.bind(this);
    this.handleSearchButtonClick = this.handleSearchButtonClick.bind(this);
  }
  handleSearchQueryInput(e){
    this.setState({
      query : `${e.target.value.slice(0,1).toUpperCase()}${e.target.value.slice(1)}`,
      redirect : false
    });
  }
  handleSearchLocationInput(e){
    this.setState({
      location : `${e.target.value.slice(0,1).toUpperCase()}${e.target.value.slice(1)}`,
      redirect : false
    });
  }
  handleSearchButtonClick(e){
    e.preventDefault();
    if(this.state.location.length !== 0 && this.state.query.length !== 0) {
      this.setState({
        redirect: true
      });
    }
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
            placeholder="Place"
            onInput={this.handleSearchLocationInput}/>
        <button className="search-form-button"
          onClick={this.handleSearchButtonClick}/>
        {(this.state.redirect) ?
          <Redirect to={searchLink}/> :
          null
        }
      </form>
    );
  }

}
export default SearchForm;