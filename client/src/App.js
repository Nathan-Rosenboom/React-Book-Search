import React, { Component } from "react";
import logo from "./logo.svg";
import 'bootstrap/dist/css/bootstrap.min.css';
import "./App.css";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Search from "./pages/search";

function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route exact path={['/', '/search']}>
            <Search />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default App;
