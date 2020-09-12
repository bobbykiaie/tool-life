import React, {useState, useEffect} from "react";
import Table from "react-bootstrap/Table";
import { HashRouter as Router, useParams } from "react-router-dom";
import { todaysData } from "../components/dataInputButton.jsx";

const TheTable = () => {
  const page = useParams();
  const pid =page.pid;
  const cid = page.cid;
  const oid = page.oid;
  // const [todaysData, setTodaysData] = useState([{Tool: "arse", Quantity: "-", Rotated: "-", Reason: "-"}])
  const [db, setDb] = useState([{name: "-"}]);
  const [comp, setComp] = useState("None");

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
      console.log("i got a response");
      // console.log(responseData[0].components);
      const chosenComponent = await responseData[0].components.filter(component => component.name === cid);
      const chosenOperation = await chosenComponent[0].programs.filter(operation => operation.name === oid);
      const arse = await chosenOperation[0].history;
      console.log(arse);
      setDb(arse);
    }
    catch {
      console.log("Unable to get data from table")
    }
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
    <h1>{db[0].name}</h1>
    </React.Fragment>
  );
};

export default TheTable;
