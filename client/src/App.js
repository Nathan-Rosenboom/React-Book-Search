import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Search from "./pages/search";
import Saved from "./pages/saved";

function App() {
  return (
    <Container>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
            <Route exact path={"/saved"}>
              <Saved />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
