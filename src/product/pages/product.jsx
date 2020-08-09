import React from "react";
import NavigationBar from "../../shared/NavigationBar.jsx";
import Description from "../components/Description.jsx";
import ProductButton from "../components/ProductButton";
import { useParams } from "react-router-dom";
import Container from "react-bootstrap/Container";
import Col from "react-bootstrap/Col";
import Row from "react-bootstrap/Row";
import Logo from "../components/jawss.png";
import Image from "react-bootstrap/Image";

const Product = () => {
  const page = useParams();
  const description =
    "When you are a ready to perfrom a tool change, click the drop down menu below and select the tool number that you are changing";


  console.log(page.pid);
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="justify-content-center">
          <Col xs={12} lg={10}>
            <NavigationBar onLoad={page.pid} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col xs={10} lg={5}>
            <Description onLoad={description} />
            <ProductButton />
          </Col>
          <Col  className="d-none d-lg-block" md={5}>
            <Col md={10}><Image src={Logo}  fluid  /></Col>
            
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Product;
