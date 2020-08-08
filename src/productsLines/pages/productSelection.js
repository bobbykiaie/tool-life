import React, { Component } from "react";
import NavigationBar from "./"
import ProductButton from "../components/ProductButton";
import Description from './'
import styled from "styled-components";
import Image from "react-bootstrap/Image";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";

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
`;

function ProductSelection() {
  return (
    <Router>
      <React.Fragment>
        <Styles>
          <Container>
            <Row>
              <Col className="navbarP" sm={12}>
                <NavigationBar />
              </Col>
            </Row>
            <Row>
              <Col lg={6}>
                <Description />
                <Col className="buttonP" sm={(12, { order: "last" })} lg={6}>
                    <ProductButton />
                </Col>
              </Col>
              <Col className="d-none d-lg-block" lg={6}>
                <Image src={Logo} fluid />
              </Col>
            </Row>
          </Container>
        </Styles>
      </React.Fragment>
    </Router>
  );
}

export default ProductSelection;
