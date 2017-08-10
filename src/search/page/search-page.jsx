import React from "react";
import Footer from "../../common/footer/footer.jsx";
import SearcForm from "../component/search-form/search-form.jsx";

export class SearchPage extends React.Component{
    constructor(){
      super();
    }
    render(){
      return (
        <div>
          <SearcForm/>
          <h1>{'Search Page-Index'}</h1>
          <Footer/>
        </div>
        );
    }
}
export default SearchPage;