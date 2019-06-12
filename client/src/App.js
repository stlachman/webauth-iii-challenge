import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";

function App() {
  return (
    <>
      <Navigation />
      <Route component={Home} exact path="/" />
      <Route component={Registration} path="/signup" />
      <Route component={Login} path="/signin" />
      <Route component={Users} path="/users" />
    </>
  );
}

export default App;
