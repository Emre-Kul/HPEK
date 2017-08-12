import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearchForm from "../component/search-form/search-form.jsx";
import SearchContent from "../component/search-content/search-content.jsx";
import {Redirect} from "react-router-dom";

import FsApiHandler from "../../api/foursquare-api-handler.js";
//stylesheet
require("./search-page.scss");

export class SearchPage extends React.Component{
    constructor(){
      super();
      this.state = {
        venuesData : "",
        warning : ""
      }
    }
    componentDidMount(){

      let query = this.props.match.params.query;
      let location = this.props.match.params.location;
      let fsApiHandler = new FsApiHandler();
        fsApiHandler.searchVenues(query,location,10)
          .then((venuesData) => {
            this.setState({
              venuesData : venuesData,
              warning : ""
            });
          })
          .catch(()=>{
            this.setState({
              warning : "warning"
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
                src="img/index-logo.png"/>
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