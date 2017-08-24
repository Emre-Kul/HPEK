import React, { Component }  from "react";

import "./footer.scss";

export class Footer extends Component{
    render(){
        return (
          <div className="footer">
            <div className="footer-link-container">
              <a href="#about-us"
                 className="footer-link">
                {"About Us"}
              </a>
              <a href="#contact"
                 className="footer-link">
                {"Contact"}
              </a>
              <a href="#blog"
                 className="footer-link">
                {"Blog"}
              </a>
            </div>
          </div>
        );
    }
}
export default Footer;