import React, { Component } from "react";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.css";

import LoginWidget from "./components/LoginWidget";
import SignupWidget from "./components/SignupWidget";
import Home from "./components/home";


class App extends Component {
  render() {
    return (
      <Router>

        <div className="container p-4">

          <Routes>
            <Route path="/" exact element={<LoginWidget />} />
            <Route path="/sign-up" exact element={<SignupWidget />} />
            <Route path="/home" exact element={<Home />} />

          </Routes>
        </div>

      </Router>




    );
  }
}

export default App;
