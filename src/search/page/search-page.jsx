import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearchForm from "../component/search-form/search-form.jsx";
import SearchContent from "../component/search-content/search-content.jsx";

import FsApiHandler from "../../api/foursquare-api-handler.js";
//stylesheet
import "./search-page.scss";

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
      console.log(`Search For :  ${query} : ${location}`);
      let fsApiHandler = new FsApiHandler();
        fsApiHandler.searchVenues(query,location,"400x400",10)
          .then((venuesData) => {
            this.setState({
              lastSearch : query+location,
              venuesData : venuesData,
              warning : ""
            });
          })
          .catch((err)=>{
            this.setState({
              warning : err,
              lastSearch : query+location
            });
            console.log("catched");
            })
    }

    render(){
      if(this.props.location === "home"){
        return (
          <div>
            <div className="header header-big color-effect-blue-red">
              <img className="logo"
                src="/img/index-logo.png"/>
              <h1>{'Lorem ipsum dolor sit!'}</h1>
              <p>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
              <SearchForm />
            </div>
            <Footer/>
          </div>
        );
      }
      else {
        this.makeSearch();
        return (
          <div>
            <div className="header header-small color-effect-blue-red">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img className="logo"
                      src="/img/index-logo.png"/>
                  </div>
                  <div className="col-6">
                    <SearchForm />
                  </div>
                </div>
              </div>
            </div>
            <div className="container"
                id="search-content">
                <SearchContent warning={this.state.warning} venuesData={this.state.venuesData}/>
            </div>
            <Footer/>
          </div>
        );
      }
    }
}
export default SearchPage;