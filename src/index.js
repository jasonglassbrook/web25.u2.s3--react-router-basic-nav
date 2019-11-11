/// external modules ///
import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from "react-router-dom";

/// intenal modules ///
import App from './App';

/// styles ///
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';

/***************************************
  RENDER
***************************************/
ReactDOM.render (
  <Router>
    <App/>
  </Router>
, document.getElementById ('root'));
