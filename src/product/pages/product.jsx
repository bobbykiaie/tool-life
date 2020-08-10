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
import Options from "../components/Options.jsx";

const Product = () => {
  const page = useParams();
  const description =
    "When you are a ready to perfrom a tool change, click the drop down menu below and select the tool number that you are changing";

  console.log(page.pid);
  return (
    <React.Fragment>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10}>
            <NavigationBar onLoad={page.pid} />
          </Col>
        </Row>
        <Row className="justify-content-center">
          <Col md={10} lg={5}>
            <Description onLoad={description} />
            <Col lg={8}>
              <ProductButton />
             
            </Col>
          </Col>
          <Col className="d-none d-lg-block" md={5}>
            <Row className="justify-content-center">
              <Col lg={8}>
                <Image src={Logo} fluid />
              </Col>
            </Row>
          </Col>
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Product;
