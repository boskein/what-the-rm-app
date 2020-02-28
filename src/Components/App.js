import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import About from "../pages/About";

export default function App() {
  const routes = [
    { component: Home, path: "/" },
    { component: About, path: "/about" }
  ];

  return (
    <Router>
      <Navbar />
      <Switch>
        {routes.map(route => (
          <Route exact component={route.component} path={route.path} />
        ))}
      </Switch>
    </Router>
  );
}
