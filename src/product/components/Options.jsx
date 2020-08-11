import React, { useState } from 'react';
import Modal from 'react-bootstrap/Modal';
import Button from 'react-bootstrap/Button';
import { HashRouter as Router, Link } from "react-router-dom";
import ModalDialog from 'react-bootstrap/ModalDialog';
import ModalHeader from 'react-bootstrap/ModalHeader';
import ModalTitle from 'react-bootstrap/ModalTitle'
import { useParams } from "react-router-dom";


function Options(props) {
    const [show, setShow] = useState(false);
  
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const selectedComponent = props.onload;
    console.log(selectedComponent);
    console.log(props.page);
    
   
    
  
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
          <Button variant="outline-info"><Router><Link to={"/products/"+ selectedComponent + "/OP1"}>OP1</Link></Router></Button> <Button variant="outline-info"><Router><Link to={"/products/"+ selectedComponent + "/OP2"}>OP2</Link></Router></Button>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={handleClose}>
              Close
            </Button>
          </Modal.Footer>
        </Modal>
      </>
    );
  }
  
  export default Options;