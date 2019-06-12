import React, { useState } from "react";

function Login() {
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
    console.log(state);
  };

  return (
    <div>
      <h1>Login Below!</h1>
      <form onSubmit={handleSubmit}>
        <input
          name="username"
          value={state.username}
          placeholder="username"
          onChange={handleChange}
          type="text"
        />
        <input
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
