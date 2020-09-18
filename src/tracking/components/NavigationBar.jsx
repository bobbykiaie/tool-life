import React from "react";
import Navbar from "react-bootstrap/Navbar";
import Nav from "react-bootstrap/Nav";
import styled from "styled-components";
import {
  HashRouter as Router,
  Link,
} from "react-router-dom";
//React Styles component
const Styles = styled.div`
  .navbar {
    background-color: #017179;
    color: white;
  }
  .home {
    padding: 0;
  }
  .navbar-brand {
    font-size: 4vw;
    
    font-family: "Montserrat", sans-serif;
    font-weight: light;
    color: white;
    padding: 0;
    margin: 0;
  }
`;


function NavigationBar(prop) {
  const theLink = prop.onLoad2;
  
  return (
    <Styles>

      <Navbar collapseOnSelect expand="lg" variant="dark">
        <Navbar.Brand>{prop.onLoad}</Navbar.Brand>
        <Navbar.Toggle aria-controls="responsive-navbar-nav" />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav>
            <Nav.Link>
              <Router>
                <Link className="nav-link home " to="/">
                  Home
                </Link>
              </Router>
            </Nav.Link>
            <Nav.Link href="https://my.appliedmedical.com">
                  My Applied
            </Nav.Link>
           
            <Router>
                <Link className="nav-link" to={theLink}>
                  Data
                </Link>
              </Router>
            
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </Styles>
  );
}

export default NavigationBar;
