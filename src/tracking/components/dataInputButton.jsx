import React, { useState } from "react";
import Modal from "react-bootstrap/Modal";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { HashRouter as Router, Link } from "react-router-dom";

function DataInput(props) {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  const toolName = props.passNameOf;

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
          <Form>
            <Form.Group controlId="number">
              <Form.Label>Enter quantity:</Form.Label>
              <Form.Control type="number" placeholder="EA" />
              <Form.Text className="text-muted">
                This is the tolal number of components ran since the beginning of your shift.
              </Form.Text>
            </Form.Group>
          </Form>
          <Form>
  {['checkbox'].map((type) => (
    <div key={`inline-${type}`} className="mb-3">
    <div><Form.Label>Is this tool being moved to another tool number?</Form.Label></div>
      <Form.Check inline label="Yes" type={type} id={`inline-${type}-1`} />
      <Form.Check inline label="No" type={type} id={`inline-${type}-2`} />
    </div>
  ))}
</Form>
          <Form.Group controlId="exampleForm.ControlSelect">
            <Form.Label>Select the reason for tool change:</Form.Label>
            <Form.Control as="select" multiple>
              <option>Excessive Burr</option>
              <option>Chatter</option>
              <option>Tool Breakage</option>
            </Form.Control>
          </Form.Group>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
}

export default DataInput;
