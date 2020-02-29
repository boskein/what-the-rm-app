import React from "react";

import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Home from "../pages/Home";
import Navbar from "./Navbar";
import About from "../pages/About";
import Layout from "./Layout";
import ViewCharacter from "../pages/ViewCharacter";

export default function App() {
  return (
    <Router>
      <Layout>
        <Navbar />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/about" component={About} />
          <Route exact path="/character/:cId" component={ViewCharacter} />
        </Switch>
      </Layout>
    </Router>
  );
}
