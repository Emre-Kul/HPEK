import React from "react";
import Footer from "../../common/footer/footer.jsx";

export class SearchPage extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
          <div>
            <h1>{'Search Page-Index'}</h1>
            <Footer/>
          </div>
        );
    }
}
export default SearchPage;