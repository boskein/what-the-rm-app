import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import About from "../pages/About";
import Layout from "./Layout";

export default function App() {
  const routes = [
    { id: '1', component: Home, path: "/" },
    { id: '2', component: About, path: "/about" }
  ];

  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          {routes.map(route => (
            <Route
              key={routes.id}
              exact
              component={route.component}
              path={route.path}
            />
          ))}
        </Switch>
      </Layout>
    </Router>
  );
}
