import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
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
  const linkproduct = useParams();
  const productName = linkproduct.pid;
  console.log(productName);
  const [components, setComponents] = useState([{ name: "-" }]);

  const sendRequest = async () => {
    const response = await fetch(
      "https://tool-life.herokuapp.com/products/" + productName
    );

    const responseData = await response.json();

    const components = await responseData.components.map(
      (component) => component.components
    );

    setComponents(components[0]);
  };

  useEffect(() => {
    sendRequest();
  }, []);

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
        {components.map((component) => (
          <Dropdown.Item name={component.name}>
            <Options passedProduct={productName} onload={component.name} />
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Styles>
  );
}

export default ProductButton;
