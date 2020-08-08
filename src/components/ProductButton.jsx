import React, { useState } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

const useStyle = makeStyles(() => ({
  myButton: {},
}));

function ProductButton() {
  const classes = useStyle();

  const [productLine, setProductLine] = useState(["Open Fusion", "Fine"]);
  const [dropdownLink, setLink] = useState();

  const productLink = (product) => {
    const split = product.split(" ")
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const newLink = split.reduce(reducer);
    return (newLink);
  };

  return (
    <div>
      <style type="text/css">
        {`
    .btn-primary {
      background-color: #017179;
      color: white;
      width: 100%;
      font-size: 1.2rem;
      }
  

    .btn-xxl{
    
      font-size: 1.5rem;
    }
    `}
      </style>
      <DropdownButton
        className={classes.myButton}
        id="dropdown-basic-button"
        title="Dropdown button"
        background-color="#017179"
      >
        {productLine.map((product) => (
         
          <Dropdown.Item href={"/products/" + productLink(product)} name={product}>
           {product}
          </Dropdown.Item>
        ))}
        
      </DropdownButton>
    </div>
  );
}

export default ProductButton;
