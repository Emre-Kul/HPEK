import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearchForm from "../component/search-form/search-form.jsx";

//stylesheet
require("./search-page.scss");

export class SearchPage extends React.Component{
   constructor(){
     super();

     this.state = {
       homeActive : true
     };

    }

    makeSearch(e){
      e.preventDefault();
      if(this.state.homeActive) {
        this.setState({
          homeActive: false
        });
      }
    }

    render(){
      if(this.state.homeActive){
        return (
          <div>
            <div className="header header-big color-effect-blue-red">
              <img className="logo" src="img/index-logo.png"/>
              <h1>{'Lorem ipsum dolor sit!'}</h1>
              <p>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
              <SearchForm searchButtonClick={this.makeSearch.bind(this)}/>
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
                    <img className="logo" src="img/index-logo.png"/>
                  </div>
                  <div className="col-6">
                    <SearchForm searchButtonClick={this.makeSearch.bind(this)}/>
                  </div>
                </div>
              </div>
            </div>
            <div className="container" id="search-content">
              {'aaa'}
            </div>
            <Footer/>
          </div>
        );
      }
    }
}
export default SearchPage;