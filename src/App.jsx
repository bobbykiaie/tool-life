import React, { Component } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSelection from "./home/pages/productSelection.jsx";
import Product from "./product/pages/product.jsx";
import Tracking from "./tracking/pages/tracking.jsx";
import Data from "./tracking/components/Data.jsx";
import DataOne from "./tracking/components/DataOne.jsx";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <ProductSelection />
      </Route>
      <Route exact path="/products/:pid">
        <Product />
      </Route>
      <Route exact path="/products/:pid/:cid/:oid">
        <Tracking />
      </Route>
      <Route exact path="/products/:pid/:cid/:oid/data">
        <DataOne />
      </Route>
    </Router>
  );
}
export default App;
