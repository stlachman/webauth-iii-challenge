import React from "react";
import axios from "axios";

class Login extends React.Component {
  state = {
    username: "",
    password: ""
  };

  render() {
    return (
      <div>
        <h1>Login Below!</h1>
        <form onSubmit={this.handleSubmit}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            value={this.state.username}
            placeholder="username"
            onChange={this.handleChange}
            type="text"
          />
          <label htmlFor="password">Password</label>
          <input
            id="password"
            value={this.state.password}
            placeholder="password"
            onChange={this.handleChange}
            type="password"
          />
          <button>Log In</button>
        </form>
      </div>
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
