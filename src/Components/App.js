import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import About from "../pages/About";
import Layout from "./Layout";
import ViewCharacter from "../pages/ViewCharacter";

export default function App() {
  // const routes = [
  //   { id: '1', component: Home, path: "/" },
  //   { id: '2', component: About, path: "/about" },
  //   { id: '3', component: CharacterPage, path: /character/'}
  // ];

  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          {/* {routes.map(route => (
            <Route
              key={routes.id}
              exact
              component={route.component}
              path={route.path}
            />
          ))} */}
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/character/:cId" component={ViewCharacter} />
        </Switch>
      </Layout>
    </Router>
  );
}
