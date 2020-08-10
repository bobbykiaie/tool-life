import React, { Component } from "react";
import styled from "styled-components";
import { HashRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSelection from "./home/pages/productSelection.jsx";
import Product from "./product/pages/product.jsx";
import Tracking from "./tracking/pages/tracking.jsx";

function App() {
  return (
    <Router>
      <Route exact path="/">
        <ProductSelection />
      </Route>
      <Route exact path="/products/:pid">
        <Product />
      </Route>
      <Route path="/products/:pid/:oid">
        <Tracking />
      </Route>
    </Router>
  );
}
export default App;