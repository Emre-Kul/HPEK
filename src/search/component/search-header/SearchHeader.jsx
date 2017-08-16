import React from "react";
import SearchForm from "../search-form/SearchForm.jsx";
import "./search-header.scss";
import imgSearchHeaderLogo from "./search-header-logo.png";
import imgSearchHeaderHomeBackground from "./search-header-home-background.png";
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
        </div>:

        <div className="search-header-container">
          <div className="search-header-logo-form-container">
            <img className="search-header-logo"
                 src={imgSearchHeaderLogo}
                 alt="Search Header Logo"/>
            <SearchForm/>
          </div>
        </div>

      }
      </div>
      );
  }
}
export default SearchHeader;