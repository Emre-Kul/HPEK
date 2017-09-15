import React from "react";
import ReactDOM from "react-dom";
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {Provider} from "react-redux";
import {combineReducers, createStore} from "redux";

import searchReducer from "./reducers/searchReducer.js";
import venueDetailReducer from "./reducers/venueDetailReducer.js";
import SearchPage from "./search/page/SearchPage.jsx";
import VenueDetailPage from "./venueDetail/page/VenueDetailPage.jsx";

import "./main.scss";
import "../asset/font/fonts.scss";

const STORE = createStore(combineReducers({
  searchReducer,
  venueDetailReducer
}));
const APP_ELEMENT = document.getElementById("root");

ReactDOM.render(
  <Provider store={STORE}>
    <Router>
      <div>
        <Switch>
          <Route path="/search/:query/:location"
                 component={SearchPage}/>
          <Route path="/detail/:id"
                 component={VenueDetailPage}/>
          <Route path="/"
                 component={SearchPage}/>
        </Switch>
      </div>
    </Router>
  </Provider>,
  APP_ELEMENT
);
