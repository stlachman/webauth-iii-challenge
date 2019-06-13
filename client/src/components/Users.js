import React from "react";
import axios from "axios";

import requiresAuth from "../auth/requiresAuth.js";

class Users extends React.Component {
  state = {
    users: []
  };

  componentDidMount() {
    const endpoint = "/users";

    axios
      .get(endpoint)
      .then(res => this.setState(() => ({ users: res.data })))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div>
        <h1>Welcome!</h1>
        <p>Below you will find the current list of users.</p>
        <ul>
          {this.state.users &&
            this.state.users.map(u => {
              return <li key={u.id}>{u.username}</li>;
            })}
        </ul>
      </div>
    );
  }
}

export default requiresAuth(Users);
