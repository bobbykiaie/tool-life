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

 
  const [db, setDb] = useState([{name: "-"}]);
  const [arrayQ, setArrayQ] = useState([0]);
  const [tools, setTools] = useState([]);

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
      const toolNames = chosenOperation[0].tools;
      setDb(data);
      setTools(toolNames.map(tools => tools.name));
     
    }
    catch {
      console.log("Unable to get data from table")
    }
  }
const generateGraph = (event) => {
    const selectedTool = event.target.value;
    const arse = db.filter(qty => qty.tool === selectedTool);
    setArrayQ(arse.map((qty) => 
      qty.quantity
    ));
 console.log(arse);
 
}

  useEffect(() => {
    getRequest();
    
  }, [])
 


  return (
    <React.Fragment>
    <Styles>
    <Table onLoad={getRequest} striped bordered hover>
      <thead>
        <tr>
            <th>Tool #</th>
          <th>Quantity</th>
          <th>Rotated</th>
          <th>Reason</th>
        </tr>
      </thead>
      <tbody>
          {}
          {db.map((data) => (
            <tr>
                <td>{data.tool}</td>
              <td>{data.quantity}</td>
              <td>{data.rotated}</td>
              <td>{data.reason}</td>
            </tr>
          ))}  
      </tbody>
    </Table>
    {tools.map((tool) => (
    <Button variant="info" value={tool}  onClick={(event) => {
          handleShow();
          generateGraph(event);
        }}>

        {tool}
      </Button>
      ))}
      
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
