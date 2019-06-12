import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";

function App() {
  const [state, setState] = useState({
    user: {}
  });

  const registerUser = user => {
    return axios
      .post(`http://localhost:5000/api/register`, user)
      .then(res => console.log(res))
      .catch(err => {
        console.log(err);
      });
  };

  const loginUser = user => {
    return axios
      .post(`http://localhost:5000/api/login`, user)
      .then(res => localStorage.setItem("token", res.data.token))
      .catch(err => {
        console.log(err);
      });
  };

  return (
    <>
      <Navigation />
      <Route component={Home} exact path="/" />
      <Route
        path="/signup"
        render={props => (
          <Registration {...props} registerUser={registerUser} />
        )}
      />
      <Route
        path="/signin"
        render={props => <Login {...props} loginUser={loginUser} />}
      />

      <Route component={Users} path="/users" />
    </>
  );
}

export default App;
