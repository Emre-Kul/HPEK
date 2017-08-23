import React from "react";
import {Link} from "react-router-dom";
import ReactCSSTransitionGroup from 'react-addons-css-transition-group';

import SearchForm from "../search-form/SearchForm.jsx";

import imgSearchHeaderLogo from "../../../../asset/img/search-header-logo.png";
import imgSearchHeaderHomeBackground from "../../../../asset/img/search-header-home-background.png";

import "./search-header.scss";

export class SearchHeader extends React.Component{
  render() {
    const homeBackgroundStyle = {
      "backgroundImage" : `url('${imgSearchHeaderHomeBackground}')`
    }
    return (
      <div>
        {(this.props.isHomePage) ?
          <div className="search-home-header-container"
             style={homeBackgroundStyle}>
            <ReactCSSTransitionGroup
              transitionName="header-home-animation"
              transitionAppear={true}
              transitionAppearTimeout={1000}
              transitionEnter={false}
              transitionLeave={false}>
            <img className="search-home-header-logo"
                 src={imgSearchHeaderLogo}
                 alt="Home Header Logo"/>
               <h1 className="search-home-header-slogan-title">
                {"Lorem ipsum dolor sit!"}
                </h1>
              <p className="search-home-header-slogan-content">
                {"Lorem ipsum dolor sit amet, consectetur adipiscing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua."}
              </p>
            <SearchForm/>
            </ReactCSSTransitionGroup>
          </div>:
          <div className="search-header-container">
            <div className="search-header-content-container">
             <div className="search-header-logo-container">
              <Link to="/">
              <img className="search-header-logo"
                   src={imgSearchHeaderLogo}
                   alt="Search Header Logo"/>
              </Link>
             </div>
              <div className="search-header-form-container">
                <SearchForm/>
              </div>
            </div>
          </div>
      }
      </div>
      );
  }
}
export default SearchHeader;