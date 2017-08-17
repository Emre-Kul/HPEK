import React from "react";
import Footer from "../../common/footer/Footer.jsx";
import SearchHeader from "../component/search-header/SearchHeader.jsx";
import SearchContent from "../component/search-content/SearchContent.jsx";
import FsApiHandler from "../../api/FoursquareApiHandler.js";
import "./search-page.scss";

import SearchPageReducer from "./SearchPageReducer.js";
import { createStore } from "redux";
const searchPageStore = createStore(SearchPageReducer);

export class SearchPage extends React.Component{
  constructor(){
    super();
    this.state = {
      lastSearch : "",
      venuesData : "",
      warning : ""
    }

    this.makeSearch = this.makeSearch.bind(this);
  }
  makeSearch(){
    let query = this.props.match.params.query;
    let location = this.props.match.params.location;
    if (query + location === this.state.lastSearch) {
      return;
    }

    let fsApiHandler = new FsApiHandler();
    fsApiHandler.searchVenues(query,location,"400x400",10)
      .then((venuesData) => {
        searchPageStore.dispatch(
          {
            id : venuesData.searchId,
            type : "ADD_SEARCH",
            searchQuery : query,
            searchLocation : location
          }
        );
        this.setState({
          lastSearch : query+location,
          venuesData : venuesData.venues,
          warning : ""
        });
      })
      .catch((err)=>{
        this.setState({
          warning : err,
          lastSearch : query+location
        });
      })
  }

  render(){
    const isHomePage = this.props.location === "home";
    if(!isHomePage){
      this.makeSearch();
    }
    return (
      <div>
        <SearchHeader isHomePage={isHomePage}/>
        {(isHomePage) ?
          null
          :  <SearchContent recentSearchsStore={searchPageStore.getState()}
                            warning={this.state.warning}
                            venuesData={this.state.venuesData}/>}
        <Footer/>
      </div>
    );
  }
}
export default SearchPage;
