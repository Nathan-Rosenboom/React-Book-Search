import React, { Component } from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import { Container } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Search from "./pages/search";

function App() {
  return (
    <Container>
      <Router>
        <div>
          <Switch>
            <Route exact path={["/", "/search"]}>
              <Search />
            </Route>
          </Switch>
        </div>
      </Router>
    </Container>
  );
}

export default App;
