import React from "react";
import NavigationBar from "../../shared/NavigationBar.jsx";
import { useParams } from "react-router-dom";

const Tracking = () => {
    const page = useParams();
    console.log(page);
  return (
    <React.Fragment>
      <NavigationBar onLoad={page.pid + " " + page.oid} />
      <h1>This is the tracking Page</h1>
    </React.Fragment>
  );
};

export default Tracking;
