import React, { Component } from "react";
import styled from "styled-components";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import ProductSelection from "./home/pages/productSelection.jsx";
import Product from "./product/pages/product.jsx";

function App() {
  return (
    <Router basename="/">
      <Route exact path="/">
        <ProductSelection />
      </Route>
      <Route path="/products/:pid">
        <Product />
      </Route>
    </Router>
  );
}
export default App;