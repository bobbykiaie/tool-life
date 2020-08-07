import React, { Component } from "react";
import NavigationBar from "./components/NavigationBar";
import ProductButton from "./components/ProductButton";
import styled from "styled-components";
import Grid from "@material-ui/core/Grid";
import Image from "react-bootstrap/Image";
import { makeStyles } from "@material-ui/core/styles";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import axios from "axios";
import Description from "./components/Description";
import Logo from "./components/logo.png";
import { spacing } from "@material-ui/system";
import Box from "@material-ui/core/Box";
import Hidden from '@material-ui/core/Hidden';


const api = axios.create({
  baseURL: 'http://localhost:3000/'
    
});



const useStyle = makeStyles(()=> ({
  image: {
    margin: 'auto',
    padding: '10%'
  
  }

}));


function App() {
const classes = useStyle();
 
  return (
  
    <React.Fragment>
      <NavigationBar />
      <Grid container justify={"center"}>
        <Grid item xs={12} md={6} lg={4}>
            <Description />
            <Grid container justify={"center"}><Grid xs={8}>
            <ProductButton />
            </Grid></Grid>
            
        </Grid>
        <Grid item xs={0} md={0}>
        <Hidden mdDown={true}><Image className={classes.image} src={Logo} fluid /></Hidden>
          
        </Grid>
      </Grid>
    </React.Fragment>
    
  );
}

export default App;
