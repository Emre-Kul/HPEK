import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearcForm from "../component/search-form/search-form.jsx";

//stylesheet
require("./search-page.scss");

export class SearchPage extends React.Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div>
          <div id="search-index-container">
            <img id="search-index-logo" src="img/index-logo.png" />
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
export default SearchPage;