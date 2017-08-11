import React from "react";
import ReactDOM from "react-dom";
import SearchPage from "./search/page/search-page.jsx";
//import ResultPage from "./result/page/result-page.jsx";



//stylesheet
require("./main.scss");

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <SearchPage/>,
    document.getElementById('root')
  );
});
