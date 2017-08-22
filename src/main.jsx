import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router  , Route , Switch} from 'react-router-dom';

import {Provider} from "react-redux";
import {createStore} from "redux";
import {searchPageReducer} from "./reducers/SearchPageReducer.js";

import SearchPage from "./search/page/SearchPage.jsx";
import DetailPage from "./detail/page/DetailPage.jsx";

import "./main.scss";
import "./common/fonts/fonts.scss";

const store = createStore(searchPageReducer);
const appElement = document.getElementById("root");

ReactDOM.render(
  <Provider store={store}>
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
  appElement
);