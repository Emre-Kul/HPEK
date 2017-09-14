import React, {Component} from "react";
import {Redirect} from "react-router-dom";

import "./search-page-form.scss";

export class SearchPageForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      query: "",
      location: "",
      redirect: false
    };
  }

  componentWillUpdate() {
    if (this.state.redirect) {
      this.setState({
        redirect: false
      });
    }
  }

  handleSearchQueryInput = (e) => {
    this.setState({
      query: `${e.target.value.slice(0, 1).toUpperCase()}${e.target.value.slice(1)}`
    });
  }

  handleSearchLocationInput = (e) => {
    this.setState({
      location: `${e.target.value.slice(0, 1).toUpperCase()}${e.target.value.slice(1)}`
    });
  }

  handleSearchSubmit = (e) => {
    e.preventDefault();
    const {location, query} = this.state;
    this.props.handleSearchFormSubmit(query,location);
  }

  render() {
    return (
      <form className="search-page-form"
            onSubmit={this.handleSearchSubmit}>
        <input className="search-page-form-query-input search-page-form-input"
               type="text"
               placeholder="I'm looking for"
               onInput={this.handleSearchQueryInput}/>
        <input className="search-page-form-location-input search-page-form-input"
               type="text"
               placeholder="Place"
               onInput={this.handleSearchLocationInput}/>
        <button className="search-page-form-button"
                type="submit"/>
      </form>
    );
  }
}

export default SearchPageForm;
