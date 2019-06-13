import React from "react";
import axios from "axios";

import { Container } from "../styles";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <Container>
        <h1>Login Below!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              id="username"
              value={this.state.username}
              placeholder="username"
              onChange={this.handleChange}
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              id="password"
              value={this.state.password}
              placeholder="password"
              onChange={this.handleChange}
              type="password"
            />
          </div>
          <button>Log In</button>
        </form>
      </Container>
    );
  }

  handleChange = event => {
    const { id, value } = event.target;
    this.setState({
      [id]: value
    });
  };

  handleSubmit = event => {
    event.preventDefault();
    const endpoint = "http://localhost:5000/api/login";
    axios
      .post(endpoint, this.state)
      .then(res => {
        localStorage.setItem("token", res.data.token);
        this.props.history.push("/users");
      })
      .catch(err => {
        console.error(err);
      });
  };
}
export default Login;
