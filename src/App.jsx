import React from 'react';
import NavigationBar from './components/NavigationBar';
import ProductButton from './components/ProductButton';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import axios from 'axios';

function App() {
  return ( 
    <div> 
        <NavigationBar />
        <ProductButton />
    </div>
     
  );
}

export default App;
