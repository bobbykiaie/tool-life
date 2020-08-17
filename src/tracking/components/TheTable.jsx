import React from "react";
import Table from "react-bootstrap/Table";
import { todaysData } from "../components/dataInputButton.jsx";

const TheTable = () => {
  return (
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
          {todaysData.map((data) => (
            <tr>
                <td>{data.Tool}</td>
              <td>{data.Quantity}</td>
              <td>{data.Rotated}</td>
              <td>{data.Reason}</td>
            </tr>
          ))}  
      </tbody>
    </Table>
  );
};

export default TheTable;
