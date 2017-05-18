import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";

function Header() {
  return (
    <div>
      <h1>React Demo App</h1>
    </div>
  );
}

ReactDOM.render((
  <HashRouter>
    <div className="container">
      <Header />
    </div>
  </HashRouter>
), document.getElementById("container"));
