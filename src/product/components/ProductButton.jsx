import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { HashRouter as Router, Link } from "react-router-dom";
import Options from "./Options";

const Styles = styled.div`
  margin-top: 75px;
  .btn-primary {
    background-color: #017179;
    color: white;
    width: 100%;
    font-size: 1.2rem;
  }

  .btn-xxl {
    font-size: 1.5rem;
  }

  .top-buffer {
    margin-top: 20px;
  }

  .dropdown-toggle {
    white-space: pre-wrap;
  }
`;

function ProductButton() {
  const productLine = ["Upper Jaw", "Lower Jaw"];


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
        title="Select Component button"
        background-color="#017179"
      >
        {productLine.map((product) => (
          <Dropdown.Item name={product}>
            <Options onload={product} />
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Styles>
  );
}

export default ProductButton;
