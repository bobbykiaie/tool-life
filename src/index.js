import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import { HashRouter as Router} from 'react-router-dom';

ReactDOM.render(<Router basename="/tool-life"><App /></Router>, document.getElementById("root"));

