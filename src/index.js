import React from "react";
import ReactDOM from "react-dom";
import App from "./App.js";
import { HashRouter as Router } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';

// anytime a component wraps around another component...its called
// as Higher Order Component
ReactDOM.render(
  <Router>
    <App />
  </Router>,

  document.getElementById("root")
);

