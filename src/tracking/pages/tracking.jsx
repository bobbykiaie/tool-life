import React from "react";
import NavigationBar from "../../shared/NavigationBar.jsx";
import { useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataInput from "../components/dataInputButton.jsx";

const Tracking = () => {
  const page = useParams();
  console.log(page);
  const DUMMYtools = ["T1: 1/4" + " Roughing", "T2: 1/4" + " Finishing","T3: 1/8" + " Roughing","T1: 1/4" + " Finishing"];

  return (
    <React.Fragment>
      <Container>
        <NavigationBar onLoad={page.pid + " " + page.oid} />
        <Row className="justify-content-center">
          {DUMMYtools.map(tools => (
            <Row>
          <Col style={{padding: '5px'}} lg={2.5}>
            <Card style={{ width: "18rem" }}>
              <Card.Img
                variant="top"
                src="https://cdn11.bigcommerce.com/s-zbaqm/images/stencil/500x659/products/121389/422382/square-4fl-single-end-1__20617.1532441222.1280.1280__66048.1532455452__76708.1578586504.jpg?c=2&imbypass=on&imbypass=on"
              />
              <Card.Body>
                <Card.Title>{tools}</Card.Title>

               <DataInput passNameOf={tools} />
              </Card.Body>
            </Card>
            </Col>
            </Row>
            ))}
          
        </Row>
      </Container>
    </React.Fragment>
  );
};

export default Tracking;
