import React, { useState } from "react";

function Registration(props) {
  const [state, setState] = useState({
    username: "",
    password: "",
    department: ""
  });

  const handleChange = event => {
    setState({
      ...state,
      [event.target.name]: event.target.value
    });
  };

  const handleSubmit = event => {
    event.preventDefault();
    props.registerUser(state).then(() => {
      props.history.push("/users");
    });
  };

  return (
    <div>
      <h1>Register Below!</h1>
      <form onSubmit={handleSubmit}>
        <input
          placeholder="Username"
          onChange={handleChange}
          value={state.username}
          name="username"
          type="text"
        />
        <input
          placeholder="Password"
          onChange={handleChange}
          value={state.password}
          name="password"
          type="password"
        />
        <input
          placeholder="Department"
          onChange={handleChange}
          value={state.department}
          name="department"
          type="text"
        />
        <button>Register</button>
      </form>
    </div>
  );
}

export default Registration;
