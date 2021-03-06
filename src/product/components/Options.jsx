import React, { useState, useEffect } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import { HashRouter as Router, Link } from "react-router-dom";
import { useParams } from "react-router-dom";

const Options = (props) => {
  const [show, setShow] = useState(false);
  const product = useParams().pid
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const selectedComponent = props.onload;

  const [operation, setOperation] = useState([{ name: "-" }]);

  const sendRequest = async () => {
    const url = "https://tool-life.herokuapp.com/products/" + product + "/" + selectedComponent
    const response = await fetch(url
      
    );

    const responseData = await response.json();

    setOperation(responseData.operations.programs)
 
  };

  useEffect(() => {
    sendRequest();
  }, []);

  return (
    <>
      <Button variant="link" onClick={handleShow}>
        {selectedComponent}
      </Button>

      <Modal
        show={show}
        onHide={handleClose}
        backdrop="static"
        keyboard={false}
      >
        <Modal.Header closeButton>
          <Modal.Title>{selectedComponent}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <p>Select the machining operation you will be tracking:</p>
          {operation.map(operation => (
          <Button variant="outline-info">
            <Router>
              <Link to={"/products/" + product + "/" + selectedComponent + "/" + operation.name}>{operation.name}</Link>
            </Router>
          </Button>
          ))}
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Options;
