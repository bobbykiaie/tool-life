import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter as Router, Link } from "react-router-dom";

const Styles = styled.div`
  margin-top: 75px;
  .btn-primary {
    background-color: #017179;
    color: white;
    width: 100%;
  
  }

  .btn-xxl {

  }

  .top-buffer {
    margin-top: 20px;
  }
`;

function ProductButton() {
  const productLine = ["Open Fusion", "Fine"];
  const productLink = (product) => {
    const split = product.split(" ");
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const newLink = split.reduce(reducer);
    return newLink;
  };

  return (
    <Styles>
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Product Line"
        background-color="#017179"
      >
        {productLine.map((product) => (
          <Dropdown.Item name={product}>
            <Router>
              <Link to={"/products/" + productLink(product)}>{product}</Link>
            </Router>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Styles>
  );
}

export default ProductButton;
