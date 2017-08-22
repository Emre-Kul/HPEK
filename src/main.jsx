import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router  , Route , Switch} from 'react-router-dom';
import {Provider} from "react-redux";
import {createStore} from "redux";

import {searchPageReducer} from "./reducers/searchPageReducer.js";
import SearchPage from "./search/page/SearchPage.jsx";
import DetailPage from "./detail/page/DetailPage.jsx";

import "./main.scss";
import "../asset/font/fonts.scss";

const STORE = createStore(searchPageReducer);
const APP_ELEMENT = document.getElementById("root");

ReactDOM.render(
  <Provider store={STORE}>
    <Router>
      <div>
        <Switch>
          <Route exact={true}
            path="/">
            <SearchPage location="home"/>
          </Route>
          <Route path="/search/:query/:location"
            component={SearchPage}/>
          <Route path="/detail/:id"
            component={DetailPage}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  APP_ELEMENT
);