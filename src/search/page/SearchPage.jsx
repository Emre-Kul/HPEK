import React from "react";
import {connect} from "react-redux";

import Footer from "../../common/footer/Footer.jsx";
import SearchHeader from "../component/search-header/SearchHeader.jsx";
import SearchContent from "../component/search-content/SearchContent.jsx";
import {searchVenues} from "../../api/fsApiHandler.js";
import {actionAddToSearchList} from "../../reducers/searchActions.js";

const VENUE_PHOTO_SIZE = "400x400";
const VENUE_SEARCH_LIMIT = 10;
const PAGE_HOME = "home";



export class SearchPage extends React.Component{
  constructor(){
    super();
    this.state = {
      lastSearch : "",
      venuesData : "",
      warning : "",
      animateHeader : false
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
    if(this.props.location !== PAGE_HOME){
      let query = this.props.match.params.query;
      let location = this.props.match.params.location;
      if (query + location !== this.state.lastSearch) {
        this.setState({
          venuesData: "",
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
    const isHomePage = this.props.location === PAGE_HOME;
    return (
      <div>
        <SearchHeader isHomePage={isHomePage}/>
        {(isHomePage) ?
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
