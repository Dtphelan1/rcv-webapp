import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import AppHeader from "./AppHeader";
import { routes } from "./routes";
import "./App.css";

function App() {
  return (
    <Router>
      <AppHeader routes={routes} />
      <Switch>
        {routes.map((route, i) => (
          <Route path={route.path} key={i}>
            <route.component />
          </Route>
        ))}
      </Switch>
    </Router>
  );
}

export default App;