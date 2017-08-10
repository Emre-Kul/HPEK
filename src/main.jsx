import React from "react";
import ReactDOM from "react-dom";
import SearchPage from "./search/page/search-page.jsx";


document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <SearchPage/>,
    document.getElementById('root')
  );
});
