import React from "react";
import Footer from "../../common/footer/footer.jsx";

//stylesheet
require("./result-page.scss");

export class ResultPage extends React.Component{
  constructor(){
    super();
  }
  render(){
    return(
      <div>
        <div className="header header-big ">
          <img className="logo"
            src="img/index-logo.png"/>
          <div id="result-contact-container"
            className="color-effect-blue-red"/>
        </div>
        <Footer/>
      </div>
    );
  }
}
export default ResultPage;