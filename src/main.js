import React from "react";
import ReactDOM from "react-dom";
import Footer from "./common/footer.jsx";

const searchPageElement = (
    <div>
        <h1>searchPage</h1>
        <Footer />
    </div>
);
document.addEventListener("DOMContentLoaded", function(){
  ReactDOM.render(
    searchPageElement,
    document.getElementById('root')
  );
});
