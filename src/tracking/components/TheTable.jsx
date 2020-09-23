import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { HashRouter as Router, useParams } from "react-router-dom";
import Plot from 'react-plotly.js';
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal'
import styled from "styled-components";
import Tabs from 'react-bootstrap/Tabs'
import Tab from 'react-bootstrap/Tab'
import TabContainer from 'react-bootstrap/TabContainer'
import TabContent from 'react-bootstrap/TabContent'
import Nav from 'react-bootstrap/Nav'


const TheTable = () => {
  const Styles = styled.div`
  .btn-info {
    margin-right: 7px;
  }
`;
  const page = useParams();
  const pid =page.pid;
  const cid = page.cid;
  const oid = page.oid;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  
  const [arrayQ, setArrayQ] = useState([0]);
  const [tools, setTools] = useState([]);
  const [currentTool, setCurrentTool] = useState([])
  const [db, setDb] = useState([{name: "-"}]);

  const getRequest = async () => {
    try {
      const postData = {
        method: "GET",
        headers: {'Content-Type': 'application/json' },
      };
      const url = 
        "https://tool-life.herokuapp.com/products/" + pid + "/" + cid + "/" + oid + "/data";
      const response = await fetch(url, postData);
      const responseData = await response.json();
      const chosenComponent = await responseData[0].components.filter(component => component.name === cid);
      const chosenOperation = await chosenComponent[0].programs.filter(operation => operation.name === oid);
      const data = await chosenOperation[0].history;
      const toolNames = await chosenOperation[0].tools;
      const initialData = await data.filter((tool)=> tool.tool === toolNames[0].name);
      setDb(data);
      setCurrentTool(initialData)
      setTools(toolNames.map(tools => tools.name));
    
    
     
    }
    catch {
      console.log("Unable to get data from table")
    }
  }

  const doIt = (event) => {
    if (event === undefined) {
      const filteredData = db.filter(data => data.tool === tools[0])
      setCurrentTool(filteredData);
    } else {
    console.log(event.target.text)
    console.log("i clicked")
    const filteredData = db.filter(data => data.tool === event.target.text);
    console.log(filteredData);
    setCurrentTool(filteredData);
  }
  }

const generateGraph = (event) => {
    const selectedTool = event.target.value;
    const toolchangeQuantity = db.filter(qty => qty.tool === selectedTool);
    setArrayQ(toolchangeQuantity.map((qty) => 
      qty.quantity
    ));
 console.log(toolchangeQuantity);
 
}

  useEffect(() => {
    getRequest();
    doIt();
    
  }, [])
 


  return (
    <React.Fragment>
    <Styles>
    <Tab.Container  defaultActiveKey={tools[0]}>
  <Row>
    <Col sm={3}>
      <Nav variant="tabs" className="flex-column">
      {tools.map((tools) => (
        <Nav.Item onClick={doIt} value={tools}>
          <Nav.Link eventKey={tools}>{tools}</Nav.Link>
        </Nav.Item>
      ))}
      </Nav>
    </Col>
    <Col sm={9}>
      <Tab.Content>
      {tools.map((tools) => (
        <Tab.Pane eventKey={tools}>
        <Table onLoad={getRequest} striped bordered hover>
      <thead>
        <tr>
          
          <th>Quantity</th>
          <th>Rotated</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
          {}
          {currentTool.map((data) => (
            <tr>
               
              <td>{data.quantity}</td>
              <td>{data.rotated}</td>
              <td>{data.reason}</td>
            </tr>
          ))}  
      </tbody>
    </Table>
    <Button variant="info" value={currentTool[0].tool}  onClick={(event) => {
          handleShow();
          generateGraph(event);
        }}>

        Data
      </Button>
        </Tab.Pane>
      ))}
        <Tab.Pane eventKey="second">
          
        </Tab.Pane>
      </Tab.Content>
    </Col>
  </Row>
</Tab.Container>
    
      
      <Modal show={show} onHide={handleClose}>
      <Container fluid>
      <Row className="justify-content-center">
        <Plot 
        data={[
          {
            y: arrayQ,
            type: 'box',

      
          }
        ]}
        layout={ {width: '1vw', height: 'auto', title: 'Qty Box Plot'} }
      />
       
         
        
        </Row>
        </Container>
      </Modal>
   
    <h1>{db[0].name}</h1>
    </Styles>
    </React.Fragment>
  );
};

export default TheTable;
