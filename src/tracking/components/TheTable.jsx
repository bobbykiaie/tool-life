import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { HashRouter as Router, useParams } from "react-router-dom";
import { todaysData } from "../components/dataInputButton.jsx";

const TheTable = () => {
  const page = useParams();
  const product =page.pid;
  const component = page.cid;
  const operation = page.oid;
  // const [todaysData, setTodaysData] = useState([{Tool: "arse", Quantity: "-", Rotated: "-", Reason: "-"}])

  const sendRequest = async () => {
    const url = "http://localhost:3200/products/" + product + "/" + component + "/" + operation + "/data"
    const response = await fetch(url);
      console.log(url)
    const responseData = await response.json();
    console.log("thetable")
    
  };  

 

  return (
    <Table onLoad={sendRequest} striped bordered hover>
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
