import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearchForm from "../component/search-form/search-form.jsx";
import SearchContent from "../component/search-content/search-content.jsx";


import FsApiHandler from "../../api/foursquare-api-handler.js";
//stylesheet
require("./search-page.scss");

export class SearchPage extends React.Component{
   constructor(){
     super();

     this.state = {
       homeActive : true,
       searchResults : []
     };
      this.makeSearch = this.makeSearch.bind(this);
    }

    makeSearch(e){
      e.preventDefault();
      let fsApiHandler = new FsApiHandler();

      let searchFormQuery = document.getElementById('search-form-query').value.toString();
      let searchFormLocation = document.getElementById('search-form-location').value.toString();

      fsApiHandler.searchVenues(searchFormQuery,searchFormLocation,10)
        .then((response) => {
          this.setState({
            homeActive: false,
            searchResults : response
          });
        })
        .catch(console.log);
    }

    render(){
      if(this.state.homeActive){
        return (
          <div>
            <div className="header header-big color-effect-blue-red">
              <img className="logo"
                src="img/index-logo.png"/>
              <h1>{'Lorem ipsum dolor sit!'}</h1>
              <p>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
              <SearchForm handleSearchButtonClick={this.makeSearch}/>
            </div>
            <Footer/>
          </div>
        );
      }
      else {
        return (
          <div>
            <div className="header header-small color-effect-blue-red">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img className="logo"
                      src="img/index-logo.png"/>
                  </div>
                  <div className="col-6">
                    <SearchForm handleSearchButtonClick={this.makeSearch}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container"
                id="search-content">
              <SearchContent venuesData={this.state.searchResults}/>
            </div>
            <Footer/>
          </div>
        );
      }
    }
}
export default SearchPage;