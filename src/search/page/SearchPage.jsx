import React, { Component }  from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Footer from "../../common/footer/Footer.jsx";
import SearchHeader from "../component/search-header/SearchHeader.jsx";
import SearchContent from "../component/search-content/SearchContent.jsx";
import {searchVenues} from "../../api/fsApiHandler.js";
import {actionAddToSearchList} from "../../reducers/searchActions.js";

const VENUE_PHOTO_SIZE = "400x400";
const VENUE_SEARCH_LIMIT = 10;

export class SearchPage extends Component{

  static propTypes = {
    isHomePage : PropTypes.bool,
    match: PropTypes.object,
    dispatch : PropTypes.func
  };

  constructor(){
    super();
    this.state = {
      lastSearch : "",
      venuesData : [],
      warning : "",
      animateHeaderAtSearch : false
    }

    this.makeSearch = this.makeSearch.bind(this);

  }
  componentDidMount(){
    this.makeSearch();
  }
  componentDidUpdate(){
    this.makeSearch();
  }
  makeSearch(){
    if(this.props.isHomePage && !this.state.animateHeaderAtSearch){
      this.setState({
        animateHeaderAtSearch: true
      });
    }
    if(!this.props.isHomePage){
      let query = this.props.match.params.query;
      let location = this.props.match.params.location;
      if (query + location !== this.state.lastSearch) {
        this.setState({
          venuesData: [],
          warning: "",
          lastSearch: query + location
        });
        searchVenues(query, location, VENUE_PHOTO_SIZE, VENUE_SEARCH_LIMIT)
          .then((venuesData) => {
            this.props.dispatch(actionAddToSearchList(venuesData.searchId, query, location));
            this.setState({
              venuesData: venuesData.venues
            });
          })
          .catch((err) => {
            this.setState({
              warning: `Error Accured Please Try Again... ${err}`
            });
          })
      }
    }
  }
  render(){
    let isHomePage = this.props.isHomePage;
    return (
      <div>
        <SearchHeader isHomePage={isHomePage}
                      animateHeaderAtSearch={this.state.animateHeaderAtSearch}/>
        {(this.props.isHomePage) ?
          null
          :  <SearchContent warning={this.state.warning}
                            venuesData={this.state.venuesData}/>}
        <Footer/>
      </div>
    );
  }
}

SearchPage = connect()(SearchPage);

export default SearchPage;
