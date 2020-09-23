import React, { useState, useEffect } from "react";
import DropdownButton from "react-bootstrap/DropdownButton";
import Dropdown from "react-bootstrap/Dropdown";
import styled from "styled-components";
import { HashRouter as Router, Link } from "react-router-dom";
import Spinner from 'react-bootstrap/Spinner'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";


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
const passedProducts = [{}];
const ProductButton = () => {
  const [products, setProducts] = useState([{ name: "-" }]);

  const sendRequest = async () => {
    const response = await fetch("https://tool-life.herokuapp.com/products");

    const responseData = await response.json();

    const products = responseData.products;
    setProducts(products);
  };
  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <Styles>
      <DropdownButton
        id="dropdown-basic-button" 
        title="Select Product Line"
        background-color="#017179"
        onClick={sendRequest}
      >
      
        {products[0].name === "-"?<Container><Row className="justify-content-center" ><Spinner size="sm" animation="border" variant="info" /></Row></Container>  :
          products.map((product) => (
          <Dropdown.Item name={product.name}>
            <Router>
              <Link to={"/products/" + product.name}>{product.name}</Link>
            </Router>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Styles>
  );
};

export default ProductButton;
export { passedProducts };
