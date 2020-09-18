import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { HashRouter as Router, useParams } from "react-router-dom";
import Plot from 'react-plotly.js';
import Button from 'react-bootstrap/Button'
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Modal from 'react-bootstrap/Modal'



const TheTable = () => {
  const page = useParams();
  const pid =page.pid;
  const cid = page.cid;
  const oid = page.oid;

  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

 
  const [db, setDb] = useState([{name: "-"}]);
  const [arrayQ, setArrayQ] = useState([0]);
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
      setDb(data);
    }
    catch {
      console.log("Unable to get data from table")
    }
  }
const generateGraph = () => {
    setArrayQ(db.map((qty) => 
      qty.quantity
    ));
   console.log(arrayQ);
}

  useEffect(() => {
    getRequest();
    
  }, [])
 


  return (
    <React.Fragment>
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
    <Button variant="info"  onClick={() => {
          handleShow();
          generateGraph();
        }}>
        Generate Graph
      </Button>

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
    
    </React.Fragment>
  );
};

export default TheTable;
