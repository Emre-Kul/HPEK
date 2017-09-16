import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Footer from "../../common/footer/Footer.jsx";
import SearchPageHeader from "../component/search-page-header/SearchPageHeader.jsx";
import SearchPageContent from "../component/search-page-content/SearchPageContent.jsx";
import {searchVenues} from "../../api/fsApiHandler.js";
import {addToSearchList, searchVenueStarted, searchVenueFulfilled, searchVenueRejected} from "../../reducers/searchActions.js";

const VENUE_SEARCH_LIMIT = 10;
const SEARCH_HEADER_PHOTO_SIZE = "1250x150";

class SearchPage extends Component {

  static propTypes = {
    match: PropTypes.object,
    history: PropTypes.object,
    dispatch: PropTypes.func
  }

  constructor(props) {
    super(props);

    this.state = {
      lastSearch: "",
      searchHeaderPhoto: "",
      animateHeaderAtSearch: false
    };

  }

  componentDidMount() {
    this.makeSearch();
  }

  componentDidUpdate() {
    this.makeSearch();
  }

  makeSearch = () => {
    const isHomePage = this.props.match.url === "/";
    const {match} = this.props;
    const {animateHeaderAtSearch, lastSearch} = this.state;

    if (isHomePage && !animateHeaderAtSearch) {
      this.setState({
        animateHeaderAtSearch: true
      });
    }
    if (!isHomePage && typeof match.params !== "undefined") {
      const {query, location} = match.params;

      if (query + location !== lastSearch) {
        this.setState({
          searchHeaderPhoto: "",
          lastSearch: query + location
        });

        this.props.dispatch((dispatch) => {
          dispatch(searchVenueStarted());
          searchVenues(query, location, VENUE_SEARCH_LIMIT)
            .then((venuesResponse) => {

              dispatch(addToSearchList({
                id: venuesResponse.searchId,
                searchQuery: query,
                searchLocation: location
              }));

              dispatch(searchVenueFulfilled({
                venues: venuesResponse.venues
              }));

              const {venues} = venuesResponse;
              const {prefix, suffix} = venues[0].venue.featuredPhotos.items[0];
              const searchHeaderPhoto = `${prefix}${SEARCH_HEADER_PHOTO_SIZE}${suffix}`;

              this.setState({
                searchHeaderPhoto
              });
            })
            .catch((err) => {
              dispatch(searchVenueRejected(err.message));
            });
        });


      }
    }
  }

  handleSearchFormSubmit = (query, location) => {
    this.props.history.push(`/search/${query}/${location}`);
  }

  render() {
    const {animateHeaderAtSearch, searchHeaderPhoto} = this.state;
    const isHomePage = this.props.match.url === "/";

    return (
      <div>
        <SearchPageHeader isHomePage={isHomePage}
                          animateHeaderAtSearch={animateHeaderAtSearch}
                          searchHeaderPhoto={searchHeaderPhoto}
                          onHandleSearchFormSubmit={this.handleSearchFormSubmit}/>
        {(!isHomePage &&
          <SearchPageContent/>)}
        <Footer/>
      </div>
    );
  }
}

export default connect()(SearchPage);
