import React, { useState } from "react";
import { Route } from "react-router-dom";
import axios from "axios";

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
      <Route path="/signup" component={Registration} />
      <Route path="/signin" component={Login} />

      <Route component={Users} path="/users" />
    </>
  );
}

export default App;
