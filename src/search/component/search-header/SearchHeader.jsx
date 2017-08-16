import React from "react";
import SearchForm from "../search-form/SearchForm.jsx";
import "./search-header.scss";
import imgSearchHeaderLogo from "./search-header-logo.png";
import imgSearchHeaderHomeBackground from "./search-header-home-background.png";
export class SearchHeader extends React.Component{
  constructor(){
    super();
  }

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
               src={imgSearchHeaderLogo} />
            <h1>Lorem ipsum dolor sit!</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit,
              sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.</p>
          <SearchForm/>
        </div>:

        <div className="search-header-container">
          <div className="search-header-logo-form-container">
            <img className="search-header-logo"
                 src={imgSearchHeaderLogo} />
            <SearchForm/>
          </div>
        </div>

      }
      </div>
      );
  }
}
export default SearchHeader;