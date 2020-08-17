import React from "react";
import { todaysData } from "./dataInputButton.jsx";
import NavigationBar from "../components/NavigationBar";
import TheTable from "../components/TheTable.jsx";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const DataOne = (props) => {
  console.log("I was called upon");
  const theData = todaysData;

  return (
    <div>
      <Container fluid>
        <Row className="justify-content-center">
          <Col md={10}>
            <NavigationBar onLoad="Data Page" />
            <TheTable />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default DataOne;
