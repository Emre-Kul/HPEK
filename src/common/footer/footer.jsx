import React from "react";

require("./footer.scss");

export class Footer extends React.Component{
    constructor(){
        super();
    }
    render(){
        return (
          <footer>
            <div className="container">
              <a href="#about-us"> {'About Us'} </a>
              <a href="#contact"> {'Contact'} </a>
              <a href="#blog"> {'Blog'} </a>
            </div>
          </footer>
        );
    }
}
export default Footer;