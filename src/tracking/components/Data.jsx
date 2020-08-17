import React, { useState } from "react";
import Tracking from "../pages/tracking.jsx";
import NavigationBar from "../components/NavigationBar"
import { arse } from  "./dataInputButton.jsx"


const Data = (props) => {
    
  return (

    <div>
 
      <h1> Data Page</h1>
      <h1>{ "no" }</h1>
      <h1>Quantity: {props.onLoad.Quantity}</h1>
      <h1>Rotated: {props.onLoad.Rotated}</h1>
      <h1>Reason: {props.onLoad.Reason}</h1>
    </div>
  );
};

export default Data;
