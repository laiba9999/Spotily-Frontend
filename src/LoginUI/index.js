import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router } from 'react-router-dom';
import App from './App';
import './index.css'; 
import LoginUi from './LoginUi/LoginUi';



ReactDOM.render( 
  <Router>
    <App /> 

  </Router>,
  
  document.getElementById('root')
);
 