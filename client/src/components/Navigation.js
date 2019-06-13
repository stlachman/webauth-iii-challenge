import React from "react";
import { NavLink, withRouter } from "react-router-dom";

const logOut = (event, props) => {
  event.preventDefault();
  localStorage.removeItem("token");
  props.history.push("/signin");
};

const Navigation = props => {
  return (
    <nav>
      <ul>
        <li>
          <NavLink to="/">Home</NavLink>
        </li>
        <li>
          <NavLink to="/users">Users</NavLink>
        </li>
        <li>
          <NavLink to="/signin">Sign In</NavLink>
        </li>
        <li>
          <NavLink to="/signup">Sign Up</NavLink>
        </li>
        <li>
          <button onClick={event => logOut(event, props)}>Logout</button>
        </li>
      </ul>
    </nav>
  );
};

export default withRouter(Navigation);
