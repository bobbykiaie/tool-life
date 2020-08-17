import React, { useState } from "react";
import ReactDOM from "react-dom";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HashRouter as Router, Link } from "react-router-dom";
import axios from "axios";
import Forms from "./Form";

const todaysData = [
    { Tool: "No Tool Changes yet", Quantity: "-", Rotated: "-", Reason: "-" },
];


function DataInput(props) {
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

  const logData = (event) => {
    event.preventDefault();
    if (todaysData[0].Quantity === "-") {
        todaysData.push(dataSet);
        todaysData.shift();
    } else todaysData.push(dataSet);
    
    console.log(todaysData);
    console.log(todaysData);
    passer(todaysData);
    length(todaysData[todaysData.length-1]);
 
  };

  const updateSingle = (event) => {
     
  }

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
          <Form method="post" onSubmit={logData}>
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

            <Button variant="secondary" onClick={handleClose}>
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
