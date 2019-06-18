import React from "react";
import { Route } from "react-router-dom";

import Navigation from "./components/Navigation.js";
import Home from "./components/Home.js";
import Users from "./components/Users.js";
import Login from "./components/Login.js";
import Registration from "./components/Registration.js";
import PrivateRoute from "./components/PrivateRoute.js";

import { GlobalStyle } from "./styles";

function App() {
  return (
    <>
      <GlobalStyle />
      <Navigation />
      <Route component={Home} exact path="/" />
      <Route path="/signup" component={Registration} />
      <Route path="/signin" component={Login} />

      <PrivateRoute component={Users} path="/users" />
    </>
  );
}

export default App;
