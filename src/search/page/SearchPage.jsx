import React from "react";
import Footer from "../../common/footer/Footer.jsx";
import SearchHeader from "../component/search-header/SearchHeader.jsx";
import SearchContent from "../component/search-content/SearchContent.jsx";
import FsApiHandler from "../../api/FoursquareApiHandler.js";
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
      const isHomePage = this.props.location === "home";
      if(!isHomePage){
        this.makeSearch();
      }
      return (
        <div>
          <SearchHeader/>
          {(isHomePage) ?
            null
            :  <SearchContent warning={this.state.warning}
                  venuesData={this.state.venuesData}/>}
          <Footer/>
        </div>
      );
    }
}
export default SearchPage;