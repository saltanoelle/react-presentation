import React from "react";
import ReactDOM from "react-dom";
import { Route, HashRouter } from "react-router-dom";
import Home from "./home";
import RepoList from "./repo_list";

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
      <Route exact path="/" component={Home} />
      <Route path="/repos" component={RepoList} />
    </div>
  </HashRouter>
), document.getElementById("container"));
