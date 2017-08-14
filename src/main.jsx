import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router  , Route , Switch} from 'react-router-dom'


import SearchPage from "./search/page/SearchPage.jsx";
import DetailPage from "./detail/page/DetailPage.jsx";

//stylesheet
import "./main.scss";

document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    <Router>
      <div>
        <Switch>
          <Route exact path="/">
           <SearchPage location = "home"/>
          </Route>
          <Route path="/search/:query/:location" component={SearchPage}/>
          <Route path="/detail/:id" component={DetailPage} />
        </Switch>
      </div>
    </Router>,
    document.getElementById('root')
  );
});
