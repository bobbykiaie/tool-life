import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useParams
} from "react-router-dom";

const Styles = styled.div`
  
 
  .navbar {
    background-color: #017179;
    color: white;
    
  }
  .navbar-brand {
    font-size: 4vw;
    line-height: 2;
    font-family: "Montserrat", sans-serif;
    color: white;
  }
`;

function NavigationBar(prop) {
  return (
    <Styles>
      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand href="#home">{prop.onLoad}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto">
          </Nav>
          <Nav>
            <Nav.Link href="#deets">Home</Nav.Link>
            <Nav.Link eventKey={2} href="#memes">
              My Applied
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
