import React, { useState } from "react";

function Login(props) {
  const [state, setState] = useState({
    username: "",
    password: ""
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.loginUser(state).then(() => {
      props.history.push("/users");
    });
  };

  return (
    <div>
      <h1>Login Below!</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username</label>
        <input
          id="username"
          name="username"
          value={state.username}
          placeholder="username"
          onChange={handleChange}
          type="text"
        />
        <label htmlFor="password">Password</label>
        <input
          id="password"
          name="password"
          value={state.password}
          placeholder="password"
          onChange={handleChange}
          type="password"
        />
        <button>Log In</button>
      </form>
    </div>
  );
}

export default Login;
