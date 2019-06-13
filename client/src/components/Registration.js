import React from "react";
import axios from "axios";

class Registration extends React.Component {
  state = {
    username: "",
    password: "",
    department: ""
  };

  render() {
    return (
      <div>
        <h1>Register Below!</h1>
        <form onSubmit={this.handleSubmit}>
          <div>
            <label htmlFor="username">Username</label>
            <input
              placeholder="Username"
              onChange={this.handleChange}
              value={this.state.username}
              id="username"
              type="text"
            />
          </div>
          <div>
            <label htmlFor="password">Password</label>
            <input
              placeholder="Password"
              id="password"
              onChange={this.handleChange}
              value={this.state.password}
              type="password"
            />
          </div>
          <div>
            <label htmlFor="department">Department</label>
            <input
              placeholder="Department"
              onChange={this.handleChange}
              value={this.state.department}
              id="department"
              type="text"
            />
          </div>
          <button>Register</button>
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
    const endpoint = "http://localhost:5000/api/register";
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

export default Registration;
