import React, { useState, useEffect } from "react";
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
const passedProducts = [{}];
const  ProductButton = () => {
  const productLine = ["Open Fusion", "Fine"];
  const [products, setProducts] = useState([{name: "-"}])
  const productLink = (product) => {
    const split = product.split(" ");
    const reducer = (accumulator, currentValue) => accumulator + currentValue;
    const newLink = split.reduce(reducer);
    return newLink;
  };
 
 
      const sendRequest = async () => {
        const response = await fetch('http://localhost:3200/products');

        const responseData = await response.json();
       
        const products = responseData.products;
        setProducts(products);
     

        

      }
      useEffect(() => {
        sendRequest();
      }, [])
      
     

  

  return (
    <Styles>
      <DropdownButton
        id="dropdown-basic-button"
        title="Select Product Line"
        background-color="#017179"
      >
        {products.map((product) => (
          <Dropdown.Item name={product.name}>
            <Router>
              <Link to={"/products/" + product.name}>{product.name}</Link>
            </Router>
          </Dropdown.Item>
        ))}
      </DropdownButton>
    </Styles>
  );
}

export default ProductButton;
export {passedProducts};
