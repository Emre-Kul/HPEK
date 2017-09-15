import React, {Component} from "react";
import {connect} from "react-redux";
import PropTypes from "prop-types";

import Footer from "../../common/footer/Footer.jsx";
import SearchPageHeader from "../component/search-page-header/SearchPageHeader.jsx";
import SearchPageContent from "../component/search-page-content/SearchPageContent.jsx";
import {searchVenues} from "../../api/fsApiHandler.js";
import {actionAddToSearchList, actionSearchVenue} from "../../reducers/searchActions.js";

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
      venuesData: [],
      searchHeaderPhoto: "",
      warning: "",
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
    const {match, dispatch} = this.props;
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
          venuesData: [],
          searchHeaderPhoto: "",
          warning: "",
          lastSearch: query + location
        });
        dispatch(actionSearchVenue({
          venues: [],
          venuesLoading: true
        }));
        searchVenues(query, location, VENUE_SEARCH_LIMIT)
          .then((venuesResponse) => {

            dispatch(actionAddToSearchList({
              id: venuesResponse.searchId,
              searchQuery: query,
              searchLocation: location
            }));

            dispatch(actionSearchVenue({
              venues: venuesResponse.venues,
              venuesLoading: false
            }));
            const {venues} = venuesResponse;
            const {prefix, suffix} = venues[0].venue.featuredPhotos.items[0];
            const searchHeaderPhoto = `${prefix}${SEARCH_HEADER_PHOTO_SIZE}${suffix}`;

            this.setState({
              venuesData: venues,
              searchHeaderPhoto
            });
          })
          .catch((err) => {
            this.setState({
              warning: err.message
            });
          });
      }
    }
  }

  handleSearchFormSubmit = (query, location) => {
    this.props.history.push(`/search/${query}/${location}`);
  }

  render() {
    const {animateHeaderAtSearch, searchHeaderPhoto, warning, venuesData} = this.state;
    const isHomePage = this.props.match.url === "/";

    return (
      <div>
        <SearchPageHeader isHomePage={isHomePage}
                          animateHeaderAtSearch={animateHeaderAtSearch}
                          searchHeaderPhoto={searchHeaderPhoto}
                          onHandleSearchFormSubmit={this.handleSearchFormSubmit}/>
        {(!isHomePage &&
          <SearchPageContent warning={warning}/>)}
        <Footer/>
      </div>
    );
  }
}

export default connect()(SearchPage);
