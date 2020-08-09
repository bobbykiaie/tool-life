import React, { Component } from "react";
import NavigationBar from "../../shared/NavigationBar";
import ProductButton from "../components/ProductButton";
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Description from "../components/Description.jsx"
import Logo from "../components/logo.png";

import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Styles = styled.div`
  .navbarP {
    padding: 0;
  }
  .buttonP {
   
  }
  .appliedLogo {
   
    margin-top: 40px;
  }
`;

function ProductSelection() {
  const page = "Tool Life Tracker";
  return (
    <Router>
      <React.Fragment>
        <Styles>
          <Container fluid>
            <Row className="justify-content-center">
              <Col className="navbarP" px-md-0 md={12} lg={10}>
                <NavigationBar onLoad={page}/>
              </Col>
            </Row>
            <Row className="justify-content-center">
              <Col lg={5}>
                <Description />
                <Col  lg={5}>
                    <ProductButton />
                </Col>
              </Col>
              <Col className="d-none d-lg-block" lg={5}>
                <Image className="appliedLogo" src={Logo} fluid />
              </Col>
            </Row>
          </Container>
        </Styles>
      </React.Fragment>
    </Router>
  );
}

export default ProductSelection;
