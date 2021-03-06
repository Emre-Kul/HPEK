import React, {Component} from "react";
import PropTypes from "prop-types";

import "./search-page-form.scss";

class SearchPageForm extends Component {
  static propTypes = {
    onHandleSearchFormSubmit: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      query: "",
      location: ""
    };
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

  handleSubmit = (e) => {
    e.preventDefault();
    const {location, query} = this.state;
    const {onHandleSearchFormSubmit} = this.props;

    onHandleSearchFormSubmit(query, location);
  }

  render() {
    return (
      <form className="search-page-form"
            onSubmit={this.handleSubmit}>
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
