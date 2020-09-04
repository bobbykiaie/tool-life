import React, { useState, useEffect } from "react";
import NavigationBar from "../components/NavigationBar";
import { HashRouter as Router, useParams } from "react-router-dom";
import InputGroup from "react-bootstrap/InputGroup";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import DataInput from "../components/dataInputButton.jsx";
import Data from "../components/Data.jsx";
import Collapse from "react-bootstrap/Collapse";
import DataOne from "../components/DataOne";
import TheTable from "../components/TheTable";
import Table from "react-bootstrap/Table";
import { todaysData } from "../components/dataInputButton";
import styled from "styled-components";


const Tracking = () => {
  const page = useParams();
  const theLink = page.oid + "/data";
  const product =page.pid;
  const component = page.cid;
  const operation = page.oid;

  const Styles = styled.div`
.card-img-top {
    width: 100%;
    height: 20vw;
    object-fit: cover;
}
  `;


  const [tools, setTools] = useState([
    {name: "T1: 1/4" + " Roughing", image: "https://cdn11.bigcommerce.com/s-zbaqm/images/stencil/500x659/products/121389/422382/square-4fl-single-end-1__20617.1532441222.1280.1280__66048.1532455452__76708.1578586504.jpg?c=2&imbypass=on&imbypass=on"},
    {name: "T2: 1/4" + " Finishing", image: "https://cdn11.bigcommerce.com/s-zbaqm/images/stencil/500x659/products/121389/422382/square-4fl-single-end-1__20617.1532441222.1280.1280__66048.1532455452__76708.1578586504.jpg?c=2&imbypass=on&imbypass=on" },
   { name: "T3: 1/8" + " Roughing", image: "https://www.toolstoday.com/media/catalog/product/4/6/46225-k.jpg" },
    {name: "T1: 1/8" + " Finishing", image: "https://www.toolstoday.com/media/catalog/product/4/6/46225-k.jpg"}
  ]);
  
  const sendRequest = async () => {
    const url = "http://localhost:3200/products/" + product + "/" + component + "/" + operation;
    const response = await fetch(url
      
    );
      console.log(url)
    const responseData = await response.json();

   
    const opArray = responseData.operations.programs;
    const selectedOperation = opArray.find(op => op.name === operation);
    const tools = selectedOperation.tools;
    setTools(tools);
    console.log(tools);
    console.log("arse")
 
  };

  useEffect(() => {
    sendRequest();
  }, []);

  
  
  console.log(DataInput.todaysData);

  const [theData, setTheData] = useState([ { Tool: "No Tool Changes yet", Quantity: "-", Rotated: "-", Reason: "-" }]);
  const [theLength, setTheLength] = useState(todaysData[todaysData.length-1]);

  const [open, setOpen] = useState(false);

  const changeLength = (event) => {
    setTheLength(event);
  }

  console.log(theData);

  return (
    <Styles>
    <React.Fragment>
      <Container>
        <NavigationBar goData={theData} onLoad2={theLink} onLoad={page.cid + " " + page.oid} />
        <h5>Most Recent Tool Change. (Click Data in the heading menu to view all data)</h5>
        <Table striped bordered hover>
      <thead>
        <tr>
            <th>Tool #</th>
          <th>Quantity</th>
          <th>Rotated</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
            <tr>
                <td>{theLength.Tool}</td>
              <td>{theLength.Quantity}</td>
              <td>{theLength.Rotated}</td>
              <td>{theLength.Reason}</td>
            </tr>
      </tbody>
    </Table>

        <Row className="justify-content-center">
          {tools.map((tools) => (
            <Row>
              <Col style={{ padding: "5px" }} lg={2.5}>
                <Card style={{ width: "18rem" }}>
                  <Card.Img
                    variant="top"
                    src={tools.image}
                    
                  />
                  <Card.Body>
                  <Container>
                  <Row className="justify-content-center">
                    <Card.Title>{tools.name}</Card.Title>
                    <DataInput getTheData={setTheData} refreshLength={changeLength} passNameOf={tools.name} />
                    </Row>
                    </Container>
                  </Card.Body>
                </Card>
              </Col>
            </Row>
          ))}
        </Row>
      </Container>
    </React.Fragment>
    </Styles>
  );
};

export default Tracking;
