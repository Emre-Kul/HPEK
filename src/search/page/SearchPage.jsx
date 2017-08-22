import React from "react";
import {connect} from "react-redux";
import Footer from "../../common/footer/Footer.jsx";
import SearchHeader from "../component/search-header/SearchHeader.jsx";
import SearchContent from "../component/search-content/SearchContent.jsx";
import {searchVenues} from "../../api/FsApiHandler.js";
import "./search-page.scss";

import {actionAddToSearchList} from "../../reducers/SearchPageReducer.js";

const venuePictureSize = "400x400";
const venueSearchLimit = 10;
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
    if(this.props.location === PAGE_HOME){
      return null;
    }
    let query = this.props.match.params.query;
    let location = this.props.match.params.location;
    if (query + location === this.state.lastSearch) {
      return null;
    }

    this.setState({
      venuesData: "",
      warning: "",
      lastSearch : query+location
    });

    searchVenues(query,location,venuePictureSize,venueSearchLimit)
      .then((venuesData) => {

        this.props.dispatch(actionAddToSearchList(venuesData.searchId,query,location));
        this.setState({
          venuesData : venuesData.venues
        });
      })
      .catch((err)=>{
      console.log(err);
        this.setState({
          warning : `Error Accured Please Try Again... `
        });
      })
  }

  render(){
    const isHomePage = this.props.location === "home";
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
