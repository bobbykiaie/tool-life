import React, { useState, useCallback } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HashRouter as Router, Link, useParams } from "react-router-dom";
import axios from "axios";
import Forms from "./Form";

const dataTable = ["-",];
const todaysData = [
  { Tool: "No Tool Changes yet", Quantity: "-", Rotated: "-", Reason: "-" },
];

function DataInput(props) {
  const page = useParams();
  const pid = page.pid;
  const cid = page.cid;
  const oid = page.oid;
  const [show, setShow] = useState(false);
  const [dataSet, setDataSet] = useState({
    Tool: "",
    Quantity: "",
    Rotated: false,
    Reason: "",
  });

  const passer = props.getTheData;
  const length = props.refreshLength;

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toolName = props.passNameOf;

  const toolRef = React.createRef();
  const handleClick = () => {
    setDataSet((prevValue) => {
      return { ...prevValue, Tool: toolName };
    });
  };
  const handleChange = (event) => {
    const target = event.target;
    const name = target.name;
    const value = name === "Rotated" ? target.value : target.value;
    console.log(value);

    setDataSet((prevValue) => {
      return { ...prevValue, [name]: value };
    });
  };
  const sendRequest = async () => {
    try {
    const url =
      "http://localhost:3200/products/" + pid + "/" + cid + "/" + oid + "/data";
    const postData = await {
      method: "POST",
      headers: {'Content-Type': 'application/json' },
      body: JSON.stringify({
        tool: todaysData[todaysData.length - 1].Tool,
        quantity: todaysData[todaysData.length - 1].Quantity,
        rotated: todaysData[todaysData.length - 1].Rotated,
        reason: todaysData[todaysData.length - 1].Reason,
      }),
    };
    await fetch(url, postData);
  

    console.log("i sent")
  } catch {
    console.log("Nope");
    
  }
    
  };

  const getRequest = async () => {
    try {
      const postData = {
        method: "GET",
        headers: {'Content-Type': 'application/json' },
      };
      const url = 
        "http://localhost:3200/products/" + pid + "/" + cid + "/" + oid + "/data";
      const response = await fetch(url, postData);
      const responseData = await response.json();
      console.log("i got a response");
      // console.log(responseData[0].components);
      const chosenComponent = await responseData[0].components.filter(component => component.name === cid);
      const chosenOperation = await chosenComponent[0].programs.filter(operation => operation.name === oid);
      return chosenOperation;
     
       

    }
    catch {
      console.log("Unable to get data from table")
    }
  }
 
  const logData = async (event) => {
    event.preventDefault();
    if (todaysData[0].Quantity === "-") {
      todaysData.push(dataSet);
      todaysData.shift();
    } else todaysData.push(dataSet);

 await sendRequest();
  await getRequest();
const rz = await getRequest();
console.log(rz)
console.log("SLim bean")
    passer(todaysData);
    length(todaysData[todaysData.length - 1]);
  
   
    
  };


  return (
    <>
      <Button variant="outline-info" onClick={handleShow}>
        Change Tool
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>{toolName}</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Form onSubmit={logData}>
            <Form.Group controlId="number">
              <Form.Label>Enter quantity:</Form.Label>
              <Form.Control
                type="number"
                name="Quantity"
                onChange={handleChange}
              />
              <Form.Text className="text-muted">
                This is the tolal number of components ran since the beginning
                of your shift.
              </Form.Text>
            </Form.Group>

            <div>
              <Form.Label>
                Is this tool being moved to another tool number?
              </Form.Label>
            </div>
            <div key={`inline-radio`} className="mb-3">
              <fieldset>
                <Form.Check
                  onChange={handleChange}
                  name="Rotated"
                  inline
                  value="Yes"
                  label="Yes"
                  type="radio"
                  id={`inline-radio-1`}
                />
                <Form.Check
                  name="Rotated"
                  onChange={handleChange}
                  inline
                  value="No"
                  label="No"
                  type="radio"
                  id={`inline-radio-2`}
                />
              </fieldset>
            </div>

            <Form.Group controlId="Reason">
              <Form.Label>Select the reason for tool change:</Form.Label>

              <Form.Control
                onClick={handleClick}
                onChange={handleChange}
                name="Reason"
                as="select"
                multiple
              >
                <option>Excessive Burr</option>
                <option>Chatter</option>
                <option>Tool Breakage</option>
              </Form.Control>
            </Form.Group>

            <Button variant="secondary" onClick={handleClose} type="submit">
              Close
            </Button>
            <Button
              variant="primary"
              type="submit"
              onClick={() => {
                handleClose();
              }}
            >
              Save Changes
            </Button>
          </Form>
        </Modal.Body>
      </Modal>
    </>
  );
}

export { todaysData };

export default DataInput;
