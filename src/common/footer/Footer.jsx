import React from "react";
import "./footer.scss";

export class Footer extends React.Component{
    render(){
        return (
          <footer className="footer-container">
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
          </footer>
        );
    }
}
export default Footer;