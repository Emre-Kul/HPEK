import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearcForm from "../component/search-form/search-form.jsx";

//stylesheet
require("./search-page.scss");

export class SearchPage extends React.Component{
   constructor(){
      super();
      this.notInHome = false;
      console.log(SearcForm);
    }
    render(){
      if(this.notInHome){
        return (
          <div>
            <div id="search-header-container">
              <div className="container">
                <div className="row">
                  <div className="col-6">
                    <img id="search-header-logo" src="img/index-logo.png"/>
                  </div>
                  <div className="col-6">
                    <SearcForm/>
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
      else {
        return (
          <div>
            <div id="search-home-container">
              <img id="search-home-logo" src="img/index-logo.png"/>
              <h1>{'Lorem ipsum dolor sit!'}</h1>
              <p>
                {'Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'}
              </p>
              <SearcForm/>
            </div>
            <Footer/>
          </div>
        );
      }
    }
}
export default SearchPage;